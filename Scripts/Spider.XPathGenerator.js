define("Spider.Error", function (require, exports, module) {
	function CustomError(message, code) {
		this.name = 'CustomError';
		this.code = code;
		this.message = '<a href="http://www.ezcrawler.cn/' + this.code + '" target="_blank">' + code +": " + message + '</a>';
		this.stack = (new Error()).stack;
	}
	CustomError.prototype = Object.create(Error.prototype);
	CustomError.prototype.constructor = CustomError;
	module.exports = CustomError;
});

define("Spider.XPathGenerator", function (require, exports, module) {
	var $ = require("jquery");

	$.fn.getQuery = function (options) {
		o = $.extend({
			type: 'xpath',    //生成类型  'xpath' or 'selector'
			highLight: false, //选择的元素是否高亮显示
			fullPath: true, //是否是全路径
			preferenceAttr: 'class', //属性偏好 'id' or 'class'
			bgColor: 'yellow',        //背景色
			border: 'yellow 1px solid',//边框
			expansion: 3//扩大边框
		}, options || {});
		if (o.highLight) {
			this.highLight(o);
		}

		var path = getPath(this, o.relativeNode, '');
		selector = path.replaceAll('/', '>').replaceAll('\\[', ':eq(').replaceAll('\\]', ')').replaceAll('\\:eq\\(\\@', '[').replaceAll('\'\\)', '\']');
		query = '//' + path;
		if (query[query.length - 1] !== ']') {
			query += "[1]";
		}

		if (o.type == 'selector') {
			return selector;
		} else {
			return query;
		}
	}

	this.getXpath = function () {
		return query;
	}

	this.getSelector = function () {
		return selector;
	}

	$.fn.highLight = function (options) {
		op = $.extend({
			bgColor: 'yellow',        //背景色
			border: 'yellow 1px solid',//边框
			expansion: 3,//扩大边框
		}, options || {});
		$('body').append("<div id='abs-box' class='abs'> </div>");
		$('head').append("<style>.abs{position:absolute;zoom:1;pointer-events:none;z-index:-1;}</style>");
		var div = $('#abs-box');
		if (div != this) {
			var pos = this.offset(), em = op.expansion;
			div.css({ 'left': pos.left - em, 'top': pos.top - em, 'width': this.width() + 2 * em, 'height': this.height() + 2 * em });
			div.css({ 'background-color': op.bgColor, 'border': op.border });
		}
	}

	function getPath(e, t, path) {
		t = t&&t.get ? t : $(t);
		var tn = e.get(0).tagName;
		if (isNullOrEmpty(e) || isNullOrEmpty(tn)) {
			return path;
		}
		var attr = getAttr(e);
		tn = tn.toLowerCase() + attr;
		path = isNullOrEmpty(path) ? tn : tn + "/" + path;

		var parentE = e.parent();
		if (isNullOrEmpty(parentE) || (!o.fullPath && attr.substring(0, 5) == '[@id=')) {
			return path;
		}

		if (o.fullPath) {
			return getPath(parentE, t, path);
		}

		var curr = e.get(0);
		if (t != null && t != undefined && $.contains(t.get(0), curr)) {
			return getPath(parentE, t, path);
		} else {
			//[1]无法定位
			var c = attr.substring(attr.length - 2, attr.length - 1);
			if (c != "'" && c != '"') {
				return getPath(parentE, t, path);
			} else {
				var test = document.evaluate('//' + tn, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
				if (test.snapshotLength == 1) {
					return path;
				}
				else {
					return getPath(parentE, t, path);
				}
			}
		}
	}

	function getAttr(e) {
		var tn = e.get(0).tagName;
		if (tn == "HTML" || tn == "BODY") return "";
		if (o.preferenceAttr == 'class') {
			var clazz = e.attr('class');
			hasClazz = !isNullOrEmpty(clazz);
			if (hasClazz && !/\d+/.test(clazz)) return "[@class='" + clazz + "']";
		} else if (o.preferenceAttr == 'id') {
			var id = e.attr('id');
			var hasId = !isNullOrEmpty(id);
			if (hasId) return "[@id='" + id + "']";
		}

		if (e.siblings(tn).size() > 0) {
			var i = e.prevAll(tn).size();
			if (o.type == 'xpath') {
				i++;
			}
			return '[' + i + ']';
		}
		
		return '';
	}

	String.prototype.replaceAll = function (regx, t) {
		return this.replace(new RegExp(regx, 'gm'), t);
	};

	function isNullOrEmpty(o) {
		return null == o || 'null' == o || '' == o || undefined == o;
	}

	function XPathGenerator() {
		this.getPath = function (options) {
			try {
				return $(options.relativeNode).getQuery(options);
			} catch (e) {
				options.preferenceAttr = "id";
				options.fullPath = false;
				try {
					return $(options.relativeNode).getQuery(options);
				} catch (e) {
					options.preferenceAttr = "class";
					return $(options.relativeNode).getQuery(options);
				}
			}
		}
	};

	module.exports = XPathGenerator;
});