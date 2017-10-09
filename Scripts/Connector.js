/*Promise.js*/
(function (exports) {
	function Promise() {
		this._callbacks = [];
	}

	Promise.prototype.then = function (func, context) {
		var p;
		if (this._isdone) {
			p = func.apply(context, this.result);
		} else {
			p = new Promise();
			this._callbacks.push(function () {
				var res = func.apply(context, arguments);
				if (res && typeof res.then === 'function')
					res.then(p.done, p);
			});
		}
		return p;
	};

	Promise.prototype.done = function () {
		this.result = arguments;
		this._isdone = true;
		for (var i = 0; i < this._callbacks.length; i++) {
			this._callbacks[i].apply(null, arguments);
		}
		this._callbacks = [];
	};

	function join(promises) {
		var p = new Promise();
		var results = [];

		if (!promises || !promises.length) {
			p.done(results);
			return p;
		}

		var numdone = 0;
		var total = promises.length;

		function notifier(i) {
			return function () {
				numdone += 1;
				results[i] = Array.prototype.slice.call(arguments);
				if (numdone === total) {
					p.done(results);
				}
			};
		}

		for (var i = 0; i < total; i++) {
			promises[i].then(notifier(i));
		}

		return p;
	}

	function chain(funcs, args) {
		var p = new Promise();
		if (funcs.length === 0) {
			p.done.apply(p, args);
		} else {
			funcs[0].apply(null, args).then(function () {
				funcs.splice(0, 1);
				chain(funcs, arguments).then(function () {
					p.done.apply(p, arguments);
				});
			});
		}
		return p;
	}

	/*
		* AJAX requests
		*/

	function _encode(data) {
		var payload = "";
		if (typeof data === "string") {
			payload = data;
		} else {
			var e = encodeURIComponent;
			var params = [];

			for (var k in data) {
				if (data.hasOwnProperty(k)) {
					params.push(e(k) + '=' + e(data[k]));
				}
			}
			payload = params.join('&')
		}
		return payload;
	}

	function new_xhr() {
		var xhr;
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		}
		return xhr;
	}


	function ajax(method, url, data, headers) {
		var p = new Promise();
		var xhr, payload;
		data = data || {};
		headers = headers || {};

		try {
			xhr = new_xhr();
		} catch (e) {
			p.done(promise.ENOXHR, "");
			return p;
		}

		payload = _encode(data);
		if (method === 'GET' && payload) {
			url += '?' + payload;
			payload = null;
		}

		xhr.open(method, url);

		var content_type = 'application/x-www-form-urlencoded';
		for (var h in headers) {
			if (headers.hasOwnProperty(h)) {
				if (h.toLowerCase() === 'content-type')
					content_type = headers[h];
				else
					xhr.setRequestHeader(h, headers[h]);
			}
		}
		xhr.setRequestHeader('Content-type', content_type);


		function onTimeout() {
			xhr.abort();
			p.done(promise.ETIMEOUT, "", xhr);
		}

		var timeout = promise.ajaxTimeout;
		if (timeout) {
			var tid = setTimeout(onTimeout, timeout);
		}

		xhr.onreadystatechange = function () {
			if (timeout) {
				clearTimeout(tid);
			}
			if (xhr.readyState === 4) {
				var err = (!xhr.status ||
					(xhr.status < 200 || xhr.status >= 300) &&
					xhr.status !== 304);
				p.done(err, xhr.responseText, xhr);
			}
		};

		xhr.send(payload);
		return p;
	}

	function _ajaxer(method) {
		return function (url, data, headers) {
			return ajax(method, url, data, headers);
		};
	}

	var promise = {
		Promise: Promise,
		join: join,
		chain: chain,
		ajax: ajax,
		get: _ajaxer('GET'),
		post: _ajaxer('POST'),
		put: _ajaxer('PUT'),
		del: _ajaxer('DELETE'),

		/* Error codes */
		ENOXHR: 1,
		ETIMEOUT: 2,

		/**
			* Configuration parameter: time in milliseconds after which a
			* pending AJAX request is considered unresponsive and is
			* aborted. Useful to deal with bad connectivity (e.g. on a
			* mobile network). A 0 value disables AJAX timeouts.
			*
			* Aborted requests resolve the promise with a ETIMEOUT error
			* code.
			*/
		ajaxTimeout: 0
	};

	if (typeof define === 'function' && define.amd) {
		/* AMD support */
		define(function () {
			return promise;
		});
	} else {
		exports.promise = promise;
	}
})(this);

