var __Pa1Pa_engine_version = 1;

define("Spider.Main", function (require, exports, module) {
	var spider = null;
	var version = '';

	//加载模块
	var $ = require("jquery");
	var layer = require("layer");
	var connector = SpiderConnector.Connector;

	function appendLink(url, id) {
		if (id && $('#' + id).length) return;
		var link = document.createElement('link');
		if (id) {
			link.setAttribute("id", id);
		}
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("type", "text/css");
		link.setAttribute("href", url);
		document.getElementsByTagName("head")[0].appendChild(link);
	}
	appendLink(chrome.extension.getURL("css/main.css"), "__p1p_main");
	appendLink(chrome.extension.getURL("css/layer.css"), "__p1p_layer");
	appendLink(chrome.extension.getURL("css/lyicon.css"), "__p1p_icon");

	connector.registerEvent({
		beginUI: function (data, sendResponse) {
			spider.buildSpider();
			sendResponse("ok");
		}
	});
	version = "2.0.0";
	beginMain(lang["zh-CN"]);
	
	function beginMain(data) {
		var _dt = data;
		if (!spider) {

			spider = new SpiderMain(_dt);
			spider.buildSpider();
		}
		else spider.changeLanguage(_dt);
	}

	function SpiderMain(lang) {
		this.lang = lang;
		this.layerId = 0;
		this.instance = null;

		layerLang = lang["layer"];
		/**
         * 变更插件语言
         * @param {object} lang 语言对象
         * @returns {void} 
         */
		this.changeLanguage = function (lang) {
			this.lang = lang;

			layerLang = lang["layer"];

			layer.title(this.lang["extension"]["TaskTreeTitle"] + ' v' + version + '.' + __Pa1Pa_engine_version, this.layerId);

			var that = this;
			$("button[lang-key]").each(function () {
				$(this).html(that.lang["extension"][$(this).attr("lang-key")]);
			});
			$("a[lang-key]").each(function () {
				$(this).html(that.lang["extension"][$(this).attr("lang-key")]);
			});
			$("option[lang-key]").each(function () {
				$(this).html(that.lang["extension"][$(this).attr("lang-key")]);
			});
			$("i[lang-key]").each(function () {
				$(this).attr("title", that.lang["extension"][$(this).attr("lang-key")]);
			});

			if (this.instance) {
				this.instance.changeLanguage(this.lang);
			}
		};
		/**
         * 开始创建爬虫任务
         * @returns {} 
         */
		this.newInstance = function (mode) {
			var that = this;

			var module = require(mode);
			if (!module) {
				layer.alert("can not find module:" + mode);
				return false;
			}
			that.instance = new module({
				language: that.lang,
				version: version,
				events: {
					beginSelection: function () {
						$("button[lang-key='CombineSpider']").show();
						$("button[lang-key='UndoCombineSpider']").hide();
						$("button[lang-key='TestSpider']").hide();
						$("button[lang-key='SubmitSpider']").hide();
						//$("#__pa1pa_submit_div").hide();
						that.instance.enable();
					},
					endSelection: function () {
						$("button[lang-key='CombineSpider']").hide();
						$("button[lang-key='UndoCombineSpider']").show();
						$("button[lang-key='TestSpider']").show();
						$("button[lang-key='SubmitSpider']").show();
						//$("#__pa1pa_submit_div").css("display", "inline-block");
						that.instance.disable();
					}
				}
			});
			that.instance.render($("#__p1p_panel2"));

			return true;
		}
		/**
         * 创建爬虫对象
         * @returns {} 
         */
		this.buildSpider = function () {
			if (connector.isRunning) return;

			connector.isRunning = true;
			var that = this;
			var windowHeight = $(window).height();
			if (windowHeight > window.screen.height) {
				windowHeight = document.body.clientHeight;
			}
			
			that.layerId = layer.open({
				type: 1,
				shade: false,
				maxmin: true,
				closeBtn: 1,
				zIndex: 2147483599,
				title: this.lang["extension"]["TaskTreeTitle"] + ' v' + version + '.' + __Pa1Pa_engine_version,
				content: '<div id="__pa1pa_container" style="overflow:visible !important;letter-spacing:0px;overflow:hidden;text-align:left !important;font-family:微软雅黑 Arial !important;">' +
					'<div style="overflow:visible !important;text-align:left !important;height:40px !important;font-family:微软雅黑 Arial !important;box-sizing:content-box !important;border-bottom: 1px solid rgb(238, 238, 238) !important;padding: 5px !important;">' +
								'<button type="button" class="__p1p_button" style="-webkit-appearance:button !important;width:auto !important;min-width: 0 !important;height:30px !important;font-family:微软雅黑 Arial !important;float:left;margin:5px !important;line-height: 1.2 !important;text-align:center !important;vertical-align:middle !important;touch-action:manipulation !important;cursor:pointer !important;user-select:none !important;padding:6px 12px !important;border: 1px solid gray !important;border-image:initial !important;border-radius:4px !important;color: rgb(255, 255, 255) !important;text-shadow: rgba(0, 0, 0, 0.247059) 0px -1px 0px !important;background-color: #000 !important;box-sizing:border-box !important;word-spacing: normal !important;text-transform: none !important;text-indent: 0px !important;font: 14px Arial !important;" lang-key="CombineSpider">' + this.lang["extension"]["CombineSpider"] + '</button>' +
								'<button type="button" class="__p1p_button" style="-webkit-appearance:button !important;width:auto !important;min-width: 0 !important;display:none;height:30px !important;font-family:微软雅黑 Arial !important;float:left;margin:5px !important;line-height: 1.2 !important;text-align:center !important;vertical-align:middle !important;touch-action:manipulation !important;cursor:pointer !important;user-select:none !important;padding:6px 12px !important;border: 1px solid gray !important;border-image:initial !important;border-radius:4px !important;color: rgb(255, 255, 255) !important;text-shadow: rgba(0, 0, 0, 0.247059) 0px -1px 0px !important;background-color: #000 !important;box-sizing:border-box !important;word-spacing: normal !important;text-transform: none !important;text-indent: 0px !important;font: 14px Arial !important;" lang-key="UndoCombineSpider">' + this.lang["extension"]["UndoCombineSpider"] + '</button>' +
								'<button type="button" class="__p1p_button" style="-webkit-appearance:button !important;width:auto !important;min-width: 0 !important;display:none;height:30px !important;font-family:微软雅黑 Arial !important;float:left;margin:5px !important;margin-right:10px !important;line-height: 1.2 !important;text-align:center !important;vertical-align:middle !important;touch-action:manipulation !important;cursor:pointer !important;user-select:none !important;padding:6px 12px !important;border: 1px solid gray !important;border-image:initial !important;border-radius:4px !important;color: rgb(255, 255, 255) !important;text-shadow: rgba(0, 0, 0, 0.247059) 0px -1px 0px !important;background-color: #000 !important;box-sizing:border-box !important;word-spacing: normal !important;text-transform: none !important;text-indent: 0px !important;font: 14px Arial !important;" lang-key="TestSpider">' + this.lang["extension"]["TestSpider"] + '</button>' +
								'<button type="button" class="__p1p_button" style="margin:5px !important;text-align:center !important;vertical-align:middle !important;touch-action:manipulation !important;cursor:pointer !important;user-select:none !important;padding:6px 12px !important;border: 1px solid gray !important;border-image:initial !important;border-radius:4px !important;color: rgb(255, 255, 255) !important;text-shadow: rgba(0, 0, 0, 0.247059) 0px -1px 0px !important;background-color: #000 !important;box-sizing:border-box !important;word-spacing: normal !important;text-transform: none !important;text-indent: 0px !important;font: 14px Arial !important;display:none;" lang-key="SubmitSpider">' + this.lang["extension"]["SubmitSpider"] + '</button>' +
								//'<button type="button" class="__p1p_button" style="margin:5px !important;text-align:center !important;vertical-align:middle !important;touch-action:manipulation !important;cursor:pointer !important;user-select:none !important;padding:6px 12px !important;border: 1px solid gray !important;border-image:initial !important;border-radius:4px !important;color: rgb(255, 255, 255) !important;text-shadow: rgba(0, 0, 0, 0.247059) 0px -1px 0px !important;background-color: #000 !important;box-sizing:border-box !important;word-spacing: normal !important;text-transform: none !important;text-indent: 0px !important;font: 14px Arial !important;display:none;" lang-key="CreateAndRun">' + this.lang["extension"]["CreateAndRun"] + '</button>'+
								//'<div id="__pa1pa_submit_div" style="overflow:visible !important;min-width: 0 !important;display:none;position:relative !important;font-family:微软雅黑 Arial !important;vertical-align:middle !important;font-size: 14px !important;line-height:1.42857143 !important;rgb(255, 255, 255) !important;">' +
									//'<button type="button" class="__p1p_button" style="-webkit-appearance:button !important;width:auto !important;min-width: 0 !important;height:30px !important;font-family:微软雅黑 Arial !important;margin-top: 5px !important;text-align:center !important;vertical-align:middle !important;touch-action:manipulation !important;cursor:pointer !important;user-select:none !important;padding:6px 12px !important;border: 1px solid gray !important;border-image:initial !important;color: rgb(255, 255, 255) !important;text-shadow: rgba(0, 0, 0, 0.247059) 0px -1px 0px !important;background-color: #000 !important;box-sizing:border-box !important;word-spacing: normal !important;text-transform: none !important;text-indent: 0px !important;font: 14px Arial !important;position: relative !important;float:left !important;display: inline-block !important;margin-bottom: 0 !important;font-size: 14px !important;font-weight: 400 !important;line-height: 1.2 !important;white-space: nowrap !important;border-radius: 4px !important;border-top-right-radius: 0 !important;border-bottom-right-radius: 0 !important;outline: none !important;" lang-key="SubmitSpider">' + this.lang["extension"]["SubmitSpider"] + '</button>' +
									//'<button id="__p1p_dropbutton" type="button" class="__p1p_button" style="-webkit-appearance:button !important;width:auto !important;min-width: 0 !important;height:30px !important;font-family:微软雅黑 Arial !important;margin-top: 5px !important;text-align:center !important;vertical-align:middle !important;touch-action:manipulation !important;cursor:pointer !important;user-select:none !important;padding: 6px 5px !important;border-image:initial !important;border-radius: 4px !important;color: rgb(255, 255, 255) !important;text-shadow: rgba(0, 0, 0, 0.247059) 0px -1px 0px !important;background-color: #000 !important;box-sizing:border-box !important;word-spacing: normal !important;text-transform: none !important;text-indent: 0px !important;font: 14px Arial !important;margin-left: -1px;float: left !important;position: relative;overflow: visible !important;border-top-left-radius: 0 !important;border-bottom-left-radius: 0 !important;outline: none !important;background-repeat: repeat-x;border-width: 1px;border-style: solid;border-color: gray;">' +
									//	'<span style="min-width: 0 !important;margin-left: 0 !important;display: inline-block !important;width: 0 !important;font-family:微软雅黑 Arial !important;height: 0 !important;vertical-align: middle !important;border-top: 5px dashed !important;border-right: 4px solid transparent !important;border-left: 4px solid transparent !important;box-sizing: border-box !important;"></span>' +
									//'</button>'+
									//'<ul id="__p1p_submit_dropmenu" style="overflow:visible !important;min-width: 0 !important;display:none;position: absolute !important;top: 100%!important;left: 0 !important;font-family:微软雅黑 Arial !important;z-index: 1000 !important;float: left !important;min-width: 160px !important;padding: 5px 0 !important;margin: 1px 0 0 !important;font-size: 14px !important;text-align: left !important;list-style: none !important;background-color: #fff !important;background-clip: padding-box !important;border: 1px solid rgba(0,0,0,.15) !important;border-radius: 4px !important;box-shadow: 0 6px 12px rgba(0,0,0,.175) !important;box-sizing: border-box !important;line-height: 1.2 !important;color: #333 !important;">' +
									//	'<li style="overflow:visible !important;"><a href="javascript:void(0)" style="min-width: 0 !important;display: block !important;padding: 3px 20px !important;clear: both !important;font-family:微软雅黑 Arial !important;font-weight: 400 !important;line-height: 1.42857143 !important;color: #333 !important;white-space: nowrap !important;text-decoration:none !important;"  lang-key="CreateAndRun">' + this.lang["extension"]["CreateAndRun"] + '</a></li>' +
									//'</ul>'+
								//'</div>'+
								'<div style="min-width: 0 !important;float:right !important;width:100px !important;margin:5px !important;"><select id="__pa1pa_lang_select" style="background: none !important;margin-top:3px !important;font-family:微软雅黑 Arial !important;width:70px !important;box-sizing:content-box !important;display: inline-block !important;height: 20px !important;margin-bottom: 5px !important;font: 14px Arial !important;line-height: 20px !important;color: rgb(85, 85, 85) !important;vertical-align: middle !important;background-color: rgb(255, 255, 255) !important;box-shadow: rgba(0, 0, 0, 0.0745098) 0px 1px 1px inset !important;padding: 2px 3px !important;border-radius:4px !important;border:1px solid rgb(204, 204, 204) !important;border-image: initial !important;transition:border 0.2s linear, box-shadow 0.2s linear !important;min-width:70px !important;-webkit-appearance:menulist !important;"></select></div>' +
                            '</div>' +
                            '<div id="__p1p_panel1" style="padding:5px 40px 0px 40px !important;display:none;">' +
                                '<div style="margin:20px !important;"><button class="__p1p_button" style="-webkit-appearance:button !important;width:auto !important;min-width: 0 !important;display:inline !important;margin: 5px !important;text-align: center !important;font-family:微软雅黑 Arial !important;vertical-align: middle !important;touch-action: manipulation !important;cursor: pointer !important;user-select: none !important;padding: 6px 12px !important;border: 1px solid gray !important;border-image: initial !important;border-radius: 4px !important;color: rgb(255, 255, 255) !important;text-shadow: rgba(0, 0, 0, 0.247059) 0px -1px 0px !important;background-color: #000 !important;box-sizing: border-box !important;word-spacing: normal !important;text-transform: none !important;text-indent: 0px !important;font: 30px Arial !important;height: 100px !important;width: 330px !important;" lang-key="SmartMode" type="button" exe_module="Spider.SmartMode">' + this.lang["extension"]["SmartMode"] + '</button></div>' +
                                '<div style="margin:20px !important;"><button class="__p1p_button" style="-webkit-appearance:button !important;width:auto !important;min-width: 0 !important;display:inline !important;margin: 5px !important;text-align: center !important;font-family:微软雅黑 Arial !important;vertical-align: middle !important;touch-action: manipulation !important;cursor: pointer !important;user-select: none !important;padding: 6px 12px !important;border: 1px solid gray !important;border-image: initial !important;border-radius: 4px !important;color: rgb(255, 255, 255) !important;text-shadow: rgba(0, 0, 0, 0.247059) 0px -1px 0px !important;background-color: #000 !important;box-sizing: border-box !important;word-spacing: normal !important;text-transform: none !important;text-indent: 0px !important;font: 30px Arial !important;height: 100px !important;width: 330px !important;" type="button" lang-key="AdvanceMode" exe_module="Spider.AdvanceMode">' + this.lang["extension"]["AdvanceMode"] + '</button></div>' +
                                '<div style="margin:20px !important;"><button style="-webkit-appearance:button !important;width:auto !important;min-width: 0 !important;width:330px !important;height:60px !important;font-size:30px !important;display: inline-block !important;font-family:微软雅黑 Arial !important;margin-bottom: 0px !important;text-align: center !important;vertical-align: middle !important;touch-action: manipulation !important;cursor: pointer !important;user-select: none !important;background-color: transparent !important;padding: 6px 12px !important;border: 1px solid transparent !important;border-image: initial !important;box-shadow: none !important;font-weight: normal !important;color: rgb(51, 122, 183) !important;border-radius: 4px !important;" lang-key="HelpButton" type="button" class="btn btn-link">' + this.lang["extension"]["HelpButton"] + '</button></div>' +
                            '</div>' +
                            '<div id="__p1p_panel2" style="display:none !important;">' +
                                //'<div style="padding:5px;"><ul id=\"ztree\" class=\"ztree\" ></ul></div>' +
                            '</div>' +
                        '</div>',
				offset: ["30px", "30px"],
				area: ["450px", (windowHeight * 0.8) + 'px'],
				cancel: function (index) {
					event.stopPropagation();
					if (that._confirmLayer > 0) {
						layer.close(that._confirmLayer);
					} 
					that._confirmLayer = layer.confirm(that.lang["extension"]["spidere_confirm_close"], {
						icon: 0,
						title: that.lang["extension"]["Information"],
						zIndex: 2147483615
					}, function (_index) {
						event.stopPropagation();
						if (that.instance) {
							that.instance.endAndShow();
						}
						layer.closeAll();
						that._confirmLayer = -1;
						layer.msg(that.lang["extension"]["extension_exit"], { zIndex: 2147483620, time: 3000, icon: 1 });
						connector.isRunning = false;
					}, function (_index) {
						event.stopPropagation();
						layer.close(_index);
						that._confirmLayer = -1;
					});
					return false;
				}
			});

			var maxBtn = $("#layuiex-layer" + this.layerId + " .layuiex-layer-max");
			maxBtn.hide();
			maxBtn.bind("click", function () {
				$(this).hide();
			});
			$("#layuiex-layer" + this.layerId + " .layuiex-layer-min").bind("click", function () {
				$(this).next().show();
			});


			//初始化语言选项和选择事件
			var selectRegion = that.lang["region"];
			var langData = [{en:"zh-CN",cn:"中文"},{en:"en-US",cn:"English"}];
			for (var p in langData) {
				var el = $('<option value="' + langData[p].en + '"">' + langData[p].cn + '</option>');
				//显示当前语言名称
				if (langData[p].en === selectRegion) {
					el.attr("selected", "selected");
				}
				$("#__pa1pa_lang_select").append(el);
			}

			$("#__p1p_submit_dropmenu >li >a").hover(function () {
				$(this).css("background-color", "#eee");
			}, function () {
				$(this).css("background-color", "");
			});

			$("#__p1p_dropbutton").bind("click", function () {
				var menu = $("#__p1p_submit_dropmenu");
				if (menu.is(":visible")) {
					menu.hide();
					$(this).css("background-image", "");
				}
				else {
					menu.show();
					$(this).css("background-image", "none");
				}
			});

			$("#__p1p_submit_dropmenu").mouseleave(function () {
				$("#__p1p_dropbutton").triggerHandler("click");
			});

			$("#__pa1pa_lang_select").bind("change", function () {
				//connector.invoke('getLanguage', $(this).val());
				that.changeLanguage(window.lang[$(this).val()])
			});

			function StartModule(moduleName) {
				if (spider.newInstance(moduleName)) {
					$("#__p1p_panel1").hide();
					$("#__p1p_panel2").show();
				}
			}

			//合并爬虫事件
			$("button[lang-key='CombineSpider']").bind("click", function () {
				if (that.instance.combineSpider()) {
					$(this).hide();
					$("button[lang-key='UndoCombineSpider']").show();
				}
			});

			//取消合并爬虫事件
			$("button[lang-key='UndoCombineSpider']").bind("click", function () {
				if (that.instance.undoCombineSpider()) {
					$(this).hide();
					$("button[lang-key='CombineSpider']").show();
				}
			});

			//测试爬虫事件
			$("button[lang-key='TestSpider']").bind("click", function () {
				that.instance.testSpider();
				$("#crawler_mode_select").focus();
			});

			//提交爬虫事件
			$("button[lang-key='SubmitSpider']").bind("click", function () {
				that.instance.submitSpider();
				$("#crawler_mode_select").focus();
			});

			//提交爬虫事件
			//$("a[lang-key='CreateAndRun']").bind("click", function () {
			//	that.instance.CreateAndRun();
			//	$("#crawler_mode_select").focus();
			//});

			StartModule("Spider.SmartMode");
		};
	}
});