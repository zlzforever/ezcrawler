define("Spider.SmartMode", function (require, exports, module) {
    var $ = require("jquery");
    var layer = require("layer");
    //var shortCut = require("Spider.ShortCut");
    var selectorModule = require("Spider.ElementSelector");

    var xPathGenerator = require("Spider.XPathGenerator");
    var gen = new xPathGenerator();
    var evaluator = new XPathEvaluator();

    function uuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        var uuid = s.join("");
        return uuid;
    }

    /*input 对象基础类*/
    function inputObject(config) {
        this.emptyText = config.emptyText || "";
        this.el = typeof config.el == 'string' ? $("#" + config.el) : config.el;
        this.defaultValue = config.defaultValue || "";
        this.validator = config.validator;
    }

    inputObject.prototype = {
        init: function () {
            var that = this;
            this.el.bind("focus", function () {
                that.focus(this);
            }).bind("blur", function () {
                that.blur(this);
            });
        },
        focus: function (el) {
            if (el.value == this.emptyText) { el.value = ""; }
        },
        blur: function (el) {
            if (el.value == "") {
                el.value = this.emptyText;
            }
            if (this.validator) {
                this.validator();
            }
        },
        changeLanguage: function (emptyText) {
            var oldstartUrlOptionText = this.emptyText;

            this.emptyText = emptyText;

            if (this.el.val() == oldstartUrlOptionText) {
                this.el.val(this.emptyText);
            }
        },
        unbind: function () {
            this.el.unbind("focus").unbind("blur");
        },
        getValue: function () {
            var val = this.el.val();
            return val == this.emptyText ? this.defaultValue : val;
        },
        parent: function () {
            return this.el.parent();
        }
    };

    function inputStartUrl(option) {
        this.defaultCount = option.defaultCount || 1;
        this.instances = {};
        this.emptyText = option.emptyText;
        this.existsErrorText = option.existsErrorText;
        this.addbutton = option.addbutton || $("#__p1p_addurl");
        this.container = option.el || $("#__p1p_starturl");

        this.askRemove = option.askRemove;
        this.askTitle = option.askTitle;
        this.onSubmitting = false;
        var that = this;
        this.init = function () {
            var that = this;
            this.addbutton.bind("click", function () {
                that.addUrl();
            });
            for (var a = 0; a < this.defaultCount; a++) {
                this.addUrl();
            }
        };

        this.addUrl = function () {
            var div = $("<div></div>");
            var input = $('<input style="text-align:left !important;width:375px !important;max-width:375px !important;min-width:375px !important;background-color: rgb(255, 255, 255) !important; border: 1px solid rgb(204, 204, 204) !important; height: 20px !important; padding: 2px 3px !important; line-height: 20px !important; border-radius: 4px !important; transition: border 0.2s linear, box-shadow 0.2s linear !important; box-shadow: rgba(0, 0, 0, 0.0745098) 0px 1px 1px inset !important;font-size: 14px !important; box-sizing: content-box !important; display: inline-block !important; color: rgb(85, 85, 85) !important; margin-bottom: 5px !important;" type="text" value="' + (this.container.children().length ? this.emptyText : window.location.href) + '"/>');
            var del = $('<i class="fa fa-times" style="float:none !important;width:auto !important;height:auto !important;margin-left:8px !important;font-weight:normal !important;font-size:15px !important;cursor:pointer;background:none !important;display:inline !important;position:relative !important;color:#000 !important;"></i>');

            var id = uuid();
            del.attr('id', id);

            div.append(input);
            div.append(del);

            that.container.append(div);

            del.bind("click", function () {
                that.removeUrl(this);
            });

            var cfg = {
                emptyText: this.emptyText,
                el: input
            };

            var instance = new inputObject(cfg);
            this.instances[id] = instance;
            instance.init();
        };
        this.validator = function () {
            var values = that.getValue().sort();
            if (values[0].trim() === '') {
                layer.alert(that.emptyText, { zIndex: 2147483620, icon: 2 });
                return false;
            }
            for (var _x = 0; _x < values.length - 1; _x++) {
                if (values[_x].trim() === values[_x + 1].trim()) {
                    layer.alert(that.existsErrorText + values[_x].trim(), { zIndex: 2147483620, icon: 2 });
                    return false;
                }
            }
            return true;
        };
        this.removeUrl = function (del) {
            var el = $(del);
            var instances = this.instances;

            function remove() {
                var inputObject = instances[el.attr("id")];
                el.unbind("click");
                inputObject.unbind();
                delete instances[el.attr("id")];
                el.parent().remove();
            }
            if (el.prev().val() != this.emptyText) {
                layer.confirm(this.askRemove, { icon: 3, title: this.askTitle }, function (index) {
                    remove();
                    layer.close(index);
                });
            } else {
                remove();
            }
        };
        this.changeLanguage = function (option) {
            that.emptyText = option.emptyText;
            that.existsErrorText = option.existsErrorText;
            //this.askRemove = option.askRemove;
            //this.askTitle = option.askTitle;

            for (var a in that.instances) {
                if (that.instances.hasOwnProperty(a)) {
                    that.instances[a].changeLanguage(that.emptyText);
                }
            }
        };
        this.getValue = function () {
            var values = [];
            for (var a in this.instances) {
                if (this.instances.hasOwnProperty(a) && this.instances[a]) {
                    var val = this.instances[a].getValue();
                    values.push(val);
                }
            }
            return values;
        };
    }

    function smartMode(options) {
        var that = this;
        that.lang = options.language;
        that.version = options.version;
        that.events = options.events;
        that.viewEl = {};

        that.tpl = '<div class="panel-group">' +
            '<div class="__p1p_panel" style="line-height:normal !important;font-size:14px !important;font-weight:normal !important;">' +
            '<div style="line-height:normal !important;text-align:left !important;color:rgb(51, 51, 51) !important;font-family:微软雅黑 Arial !important;background-color:rgb(245, 245, 245) !important;border-top-left-radius:3px !important;border-top-right-radius:3px !important;border-color:rgb(221, 221, 221) !important;padding:5px 10px !important;border-bottom:1px solid rgb(221, 221, 221) !important;">' +
            '<span class="__p1p_panel_title" style="font:16px Simsun !important;font-family:微软雅黑 Arial !important;margin-top:0px !important;margin-bottom: 0px !important;color:#000 !important;text-align:left !important;" lang-key="Spider_config">' +
            this.lang["extension"]["Spider_config"] +
            '</span>' +
            '<div style="line-height:normal !important;font-size:14px !important;float:right !important;margin-right:5px !important;font-family:微软雅黑 Arial !important;">' +
            '<i class="fa fa-chevron-up" style="width:auto !important;height:auto !important;font-weight:normal !important;font-size:16px !important;cursor:pointer !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;" title="' + this.lang["extension"]["Panel_collapse"] + '"></i>' +
            '</div>' +
            '</div>' +
            '<div id="__p1p_spider_config">' +
            '<div style="font-family:微软雅黑 Arial !important;padding:10px !important;">' +
            '<table style="margin:0 !important;table-layout:auto !important;border-spacing:0 !important;border-collapse:collapse !important;border:none !important;font-family:微软雅黑 Arial !important;width:410px !important;max-width:410px !important;min-width:410px !important;" cellpadding="0" cellspacing="0"><tbody><tr>' +
            '<td style="padding:0 !important;text-align: left !important;vertical-align: middle !important;border:none !important;width:120px !important;min-width:120px !important;max-width:120px !important;font-family:微软雅黑 Arial !important;">' +
            '<span style="display:inline-block !important;overflow:hidden !important;text-align:left !important;font-size:14px !important;line-height:18px !important;color: #333 !important;font-family:微软雅黑 Arial !important;" lang-key="Spider_name">' + this.lang["extension"]["Spider_name"] + '</span>' +
            '</td>' +
            '<td colSpan="4" style="padding:0 !important;text-align: left !important;vertical-align: middle !important;border:none !important;"><input id="Spider_name_empty_text" style="text-align:left !important;margin:0px 0px 5px 0px !important;font-family:微软雅黑 Arial !important;width:280px !important;min-width:280px !important;max-width:280px !important;background-color: rgb(255, 255, 255) !important; border: 1px solid rgb(204, 204, 204) !important; height: 20px !important; padding: 2px 3px !important; line-height: 20px !important; border-radius: 4px !important; transition: border 0.2s linear, box-shadow 0.2s linear !important; box-shadow: rgba(0, 0, 0, 0.0745098) 0px 1px 1px inset !important; font-size: 14px !important; box-sizing: content-box !important; display: inline-block !important; color: rgb(85, 85, 85) !important;" type="text" value="' + this.lang["extension"]["Spider_name_empty_text"] + '"/>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding:0 !important;text-align: left !important;vertical-align: middle !important;border:none;">' +
            '<a target="_blank" href="http://www.ezcralwer.cn/tutorial/collectormode" style="color:rgb(0,0,204) !important;font-weight:normal !important;text-decoration:none !important;font-family:微软雅黑 Arial !important;display:inline-block !important;overflow:hidden !important;text-align:left !important;font-size:14px !important;line-height:18px !important;" lang-key="crawler_mode">' + this.lang["extension"]["crawler_mode"] + '</a>' +
            '</td>' +
            '<td colSpan="4" style="padding:0 !important;text-align: left !important;vertical-align: middle !important;border:none;"><select id="crawler_mode_select" style="text-indent:0px !important;text-align:left !important;-webkit-appearance:menulist !important;background: none !important;margin:0px 0px 5px 0px !important;font-family:微软雅黑 Arial !important;width:280px !important;min-width:280px !important;max-width:280px !important;background-color: rgb(255, 255, 255) !important; border: 1px solid rgb(204, 204, 204) !important; height: 20px !important; padding: 2px 3px !important; line-height: 20px !important; border-radius: 4px !important; transition: border 0.2s linear, box-shadow 0.2s linear !important; box-shadow: rgba(0, 0, 0, 0.0745098) 0px 1px 1px inset  !important; font-size: 14px !important; box-sizing: content-box !important; display: inline-block !important; color: rgb(85, 85, 85) !important;"><option value="auto">Intelligent paging</option><option value="click">Click paging</option></select></td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding:0 !important;text-align: left !important;vertical-align: middle !important;border:none;">' +
            '<a target="_blank" href="http://www.ezcralwer.cn/tutorial/collectorfrequency" style="color:rgb(0,0,204) !important;font-weight:normal !important;text-decoration:none !important;font-family:微软雅黑 Arial !important;display:inline-block !important;overflow:hidden !important;text-align:left !important;font-size:14px !important;line-height:18px !important;" lang-key="capture_frequency">' + this.lang["extension"]["capture_frequency"] + '</a>' +
            '</td>' +
            '<td colSpan="4" style="padding:0 !important;text-align: left !important;vertical-align: middle !important;border:none;"><input id="capture_frequency_empty_text" style="text-align:left !important;margin:0px 0px 5px 0px !important;font-family:微软雅黑 Arial !important;width:280px !important;min-width:250px !important;max-width:280px !important;background-color: rgb(255, 255, 255) !important; border: 1px solid rgb(204, 204, 204) !important; height: 20px !important; padding: 2px 3px !important; line-height: 20px !important; border-radius: 4px !important; transition: border 0.2s linear, box-shadow 0.2s linear !important; box-shadow: rgba(0, 0, 0, 0.0745098) 0px 1px 1px inset !important; font-size: 14px !important; box-sizing: content-box !important; display: inline-block !important; color: rgb(85, 85, 85) !important;" type="text" value="1"/></td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding:0 !important;text-align: left !important;vertical-align: middle !important;border:none;">' +
            '<a target="_blank" href="http://www.ezcralwer.cn/tutorial/collectortrytimes" style="color:rgb(0,0,204) !important;font-weight:normal !important;text-decoration:none !important;font-family:微软雅黑 Arial !important;display:inline-block !important;overflow:hidden !important;text-align:left !important;font-size:14px !important;line-height:18px !important;" lang-key="Try_times">' + this.lang["extension"]["Try_times"] + '</a>' +
            '</td>' +
            '<td colSpan="4" style="padding:0 !important;text-align: left !important;vertical-align: middle !important;border:none;"><input id="try_times_value" style="text-align:left !important;margin:0px 0px 5px 0px !important;font-family:微软雅黑 Arial !important;width:280px !important;min-width:250px !important;max-width:280px !important;background-color: rgb(255, 255, 255) !important; border: 1px solid rgb(204, 204, 204) !important; height: 20px !important; padding: 2px 3px !important; line-height: 20px !important; border-radius: 4px !important; transition: border 0.2s linear, box-shadow 0.2s linear !important; box-shadow: rgba(0, 0, 0, 0.0745098) 0px 1px 1px inset !important; font-size: 14px !important; box-sizing: content-box !important; display: inline-block !important; color: rgb(85, 85, 85) !important;" type="text" value="5"/></td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding:0 !important;text-align: left !important;vertical-align: middle !important;border:none;">' +
            '<a target="_blank" href="http://www.ezcralwer.cn/tutorial/collectordownloader" style="color:rgb(0,0,204) !important;font-weight:normal !important;text-decoration:none !important;font-family:微软雅黑 Arial !important;display:inline-block !important;overflow:hidden !important;text-align:left !important;font-size:14px !important;line-height:18px !important;" lang-key="page_downloader">' + this.lang["extension"]["page_downloader"] + '</a>' +
            '</td>' +
            '<td colSpan="4" style="padding:0 !important;text-align: left !important;vertical-align: middle !important;border:none;"><select id="page_xpath_downloader_select" style="text-indent:0px !important;text-align:left !important;-webkit-appearance:menulist !important;background: none !important;margin:0px 0px 5px 0px !important;font-family:微软雅黑 Arial !important;width:280px !important;max-width:280px !important;min-width:250px !important;background-color: rgb(255, 255, 255) !important; border: 1px solid rgb(204, 204, 204) !important; height: 20px !important; padding: 2px 3px !important; line-height: 20px !important; border-radius: 4px !important; transition: border 0.2s linear, box-shadow 0.2s linear !important; box-shadow: rgba(0, 0, 0, 0.0745098) 0px 1px 1px inset !important;font-size: 14px !important; box-sizing: content-box !important; display: inline-block !important; color: rgb(85, 85, 85) !important; "><option value="http">http</option><option value="js-engine">js-engine</option></select></td>' +//<i class="fa fa-windows" style="width:auto !important;height:auto !important;float:right !important;margin:3px 5px 0px 0px !important;font-weight:normal !important;background:none !important;position:relative !important;color:#000 !important;font-size:20px !important;line-height:20px !important;cursor:pointer !important;display:none !important;" id="__pa1pa_tabmode" lang-key="UseTabToCrawler" title="' + this.lang["extension"]["UseTabToCrawler"] + '"></i>
            '</tr>' +
            '<tr style="display:none;">' +
            '<td style="padding:0 !important;text-align: left !important;vertical-align: middle !important;border:none;">' +
            '<a target="_blank" href="http://www.ezcralwer.cn/tutorial/collectorwaittime" style="color:rgb(0,0,204) !important;text-decoration:none !important;font-family:微软雅黑 Arial !important;display:inline-block !important;overflow:hidden !important;text-align:left !important;font-size:14px !important;line-height:18px !important;" lang-key="download_wait_time">' + this.lang["extension"]["download_wait_time"] + '</a>' +
            '</td>' +
            '<td colSpan="4" style="padding:0 !important;text-align: left !important;vertical-align: middle !important;border:none;"><input id="download_wait_time" style="text-align:left !important;margin:0px 0px 5px 0px !important;font-family:微软雅黑 Arial !important;width:280px !important;min-width:280px !important;max-width:280px !important;background-color: rgb(255, 255, 255) !important; border: 1px solid rgb(204, 204, 204) !important; height: 20px !important; padding: 2px 3px !important; line-height: 20px !important; border-radius: 4px !important; transition: border 0.2s linear, box-shadow 0.2s linear !important; box-shadow: rgba(0, 0, 0, 0.0745098) 0px 1px 1px inset !important;font-size: 14px !important; box-sizing: content-box !important; display: inline-block !important; color: rgb(85, 85, 85) !important;" type="text" value="2.5"/></td>' +
            '</tr>' +
            '<tr style="height:30px;">' +
            '<td style="width:120px !important;padding:0 !important;border:none;text-align: left !important;vertical-align: middle !important;">' +
            '<a target="_blank" href="http://www.ezcralwer.cn/tutorial/collectorpaging" style="color:rgb(0,0,204) !important;font-weight:normal !important;text-decoration:none !important;font-family:微软雅黑 Arial !important;display:inline-block !important;overflow:hidden !important;text-align:left !important;font-size:14px !important;line-height:18px !important;" lang-key="PagingSetting">' + this.lang["extension"]["PagingSetting"] + '</a>' +
            '</td>' +
            '<td style="width:100px !important; padding:0 !important;border:none;text-align: left !important;vertical-align: middle !important;"><i id="__pa1pa_paging_select" class="fa fa-mouse-pointer" style="float:none !important;width:auto !important;height:auto !important;font-weight:normal !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;font-size: 18px !important; cursor: pointer !important; visibility: visible; color: #000;" lang-key="Select" title="' + this.lang["extension"]["Select"] + '"></i>' +
            '<i id="__pa1pa_paging_switch" class="fa fa-refresh" style="float:none !important;width:auto !important;height:auto !important;font-weight:normal !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;font-size: 18px !important; margin-left: 10px !important; cursor: pointer !important; visibility: visible; color: #000;" lang-key="Toolbar_Switch" title="' + this.lang["extension"]["Toolbar_Switch"] + '"></i>' +
            '<i id="__pa1pa_paging_undo" class="fa fa-times" style="float:none !important;width:auto !important;height:auto !important;font-weight:normal !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;font-size: 18px !important; margin-left: 10px !important; cursor: pointer !important; visibility: visible; color: #000;" lang-key="Toolbar_Undo" title="' + this.lang["extension"]["Toolbar_Undo"] + '"></i>' +
            '</td>' +
            '<td style="width:60px !important;padding:0 !important;border:none;text-align: left !important;vertical-align: middle !important;"><span id="__pa1pa_paging_repeat_text" style="overflow:hidden !important;text-align:left !important;font-size:14px !important;line-height:18px !important;color: #333 !important;font-family:微软雅黑 Arial !important;display:none;" lang-key="Operation_Time">' + this.lang["extension"]["Operation_Time"] + '</span></td>' +
            '<td style="padding:0 !important;border:none;text-align: left !important;vertical-align: middle !important;"><input id="__pa1pa_paging_repeat_value" style="width:120px !important;min-width:120px !important;max-width:120px !important;text-align:left !important;margin:0px 0px 5px 0px !important;font-family:微软雅黑 Arial !important;background-color: rgb(255, 255, 255) !important; border: 1px solid rgb(204, 204, 204) !important; height: 20px !important; padding: 2px 3px !important; line-height: 20px !important; border-radius: 4px !important; transition: border 0.2s linear, box-shadow 0.2s linear !important; box-shadow: rgba(0, 0, 0, 0.0745098) 0px 1px 1px inset !important;font-size: 14px !important; box-sizing: content-box !important; color: rgb(85, 85, 85) !important;display:none;" type="text" value="1"></td>' +
            '</tr>' +
            '</tbody></table>' +
            '</div>' +
            '</div>' +

            '<div id="__p1p_OperationPanel" style="line-height:normal !important;font-family:微软雅黑 Arial !important;text-align:left !important;color:rgb(51, 51, 51) !important;background-color:rgb(245, 245, 245) !important;border-top-left-radius:3px !important;border-top-right-radius:3px !important;border-color:rgb(221, 221, 221) !important;padding:5px 10px !important;border-bottom:1px solid rgb(221, 221, 221) !important;">' +
            '<span class="__p1p_panel_title" style="font-family:微软雅黑 Arial !important;font-size:16px !important;margin-top:0px !important;margin-bottom: 0px !important;color:#000 !important;text-align:left !important;" lang-key="Operation_PanelTitle">' + this.lang["extension"]["Operation_PanelTitle"] + '</span>' +
            '<div style="font-family:微软雅黑 Arial !important;float:right !important;margin-right:5px !important;"><i class="fa fa-chevron-up" style="width:auto !important;height:auto !important;font-weight:normal !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;cursor:pointer !important;font-size:16px !important;" title="' + this.lang["extension"]["Panel_collapse"] + '"></i></div>' +
            '<div style="font-family:微软雅黑 Arial !important;float:right !important;margin-right:5px !important;"><i id="__p1p_addOperation" style="width:auto !important;height:auto !important;font-weight:normal !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;cursor:pointer !important;font-size:16px !important;" class="fa fa-plus" lang-key="AddOperation_title" title="' + this.lang["extension"]["AddOperation_title"] + '"></i></div>' +
            '<div style="font-family:微软雅黑 Arial !important;float:right !important;margin-right:5px !important;"><a href="http://www.ezcrawler.cn/tutorial/opration" style="text-decoration:none !important;" target="_blank"><i class="fa fa-question-circle" style="width:auto !important;height:auto !important;font-weight:bold !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;cursor:pointer !important;font-size:16px !important;" lang-key="Panel_Help" title="' + this.lang["extension"]["Panel_Help"] + '"></i></a></div>' +
            '</div>' +
            '<div>' +
            '<div style="font-family:微软雅黑 Arial !important;padding:10px !important;">' +
            '<table id="__p1p_operation" cellpadding="0" cellspacing="0" style="margin:0 !important;table-layout:auto !important;border-spacing:0 !important;border-collapse:collapse !important;font-family:微软雅黑 Arial !important;border-top: 1px solid rgb(221, 221, 221) !important;border-left:1px solid rgb(221, 221, 221) !important;width:100% !important;border-spacing: 0 !important;margin-bottom:2px !important;"><tbody><tr>' +
            '<th lang-key="Operation_Type" style="border-top:none !important;border-left:none !important;font-family:微软雅黑 Arial !important;color:#000 !important;width:120px !important;padding:5px !important;border-right:1px solid rgb(221, 221, 221) !important;border-bottom:1px solid rgb(221, 221, 221) !important;font: 12px Arial,sans-serif !important;font-weight:normal !important;font-style:normal !important;text-align:left !important;">' + this.lang["extension"]["Operation_Type"] + '</th>' +
            '<th lang-key="Operation_Wait_Time" style="border-top:none !important;border-left:none !important;font-family:微软雅黑 Arial !important;color:#000 !important;width:120px !important;padding:5px !important;border-right:1px solid rgb(221, 221, 221) !important;border-bottom:1px solid rgb(221, 221, 221) !important;font: 12px Arial,sans-serif !important;font-weight:normal !important;font-style:normal !important;text-align:left !important;">' + this.lang["extension"]["Operation_Wait_Time"] + '</th>' +
            '<th lang-key="Operation_Time" style="border-top:none !important;border-left:none !important;font-family:微软雅黑 Arial !important;color:#000 !important;width:100px !important;padding:5px !important;border-right:1px solid rgb(221, 221, 221) !important;border-bottom:1px solid rgb(221, 221, 221) !important;font: 12px Arial,sans-serif !important;font-weight:normal !important;font-style:normal !important;text-align:left !important;">' + this.lang["extension"]["Operation_Time"] + '</th>' +
            '<th lang-key="Operation" style="border-top:none !important;border-left:none !important;font-family:微软雅黑 Arial !important;color:#000 !important;width:80px !important;padding:5px !important;border-right:1px solid rgb(221, 221, 221) !important;border-bottom:1px solid rgb(221, 221, 221) !important;font: 12px Arial,sans-serif !important;font-weight:normal !important;font-style:normal !important;text-align:left !important;">' + this.lang["extension"]["Operation"] + '</th>' +
            '</tr><tbody></table>' +
            '</div>' +
            '</div>' +

            '<div style="line-height:normal !important;font-family:微软雅黑 Arial !important;text-align:left !important;color:rgb(51, 51, 51) !important;background-color:rgb(245, 245, 245) !important;border-top-left-radius:3px !important;border-top-right-radius:3px !important;border-color:rgb(221, 221, 221) !important;padding:5px 10px !important;border-bottom:1px solid rgb(221, 221, 221) !important;">' +
            '<span class="__p1p_panel_title" style="font-family:微软雅黑 Arial !important;font-size:16px !important;margin-top:0px !important;margin-bottom: 0px !important;color:#000 !important;text-align:left !important;" lang-key="StartUrl_PanelTitle">' + this.lang["extension"]["StartUrl_PanelTitle"] + '</span>' +
            '<div style="font-family:微软雅黑 Arial !important;float:right !important;margin-right:5px !important;"><i class="fa fa-chevron-up" style="width:auto !important;height:auto !important;font-weight:normal !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;cursor:pointer !important;font-size:16px !important;" title="' + this.lang["extension"]["Panel_collapse"] + '"></i></div>' +
            '<div style="font-family:微软雅黑 Arial !important;float:right !important;margin-right:5px !important;"><i id="__p1p_addurl" style="width:auto !important;height:auto !important;font-weight:normal !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;cursor:pointer !important;font-size:16px !important;" class="fa fa-plus" lang-key="AddUrl_title" title="' + this.lang["extension"]["AddUrl_title"] + '"></i></div>' +
            '<div style="font-family:微软雅黑 Arial !important;float:right !important;margin-right:5px !important;"><a href="http://www.ezcrawler.cn/tutorial/starturl" style="text-decoration:none !important;" target="_blank"><i class="fa fa-question-circle" style="width:auto !important;height:auto !important;font-weight:bold !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;cursor:pointer !important;font-size:16px !important;" lang-key="Panel_Help" title="' + this.lang["extension"]["Panel_Help"] + '"></i></a></div>' +
            '</div>' +
            '<div>' +
            '<div id="__p1p_starturl" style="font-family:微软雅黑 Arial !important;padding:10px;">' +
            '</div>' +
            '</div>' +
            '<div style="line-height:normal !important;font-family:微软雅黑 Arial !important;text-align:left !important;color:rgb(51, 51, 51) !important;background-color:rgb(245, 245, 245) !important;border-top-left-radius:3px !important;border-top-right-radius:3px !important;border-color:rgb(221, 221, 221) !important;padding:5px 10px !important;border-bottom:1px solid rgb(221, 221, 221) !important;">' +
            '<span class="__p1p_panel_title" style="font-family:微软雅黑 Arial !important;font-size:16px !important;margin-top:0px !important;margin-bottom: 0px !important;color:#000 !important;text-align:left !important;" lang-key="Data_PanelTitle">' + this.lang["extension"]["Data_PanelTitle"] + '</span>' +
            '<div style="font-family:微软雅黑 Arial !important;float:right;margin-right:5px !important;"><i class="fa fa-chevron-up" style="width:auto !important;height:auto !important;font-weight:normal !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;cursor:pointer !important;font-size:16px !important;" lang-key="Panel_collapse" title="' + this.lang["extension"]["Panel_collapse"] + '"></i></div>' +
            '<div style="font-family:微软雅黑 Arial !important;float:right !important;margin-right:5px !important;"><a href="http://www.ezcrawler.cn/tutorial/datastore" style="text-decoration:none !important;" target="_blank"><i class="fa fa-question-circle" style="width:auto !important;height:auto !important;font-weight:bold !important;background:none !important;display:inline !important;position:relative !important;color:#000 !important;cursor:pointer !important;font-size:16px !important;" lang-key="Panel_Help" title="' + this.lang["extension"]["Panel_Help"] + '"></i></a></div>' +
            '<div style="float:right !important;margin-right: 10px !important; margin-top: -3px !important; display: block !important;"><label style="color:rgb(51, 51, 51) !important;cursor:default !important;display:inline !important;font-family:微软雅黑 Arial !important;font-size:14px !important;font-weight:normal !important;height:auto !important;letter-spacing:normal !important;line-height:25px !important;pointer-events:auto;text-align:left !important;" for="__Pa1Pa_keepurl" lang-key="KeepUrl">' + this.lang["extension"]["KeepUrl"] + '</label></div>' +
            '<div style="float:right !important;margin:0 !important;"><input id="__Pa1Pa_keepurl" style="background-color:rgba(0, 0, 0, 0) !important;border-bottom-color:rgb(0, 0, 0) !important;border-bottom-style:none !important;border-bottom-width:0px !important;border-image-outset:0px !important;border-image-repeat:stretch !important;border-image-slice:100% !important;border-image-source:none !important;border-image-width:1 !important;border-left-color:rgb(0, 0, 0) !important;border-left-style:none !important;border-left-width:0px !important;border-right-color:rgb(0, 0, 0) !important;border-right-style:none !important;border-right-width:0px !important;border-top-color:rgb(0, 0, 0) !important;border-top-style:none !important;border-top-width:0px !important;box-sizing:border-box !important;color:rgb(0, 0, 0) !important;cursor:auto !important;display:inline-block !important;font-family:微软雅黑 Arial !important;font-size:14px !important;font-stretch:normal !important;font-style:normal !important;font-variant-caps:normal !important;font-variant-ligatures:normal !important;font-variant-numeric:normal !important;font-weight:normal !important;height:13px !important;letter-spacing:normal !important;line-height:normal !important;margin-bottom:3px !important;margin-left:4px !important;margin-right:3px !important;margin-top:3px !important;padding-bottom:0px !important;padding-left:0px !important;padding-right:0px !important;padding-top:0px !important;pointer-events:auto !important;text-align:start !important;text-indent:0px !important;text-rendering:auto !important;text-shadow:none !important;text-transform:none !important;-webkit-appearance:checkbox !important;" type="checkbox"></div>' +
            //'<div style="font-family:微软雅黑 Arial !important;float:right;margin-right:5px !important;"><i class="fa fa-code-fork" style="cursor:pointer !important;font-size:16px !important;"  lang-key="CombineColumn" title="' + this.lang["extension"]["CombineColumn"] + '"></i></div>' +
            '</div>' +
            '<div>' +
            '<div id="__p1p_datacollection" style="font-family:微软雅黑 Arial !important;padding:10px !important;"></div>' +
            '</div>' +
            '</div>' +
            '</div>';

        this.getResource = function (key) {
            return that.lang["extension"][key];
        }
    }

    smartMode.prototype = {
        render: function (container) {
            //console.log("Spider.SmartMode is ready to work now!");

            $(".__p1p_top button").each(function () {
                if ($(this).attr("lang-key") != 'UndoCombineSpider') {
                    $(this).css("display", "inline");
                }
            });
            var that = this;
            container.html(this.tpl);

            function collipse(element) {
                var el = element.parent().parent().next();
                var nextEl = element.parent().next();
                if (el.is(":visible")) {
                    el.hide();
                    element.attr("title", that.lang["extension"]["Panel_expand"]);
                    element.removeClass("fa-chevron-up").addClass("fa-chevron-down");
                    nextEl.hide();
                    nextEl.next().hide();
                } else {
                    el.show();
                    element.removeClass("fa-chevron-down").addClass("fa-chevron-up");
                    nextEl.show();
                    nextEl.next().show();
                    element.attr("title", that.lang["extension"]["Panel_collapse"]);
                }
            }

            //显示，隐藏Panel按钮点击事件
            $(".fa-chevron-up").bind("click", function () {
                collipse($(this));
            });
            $(".fa-chevron-down").bind("click", function () {
                collipse($(this));
            });

			/*$("#__pa1pa_tabmode").bind("click", function () {
				if ($(this).css("font-weight") == "bold") {
					$(this).css("font-weight", "normal");
				} else {
					$(this).css("font-weight", "bold");
				}
			});*/

            //初始化添加起始地址事件
            that.urlComponent = new inputStartUrl({
                container: $("#__p1p_starturl"),
                addbutton: $("#__p1p_addurl"),
                emptyText: that.lang["extension"]["StartUrlEmptyText"],
                existsErrorText: that.lang["extension"]["StartUrlExists"],

                askRemove: that.lang["extension"]["SureToRemove"],
                askTitle: that.lang["extension"]["Information"],
                defaultValue: window.location.href
            });
            that.urlComponent.init();

            //初始化爬虫名称框
            that.spiderNameComponent = new inputObject({
                emptyText: that.lang["extension"]["Spider_name_empty_text"],
                el: $("#Spider_name_empty_text"),
                validator: function () {
                    var tmpVal = this.getValue();
                    if (tmpVal.length < 4 || tmpVal.length > 32) {
                        layer.tips(that.lang["extension"]["NameLengthRange"], $("#Spider_name_empty_text"), { tips: 3, time: 5000, zIndex: 2147483612 });
                        return false;
                    }
                    if (!/^[^\|;]*$/.test(tmpVal)) {
                        layer.tips(that.lang["extension"]["Spider_Name_Regex"], $("#Spider_name_empty_text"), { tips: 3, time: 5000, zIndex: 2147483612 });
                        return false;
                    }
                    return true;
                }
            });
            that.spiderNameComponent.init();

            //初始化爬虫频率框
            that.spiderfreqComponent = new inputObject({
                emptyText: that.lang["extension"]["capture_frequency_empty_text"],
                el: $("#capture_frequency_empty_text"),
                defaultValue: 1,
                validator: function () {
                    var tmpVal = this.getValue();
                    if (isNaN(tmpVal) || tmpVal < 0.5 || tmpVal > 3600) {
                        this.el.val(this.emptyText);
                    }
                }
            });
            that.spiderfreqComponent.init();

            //初始化尝试次数
            that.attemptsComponent = new inputObject({
                emptyText: that.lang["extension"]["Try_times_empty_text"],
                el: $("#try_times_value"),
                defaultValue: 5,
                validator: function () {
                    var tmpVal = this.getValue();
                    if (!/^[1-9][0-9]{0,20}$/.test(tmpVal) || tmpVal < 1 || tmpVal > 50) {
                        this.el.val(this.emptyText);
                    }
                }
            });
            that.attemptsComponent.init();

            that.downloaderWaitTimeComponent = new inputObject({
                emptyText: that.lang["extension"]["download_wait_time_empty_text"],
                el: $("#download_wait_time"),
                defaultValue: 2.5,
                validator: function () {
                    var tmpVal = this.getValue();
                    if (isNaN(tmpVal) || tmpVal < 2.5 || tmpVal > 600) {
                        this.el.val(this.emptyText);
                    }
                }
            });
            that.downloaderWaitTimeComponent.init();

            //分页重复次数
            that.pagingRepeatComponent = new inputObject({
                emptyText: '≥1',
                el: $("#__pa1pa_paging_repeat_value"),
                defaultValue: 1,
                validator: function () {
                    var tmpVal = this.getValue();
                    if (!/^[1-9][0-9]{0,20}$/.test(tmpVal) || tmpVal < 1 || tmpVal > 100000) {
                        this.el.val(this.emptyText);
                    }
                }
            });
            that.pagingRepeatComponent.init();

            //初始化工具栏selectMode 
            //that.shortcut = new shortCut({
            //	onSelectModeChanged: function (mode, source, target) {
            //		that.selector.changeSelectMode(mode, source, target);
            //	},
            //	onSwitch: function (source, target) {
            //		that.selector.switchAction(source, target);
            //	},
            //	undo: function (source, target) {
            //		that.selector.undoAction(source, target);
            //	},
            //	resource: that.getResource
            //});

            that.crawlerModeComponent = $("#crawler_mode_select");
            var downloaderComponent = $("#page_xpath_downloader_select");

            that.crawlerModeComponent.change(function () {
                var mode = $(this).val();
                var el = that.attemptsComponent.parent().parent();
                if (mode == "auto") {
                    el.show();
                } else {
                    el.hide();
                }
            });

            var initObject = {
                container: "__p1p_datacollection",
                pager: that.crawlerModeComponent,
                downloader: downloaderComponent,
                freq: that.spiderfreqComponent,
                action: $("#__p1p_operation"),
                combineTriggerEl: $('i[lang-key="CombineColumn"]'),
                selectPagingEl: $("#__pa1pa_paging_select"),
                switchPagingEl: $("#__pa1pa_paging_switch"),
                undoPagingEl: $("#__pa1pa_paging_undo"),
                pagingRepeatLbl: $("#__pa1pa_paging_repeat_text"),
                pagingRepeatVal: that.pagingRepeatComponent,
                rowClazz: "__p1p_selectrow",
                preferenceAttr: "none",
                pagerPreferenceAttr: "class",
                selectAttr: "__p1p_select",
                //propertyColors: ["#000", "#00a650", "#f00", "#00f", "#7b3000", "#00bff3", "#4b0048", "#f16c4d", "#2f3192", "#f0f"],
                propertyColors: ["#790000", "#7c4900", "#f7941d", "#c6df9c", "#ee1d24", "#4b0048", "#00f", "#fdc68c", "#f7977a", "#2f3192", "#045f20", "#7ca6d8", "#7a0026", "#003562", "#91278f", "#bc8cbf", "#8fc63d", "#ee105a", "#000", "#8B2252", "#0072bc"],
                actionTriggerEl: $("#__p1p_addOperation"),
                actionContainerEl: $("#__p1p_operation"),
                actionColors: ["#0F0FFF", "#00FFF2", "#CDFF72", "#609DFF", "#F6FF00", "#FF8C00", "#FF0094", "#A100FF", "#FF8968", "#47FFDA"],
                //actionColors: ["#0000FF", "#4169E1", "#708090", "#1E90FF", "#5F9EA0", "#AFEEEE", "#FF0094", "#008B88", "#FFFACD", "#FFE4B5"],
                pagerColor: "#ff0000",
                //pagerColor: "#FFA500",
                //shortCutComponent: that.shortcut,
                resource: function (key) {
                    return that.getResource(key);
                },
                events: {
                    beginSelection: function () {
                        if (that.events && that.events["beginSelection"]) {
                            that.events["beginSelection"]();
                        }
                        //that.shortcut.enable();
                    },
                    endSelection: function () {
                        if (that.events && that.events["endSelection"]) {
                            that.events["endSelection"]();
                        }
                        //that.shortcut.disable();
                    }
                }
            };

            //初始化选择组件
            that.selector = new selectorModule(initObject);
            that.selector.beginSelect();

            downloaderComponent.change(function () {
                var el = $(this);
                //var tabmodeEl = $("#__pa1pa_tabmode");
                var val = el.val();
                if (val == "js-engine") {
                    $("#__p1p_OperationPanel").show();
                    $("#__p1p_OperationPanel").next().css("display", "");
                    $("#download_wait_time").parent().parent().show();
                    //el.width(250);
                    //tabmodeEl.css("display", "inline");
                } else {
                    $("#__p1p_OperationPanel").hide();
                    $("#__p1p_OperationPanel").next().hide();
                    $("#download_wait_time").parent().parent().hide();
                    //el.width(280);
                    //tabmodeEl.css("font-weight", "normal");
                    //tabmodeEl.hide();
                }
            });
            $("#__p1p_OperationPanel").hide();
            $("#__p1p_OperationPanel").next().hide();
        },
        changeLanguage: function (lang) {
            this.lang = lang;
            this.urlComponent.changeLanguage({
                emptyText: this.lang["extension"]["StartUrlEmptyText"],
                existsErrorText: this.lang["extension"]["StartUrlExists"],
                askRemove: this.lang["extension"]["SureToRemove"],
                askTitle: this.lang["extension"]["Information"]
            });

            this.spiderNameComponent.changeLanguage(this.lang["extension"]["Spider_name_empty_text"]);
            this.spiderfreqComponent.changeLanguage(this.lang["extension"]["capture_frequency_empty_text"]);
            this.attemptsComponent.changeLanguage(this.lang["extension"]["Try_times_empty_text"]);
            this.downloaderWaitTimeComponent.changeLanguage(this.lang["extension"]["download_wait_time_empty_text"]);

            var that = this;
            $("span[lang-key]").each(function () {
                $(this).html(that.lang["extension"][$(this).attr("lang-key")]);
            });
            $("th[lang-key]").each(function () {
                $(this).html(that.lang["extension"][$(this).attr("lang-key")]);
            });
            $("label[lang-key]").each(function () {
                $(this).html(that.lang["extension"][$(this).attr("lang-key")]);
            });

            $(".__p1p_panel i").each(function () {
                var el = $(this);
                if (el.attr("lang-key")) {
                    el.attr("title", that.lang["extension"][el.attr("lang-key")]);
                }
                else if (el.hasClass("fa-chevron-up") || el.hasClass("fa-chevron-down")) {
                    el.attr("title", el.hasClass("fa-chevron-up") ? that.lang["extension"]["Panel_collapse"] : that.lang["extension"]["Panel_expand"]);
                }
            });
        },
        combineSpider: function () {
            if (!this.urlComponent.validator()) return;
            return this.selector.combineSpider();
        },
        undoCombineSpider: function () {
            return this.selector.undoCombineSpider();
        },
        buildSpider: function (isTest) {
            if (!this.selector.validateSpider()) return;
            if (!isTest && this.spiderNameComponent.validator() !== true) return;
            var taskObj = {};
            try {
                taskObj.name = this.spiderNameComponent.getValue();
                taskObj.version = this.version;
                taskObj.description = "";
                taskObj.downloader = $("#page_xpath_downloader_select").val();

                taskObj.site = {
                    startRequests: [],
                    cycleRetryTimes: parseInt(this.attemptsComponent.getValue(), 10) - 1
                };

                if (!this.urlComponent.validator()) return;
                var urls = this.urlComponent.getValue();
                for (var a = 0; a < urls.length; a++) {
                    taskObj.site.startRequests.push({ url: urls[a], extra: {} });
                }

                if (taskObj.downloader == "js-engine") {
                    taskObj.site.delayBeforeRunActions = this.downloaderWaitTimeComponent.getValue() * 1000;
                }

                if (isTest == true) {
                    taskObj.emptySleepTime = 5000;
                } else {
                    taskObj.emptySleepTime = 30000;
                }
                taskObj.deep = 0;

                taskObj.scheduler = {
                    name: "queue",
                };

                taskObj.monitor = {
                    indexdb: true,
                    console: isTest === true,
                    //webElement: isTest == true
                };

                taskObj.pipelines = [{ name: "indexdb" }];

                taskObj.log = {
                    console: isTest === true,
                    //webSocket: isTest == false,
					indexdb:true,
                    /* 输出日志到页面某个元素 */
                    webElement: true
                };

                if (!this.selector.buildSpider(taskObj)) return;
                if (taskObj.downloader == "js-engine") {
                    var engineType = $("#__pa1pa_tabmode").css("font-weight") == "bold" ? "tab" : "frame";
                    taskObj.downloader = "js-" + engineType + "-" + taskObj.crawlerMode + "-engine";
                }

                if (document.getElementById("__Pa1Pa_keepurl").checked) {
                    var fieldCollection = taskObj.entities[0].fields;
                    var fieldName = "__url";
                    while (fieldCollection.hasOwnProperty(fieldName)) {
                        fieldName += "1";
                    }

                    fieldCollection[fieldName] = {
                        selector: { type: "environment", expression: "__url" }
                    };

                    taskObj.scheduler.storeUrl = true;
                }
            } catch (e) {
                layer.alert(e.message, { zIndex: 2147483620, icon: 2 });
                //console.log(e.message);
                taskObj = null;
            }
            //console.log(taskObj);
            return taskObj;
        },
        testSpider: function () {
            var taskObject = this.buildSpider(true);
            if (taskObject && taskObject.entities) {
                taskObject.name = taskObject.name || new Date().getTime().toString();
                taskObject.entities[0].alias = new Date().getTime().toString();
                if (SpiderMonitor) {
                    SpiderMonitor.runSpider(taskObject, {
                        isTest: true,
                        region: this.lang["region"]
                    });
                }
                else {
                    layer.alert(this.lang["extension"]["spider_engine_invalid"], { zIndex: 2147483620, icon: 2 });
                }
            }
        },
        CreateAndRun: function () {
            var taskObject = this.buildSpider(false);
            if (!taskObject || !taskObject.entities) return;
            var that = this;

            var result = SpiderMonitor.verifySpider(taskObject, {
                isTest: false,
                region: that.lang["region"],
                events: {}
            });
            if (!result) return false;

            //SpiderConnector.Connector.invoke("getCookie", "XSRF-TOKEN").then(function (err, value) {
            //	if (value) {
            //$.ajax({
            //    url: _pa1pa_config_data["submit_run_url"],
            //    type: "post",
            //    dataType: "json",
            //    contentType: 'application/json',
            //    data: JSON.stringify({ script: JSON.stringify(taskObject), type: (that.crawlerModeComponent.val() == "auto" ? 0 : 1) }),
                //headers: {
                //    "X-XSRF-TOKEN": value,
                //    "X-Requested-With": "XMLHttpRequest"
                //},
            //    success: function (msg) {
            //        if (msg && msg.success && msg.result.length) {
            //            that.end();
            //            var obj = msg.result[0];
            //            var newTask = JSON.parse(obj.script);
            //            var options = {
            //                lang: that.lang["region"],
            //                taskId: newTask.id,
            //                query: obj.options,
            //                batch: obj.batch,
            //               webSocket: obj.webSocket,
            //                onlyCurrent: true
            //            };
            //            SpiderMonitor.runSpider(newTask, options);
            //        }
            //    },
            //    error: function (err) {
            //        var errObj = err.responseText ? JSON.parse(err.responseText) : { error: { code: 0, message: "error" } };
            //        var errMsg = that.lang["extension"]["task_submit_exception"] + " : " + errObj.error.message;
            //        layer.alert(errMsg, { zIndex: 2147483620, icon: 2 });
            //    }
            //});
            //	}
            //});
        },
        submitSpider: function () {
            if (this.onSubmitting) return;
            var taskObject = this.buildSpider(false);
            if (!taskObject || !taskObject.entities) return;
            var that = this;
			taskObject.id = new Date().getTime();
			
            var result = SpiderMonitor.verifySpider(taskObject, {
                isTest: false,
                region: this.lang["region"],
                events: {}
            });
            if (!result) return false;
			
			SpiderConnector.Connector.invoke("saveCrawler", { 
				type: (that.crawlerModeComponent.val() == "auto" ? 0 : 1), 
				script: { crawler:taskObject},
				options: { lang : lang["region"] }
			});
			var that = this;
			layer.alert("任务已经创建，请在任务管理界面查看[右键菜单选择易智采集器采集器 -> 易智采集器任务管理]!",function(){
				layer.closeAll();
				that.selector.endSelect();
				//this.shortcut.end();
				SpiderConnector.Connector.isRunning = false;
			});
        },
        end: function (showMsg) {
            layer.closeAll();
            this.selector.endSelect();
            //this.shortcut.end();
            SpiderConnector.Connector.isRunning = false;
        },
        endAndShow: function () {
            this.end();
            layer.msg(this.lang["extension"]["extension_exit"], { zIndex: 2147483620, time: 3000, icon: 1 });
        },
        disable: function () {
            $("#__p1p_panel2 *").css("pointer-events", "none");
            $("#__p1p_panel2 .fa-chevron-up").css("pointer-events", "auto");
            $("#__p1p_panel2 .fa-chevron-down").css("pointer-events", "auto");
            $("#__p1p_datacollection input").css("pointer-events", "auto");
            $("#Spider_name_empty_text").css("pointer-events", "auto");
            var container = $("#__pa1pa_container");
            container.find("input").each(function () {
                if ($(this).css("pointer-events") == "none") {
                    $(this).css("background-color", "rgb(235, 235, 228)");
                    this.disabled = true;
                }
            });
            container.find("i").each(function () {
                if ($(this).css("pointer-events") == "none") {
                    $(this).css("text-decoration", "line-through");
                }
            });
            container.find("select").each(function () {
                if ($(this).css("pointer-events") == "none") {
                    $(this).css("background-color", "rgb(235, 235, 228)");
                    this.disabled = true;
                }
            });

        },
        enable: function () {
            var container = $("#__pa1pa_container");
            container.find("input").each(function () {
                if ($(this).css("pointer-events") == "none") {
                    $(this).css("background-color", "");
                    this.disabled = false;
                }
            });
            container.find("i").each(function () {
                if ($(this).css("pointer-events") == "none") {
                    $(this).css("text-decoration", "");
                }
            });
            container.find("select").each(function () {
                if ($(this).css("pointer-events") == "none") {
                    $(this).css("background-color", "");
                    this.disabled = false;
                }
            });
            $("#__p1p_panel2 *").css("pointer-events", "");
            this.selector.__initSelector();
        }
    };

    module.exports = smartMode;
});