function SpiderConnector() {
	var that = this;
	this.registedEvents = {};
	this.isRunning = false;

	function fireEvents(eventName, data, sendResponse) {
		if (!that.registedEvents.hasOwnProperty(eventName)) {
			if (eventName.substring(0, 6).toLowerCase() !== "spider_") {
				console.warn("command has no notifier, event name:" + eventName);
			}
			sendResponse("failed");
			return;
		}
		for (var a = 0; a < that.registedEvents[eventName].length; a++) {
			that.registedEvents[eventName][a](data, sendResponse);
		}
	}

	chrome.extension.onMessage.addListener(function (message, sender, sendResponse) {
		console.log("command received:" + message);
		var msg = JSON.parse(message);
		if (!msg || !msg.command) {
			console.warn("receive unkown command:" + message);
			return;
		}
		fireEvents(msg.command, msg.data, sendResponse);
	});

	this.invoke = function (command, data) {
		var p = new promise.Promise();
		chrome.runtime.sendMessage(JSON.stringify({ command: command, data: data }), function (response) {
			p.done(null, response);
		});
		return p;
	};

	this.registerEvent = function (obj, append) {
		var that = this;
		append = append || false;
		for (var a in obj) {
			if (obj.hasOwnProperty(a) && typeof obj[a] == 'function') {
				if (!that.registedEvents[a]) {
					that.registedEvents[a] = [];
				}
				else if (append === false) {
					that.registedEvents[a].length = 0;
				}
				that.registedEvents[a].push(obj[a]);
			}
		}
	};
}
console.log("Connector loaded.");
SpiderConnector.Connector = new SpiderConnector();
window.addEventListener("beforeunload", function (e) {
	if (SpiderConnector.Connector.isRunning) {
		var confirmationMessage = "Crawler is running, are you sure to exit?";
		(e || window.event).returnValue = confirmationMessage;//Gecko + IE
		return false;//Webkit, Safari, Chrome etc.
	}
});
//console.log("connector load complete!");

