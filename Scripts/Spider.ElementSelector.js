define("Spider.ElementSelector", function (require, exports, module) {
    var $ = require("jquery");
    var xPathGenerator = require("Spider.XPathGenerator");
    var customError = require("Spider.Error");
    var gen = new xPathGenerator();
    var evaluator = new XPathEvaluator();
    var index = 1;

    function ElementSelector(options) {
        this.selectMode = options.selectMode || 'data';
        this.events = options.events;
        this.resource = options.resource;
        this.selectAttr = options.selectAttr || "__p1p_select";
        this.pagerColor = options.pagerColor;
        this.rowClazz = options.rowClazz || "__p1p_selectrow";
        this.propertyColors = options.propertyColors;
        this.preferenceAttr = options.preferenceAttr || 'none';
        this.pagerPreferenceAttr = options.pagerPreferenceAttr;
        this.entityGroups = [];
        this.colorIndex = 0;
        this.actionComponent = options.action;
        this.combineTriggerEl = options.combineTriggerEl;
        this.pagerComponent = options.pager;
        this.pagingRepeatLbl = options.pagingRepeatLbl;
        this.pagingRepeatVal = options.pagingRepeatVal;
        this.downloaderComponent = options.downloader;
        this.spiderfreqComponent = options.freq;
        this.pagerXPath = "";
        this.shelter = $("<div class=\"layuiex\"></div>");//选择过程中的div
        this.shelter.attr("id", "__p1p_SpiderShelter");
        //this.shelter.addClass("__p1p_selected");
        this.elList = [];
        this.actionList = {};
        this._elementIndex = 0;
        this.container = typeof options.container == "string" ? $("#" + options.container) : options.container;

        //this.shortCut = options.shortCutComponent;
        this.actionTriggerEl = options.actionTriggerEl;
        this.actionContainerEl = options.actionContainerEl;
        this.actionColors = options.actionColors;
        this.actionColorIndex = 0;

        this.selectPagingEl = options.selectPagingEl;
        this.switchPagingEl = options.switchPagingEl;
        this.undoPagingEl = options.undoPagingEl;

        this.block = $("<div class=\"layuiex\"></div>");

        $(document.body).append(this.shelter);
        $(document.body).append(this.block);
        var that = this;

        that.showShelter = function () {
            that.block.css("box-shadow", "0 0 20px #d4930d");
        };

        that.hideShelter = function () {
            that.block.css("box-shadow", "none");
        };

        that.showShineTextbox = function (el, color) {
            //el.css("box-shadow", "0 0 10px " + color + ", 0 0 5px " + color + " inset");
            el.css("box-shadow", "").css("cssText", el.css("cssText") + "box-shadow:" + color + " 0px 0px 10px, " + color + " 0px 0px 5px inset !important");
        };

        that.hideShineTextbox = function (el) {
            el.css("box-shadow", "none");
        };

        that.switchShelter = function () {
            switch (that.selectMode) {
                case "pager": that.block.css("box-shadow", "0 0 30px red"); break;
                case "data": that.block.css("box-shadow", "0 0 30px #d4930d"); break;
                case "action": that.block.css("box-shadow", "0 0 30px black"); break;
            }
        };

        that.xpathFilters = {
            data: function (xpath) {
                var p = new promise.Promise();
                var _el = $("#__pa1pa_switch_computing");
                function delayAndShow(info, time) {
                    _el.text(info);
                    time = time || 0;
                    var p = new promise.Promise();
                    setTimeout(function () {
                        p.done();
                    }, time);
                    return p;
                };
                var arr = {};
                var md5 = new MGXH();
                var xpathList = xpath.split('/');
                var currXPath;
                var elements;
                var result = arrise(xpathList);
                result.push([]);
                var length = result.length;

                var clazz = '';
                var popIndex = xpathList.length - 1;
                var el = that.getSelectionElements(xpath);
                var splist = xpathList.slice(0);
                if (el) {
                    var cc = $(el);
                    while (cc.length > 0) {
                        var clazz = cc.attr("class");
                        if (!clazz) {
                            cc = cc.parent();
                            popIndex--;
                        }
                        else break;
                    }
                    if (clazz) {
                        splist[popIndex] = splist[popIndex].replace(/\[(\d+)\]/g, '') + "[contains(@class,'" + clazz.trim() + "')]";
                        var classArr = arrise(splist);
                        result = result.concat(classArr);


                        //var tempList = splist.slice(0);
                        //tempList.splice(0, popIndex, "/");
                        //setProperty(tempList.join('/'), arr);
                    }
                }

                if (result.length > 0) {
                    var _index = 0;
                    var __xcount = parseInt(result.length / 120, 10) || 1;

                    show();
                    function show() {
                        var tmp = _index < length ? xpathList.slice(0) : splist.slice(0);
                        for (var _c = 0; _c < result[_index].length; _c++) {
                            var idx = result[_index][_c];
                            tmp[idx] = tmp[idx].replace(/\[(\d+)\]/g, '');
                        }
                        currXPath = tmp.join('/');
                        setProperty(currXPath, arr);
                        _index++;
                        if (_index % __xcount == 0) {
                            delayAndShow((_index) + ' / ' + result.length).then(function () {
                                if (_index < result.length) {
                                    show();
                                } else {
                                    p.done(null, arr);
                                }
                            });
                        }
                        else {
                            if (_index < result.length) {
                                show();
                            } else {
                                p.done(null, arr);
                            }
                        }
                    }
                }
                else {
                    p.done(null, arr);
                }


                return p;

                function arrise(list) {
                    var arrayIndex = [];//索引
                    //初始化索引
                    for (var _a = 0; _a < list.length; _a++) {
                        var item = list[_a];
                        if (/\[(\d+)\]/.test(item)) {
                            arrayIndex.push(_a);
                        }
                    }
                    if (arrayIndex.length == 1) {
                        arrayIndex.splice(0, 0, 0);
                    }

                    return arrayCombine(arrayIndex);
                }

                function setProperty(currXPath, arr) {
                    elements = that.getSelectionElements(currXPath);
                    var selArr = [];
                    $.each(elements, function () {
                        var idx = $(this).attr("_data_index");
                        if (!idx) {
                            $(this).attr("_data_index", that._elementIndex);
                            idx = that._elementIndex++;
                        } else {
                            idx = parseInt(idx.toString(), 10);
                        }
                        selArr.push(idx);
                    });
                    selArr.sort();
                    var propertyName = md5.hd5(selArr.join(','));
                    if (!arr[propertyName]) {
                        arr[propertyName] = currXPath;
                    }
                }
				/**
				 * 获得指定数组的所有组合
				 */
                function arrayCombine(targetArr) {
                    if (!targetArr || !targetArr.length) {
                        return [];
                    }

                    var len = targetArr.length;
                    var resultArrs = [];

                    // 所有组合
                    for (var n = 1; n < len; n++) {
                        var flagArrs = getFlagArrs(len, n);
                        while (flagArrs.length) {
                            var flagArr = flagArrs.shift();
                            var combArr = [];
                            for (var i = 0; i < len; i++) {
                                flagArr[i] && combArr.push(targetArr[i]);
                            }
                            resultArrs.push(combArr);
                        }
                    }
                    
                    return resultArrs;
                }
				/**
				 * 获得从m中取n的所有组合
				 */
                function getFlagArrs(m, n) {
                    if (!n || n < 1) {
                        return [];
                    }

                    var resultArrs = [],
                        flagArr = [],
                        isEnd = false,
                        i, j, leftCnt;

                    for (i = 0; i < m; i++) {
                        flagArr[i] = i < n ? 1 : 0;
                    }

                    resultArrs.push(flagArr.concat());

                    while (!isEnd) {
                        leftCnt = 0;
                        for (i = 0; i < m - 1; i++) {
                            if (flagArr[i] == 1 && flagArr[i + 1] == 0) {
                                for (j = 0; j < i; j++) {
                                    flagArr[j] = j < leftCnt ? 1 : 0;
                                }
                                flagArr[i] = 0;
                                flagArr[i + 1] = 1;
                                var aTmp = flagArr.concat();
                                resultArrs.push(aTmp);
                                if (aTmp.slice(-n).join("").indexOf('0') == -1) {
                                    isEnd = true;
                                }
                                break;
                            }
                            flagArr[i] == 1 && leftCnt++;
                        }
                    }
                    return resultArrs;
                }
            },
            pager: function (options) {
                options.current = options.current || options.xpath;
                var els = that.getSelectionElements(options.current);
                if (els.length > 0) {
                    var prt = $(els[0]).parent();
                    if (prt.get(0).tagName == "BODY") {
                        options.current = options.xpath;
                    }
                    else options.current = gen.getPath({ relativeNode: prt, fullPath: true, preferenceAttr: that.pagerPreferenceAttr });
                }
                //var arr = options.current.split('/');
                //var els = [];
                //while (arr.length > 2 && els.length != 1) {
                //	arr.splice(arr.length - 1, 1);
                //	options.current = arr.join('/');
                //	els = that.getSelectionElements(options.current);
                //}
                //if (arr.length <= 2) {
                //	options.current = options.xpath;
                //}
            },
            combine: [
                function (items) {
                    var success = false; var xpath = '';
                    if (items.length) {
                        var elements = that.getSelectionElements(items[0].current);
                        //集合形态
                        if (elements.length > 1) {
                            if (items.length == 1) {
                                xpath = items[0].current;
                            }
                            else {
                                var arr = [];
                                var parentObj = null;

                                for (var a = 1; a < elements.length; a++) {
                                    parentObj = { parent: $(elements[0]).parent(), child: $(elements[0]) };

                                    while (!$.contains(parentObj.parent.get(0), elements[a])) {
                                        parentObj = { parent: parentObj.parent.parent(), child: parentObj.parent };
                                    }

                                    var exist = false;
                                    for (var _i = 0; _i < arr.length; _i++) {
                                        if (arr[_i].parent.get(0) == parentObj.parent.get(0)) {
                                            exist = true;
                                            break;
                                        }
                                    }
                                    if (!exist) {
                                        arr.push(parentObj);
                                    }
                                }
                                var baseArr = [];
                                if (arr.length > 0) {
                                    var curr = arr.pop();
                                    var base = gen.getPath({ relativeNode: curr.parent, fullPath: true, preferenceAttr: that.preferenceAttr });
                                    base += '/' + curr.child.get(0).tagName.toLowerCase();
                                    baseArr = base.split('/');
                                    while (arr.length > 0) {
                                        var nowItem = arr.pop();
                                        var temp = gen.getPath({ relativeNode: nowItem.parent, fullPath: true, preferenceAttr: that.preferenceAttr }).split('/');
                                        temp.push(nowItem.child.get(0).tagName.toLowerCase());
                                        while (temp.length > baseArr.length) {
                                            var str = temp[baseArr.length];
                                            if (arr.length == 0) {
                                                str = str.replace(/\[\d+\]/, "");
                                            }
                                            baseArr.push(str);
                                        }
                                    }
                                }
                                xpath = baseArr.join('/');
                            }

                            success = that.xpathFilters.validateCombine(items, xpath);
                        }//单个形态
                        else {
                            if (items.length > 1) {
                                var parentEl = $(elements).parent();
                                while (!success && parentEl.length) {
                                    if (parentEl.get(0).tagName == "HTML") break;
                                    xpath = gen.getPath({ relativeNode: parentEl.get(0), fullPath: true, preferenceAttr: that.preferenceAttr });
                                    success = that.xpathFilters.validateCombine(items, xpath);
                                    parentEl = parentEl.parent();
                                }
                            } else {
                                xpath = items[0].current;
                                success = that.xpathFilters.validateCombine(items, xpath);
                            }
                        }
                    }
                    return { xpath: xpath, success: success };
                }
            ],
            validateCombine: function (items, xpath) {
                if (xpath == '') return false;
                var rowElements = that.getSelectionElements(xpath).reverse();
                var arr = rowElements.slice(0);
                for (var _i = 0; _i < items.length; _i++) {
                    var item = items[_i];
                    var childEls = that.getSelectionElements(item);
                    if (rowElements.length < childEls.length) return false;

                    while (childEls.length) {
                        var chd = childEls.pop();
                        var existIndex = $.inArray(chd, arr);
                        if (existIndex == -1) {
                            for (var idx = 0; idx < arr.length; idx++) {
                                if ($.contains(arr[idx], chd)) {
                                    existIndex = idx;
                                    break;
                                }
                            }
                        }
                        if (existIndex == -1) return false;
                    }
                }
                return true;
            }
        };

        that.selectPagingEl.bind("click", function () {
            if (that.lastClickEl && that.lastClickEl.length) {
                that.lastClickEl.css("background-color", "");
                if (that.lastClickEl.get(0) == this) {
                    that.lastClickEl = null;
                    that.selectMode = "data";
                    that.switchShelter();
                    return;
                }
            }
            var selButton = $(this);
            selButton.css("background-color", "rgb(221, 221, 221)");
            that.lastClickEl = selButton;
            that.selectMode = "pager";
            that.switchShelter();
        });

        that.switchPagingEl.bind("click", function () {
            that.selectMode = "pager";
            var options = that.elList["pager"];
            if (options) {
                that.switchPath(options);
                that.pagerXPath = options.current;
            }
            that.selectMode = "data";
        });

        that.undoPagingEl.bind("click", function () {
            delete that.lastClickEl;
            that.selectPagingEl.css("background-color", "");
            that.selectPagingEl.css("color", "#000");
            if (that.elList["pager"]) {
                that.removeSelect(that.elList["pager"], false);
            }
            delete that.elList["pager"];
            that.selectMode = "data";
            that.pagerXPath = "";
            that.switchShelter();
        });
        that.initActionContainer = function () {
            if (!that.actionTriggerEl || !that.actionTriggerEl.length) return;
            that.actionTriggerEl.bind("click", function () {
                var tr = $("<tr></tr>");
                tr.attr("data-key", new Date().getTime().toString());
                var opTypeCell = $('<td style="border-top:none !important;border-left:none !important;padding:5px !important;border-right: 1px solid rgb(221, 221, 221) !important;border-bottom:1px solid rgb(221, 221, 221) !important;"></td>');
                var delayTimeCell = $('<td style="border-top:none !important;border-left:none !important;padding:5px !important;border-right: 1px solid rgb(221, 221, 221) !important;border-bottom:1px solid rgb(221, 221, 221) !important;"></td>');
                var repeatCell = $('<td style="border-top:none !important;border-left:none !important;padding:5px !important;border-right: 1px solid rgb(221, 221, 221) !important;border-bottom:1px solid rgb(221, 221, 221) !important;"></td>');
                var opCell = $('<td style="border-top:none !important;border-left:none !important;padding:5px !important;border-right: 1px solid rgb(221, 221, 221) !important;border-bottom:1px solid rgb(221, 221, 221) !important;"></td>');

                var opTypeCellCtrl = $("<select style='text-indent:0px !important;-webkit-appearance:menulist !important;background:none !important;font-family:微软雅黑 Arial !important;text-align:left !important;padding:0 !important;margin:0 !important;width:100px !important;min-width:100px !important;max-width:100px !important;box-sizing:content-box !important;display: inline-block !important;height: 20px !important;padding: 2px 3px !important;font-size: 14px !important;line-height: 20px !important;color: #555 !important;vertical-align: middle !important;border-radius: 4px !important;background-color: #fff !important;border: 1px solid #ccc !important;-webkit-transition: border linear .2s,box-shadow linear .2s  !important;-moz-transition: border linear .2s,box-shadow linear .2s !important;-o-transition: border linear .2s,box-shadow linear .2s !important;transition: border linear .2s, box-shadow linear .2s !important;'><option value='scroll' lang-key='Scroll'>" + that.resource("Scroll") + "</option><option value='click' lang-key='Click'>" + that.resource("Click") + "</option></select>");
                var delayTypeCellCtrl = $('<select style="text-indent:0px !important;-webkit-appearance:menulist !important;background:none !important;font-family:微软雅黑 Arial !important;text-align:left !important;padding:0 !important;margin:0 !important;width:100px !important;min-width:100px !important;max-width:100px !important;box-sizing:content-box !important;display: inline-block !important;height: 20px !important;padding: 2px 3px !important;font-size: 14px !important;line-height: 20px !important;color: #555 !important;vertical-align: middle !important;border-radius: 4px !important;background-color: #fff !important;border: 1px solid #ccc !important;-webkit-transition: border linear .2s,box-shadow linear .2s  !important;-moz-transition: border linear .2s,box-shadow linear .2s !important;-o-transition: border linear .2s,box-shadow linear .2s !important;transition: border linear .2s, box-shadow linear .2s !important;"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="8">8</option><option value="10">10</option><option value="15">15</option><option value="20">20</option><option value="30">30</option><option value="40">40</option><option value="50">50</option><option value="60">60</option></select>');
                //var repeatCellCtrl = $('<select style="-webkit-appearance:menulist !important;background:none !important;font-family:微软雅黑 Arial !important;padding:0;margin:0;width:80px;min-width:80px;box-sizing:content-box;display: inline-block;height: 20px;padding: 2px 3px;font-size: 14px;line-height: 20px;color: #555;vertical-align: middle;-webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;background-color: #fff;border: 1px solid #ccc;-webkit-transition: border linear .2s,box-shadow linear .2s;-moz-transition: border linear .2s,box-shadow linear .2s;-o-transition: border linear .2s,box-shadow linear .2s;transition: border linear .2s, box-shadow linear .2s;"><option value="0" lang-key="Auto">' + that.resource("Auto") + '</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select>');
                var repeatCellCtrl = $('<input style="text-indent:0px !important;background:none !important;font-family:微软雅黑 Arial !important;padding:0 !important;margin:0 !important;width:80px !important;min-width:80px !important;max-width:80px !important;box-sizing:content-box;display: inline-block;height: 20px;padding: 2px 3px;font-size: 14px;line-height: 20px;color: #555;vertical-align: middle;-webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;background-color: #fff;border: 1px solid #ccc;-webkit-transition: border linear .2s,box-shadow linear .2s;-moz-transition: border linear .2s,box-shadow linear .2s;-o-transition: border linear .2s,box-shadow linear .2s;transition: border linear .2s, box-shadow linear .2s;" type="text" value="1"/>');
                var removeBtn = $('<i class="fa fa-remove" style="float:none !important;width:auto !important;height:auto !important;font-weight:normal !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;font-size:15px !important;cursor:pointer !important;" lang-key="Remove" title="' + that.resource("Remove") + '"></i>');
                var selectBtn = $('<i class="fa fa-mouse-pointer" style="float:none !important;width:auto !important;height:auto !important;font-weight:normal !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;font-size:15px !important;margin-left:8px !important;cursor:pointer !important;" lang-key="Select" title="' + that.resource("Select") + '"></i>');
                //selectBtn.css("visibility", "hidden");

                opTypeCell.append(opTypeCellCtrl);
                delayTimeCell.append(delayTypeCellCtrl);
                repeatCell.append(repeatCellCtrl);
                opCell.append(removeBtn);
                opCell.append(selectBtn);

				/*opTypeCellCtrl.change(function (selButton) {
					var btn = selButton;
					return function () {
						if ($(this).val() == 'scroll') {
							btn.css("visibility", "hidden");
						} else {
							btn.css("visibility", "visible");
						}
					}
				}(selectBtn));*/

                removeBtn.bind("click", function (row) {
                    var _row = row;
                    return function () {
                        layer.confirm(that.resource("SureToRemove"), { icon: 3, title: that.resource("Information") }, function (index) {
                            _row.find("select").unbind();
                            _row.find("i").unbind();
                            if (that.selectMode == "action" && that.lastClickEl && $.contains(_row.get(0), that.lastClickEl.get(0))) {
                                that.lastClickEl = null;
                                //that.selectMode = that.shortCut.selectMode;
                                //that.shortCut.enable();
                            }

                            var item = that.actionList[_row.attr("data-key")];
                            if (item) {
                                item.el.css("box-shadow", "");
                                delete that.actionList[_row.attr("data-key")];
                            }

                            _row.remove();
                            layer.close(index);

                            that.repaint();
                        });
                    }
                }(tr));

                selectBtn.bind("click", function () {
                    if (that.lastClickEl && that.lastClickEl.length) {
                        that.lastClickEl.css("background-color", "");
                        if (that.lastClickEl.get(0) == this) {
                            that.lastClickEl = null;
                            that.selectMode = "data";
                            that.switchShelter();
                            return;
                        }
                    }
                    var selButton = $(this);
                    selButton.css("background-color", "rgb(221, 221, 221)");
                    that.lastClickEl = selButton;
                    that.selectMode = "action";
                    that.switchShelter();
                });

                tr.append(opTypeCell);
                tr.append(delayTimeCell);
                tr.append(repeatCell);
                tr.append(opCell);
                that.actionContainerEl.append(tr);
            });
        };

        that.beginSelect = function () {
            that.shelter.css("position", "absolute");
            that.shelter.css("display", "block");
            that.shelter.addClass("p1p_spider_Selecter_Block");
            that.shelter.bind("click", that.onDomClick);
            that.shelter.show();
            that.shelter.css("width", "100%");
            that.shelter.css("height", $(document).height() + "px");
            that.shelter.css("left", "0");
            that.shelter.css("top", "0");
            //that.shelter.mousemove(this.onShelterMouseMove).mouseover(that.onShelterMouseOver);
            //$(document).mouseover(this.onDomMouseOver);
            that.shelter.mousemove(that.onShelterMouseMove);

            function initCover() {
                that.shelterInterval = setInterval(function () {
                    if ($(document).height() > that.shelter.height()) {
                        that.hideCover();
                        that.showCover();
                    }
                }, 500);
            }

            that.shelter.mouseover(function () {
                if (that.shelterInterval) {
                    clearInterval(that.shelterInterval);
                    that.shelterInterval = null;
                }
            }).mouseout(initCover);

            that.block.css("position", "absolute");
            that.block.css("display", "block");
            that.block.show();
            that.showShelter();

            that.block.css("z-index", "19891009")
            that.shelter.css("z-index", "19891010");
            //that._overflowY = $(document.body).css("overflow-y") || "";
            //$(document.body).css("overflow-y", "scroll");

            document.oncontextmenu = function () {
                if (that.entityGroups.length) return false;
                that.initDataSelection(null, { single: true });
                return false;
            }

            $(that.shelter).on("mousewheel", function (evt) {
                event.stopPropagation();
                event.preventDefault();
                var height = evt.originalEvent.wheelDelta;
                if (!that.lastSelectEl) return;
                var el = that.lastSelectEl.get(0);
                while (el) {
                    if (el.scrollHeight > el.offsetHeight || el.tagName == "BODY") {
                        var lastTop = el.scrollTop;
                        el.scrollTop = el.scrollTop - height;
                        if (lastTop !== el.scrollTop) {
                            break;
                        }
                    }
                    el = el.parentElement;
                }
            });
            initCover();
        };

        that.endSelect = function () {
            if (that.shelterInterval) {
                clearInterval(that.shelterInterval);
                that.shelterInterval = null;
            }
            this.shelter.unbind();
            this.shelter.remove();
            this.block.remove();
            $(document).unbind();
            //$(document.body).css("overflow-y", that._overflowY);

            while (this.elList.length) {
                this.removeSelect(this.elList.pop(), false);
            }

            if (this.elList["pager"]) {
                this.removeSelect(this.elList["pager"], false);
            }

            for (var a in this.actionList) {
                if (this.actionList.hasOwnProperty(a)) {
                    var item = this.actionList[a];
                    item.el.css("box-shadow", "");
                    delete this.actionList[a];
                }
            }
            document.oncontextmenu = function () { };
            this.actionList = null;
        };

        /*切换选择事件*/
        that.switchAction = function () {
            if (this.entityGroups.length && this.selectMode == 'data') return;
            try {
                if (this.selectMode == 'data') {
                    if (this.elList.length) {
                        this.switchPath(this.elList[this.elList.length - 1]);
                    }
                } else {
                    
                    var options = this.elList["pager"];
                    if (options) {
                        this.switchPath(options);
                        this.pagerXPath = options.current;
                    }
                }
            } catch (ex) {
                layer.alert(ex.message, { zIndex: 2147483620, icon: 2 });
            }

        };

        /*获取最后选择的元素*/
        that.getLastSelectElements = function () {
            var options = null;
            if (this.elList.length) {
                options = this.elList[this.elList.length - 1];
            }
            return this.getSelectionElements(options);
        };

        that.getSelectionElements = function (xpath) {
            var path = typeof xpath == "object" ? xpath.current : xpath;
            var arr = [];
            try {
                var elements = evaluator.evaluate(path, document.documentElement, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

                if (elements) {
                    var el;
                    while (el = elements.iterateNext()) {
                        if (this.isContentElement(el)) {
                            arr.push(el);
                        }
                    }
                }
            }
            catch (e) {
            }
            return arr;
        };

        that.confirmRemove = function (item, inArray) {
            if (that.entityGroups.length > 0) {
                layer.confirm(that.resource("SureToRemove"), { icon: 3, title: that.resource("Information") }, function (index) {
                    that.removeSelect(item, inArray);
                    layer.close(index);
                });
            } else {
                that.removeSelect(item, inArray);
            }
        };

        that.removeSelect = function (item, inArray) {
            var elements = this.getSelectionElements(item)

            for (var a = 0; a < elements.length; a++) {
                $(elements[a]).removeAttr(that.selectAttr);
                $(elements[a]).removeAttr("_data_index");
                $(elements[a]).css("box-shadow", "none");
                $(elements[a]).removeClass(that.rowClazz);
            }

            delete this.elList[item.uuid];
            if (item.delEl) {
                item.delEl.unbind("click");
            }
            if (item.splitEl) {
                item.splitEl.unbind("click");
            }
            if (item.inputEl) {
                item.inputEl.unbind("blur");
                if (this.entityGroups.length) {
                    item.inputEl.parent().remove();
                } else {
                    item.inputEl.parent().parent().remove();
                }
            }
            if (item.switchEl) {
                item.switchEl.unbind("click");
            }

            if (inArray) {
                var idx = -1;
                for (var a = 0; a < this.elList.length; a++) {
                    if (this.elList[a] === item) {
                        idx = a;
                        break;
                    }
                }
                if (idx >= 0) {
                    this.elList.splice(idx, 1);
                }
            }

            //if (this.elList.length == 0) {
            //	if (this.events && this.events["startSelection"]) {
            //		this.events["startSelection"]();
            //	}
            //this.undoCombineSpider();
            //}

            if (this.events && this.events.onRemove) {
                this.events.onRemove(item, this);
            }

            item = null;
        };

        /*切换XPATH*/
        that.switchPath = function (options, other) {
            //options.current = options.current || options.xpath;
            other = other || {};
            var p = new promise.Promise();
            if (that.selectMode == "data") {
                options.color = options.color || that.propertyColors[that.colorIndex++ % that.propertyColors.length];
            } else {
                options.color = that.pagerColor;
            }

            var key = null;
            var arr = null;
            var oldEls;
            if (options.current) {
                oldEls = that.getSelectionElements(options.current);
            }
            
            if (that.selectMode == "data") {
                arr = Object.keys(options.selection || {});
                if (options.currentSelection >= 0) {
                    if (arr.length > options.currentSelection + 1) {
                        options.currentSelection += 1;
                    }
                    else {
                        options.currentSelection = 0;
                    }
                    key = arr[options.currentSelection];
                    options.current = options.selection[key];

                    //console.log(options.current);

                    if (oldEls) {
                        for (var _y = 0; _y < oldEls.length; _y++) {
                            $(oldEls[_y]).css("box-shadow", "none");
                            $(oldEls[_y]).removeAttr(that.selectAttr);
                            $(oldEls[_y]).removeAttr("_data_index");
                            $(oldEls[_y]).removeClass(that.rowClazz);
                        }
                    }
                    that.repaint();
                    p.done();
                }
                else {
                    that.xpathFilters[that.selectMode](options.xpath).then(function (err, obj) {
                        options.selection = obj;
                        arr = Object.keys(options.selection);

                        var origin = other.single === true ? 0 : (arr.length > 1 ? 1 : 0);
                        options.currentSelection = origin;
                        key = arr[options.currentSelection];
                        options.current = options.selection[key];
                        if (!other.single && arr.length > 1) {
                            var begin = true;
                            while (begin || options.currentSelection != origin) {
                                begin = false;
                                var result = that.xpathFilters.combine[0](that.elList);
                                if (result.success) {
                                    break;
                                }
                                else {
                                    if (arr.length <= options.currentSelection + 1) {
                                        options.currentSelection = 0;
                                    }
                                    else options.currentSelection += 1;

                                    key = arr[options.currentSelection];
                                    options.current = options.selection[key];
                                }
                            }
                        }

                        //console.log(options.current);

                        if (oldEls) {
                            for (var _y = 0; _y < oldEls.length; _y++) {
                                $(oldEls[_y]).css("box-shadow", "none");
                                $(oldEls[_y]).removeAttr(that.selectAttr);
                                $(oldEls[_y]).removeAttr("_data_index");
                                $(oldEls[_y]).removeClass(that.rowClazz);
                            }
                        }
                        that.repaint();
                        p.done();
                    });
                }
            }
            else {
                that.xpathFilters[that.selectMode](options);
                that.pagerXpath = options.current;
                if (oldEls) {
                    for (var _y = 0; _y < oldEls.length; _y++) {
                        $(oldEls[_y]).css("box-shadow", "none");
                        $(oldEls[_y]).removeAttr(that.selectAttr);
                        $(oldEls[_y]).removeAttr("_data_index");
                        $(oldEls[_y]).removeClass(that.rowClazz);
                    }
                }
                that.repaint();
                p.done();
            }
            return p;
        };

        that.repaint = function () {
            for (var a = 0; a < that.elList.length; a++) {
                paint(that.elList[a]);
            }
            if (that.elList["pager"]) {
                paint(that.elList["pager"]);
            }

            for (var key in that.actionList) {
                if (that.actionList.hasOwnProperty(key)) {
                    var item = that.actionList[key];
                    item.el.addClass(item.clazz);
                }
            }

            function paint(options) {
                var elements = that.getSelectionElements(options.current);
                for (var a = 0; a < elements.length; a++) {
                    //$(elements[a]).css("box-shadow", "0 0 20px " + options.color + ",0 0 40px " + options.color + " inset");
                    var currentEl = $(elements[a]);
                    var innerPx = currentEl.height();
                    var width = currentEl.width();
                    if (innerPx > width) {
                        innerPx = width;
                    }
                    innerPx /= 2;
                    currentEl.css("box-shadow", "0 0 20px " + options.color + ",0 0 " + innerPx + "px " + options.color + " inset");
                    //currentEl.css("box-shadow", "").css("cssText", currentEl.css("cssText") + "box-shadow:0 0 20px " + options.color + ",0 0 " + innerPx + "px " + options.color + " inset !important");

                    currentEl.attr(that.selectAttr, "1");
                }

                if (options.infoSpan) {
                    var current = options.current || options.xpath;
                    if (current) {
                        options.elCountSpan.text(elements.length);
                    }

                    var keys = Object.keys(options.selection || {});
                    var currentSelection = options.currentSelection || 0;
                    options.infoSpan.text((currentSelection + 1) + '/' + keys.length);
                }
            }
        };

        that.hideCover = function () {
            that.block.css("z-index", "-2")
            that.shelter.css("z-index", "-1");
            that.shelter.css("display", "none");
            that.block.css("display", "none");
        };

        that.showCover = function () {
            that.shelter.css("display", "block");
            that.block.css("display", "block");
            that.block.css("z-index", "19891009")
            that.shelter.css("z-index", "19891010");

            var height = $(document).height();
            that.shelter.css("width", "100%");
            that.shelter.css("height", height + "px");
            that.shelter.css("left", "0");
            that.shelter.css("top", "0");
        };

		/*that.onShelterMouseMove = function () {
			var shelter = that.shelter;
			var position = { x: 0, y: 0 };
			return function (e) {
				event.stopPropagation();
				if (Math.abs(position.x - e.pageX) > 10 || Math.abs(position.y - e.pageY) > 10) {
					console.log(-1);
					shelter.css("z-index", "-1");
					position = { x: e.pageX, y: e.pageY };
				}
				else {
					shelter.css("z-index", "198910101111");
				}
			}
		}();
		
		that.onDomMouseOver = function (e) {
			var element = e.target || e.srcElement;

			var el = $(element);
			var shelter = that.shelter;

			if (!that.isContentElement(el.get(0))) return;

			if (!that.validateSelect(el.get(0))) {
				el = el.parent();
			}
			if (el.get(0).tagName == 'BODY') return;
			//console.log(el.get(0).tagName);
			console.log(19891010);
			if (that.lastSelectEl) {
				if (el.get(0) == that.lastSelectEl.get(0)) {
					shelter.css("z-index", "198910101111");
					return;
				}
				//that.lastSelectEl.removeClass("__p1p_selected");
			}
			//el.addClass("__p1p_selected");
			that.lastSelectEl = el;

			that.setPosition(el, shelter);
			shelter.css("z-index", "198910101111");
		};

		that.onShelterMouseOver = function () {
			event.stopPropagation();
		};

		*/

        that.onShelterMouseMove = function () {
            var position = { x: 0, y: 0 };

            return function (e) {
                event.stopPropagation();
                if (Math.abs(position.x - e.pageX) > 10 || Math.abs(position.y - e.pageY) > 10) {
                    that.hideCover();

                    var el = $(document.elementFromPoint(e.clientX, e.clientY));

                    that.showCover();

                    if (!that.isContentElement(el)) return;

                    if (!that.validateSelect(el)) {
                        el = el.parent();
                    }
                    if (!that.lastSelectEl || that.lastSelectEl.get(0) != el.get(0)) {
                        that.lastSelectEl = el;
                    }
                    position = { x: e.pageX, y: e.pageY };
                    that.setPosition(el, that.block);
                }
            }
        }();

        that.initDataSelection = function (callback, options) {
            options = options || { single: false };
            function delay(time) {
                time = time || 50;
                var p = new promise.Promise();
                setTimeout(function () {
                    p.done();
                }, time);
                return p;
            };
            //<div>正在计算中 : <span>15 / 32566</span></div>
            layer.open({
                formType: 0, zIndex: 2147483610, closeBtn: 0, shade: [0.1, '#393D49'], title: 0, btn: 0,
                content: "<div style='width:200px;height:30px;'>" + that.resource("Computing") + " : <span id='__pa1pa_switch_computing'></span></div>",
                success: function (layerro, index) {
                    delay(0).then(function () {
                        var item = {
                            contentEl: that.lastSelectEl
                        };
                        that.elList.push(item);
                        item.xpath = gen.getPath({ relativeNode: item.contentEl, fullPath: true, preferenceAttr: that.preferenceAttr });
                        that.switchPath(item, options).then(function () {
                            that.onSelectElement(item);
                            that.repaint();
                            if (that.events && that.events.onSelect) {
                                that.events.onSelect(item);
                            }
                            if (callback) callback(item);
                            layer.close(index);
                        });
                    });
                }
            });

			/*layer.load(2, {
				shade: [0.3, '#fff'],
				zIndex: 99999999999,
				success: function (layerro, index) {
					delay(300).then(function () {
						var item = {
							contentEl: that.lastSelectEl
						};
						that.elList.push(item);
						item.xpath = gen.getPath({ relativeNode: item.contentEl, fullPath: true, preferenceAttr: that.preferenceAttr });
						that.switchPath(item);
						that.onSelectElement(item);
						if (that.events && that.events.onSelect) {
							that.events.onSelect(item);
						}
						layer.close(index);
					});
				}
			});*/
        };

        that.initPageSelection = function () {
            if (that.elList["pager"]) {
                that.removeSelect(that.elList["pager"], false);
            }
            var item = {
                contentEl: that.lastSelectEl
            };
            that.elList["pager"] = item;
            var xpath = gen.getPath({ relativeNode: item.contentEl, fullPath: false, preferenceAttr: that.pagerPreferenceAttr });

            item.color = that.pagerColor;
            var innerPx = item.contentEl.height();
            var width = item.contentEl.width();
            if (innerPx > width) {
                innerPx = width;
            }
            innerPx /= 2;
            
            item.contentEl.css("box-shadow", "0 0 20px " + item.color + ",0 0 " + innerPx + "px " + item.color + " inset");
            item.contentEl.attr(that.selectAttr, "1");

            var text = item.contentEl.text();
            if (text) {
                var arr = xpath.split('/');
                for (var _x = 0; _x < arr.length; _x++) {
                    arr[_x] = arr[_x].replace(/\[(\d+)\]/g, '');
                }
                arr[arr.length - 1] = arr[arr.length - 1].split('[')[0] + "[text()='" + text + "']";
                var path = arr.join('/');
                var results = that.getSelectionElements(path);
                if (results.length == 0) {
                    that.pagerXPath = xpath;
                }
                else {
                    var lastPath = path;
                    while (results.length == 1 && results[0] == item.contentEl.get(0) && arr.length > 4) {
                        lastPath = path;
                        arr.splice(2, 1);
                        path = arr.join('/');
                        results = that.getSelectionElements(path);
                    }
                    that.pagerXPath = lastPath;
                }
            }
            else that.pagerXPath = xpath;

            var selEls = that.getSelectionElements(that.pagerXPath);
            if (selEls.length > 1) {
                that.pagerXPath = gen.getPath({ relativeNode: item.contentEl, fullPath: false });
            }

            item.xpath = that.pagerXPath;
            item.current = that.pagerXPath;

            if (that.lastClickEl && that.lastClickEl.length) {
                that.lastClickEl.css("background-color", "");
                that.lastClickEl.css("color", item.color);
                that.lastClickEl = null;
            }
        };

        that.initActionSelection = function () {
            if (that.entityGroups.length) {
                that.hideShelter();
                //that.shelter.removeClass("__p1p_selected");
            }
            if (that.lastClickEl) {
                var item = null;
                var dataKey = that.lastClickEl.parent().parent().attr("data-key");
                if (that.actionList.hasOwnProperty(dataKey)) {
                    item = that.actionList[dataKey];
                    //item.el.removeClass(item.clazz);
                    item.el.css("box-shadow", "none");
                    item.el = that.lastSelectEl;
                } else {
                    var color = that.actionColors[that.actionColorIndex % that.actionColors.length];
                    //var className = "__p1p_shine" + color.replace("#", "");
                    item = {
                        el: that.lastSelectEl,
                        //clazz: className,
                        color: color
                    };
                    that.actionList[dataKey] = item;
                    that.actionColorIndex++;
                }

                that.lastClickEl.css("color", item.color);
                that.lastClickEl.css("background-color", "");
                //that.lastSelectEl.addClass(item.clazz);
                //that.lastSelectEl.css("box-shadow", "").css("cssText", that.lastSelectEl.css("cssText") + "box-shadow:0 0 20px " + item.color + ", 0 0 40px " + item.color + " inset !important");
                that.lastSelectEl.css("box-shadow", "0 0 20px " + item.color + ", 0 0 40px " + item.color + " inset");
            }
            that.lastClickEl = null;
            //that.selectMode = that.shortCut.selectMode;
            //that.shortCut.enable();
        };

        that.onDomClick = function () {
            if (that.entityGroups.length) return false;
            if (!that.isContentElement(that.lastSelectEl.get(0)) || !that.validateSelect(that.lastSelectEl.get(0))) return;

            //var prefer = that.selectMode == "data" ? that.preferenceAttr : that.pagerPreferenceAttr;
            //var path = gen.getPath({ relativeNode: that.lastSelectEl, fullPath: true, preferenceAttr: prefer });

            if (that.selectMode == "data") {
                that.initDataSelection();
            }
            else if (that.selectMode == "pager") {
                that.initPageSelection();
                that.selectMode = "data";
                that.switchShelter();
            }
            else if (that.selectMode == "action") {
                that.initActionSelection();
                that.selectMode = "data";
                that.switchShelter();
            }
        };

        /*合并字段集合*/
        that.combineSpider = function () {
            if (that.elList.length == 0) {
                layer.alert(that.resource("SelectColumnFirst"), { icon: 2 });
                return;
            }
            if (that.columnNameValid === false) return;
            that.elList.sort(function (e, f) {
                return e.inputEl.parent().parent().prevAll("div").size() - f.inputEl.parent().parent().prevAll("div").size();
            });
            var combineList = that.elList;

            if (that.actionComponent.is(":visible")) {
                var passed = true;
                that.actionComponent.find("tr").each(function (index) {
                    if (index > 0) {
                        var action = {};

                        var row = $(this);
                        var tdCollection = row.find("td");
                        var cells = row.find("td");

                        var name = cells.eq(0).children("select").val();
                        var tmpVal = cells.eq(2).children("input").val();
                        if (!/^[1-9][0-9]{0,20}$/.test(tmpVal) || parseInt(tmpVal, 10) > 5000) {
                            var ccc = cells.eq(2).find("input");
                            ccc.focus();
                            layer.tips(that.resource("Operation_Repeat_Invalid"), ccc, { tips: 3, time: 5000, zIndex: 2147483612 });
                            passed = false;
                        }
                        if (name == "click") {
                            var actionItem = that.actionList[row.attr("data-key")];
                            if (!actionItem) {
                                var el = cells.eq(3).find("i").eq(1);
                                cells.eq(2).children("input").focus();
                                layer.tips(that.resource("Operation_Choose_Element"), el, { tips: 3, time: 5000, zIndex: 2147483612 });
                                passed = false;
                            }
                        }

                    }
                });
                if (!passed) return false;
            }

            var func = that.xpathFilters["combine"];
            var funcIndex = 0;
            var xpath = '';
            while (funcIndex < func.length) {
                var result = func[funcIndex++](combineList);
                if (result.success) {
                    xpath = result.xpath;
                    break;
                }
            }
            if (xpath) {
                var elements = that.getSelectionElements(xpath);
                for (var a = 0; a < elements.length; a++) {
                    $(elements[a]).addClass(that.rowClazz);
                    $(elements[a]).css("box-shadow", "0 0 10px #C0C0C0, 0 0 2px #C0C0C0 inset;")
                    //$(elements[a]).css("box-shadow", "").css("cssText", $(elements[a]).css("cssText") + "box-shadow:0 0 10px #C0C0C0, 0 0 2px #C0C0C0 inset !important");
                }

                //var groupId = new Date().getTime().toString();
                //that.entityGroups.push({ id: groupId, xpath: xpath, items: combineList.slice(0) });
                that.entityGroups.push({ xpath: xpath, items: combineList.slice(0) });

                for (var _i = 0; _i < combineList.length; _i++) {
                    combineList[_i].delEl.unbind("click");
                    combineList[_i].splitEl.unbind("click");
                }
                that.container.empty();
                that.onSelectElement(combineList);

                //this.shelter.removeClass("__p1p_selected");
                that.hideShelter();

                if (that.events && that.events["endSelection"]) {
                    that.events["endSelection"]();
                }
                return true;
            }
            else {
                layer.alert(that.resource("CanNotCombine"));
                return false;
            }
        };

        that.undoCombineSpider = function () {
            if (that.entityGroups.length) {
                var group = that.entityGroups.pop();
                //that.collectionName = $("#" + group.id).val();
                var combineList = group.items;
                if (that.elList.length > 1) {
                    var elements = that.getSelectionElements(group.xpath);
                    for (var a = 0; a < elements.length; a++) {
                        $(elements[a]).removeClass(that.rowClazz);
                        $(elements[a]).css("box-shadow", "none");
                    }
                }

                for (var _i = 0; _i < combineList.length; _i++) {
                    if (that.elList[combineList[_i].uuid]) {
                        combineList[_i].delEl.unbind("click");
                        combineList[_i].splitEl.unbind("click");
                    }
                }
                this.container.empty();
                for (var _i = 0; _i < combineList.length; _i++) {
                    if (that.elList[combineList[_i].uuid]) {
                        that.onSelectElement(combineList[_i]);
                    }
                }
                //this.shelter.addClass("__p1p_selected");
                that.showShelter();
                that.repaint();

                if (that.events && that.events["beginSelection"]) {
                    that.events["beginSelection"]();
                }
                return true;
            }

            return false;
        };

        that.buildSpider = function (taskObj) {
            if (that.columnNameValid === false) return false;
            taskObj.entities = [];
            var entities = taskObj.entities;
            for (var a = 0; a < this.entityGroups.length; a++) {
                var group = this.entityGroups[a];
                var entity = {};
                var xpath = group.xpath;
                var groupDepth = xpath.split('/');

                var rows = that.getSelectionElements(xpath);
                if (rows.length == 0) {
                    throw new customError(that.resource("NoElementsValid"), "e001");
                }
                var crow = $(rows);

                var _count = 0;
                while (crow.length > 1) {
                    crow = crow.parent();
                    _count++;
                }

                entity.selectors = [];

                var idpath = gen.getPath({
                    relativeNode: crow.get(0), fullPath: false, preferenceAttr: "id"
                });
                var classPath = gen.getPath({
                    relativeNode: crow.get(0), fullPath: false, preferenceAttr: "class"
                });
                if (_count > 0) {
                    idpath += "/" + groupDepth.slice(groupDepth.length - _count).join('/');
                    classPath += "/" + groupDepth.slice(groupDepth.length - _count).join('/');
                }

                entity.selectors.push({ type: "xpath", expression: idpath });
                entity.selectors.push({ type: "xpath", expression: classPath });
                entity.selectors.push({ type: "xpath", expression: xpath });
                //entity.selector = { type: "xpath", expression : xpath };
                entity.name = taskObj.name || new Date().getTime().toString();//$("#" + this.entityGroups[a].id).val();
                entity.fields = {};

                for (var _idx = 0; _idx < this.entityGroups[a].items.length; _idx++) {
                    var item = this.entityGroups[a].items[_idx];
                    if (this.elList[item.uuid]) {
                        var fieldDepth = item.current.split('/');
                        var groupPathTagName = groupDepth[groupDepth.length - 1].replace(/\[.+?\]/, '');

                        if (groupDepth[groupDepth.length - 1] == "tr") {
                            fieldDepth.splice(0, groupDepth.length, "//html/body/table/tbody/", groupPathTagName);
                        }
                        else {
                            if (groupPathTagName === "body") {
                                fieldDepth.splice(0, groupDepth.length, "//html/body");
                            }
                            else {
                                fieldDepth.splice(0, groupDepth.length, "//html/body/", groupPathTagName);
                            }
                        }

                        var path = fieldDepth.join('/');

                        entity.fields[item.inputEl.val()] = {
                            selector: { type: "xpath", expression: path, html: item.html === true }
                        };
                        if (item.columns) {
                            for (var _i = 0; _i < item.columns.length; _i++) {
                                var column = item.columns[_i];
                                var newField = {
                                    selector: { type: "xpath", expression: path + "/@" + column.attribute }
                                }
                                entity.fields[column.storeas] = newField;
                            }
                        }
                    }
                }
                entities.push(entity);
            }

            taskObj.actions = [];

            if (that.actionComponent.is(":visible")) {
                var trList = that.actionComponent.find("tr");

                for (var idx = 1; idx < trList.length; idx++) {
                    var action = {};
                    var row = trList.eq(idx);

                    var tdCollection = row.find("td");
                    var cells = row.find("td");

                    action.name = cells.eq(0).children("select").val();
                    action.delay = cells.eq(1).children("select").val() * 1000;
                    action.repeat = cells.eq(2).children("input").val();

                    var actionItem = that.actionList[row.attr("data-key")];
                    if (!actionItem) {
                        if (action.name == "click" && !actionItem) {
                            var el = cells.eq(3).find("i").eq(1);
                            el.focus();
                            layer.tips(that.resource("Operation_Choose_Element"), el, { tips: 3, time: 5000, zIndex: 2147483612 });
                            return false;
                        }
                    } else {
                        action.selector = gen.getPath({ relativeNode: actionItem.el.get(0), fullPath: false, preferenceAttr: "id" });
                    }

                    taskObj.actions.push(action);
                }
            }

            taskObj.crawlerMode = that.pagerComponent.val();

            if (that.pagerComponent.val() == "auto") {
                taskObj.speed = that.spiderfreqComponent.getValue() * 1000;
            }

            if (that.pagerXPath) {
                if (that.pagerComponent.val() == "auto") {
                    if (entities.length) {
                        entities[0].targetUrlExtractors = [];
                        entities[0].targetUrlExtractors.push({
                            selector: { type: "xpath", expression: that.pagerXPath },
                            patterns: [""]
                        });
                    }
                } else {
                    taskObj.pager = {
                        name: "click",
                        selector: that.pagerXPath,
                        delay: taskObj.site.delayBeforeRunActions,
                        repeat: that.pagingRepeatVal.getValue()
                    };
                }
            }
            return true;
        };

        /*验证*/
        that.validateSpider = function () {
            var msg = '';
            if (this.entityGroups.length == 0) {
                msg = this.resource("AskCombine");
            }
            if (msg.length) {
                layer.alert(msg);
                return false;
            }

            return that.columnNameValid !== false;
        };

        /*verify property name*/
        that.validatePropertyName = function (propertyName, options, type) {
            var resultObj = {};
            resultObj.lengthOK = (propertyName.length >= 1 && propertyName.length <= 32);

            resultObj.repeatOK = validatePropertyRepeat(propertyName, options, type);

            function validatePropertyRepeat(propertyName, options, type) {
                for (var _a = 0; _a < that.elList.length; _a++) {
                    var item = that.elList[_a];

                    var isCurrent = item == options;

                    if (item.inputEl && item.inputEl.val() == propertyName) {
                        if (options) {
                            if (!isCurrent) {
                                return false;
                            }
                            else if (type == 'attr') {
                                return false;
                            }
                        }
                        else return false;
                    }

                    if (item.columns) {
                        for (var _b = 0; _b < item.columns.length; _b++) {
                            if (item.columns[_b].storeas == propertyName) {
                                if (options) {
                                    if (!isCurrent) {
                                        return false;
                                    }
                                    else if (type == 'col') {
                                        return false;
                                    }
                                }
                                else return false;
                            }
                        }
                    }
                }

                return true;
            }

            return resultObj;
        };

        that.onSelectElement = function (items, appendIndex) {
            var group = $("<div class='data_border' style='margin-bottom: 5px !important;font-family:微软雅黑,Arial !important;border:2px dotted rgb(160, 160, 160) !important;'></div>");
            items = items.length ? items : [items];
            var that = this;

            //if (groupId) {
            //var tableNameDiv = $("<div></div>");
            //var tableNameEl = $("<input type='textbox' value='" + (that.collectionName || "table") + "' style='text-align:left !important;width:150px !important;font-family:微软雅黑,Arial !important;background-color: rgb(255, 255, 255) !important; border: 1px solid rgb(204, 204, 204) !important; height: 20px !important; padding: 2px 3px !important; line-height: 20px !important; border-radius: 4px !important; transition: border 0.2s linear, box-shadow 0.2s linear !important; box-shadow: rgba(0, 0, 0, 0.0745098) 0px 1px 1px inset !important; font-size: 14px !important; box-sizing: content-box !important; display: inline-block !important; color: rgb(85, 85, 85) !important; margin:5px !important;'/>");
            //tableNameEl.attr("id", groupId);
            //tableNameDiv.append(tableNameEl);
            //group.append(tableNameDiv);
            //}

            if (appendIndex >= 0 && appendIndex < that.container.children("div").length) {
                group.insertBefore(that.container.children("div").eq(appendIndex));
            }
            else this.container.append(group);

            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var div = $("<div style='padding:5px 0px 0px 5px !important;font-family:微软雅黑,Arial !important;'></div>");
                var id = item.uuid || new Date().getTime().toString() + i;

                var columnName = "";
                if (item.inputEl) {
                    columnName = item.inputEl.val();
                } else {
                    columnName = "column" + index++;
                    while (!that.validatePropertyName(columnName, item, 'col').repeatOK) {
                        columnName = "column" + index++;
                    }
                }

                var input = $('<input style="text-align:left !important;width:150px !important;box-sizing:content-box !important;font-family:微软雅黑,Arial !important;display: inline-block !important;height: 20px !important;padding: 2px 3px !important;margin-bottom: 5px !important;font-size: 14px !important;line-height: 20px !important;color: #555 !important;vertical-align: middle !important;-webkit-border-radius: 4px !important;-moz-border-radius: 4px !important;border-radius: 4px !important;background-color: #fff;border: 1px solid #ccc;-webkit-transition: border linear .2s,box-shadow linear .2s !important;-moz-transition: border linear .2s,box-shadow linear .2s !important;-o-transition: border linear .2s,box-shadow linear .2s !important;transition: border linear .2s, box-shadow linear .2s !important;" type="text" value="' + columnName + '"/>');
                var split = $('<i class="fa fa-th-list" lang-key="ElementAttributesTitle" title="' + that.resource("ElementAttributesTitle") + '" style="float:none !important;width:auto !important;height:auto !important;font-weight:normal !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;margin-left:8px !important;font-size:18px !important;line-height:18px !important;cursor:pointer !important;" ></i>');
                var switchBtn = $('<i class="fa fa-refresh" lang-key="Toolbar_Switch" title="' + that.resource("Toolbar_Switch") + '" style="float:none !important;width:auto !important;height:auto !important;font-weight:normal !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;margin-left:8px !important;font-size:18px !important;line-height:18px !important;cursor:pointer !important;"></i>');
                var del = $('<i class="fa fa-times" lang-key="Remove" title="' + that.resource("Remove") + '" style="float:none !important;width:auto !important;height:auto !important;font-weight:normal !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;margin-left:8px !important;font-size:18px !important;line-height:18px !important;cursor:pointer !important;"></i>');
                var viewEls = $('<i class="fa fa-eye" lang-key="ElementChildrenView" title="' + that.resource("ElementChildrenView") + '" style="float:none !important;width:auto !important;height:auto !important;font-weight:normal !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;margin-left:8px !important;font-size:18px !important;line-height:18px !important;cursor:pointer !important;"></i>');
                var upBtn = $('<i class="fa fa-arrow-circle-up" lang-key="ColumnMoveUp" title="' + that.resource("ColumnMoveUp") + '" style="float:none !important;width:auto !important;height:auto !important;font-weight:normal !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;margin-left:8px !important;font-size:18px !important;line-height:18px !important;cursor:pointer !important;"></i>');

                var htmlBtn = $('<i class="fa fa-header" title="html" style="float:none !important;width:auto !important;height:auto !important;font-weight:normal !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;margin-left:8px !important;font-size:18px !important;line-height:18px !important;cursor:pointer !important;"></i>');

                var elCountSpan = $('<span style="font-weight:normal !important;color:#000 !important;display:inline-block;margin-right:5px !important;font-family:微软雅黑,Arial !important;float:right !important;font-size: 12px !important;line-height: 25px !important;"></span>');
                var infoSpan = $('<span style="font-weight:normal !important;color:green !important;display:inline-block;margin-right:5px !important;font-family:微软雅黑,Arial !important;float:right !important;font-size: 12px !important;line-height: 25px !important;"></span>');
                //input.addClass("__p1p_shine" + item.color.replace("#", "") + "_textbox");

                input.attr("id", id);
                div.append(input);
                div.append(split);
                div.append(viewEls);
                div.append(del);
                div.append(upBtn);
                div.append(htmlBtn);
                div.append(elCountSpan);
                div.append(infoSpan);

                div.append(switchBtn);

                if (item.html === true) {
                    htmlBtn.css("font-weight", "bold");
                }

                group.append(div);

                viewEls.bind("click", function (id) {
                    var id = id;
                    return function () {
                        var options = that.elList[id];
                        var idx = 1;
                        var el = options.contentEl;

                        function initNodes(node, element) {
                            var children = element.children();
                            if (children.length > 0) {
                                node.children = [];
                                node.isParent = true;
                            }
                            for (var _x = 0; _x < children.length; _x++) {
                                var child = $(children[_x]);

                                var text = $.trim(child.text());
                                var name = text.length > 18 ? text.substring(0, 15) + "..." : text;
                                var cnode = {
                                    id: idx++
                                    , name: child.get(0).tagName + ":" + name
                                    , el: gen.getPath({ relativeNode: child, fullPath: true, preferenceAttr: "none" })
                                    , text: text
                                    , shadow: child.css("box-shadow")
                                };
                                node.children.push(cnode);
                                initNodes(cnode, child);
                            }
                        }

                        var setting = {
                            view: {
                                showLine: true,
                                showTitle: true,
                                dblClickExpand: false
                            },
                            data: {
                                key: {
                                    title: "text"
                                }
                            },
                            callback: {
                                onClick: function (event, treeId, treeNode) {
                                    var sels = that.getSelectionElements(treeNode.el);
                                    if (sels.length) {
                                        var curr = $(sels[0]);
                                        that.setPosition(curr, that.shelter);
                                        that.shelter.css("z-index", "19891010");
                                    }
                                },
                                onDblClick: function (event, treeId, treeNode) {
                                    var sels = that.getSelectionElements(treeNode.el);
                                    if (sels.length) {
                                        var curr = $(sels[0]);

                                        if (!curr.attr(that.selectAttr)) {
                                            that.lastSelectEl = curr;
                                            that.initDataSelection(function (option) {
                                                var treeNodeEl = $('#' + treeNode.tId + '_a');
                                                treeNodeEl.css("box-shadow", "").css("cssText", treeNodeEl.css("cssText") + "box-shadow:" + option.color + " 0px 0px 12px 0px inset !important");
                                            });
                                        }
                                    }
                                }
                            }
                        };

                        var taa = $.trim(el.text());
                        var tname = taa.length > 18 ? taa.substring(0, 15) + "..." : taa;
                        var root = {
                            name: el.get(0).tagName + ":" + tname, el: options.xpath, shadow: el.css("box-shadow"), text: taa
                        };

                        initNodes(root, el);

                        if (!root.children || root.children.length == 0) {
                            layer.tips(that.resource("No_Children_Message"), this, { tips: 3, time: 2000, zIndex: 2147483612 });
                            return;
                        }
                        if (that._selectElIndex > 0) {
                            layer.close(that._selectElIndex);
                        }
                        that._selectElIndex = layer.open({
                            title: that.resource("Select_Column_Title"), formType: 0, zIndex: 2147483601, closeBtn: 0, shade: [0.01, '#393D49'], area: ["400px", "450px"], content: "<ul id='__pa1pa_ztree' class='ztreeer'></ul>",
                            success: function (layero, index) {
                                $.fn.zTree.init($("#__pa1pa_ztree"), setting, [root]);
                                var treeObj = $.fn.zTree.getZTreeObj("__pa1pa_ztree");
                                var nodes = treeObj.transformToArray(treeObj.getNodes());
                                treeObj.expandAll(true);
                                $(nodes).each(function () {
                                    if (this.shadow != 'none') {
                                        //var match = this.shadow.match(/rgb\(\d+\, ?\d+\, ?\d+\)/ig);
                                        var match = this.shadow.match(/(rgb|rgba)\(\d+\, ?\d+\, ?\d+(\, ?\d+.\d+)?\)/ig);
                                        if (match && match.length > 1) {
                                            var elItem = $('#' + this.tId + '_a');
                                            //elItem.css("box-shadow", "").css("cssText", elItem.css("cssText") + "box-shadow:" + match[1] + " 0px 0px 12px 0px inset !important");
                                            $('#' + this.tId + '_a').css("box-shadow", match[1] + " 0px 0px 12px 0px inset");
                                        }
                                    }
                                });
                                $("#layuiex-layer-shade" + index).css("zIndex", "2147483500");
                                that.selectMode = "data";
                                that.switchShelter();
                            },
                            yes: function (index, layero) {
                                layer.close(index);
                                that._selectElIndex = -1;
                            }
                        });
                    }
                }(id));

                input.bind("blur", function (id) {
                    var id = id;
                    return function () {
                        var options = that.elList[id];
                        var resultObj = that.validatePropertyName(this.value, options, 'col');
                        if (!resultObj.repeatOK) {
                            that.columnNameValid = false;
                            layer.tips(that.resource("FieldNameExists"), this, { tips: 3, time: 2000, zIndex: 2147483612 });
                            this.focus();
                        } else if (!resultObj.lengthOK) {
                            layer.tips(that.resource("FieldLengthRange"), this, { tips: 3, time: 2000, zIndex: 2147483612 });
                            this.focus();
                            that.columnNameValid = false;
                        } else {
                            that.columnNameValid = true;
                        }
                    }
                }(id));

                switchBtn.bind("click", function (id) {
                    var id = id;
                    return function () {
                        var item = that.elList[id];
                        that.switchPath(item);
                    }
                }(id));

                split.bind("click", function (id) {
                    var id = id;
                    var filterArray = ["id", "onmouseover", "onmouseout", "_data_index", "onmouseout", "onclick", "onclick", "width", "height", "target", "name", "style", "__p1p_select"];
                    return function () {
                        var options = that.elList[id];
                        var columns = options.columns || [];
                        var el = options.contentEl.get(0);
                        var html = '';
                        for (var p = 0; p < el.attributes.length; p++) {
                            var attr = el.attributes[p];
                            if (attr.name && $.inArray(attr.name, filterArray) == -1) {
                                var v = attr.value;
                                if (attr.name == "class") {
                                    v = v.replace(that.rowClazz, "");
                                }
                                if (attr.value.length > 26) {
                                    v = attr.value.substring(0, 14);
                                    v += "...";
                                    v += attr.value.substring(attr.value.length - 10);
                                }
                                var selectColumn = null;
                                for (var c = 0; c < columns.length; c++) {
                                    if (columns[c]["attribute"] == attr.name) {
                                        selectColumn = columns[c];
                                        break;
                                    }
                                }

                                html += "<div style='text-align:left !important;'><input id='" + attr.name + "' style='display:inline !important;-webkit-appearance:checkbox !important;' type='checkbox' value='" + attr.name + "' ";
                                if (selectColumn) {
                                    html += "checked='checked'";
                                }

                                html += "/><input class='__p1p_textbox' style='text-align: left !important;margin: 0px 0px 5px !important;font-family:\"微软雅黑 Arial\" !important;width: 60px !important;background-color: rgb(255, 255, 255) !important;border: 1px solid rgb(204, 204, 204) !important;height: 20px !important;padding: 2px 3px !important;line-height: 20px !important;border-radius: 4px !important;transition: border 0.2s linear, box-shadow 0.2s linear !important;box-shadow: rgba(0, 0, 0, 0.0745098) 0px 1px 1px inset !important;font-size: 14px !important;box-sizing: content-box !important;display: inline-block !important;color: rgb(85, 85, 85) !important;' type='text' value='" + (selectColumn == null ? attr.name : selectColumn["storeas"]) + "'/>";
                                html += "<label style='max-width:240px !important;height:24px !important;font-weight:normal !important;font-family:微软雅黑 Arial !important;14px !important;line-height:24px !important;color:#000 !important;font-weight:normal !important;font-style:normal !important;' for='" + attr.name + "'>:" + v + "</label></div>";
                            }
                        }

                        if (html != '') {
                            var loc = $(this).offset();
                            var left = loc.left - $(document).scrollLeft() + 'px';
                            var top = (loc.top - $(document).scrollTop() + 12) + 'px';

                            layer.open({
                                formType: 2, zIndex: 2147483607, closeBtn: 1, shade: [0.01, '#393D49'], title: ' ', offset: [top, left], area: "390px", content: html,
                                success: function (layero, index) {
                                    var windowWidth = $(window).width();
                                    var windowHeight = $(window).height();
                                    if (windowHeight > document.body.scrollHeight) {
                                        windowHeight = document.body.scrollHeight;
                                    }
                                    var position = layero.position();
                                    if (position.top + layero.height() > windowHeight) {
                                        layero.css("top", windowHeight - layero.height() + 'px');
                                    }
                                    if (position.left + layero.width() > windowWidth) {
                                        layero.css("left", windowWidth - layero.width() + 'px');
                                    }
                                },
                                yes: function (index, layero) {
                                    var els = layero.find("input[type='checkbox']");
                                    var attrArray = [];
                                    //此处需要校验列名重复问题
                                    for (var _i = 0; _i < els.length; _i++) {
                                        var el = els[_i];
                                        if (el.checked) {
                                            var pName = $(el).next().val();

                                            var resultObj = that.validatePropertyName(pName, options, 'attr');
                                            if (!resultObj.repeatOK || $.inArray(attrArray, pName) != -1) {
                                                that.columnNameValid = false;
                                                layer.tips(that.resource("FieldNameExists"), $(el).next(), { tips: 3, time: 2000, zIndex: 2147483612 });
                                                $(el).next().focus();
                                                return;
                                            } else if (!resultObj.lengthOK) {
                                                layer.tips(that.resource("FieldLengthRange"), $(el).next(), { tips: 3, time: 2000, zIndex: 2147483612 });
                                                $(el).next().focus();
                                                that.columnNameValid = false;
                                                return;
                                            } else {
                                                that.columnNameValid = true;
                                                attrArray.push({ attribute: el.value, storeas: pName });
                                            }
                                        }
                                    }

                                    options.columns = attrArray;
                                    layer.close(index);
                                }
                            });
                        }
                        else {
                            layer.tips(that.resource("ElementWithNoAttributes"), this, { tips: 3, time: 1000, zIndex: 2147483612 });
                        }
                    }
                }(id));

                del.bind("click", function (id) {
                    var id = id;
                    return function () {
                        var item = that.elList[id];
                        that.confirmRemove(item, true);
                    }
                }(id));

                upBtn.bind("click", function (id) {
                    var id = id;
                    return function () {
                        var item = that.elList[id];
                        var idx = item.inputEl.parent().parent().prevAll("div").size() - 1;
                        that.removeSelect(item, false);
                        that.onSelectElement([item], idx);
                        that.repaint();
                    }
                }(id));

                htmlBtn.bind("click", function (id) {
                    var id = id;
                    return function () {
                        var element = $(this);
                        var item = that.elList[id];
                        item.html = item.html || false;
                        if (item.html) {
                            element.css("font-weight", "normal");
                        }
                        else {
                            element.css("font-weight", "bold");
                        }
                        item.html = !item.html;
                    }
                }(id));

                item.inputEl = input;
                item.delEl = del;
                item.splitEl = split;
                item.uuid = id;
                item.upBtn = upBtn;
                item.switchEl = switchBtn;
                item.viewEl = viewEls;
                item.elCountSpan = elCountSpan;
                item.infoSpan = infoSpan;
                that.elList[id] = item;

                that.showShineTextbox(input, item.color);
            }
        };

        /*判断是否内容元素*/
        that.isContentElement = function (element) {
            var expectClasses = [".layuiex", ".layuiex-layer", ".layuiex-layer-shade", ".layuiex-layer-moves", ".p1p_spider_Selecter_Block"];
            for (var _i = 0; _i < expectClasses.length; _i++) {
                var els = $(expectClasses[_i]);
                for (var a = 0; a < els.length; a++) {
                    if ($.contains(els.eq(a).get(0), element) || els.eq(a).get(0) == element) {
                        return false;
                    }
                }
            }
            return true;
        };

        that.validateSelect = function (element) {
            var el = $(element);

            if (el.attr(that.selectAttr)) {
                return false;
            }

            if (el.hasClass(this.rowClazz)) {
                return false;
            }
            return true;
        };

		/**
         * 把选择框设置当当前选择元素的位置
         * @param {Jquery Dom Element} el 选择的元素 
         * @param {Jquery Dom Element} shelter 遮罩层 
         */
        that.setPosition = function (el, shelter) {
            if ((el.width() == 0 || el.height() == 0) && el.get(0).tagName == 'A' && el.children().length) {
                that.setPosition(el.children().eq(0), shelter);
                return;
            }

            var paddingObject = {
                left: parseInt(el.css("padding-left")),
                top: parseInt(el.css("padding-top")),
                right: parseInt(el.css("padding-right")),
                bottom: parseInt(el.css("padding-bottom"))
            };

            var _width = 0, _height = 0;
            if (!isNaN(paddingObject.left)) {
                _width += paddingObject.left;
            }
            if (!isNaN(paddingObject.right)) {
                _width += paddingObject.right;
            }
            if (!isNaN(paddingObject.top)) {
                _height += paddingObject.top;
            }
            if (!isNaN(paddingObject.bottom)) {
                _height += paddingObject.bottom;
            }

            var top = parseInt(el.offset().top);
            var height = el.height() + _height;
            var availHeight = $(document).height() - top;
            height = height > availHeight ? availHeight : height;

            var obj = {
                "left": parseInt(el.offset().left) + "px", "top": top + "px", "width": el.width() + _width, "height": height
            };

            shelter.css(obj);
        };

        that.initActionContainer();

        that.pagerComponent.change(function () {
            that.__initSelector();
            if (that.elList["pager"]) {
                that.undoPagingEl.triggerHandler("click");
            }
            else that.switchShelter();
        });

        that.__initSelector = function () {
            var mode = that.pagerComponent.val();
            if (mode == "auto") {
                that.downloaderComponent.removeAttr("disabled");
                that.downloaderComponent.css("background-color", "");
                that.spiderfreqComponent.parent().parent().show();
                that.pagingRepeatLbl.hide();
                that.pagingRepeatVal.el.hide();
            } else {
                that.downloaderComponent.attr("disabled", "");
                that.downloaderComponent.css("background-color", "rgb(235, 235, 228)");
                that.downloaderComponent.val("js-engine");
                that.downloaderComponent.triggerHandler("change");
                that.spiderfreqComponent.parent().parent().hide();
                that.pagingRepeatLbl.show();
                that.pagingRepeatVal.el.show();
            }
        }

        that.showCombineColumnLayer = function () {
            if (that.entityGroups.length) {
                layer.alert(that.resource("OnlySelectionMode")); return;
            }
            var loc = that.combineTriggerEl.offset();
            var left = loc.left - $(document).scrollLeft() + 'px';
            var top = (loc.top - $(document).scrollTop() + 12) + 'px';

            layer.open({
                formType: 0,
                zIndex: 2147483607,
                closeBtn: 0,
                shade: [0.01, '#393D49'],
                title: 0,
                offset: [top, left],

                content: '<div id="__pa1pa_combine_div"></div>',
                success: function (layero, index) {
                    var container = $("#__pa1pa_combine_div");

                    for (var _i = 0; _i < that.elList.length; _i++) {
                        var item = that.elList[_i];
                        var div = $("<div style='padding:3px;'></div>");
                        var checkbox = $('<input style="font-weight:normal !important;box-sizing:content-box !important;font-family:微软雅黑 Arial !important;-webkit-appearance:checkbox !important;" value="' + item.uuid + '" type="checkbox"/>');
                        var input = $('<input style="width:200px !important;margin-left:10px;box-sizing:content-box !important;font-family:微软雅黑 Arial !important;display: inline-block !important;height: 20px !important;padding: 2px 3px !important;margin-bottom: 5px !important;font-size: 14px !important;line-height: 20px !important;color: #555 !important;vertical-align: middle !important;-webkit-border-radius: 4px !important;-moz-border-radius: 4px !important;border-radius: 4px !important;background-color: #fff;border: 1px solid #ccc;-webkit-transition: border linear .2s,box-shadow linear .2s !important;-moz-transition: border linear .2s,box-shadow linear .2s !important;-o-transition: border linear .2s,box-shadow linear .2s !important;transition: border linear .2s, box-shadow linear .2s !important;" type="text" value=""/>');
                        input.val(item.inputEl.val());

                        div.append(checkbox);
                        div.append(input);
                        container.append(div);

                        checkbox.css("border", "1px solid " + item.color);

                        input.css("box-shadow", "").css("cssText", input.css("cssText") + "box-shadow:" + item.color + " 0px 0px 10px, " + item.color + " 0px 0px 5px inset !important");
                        //input.css("box-shadow", item.color + " 0px 0px 10px, " + item.color + " 0px 0px 5px inset");
                    }
                    var windowWidth = $(window).width();
                    var windowHeight = $(window).height();
                    if (windowHeight > document.body.scrollHeight) {
                        windowHeight = document.body.scrollHeight;
                    }
                    var position = layero.position();
                    if (position.top + layero.height() > windowHeight) {
                        layero.css("top", windowHeight - layero.height() + 'px');
                    }
                    if (position.left + layero.width() > windowWidth) {
                        layero.css("left", windowWidth - layero.width() + 'px');
                    }
                },
                yes: function (index, layero) {
                    var els = layero.find("input[type='checkbox']");
                    var itemList = [];
                    //此处需要校验列名重复问题
                    var isFirst = true;
                    var xpath = "";
                    var firstItem = null;
                    for (var _i = 0; _i < els.length; _i++) {
                        var el = els[_i];
                        if (el.checked) {
                            var uuid = el.value;
                            var item = that.elList[uuid];
                            if (item) {
                                if (isFirst) {
                                    isFirst = false;
                                    firstItem = item;
                                    xpath = item.current;
                                } else {
                                    xpath += '|' + item.current;
                                    that.removeSelect(item, true);
                                }
                            }
                        }
                    }
                    firstItem.current = xpath;
                    that.repaint();
                    firstItem.switchEl.hide();
                    layer.close(index);
                }
            });

        };

        if (that.combineTriggerEl) {
            that.combineTriggerEl.bind("click", function () {
                that.showCombineColumnLayer();
            });
        };

        that.switchShelter();
        that.showShelter();
        setTimeout(function () {
            that.showShelter();
        }, 2000);
    }

    module.exports = ElementSelector;
});