/*
if (typeof SpiderConnector == "undefined") {
	(function (exports) {
		function Promise() {
			this._callbacks = [];
		}

		Promise.prototype.then = function (func, context) {
			var p;
			if (this._isdone) {
				p = func.apply(context, this.result);
			} else {
				p = new Promise();
				this._callbacks.push(function () {
					var res = func.apply(context, arguments);
					if (res && typeof res.then === 'function')
						res.then(p.done, p);
				});
			}
			return p;
		};

		Promise.prototype.done = function () {
			this.result = arguments;
			this._isdone = true;
			for (var i = 0; i < this._callbacks.length; i++) {
				this._callbacks[i].apply(null, arguments);
			}
			this._callbacks = [];
		};

		function join(promises) {
			var p = new Promise();
			var results = [];

			if (!promises || !promises.length) {
				p.done(results);
				return p;
			}

			var numdone = 0;
			var total = promises.length;

			function notifier(i) {
				return function () {
					numdone += 1;
					results[i] = Array.prototype.slice.call(arguments);
					if (numdone === total) {
						p.done(results);
					}
				};
			}

			for (var i = 0; i < total; i++) {
				promises[i].then(notifier(i));
			}

			return p;
		}

		function chain(funcs, args) {
			var p = new Promise();
			if (funcs.length === 0) {
				p.done.apply(p, args);
			} else {
				funcs[0].apply(null, args).then(function () {
					funcs.splice(0, 1);
					chain(funcs, arguments).then(function () {
						p.done.apply(p, arguments);
					});
				});
			}
			return p;
		}

		function _encode(data) {
			var payload = "";
			if (typeof data === "string") {
				payload = data;
			} else {
				var e = encodeURIComponent;
				var params = [];

				for (var k in data) {
					if (data.hasOwnProperty(k)) {
						params.push(e(k) + '=' + e(data[k]));
					}
				}
				payload = params.join('&')
			}
			return payload;
		}

		function new_xhr() {
			var xhr;
			if (window.XMLHttpRequest) {
				xhr = new XMLHttpRequest();
			} else if (window.ActiveXObject) {
				try {
					xhr = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					xhr = new ActiveXObject("Microsoft.XMLHTTP");
				}
			}
			return xhr;
		}


		function ajax(method, url, data, headers) {
			var p = new Promise();
			var xhr, payload;
			data = data || {};
			headers = headers || {};

			try {
				xhr = new_xhr();
			} catch (e) {
				p.done(promise.ENOXHR, "");
				return p;
			}

			payload = _encode(data);
			if (method === 'GET' && payload) {
				url += '?' + payload;
				payload = null;
			}

			xhr.open(method, url);

			var content_type = 'application/x-www-form-urlencoded';
			for (var h in headers) {
				if (headers.hasOwnProperty(h)) {
					if (h.toLowerCase() === 'content-type')
						content_type = headers[h];
					else
						xhr.setRequestHeader(h, headers[h]);
				}
			}
			xhr.setRequestHeader('Content-type', content_type);


			function onTimeout() {
				xhr.abort();
				p.done(promise.ETIMEOUT, "", xhr);
			}

			var timeout = promise.ajaxTimeout;
			if (timeout) {
				var tid = setTimeout(onTimeout, timeout);
			}

			xhr.onreadystatechange = function () {
				if (timeout) {
					clearTimeout(tid);
				}
				if (xhr.readyState === 4) {
					var err = (!xhr.status ||
						(xhr.status < 200 || xhr.status >= 300) &&
						xhr.status !== 304);
					p.done(err, xhr.responseText, xhr);
				}
			};

			xhr.send(payload);
			return p;
		}

		function _ajaxer(method) {
			return function (url, data, headers) {
				return ajax(method, url, data, headers);
			};
		}

		var promise = {
			Promise: Promise,
			join: join,
			chain: chain,
			ajax: ajax,
			get: _ajaxer('GET'),
			post: _ajaxer('POST'),
			put: _ajaxer('PUT'),
			del: _ajaxer('DELETE'),

			
			ENOXHR: 1,
			ETIMEOUT: 2,

			
			ajaxTimeout: 0
		};

		if (typeof define === 'function' && define.amd) {
			
			define(function () {
				return promise;
			});
		} else {
			exports.promise = promise;
		}
	})(this);
	function ActionHelper() {
		var that = this;
		that.evaluator = new XPathEvaluator();
		that.actionFunctions = {
			scroll: function (act) {
				var p = new promise.Promise();
				var scrollPerPix = 200;
				var doc = null;
				var scrollHeight = 0, current = 0, scrollTimes = 0;

				if (act.selector) {
					var element = that.findElement(act);
					if (element) {
						doc = $(element);
						scrollHeight = element.scrollHeight - doc.height();
					}
				} else {
					doc = $(document);
					scrollHeight = doc.height() - $(window).height();
				}

				if (doc.length) {
					current = doc.scrollTop();
					scrollHeight -= current;
					scrollTimes = parseInt(scrollHeight / scrollPerPix, 10) + (scrollHeight % scrollPerPix == 0 ? 0 : 1);
					scrollInner();
				} else {
					p.done();
				}

				function scrollInner() {
					var actDelay = 100;
					current += scrollPerPix;
					doc.scrollTop(current);

					if (--scrollTimes > 0) {
						that.wait(actDelay).then(function () {
							scrollInner();
						});
					} else {
						that.wait(act.delay).then(function () {
							p.done();
						});
					}
				}

				return p;
			},
			click: function (act) {
				var delay = act.delay;
				if (!that.disposing) {
					var element = that.findElement(act);
					if (!element) {
						act._missClick = true;
					}
					else {
						var currEl = $(element);
						if (!currEl.hasClass("disabled") && !currEl.attr("disabled")) {
							element.click();
							act._missClick = false;
						} else {
							act._missClick = true;
						}
					}
				} else {
					delay = 1;
				}

				return that.wait(delay);
			}
		};
		that.actionValidators = {
			scroll: function (_act) {
				var doc = _act.selector ? _act._element : document.body;
				if (doc.scrollHeight != _act.lastHeight) {
					_act.lastHeight = doc.scrollHeight;
					_act._missCount = 0;
				}
				else if (++_act._missCount >= 3) {
					_act.repeat = 0;
				}
			},
			click: function (_act) {
				if (_act._missClick) {
					_act.repeat = 0;
				}
			}
		};
		that.doAction = function (act) {
			var p = new promise.Promise();
			var doc = document;
			var isAuto = act.repeat == 0;
			var delay = act.delay <= 0 ? 800 : (act.delay < 100 ? act.delay * 1000 : act.delay);
			var lastHeight = 0;
			var lastWidth = 0
			this.clicklastElement = true;

			var _actTemp = {
				name: act.name,
				repeat: isNaN(act.repeat) ? 1 : act.repeat,
				delay: delay,
				selector: act.selector
			};

			if (that.actionFunctions[_actTemp.name]) {
				actionLoop(_actTemp);
			} else {
				p.done();
			}

			function actionLoop(_act) {
				that.actionFunctions[_act.name](_act).then(function () {
					_act.repeat--;
					that.actionValidators[_act.name](_act);

					if (_act.repeat <= 0) {
						if (_act._element) delete _act._element;
						p.done();
					}
					else {
						actionLoop(_act);
					}
				});
			}

			return p;
		}
		that.findElement = function (act) {
			var element = act._element;
			if (!element || !$.contains(document.body, element)) {
				var te = that.getElements(act.selector);
				if (te.length > 0) {
					element = te[0];
					act._element = element;
				} else {
					element = null;
				}
			}

			if (!element) {
				act._missClick = true;
			} else {
				var currEl = $(element);
				var offset = currEl.offset();
				window.scroll(offset.left, offset.top);
			}
			return element;
		}
		that.execteScript = function (actions) {
			var p = new promise.Promise();
			var functions = [];
			for (var _x = 0; _x < actions.length; _x++) {
				var actionItem = actions[_x];
				functions.push(function (act) {
					var _act = act;
					return function () {
						return that.doAction(_act);
					}
				}(actionItem));
			}

			if (functions.length > 0) {
				promise.chain(functions).then(function () {
					p.done(null, true);
				});
			}
			else p.done(null, true);
			return p;
		}
		that.getElements = function (xpath) {
			var arr = [];
			try {
				var elements = that.evaluator.evaluate(xpath, document.documentElement, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

				if (elements) {
					var el;
					while (el = elements.iterateNext()) {
						arr.push(el);
					}
				}
			}
			catch (e) {
				console.error(e);
				console.warn("xpath:" + xpath + ",get no elements!");
			}
			return arr;
		}
        that.wait = function (time) {
            if (that.disposing) return;
            time = time || 50;
            var p = new promise.Promise();
            setTimeout(function () {
                p.done();
            }, time);
            return p;
        };
	}
}
console.log("inject action adapter");
*/