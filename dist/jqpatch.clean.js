if (!window) var window = {};

!function(native) {
    return "undefined" != typeof module && module.exports ? void (module.exports = native()) : native();
}(function() {
    return window;
}), window.__nconfig = {}, function() {
    var isDefined = function($object) {
        return "undefined" != typeof $object ? !0 : !1;
    };
    window.isDefined = function($object) {
        return isDefined($object);
    };
    var isString = function($object) {
        return "string" == typeof $object ? !0 : !1;
    };
    window.isString = function($object) {
        return isString($object);
    };
    var isObject = function($object) {
        return null === $object || "object" != typeof $object || $object.length ? !1 : !0;
    };
    window.isObject = function($object) {
        return isObject($object);
    };
    var isArray = function($object) {
        return "object" == typeof $object && (Array.isArray($object) || "length" in $object) ? !0 : !1;
    };
    window.isArray = function($object) {
        return isArray($object);
    };
    var isFunction = function($object) {
        return "function" == typeof $object ? !0 : !1;
    };
    window.isFunction = function($object) {
        return isFunction($object);
    };
    var isNumber = function($object) {
        return "number" == typeof $object ? !0 : !1;
    };
    window.isNumber = function($object) {
        return isNumber($object);
    };
    var isBoolean = function($object) {
        return "boolean" == typeof $object ? !0 : !1;
    };
    window.isBoolean = function($object) {
        return isBoolean($object);
    };
    var isJQuery = function($object) {
        return "object" == typeof $object && $object.hasOwnProperty("length") && $object.jquery ? !0 : !1;
    };
    window.isJQuery = function($object) {
        return isJQuery($object);
    };
    var isHTML = function($object) {
        return "object" == typeof $object && $object.ELEMENT_NODE ? !0 : !1;
    };
    window.isHTML = function($object) {
        return isHTML($object);
    };
    var isDOMList = function($object) {
        return "object" == typeof $object && $object.name && "DOMList" === $object.name ? !0 : !1;
    };
    window.isDOMList = function($object) {
        return isDOMList($object);
    };
    var isHTMLString = function($object) {
        return "undefined" != typeof $object && $object.match(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/) ? !0 : !1;
    };
    window.isHTMLString = function($object) {
        return isHTMLString($object);
    };
    var isColor = function($object) {
        return /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/.test($object) ? !0 : !1;
    };
    window.isColor = function($object) {
        return isColor($object);
    };
    var isURL = function($object) {
        return /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i.test($object) ? !0 : !1;
    };
    window.isURL = function($object) {
        return isURL($object);
    };
    var isEmail = function($object) {
        return /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i.test($object) ? !0 : !1;
    };
    window.isEmail = function($object) {
        return isEmail($object);
    };
    var isDate = function($object) {
        return isNaN(new Date($object).getDate()) ? !1 : !0;
    };
    window.isDate = function($object) {
        return isDate($object);
    };
}(), function() {
    var foreach = function(object, handler, thisArg) {
        if (window.isFunction(handler)) if (window.isArray(object) && window.isFunction(handler)) for (var i = 0; i < object.length; ++i) handler.call(thisArg, object[i], i); else if (window.isObject(object) && window.isFunction(handler)) for (var key in object) object.hasOwnProperty(key) && handler.call(thisArg, key, object[key]); else if (window.isNumber(object) && window.isFunction(handler)) for (var i = 1; object >= i; ++i) handler.call(thisArg, i); else if (window.isString(object) && window.isFunction(handler)) for (var i = 0; i < object.length; ++i) handler.call(thisArg, object.charAt(i), i + 1); else {
            if (!window.isDOMList(object) || !window.isFunction(handler)) return console.warn("Euw! We can't iterate your object. So sorry!");
            for (var i = 0; i < object.length; ++i) handler.call(thisArg, object[i], i);
        } else console.warn("Euw! Don't forget to give us a function to call!");
        return object;
    }, reveach = function($object, $handler, $args) {
        if (window.isFunction($handler)) if (window.isArray($object)) for (var i = $object.length - 1; i >= 0; --i) $handler.call($args, $object[i], i); else if (window.isObject($object)) for (var keys = Object.keys($object), i = keys.length - 1; i >= 0; --i) $handler.call($args, keys[i], $object[keys[i]]); else if (window.isNumber($object)) for (var i = $object; i >= 1; --i) $handler.call($args, i); else if (window.isString($object)) for (var i = $object.length - 1; i >= 0; --i) $handler.call($args, $object.charAt(i), i); else {
            if (!window.isDOMList($object)) return console.warn("Euw! We can't iterate your object. So sorry!");
            for (var i = $object.length - 1; i >= 0; --i) $handler.call($args, $object[i], i);
        } else console.warn("Euw! Don't forget to give us a function to call!");
        return $object;
    };
    window.foreach = function($object, $handlder, $args) {
        return foreach($object, $handlder, $args);
    }, window.reveach = function($object, $handlder, $args) {
        return reveach($object, $handlder, $args);
    };
}(), window.__variables = {}, window.__constants = {}, window.__functions = {}, 
function() {
    var vars = function(name, value) {
        return window.isString(name) ? window.isDefined(value) ? (window.__variables[name] = value, 
        value) : window.__variables.hasOwnProperty(name) ? window.__variables[name] : void 0 : console.warn("Argument @name is required!");
    };
    window.vars = function($name, $value) {
        return new vars($name, $value);
    };
    var cons = function(name, value) {
        return window.isString(name) ? window.isDefined(value) ? window.__constants.hasOwnProperty(name) ? console.warn('Constant "' + name + '" already defined!') : (window.__constants[name] = value, 
        value) : window.__constants.hasOwnProperty(name) ? window.__constants[name] : console.warn('Constant "' + name + '" is undefined!') : console.warn("Argument @name is required!");
    };
    window.cons = function($name, $value) {
        return new cons($name, $value);
    };
    var func = function(name, handler) {
        return window.isString(name) ? window.isFunction(handler) ? window.__functions.hasOwnProperty(name) ? void console.warn('Function "' + name + '" already defined!') : (window.__functions[name] = handler, 
        handler) : window.__functions.hasOwnProperty(name) ? window.__functions[name] : console.warn('Function "' + name + '" is undefined!') : console.warn("Argument @name is required!");
    };
    window.func = function($name, $handler) {
        return new func($name, $handler);
    };
}(), function($root) {
    Array.isArray || (Array.prototype.isArray = function() {
        return "[object Array]" === Object.prototype.toString.call(this);
    }), Array.indexOf || (Array.prototype.indexOf = function(searchElement, fromIndex) {
        var k;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var O = Object(this), len = O.length >>> 0;
        if (0 === len) return -1;
        var n = +fromIndex || 0;
        if (1/0 === Math.abs(n) && (n = 0), n >= len) return -1;
        for (k = Math.max(n >= 0 ? n : len - Math.abs(n), 0); len > k; ) {
            if (k in O && O[k] === searchElement) return k;
            k++;
        }
        return -1;
    }), Object.keys || (Object.prototype.keys = function() {
        var arr = [];
        for (var key in this) this.hasOwnProperty(key) && arr.push(key);
        return arr;
    }), Object.prototype.merge = function() {
        for (var nobj = {}, c = 0; c < arguments.length; ++c) isObject(arguments[c]) && foreach(arguments[c], function(key, value) {
            nobj[key] = value;
        });
        return nobj;
    }, Object.defineProperty(Object.prototype, "merge", {
        enumerable: !1
    });
    var CustomEvent = function(eventName, options) {
        var event;
        return isString(eventName) && (options = options || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        }, event = document.createEvent("CustomEvent"), event.initCustomEvent(eventName, options.bubbles, options.cancelable, options.detail)), 
        event;
    };
    CustomEvent.prototype = $root.Event.prototype, $root.CustomEvent && isFunction($root.CustomEvent) || ($root.CustomEvent = CustomEvent);
}(window), function($) {
    "use strict";
    if ($) {
        var $plg = $.fn, $dom = $;
        $.module = $.fn, $plg._css = $plg.css, $plg.attr = function(name, value, nodata) {
            var $this = this;
            if (!(this.length <= 0)) {
                if (isString(name)) {
                    if (isDefined(value)) return (isObject(value) || isArray(value)) && (value = JSON.stringify(value)), 
                    $this.each(function() {
                        this.setAttribute(name, value), name in this && "text" != name && "comment" != name && "attribute" != name && (this[name] = value);
                    }), this;
                    var result = $this[0].getAttribute(name), parsed;
                    if (!nodata) {
                        try {
                            parsed = JSON.parse(result);
                        } catch (err) {
                            try {
                                eval("parsed = {" + result + "}");
                            } catch (err) {
                                try {
                                    eval("parsed = [" + result.replace(";", ",") + "]");
                                } catch (err) {}
                            }
                        }
                        if (parsed) return parsed;
                        if ("true" === result) return !0;
                        if ("false" === result) return !1;
                        if ("undefined" === result) return void 0;
                        if ("null" === result) return null;
                        if ("NaN" === result) return 0/0;
                        if (Number(result)) return Number(result);
                    }
                    return result;
                }
                if (isObject(name)) foreach(name, function(key, value) {
                    $this.attr(key, value);
                }); else {
                    if (!isArray(name)) {
                        var attributes = $this[0].attributes, result = {};
                        return foreach(attributes, function(attr) {
                            result[attr.name] = $this.attr(attr.name);
                        }), result;
                    }
                    foreach(name, function(key) {
                        $this.attr(key, "");
                    });
                }
                return $this;
            }
        }, $plg.removeAttr = function(name) {
            return isString(name) ? name.match(/\s+/) ? (name = name.split(/\s+/), this.each(function() {
                var self = this;
                foreach(name, function(name) {
                    self.removeAttribute(name);
                });
            })) : this.each(function() {
                this.removeAttribute(name);
            }) : isArray(name) && this.each(function() {
                var self = this;
                foreach(name, function(name) {
                    self.removeAttribute(name);
                });
            }), this;
        }, $plg.remAttr = $plg.removeAttr, $plg.data = function(name, value) {
            var $this = this;
            if ($this.length <= 0, !isString(name)) {
                var atrs = $this.attr(), data = {};
                return foreach(atrs, function(attr) {
                    attr.match(/data-/) && (data[attr.replace("data-", "")] = $this.attr(attr));
                }), data;
            }
            if (name.match(/\s+/)) {
                if (name = name.split(/\s+/), !isDefined(value)) {
                    var data = {};
                    return foreach(name, function(attr) {
                        data[attr] = $this.attr("data-" + attr);
                    }), data;
                }
                foreach(name, function(attr, i) {
                    isString(value) ? $this.attr("data-" + attr, value) : isArray(value) && $this.attr("data-" + attr, value[i]);
                });
            } else {
                if (!isDefined(value)) return $this.first().attr("data-" + name);
                $this.attr("data-" + name, value);
            }
            return $this;
        }, $plg.prop = function(name, value) {
            var $this = this;
            if (isString(name)) if (name.match(/\s+/)) name = name.split(/\s+/), foreach(name, function(prop) {
                $this.prop(prop, value);
            }); else {
                if (!value) return $this[0][name] || void 0;
                $this.each(function() {
                    "text" != name && "comment" != name && "attribute" != name && (this[name] = value, 
                    $(this).hasAttr(name) && $(this).attr(name, value));
                });
            } else {
                if (!isObject(name)) return void 0;
                foreach(name, function(prop, value) {
                    $this.prop(prop, value);
                });
            }
            return this;
        }, $plg.indexOf = function(elem) {
            return isHTML(elem) ? this.toArray().indexOf(elem) : isString(elem) ? this.toArray().indexOf(this.filter(elem).get()) : -1;
        };
    }
}(window.jQuery || !1), function($) {
    "use strict";
    if ($) {
        var $plg = $.fn;
        $.module = $.fn, $plg._remclass = $plg.removeClass, $plg.removeClass = function(name) {
            var $this = this;
            return isString(name) ? name.match(/\s+/) ? (name = name.split(/\s+/), foreach(name, function(attr) {
                $this._remclass(attr);
            })) : $this._remclass(name) : isArray(name) && foreach(name, function(attr) {
                $this._remclass(attr);
            }), this;
        }, $plg.remClass = $plg.removeClass;
        var propList = {
            "default": [],
            publics: [],
            customs: [],
            origins: [],
            browser: ""
        }, style = document.createElement("span").style, lists = [];
        for (var key in style) lists.push(key);
        lists.indexOf("webkitUserSelect") > -1 ? propList.browser = "webkit" : lists.indexOf("MozUserSelect") > -1 ? propList.browser = "Moz" : lists.indexOf("msUserSelect") > -1 && (propList.browser = "ms"), 
        foreach(lists, function(prop) {
            prop.search(propList.browser) > -1 ? (propList.origins.push(prop), propList.customs.push(prop.replace(propList.browser, "").toLowerCase())) : (propList["default"].push(prop.toLowerCase()), 
            propList.publics.push(prop));
        }), $plg.css = function(prop, value) {
            var $this = this;
            if (isString(prop)) {
                prop.search("-") && (prop = prop.replace(/\-/g, "")), prop = prop.toLowerCase();
                var propIndex = propList.customs.indexOf(prop);
                if (propIndex > -1) prop = propList.origins[propIndex]; else {
                    if (propIndex = propList["default"].indexOf(prop), !(propIndex > -1)) throw prop + " is not valid CSS Property!";
                    prop = propList.publics[propIndex];
                }
                return value ? this._css(prop, value) : this.length > 0 ? this.get(0).style[prop] : void 0;
            }
            if (!isObject(prop)) {
                if (isArray(prop)) {
                    var proplist = {};
                    return foreach(prop, function(key) {
                        proplist[key] = $this.css(key);
                    }), proplist;
                }
                var style = this.first().prop("style"), props = {};
                for (var property in style) isNaN(Number(property)) && "length" !== property && "cssText" !== property && "" !== style[property] && !isFunction(style[property]) && null !== style[property] && (props[property] = style[property]);
                return props;
            }
            return foreach(prop, function(key, value) {
                $this.css(key, value);
            }), this;
        };
    }
}(window.jQuery || !1), function($) {
    "use strict";
    if ($) {
        var $plg = $.fn, $dom = $;
        $.module = $.fn, $plg.push = function(elem) {
            var $this = this;
            return isHTML(elem) ? ($this[$this.length] = elem, $this.length++) : isJQuery(elem) || isArray(elem) ? foreach(elem, function(elem) {
                $this[$this.length] = elem, $this.length++;
            }) : isString(elem) && $this.push($(elem)), this;
        }, $plg.firstChild = function() {
            if (this.length <= 0) return this;
            var first = this[0], child = first.children;
            return child.length > 0 ? $(child[0]) : $();
        }, $plg.lastChild = function() {
            if (this.length <= 0) return this;
            var first = this[0], child = first.children;
            return child.length > 0 ? $(child[child.length - 1]) : $();
        }, $plg.nth = function(i) {
            return isNumber(i) && this.hasOwnProperty(i) ? $(this[i]) : $();
        }, $plg.nthChild = function(i) {
            if (this.length <= 0) return this;
            var fisrt = this[0], child = fisrt.children;
            return child.length > 0 && child.hasOwnProperty(i) ? $(child[i]) : $();
        }, $plg.removeData = function(name) {
            var $this = this;
            return isString(name) && (name.match(/\s+/) ? (name = name.split(/\s+/), foreach(name, function(attr) {
                $this.removeAttr("data-" + attr);
            })) : $this.removeAttr("data-" + name)), $this;
        }, $plg.remData = $plg.removeData, $plg.sortBy = function(attr, options) {
            var $this = this, option = {
                type: "string",
                direction: "ascending"
            };
            if (isObject(options) && foreach(options, function(key, value) {
                option[key] = value;
            }), isString(attr)) {
                var list = [];
                $this.each(function(i) {
                    var val = this.getAttribute(attr);
                    list.push(isString(val) ? val + "<>" + i : "zabc<>" + i);
                }), list = "number" === option.type ? list.sort(function(a, b) {
                    var ap = Number(a.split("<>")[0]), bp = Number(b.split("<>")[0]);
                    return ap || (ap = 999999999999999), bp || (bp = 999999999999999), ap > bp ? 1 : -1;
                }) : list.sort(), "descending" === option.direction && (list = list.reverse());
                var newlist = $dom();
                return newlist.length = list.length, foreach(list, function(s, i) {
                    s = s.split("<>")[1], newlist[i] = $this[s];
                }), newlist;
            }
            return this;
        }, $plg.removeProp = function(prop) {
            return isString(prop) ? this.each(function() {
                this[prop] && (delete this[prop], this.hasAttribute(prop) && this.removeAttribute(prop));
            }) : isArray(prop) && foreach(prop, function(prop) {
                this.remProp(prop);
            }), this;
        }, $plg.remProp = $plg.removeProp, $plg.rangeFrom = function(start, total) {
            if (isNumber(start) && isNumber(total)) {
                var ndom = $dom();
                return this.each(function(i) {
                    i >= start && total >= 0 && (ndom.push(this), total--);
                }), ndom;
            }
        }, $plg.rangeWithin = function(start, finish) {
            if (isNumber(start) && isNumber(finish)) {
                var ndom = $dom();
                return this.each(function(i) {
                    i >= start && finish >= i && ndom.push(this);
                }), ndom;
            }
        }, $plg.groupChilds = function(count, classname) {
            var $this = this;
            if (isNumber(count)) {
                var childs = this.children(), rowlen = Math.round(childs.length / count);
                foreach(count, function(row) {
                    var chrow = $("<div>").addClass(classname || "col-group"), start = (row - 1) * rowlen, total = rowlen;
                    childs.each(function(i) {
                        i >= start && total >= 0 && (chrow.append(this), total--);
                    }), chrow.appendTo($this);
                });
            }
            return this;
        }, $plg.groupBy = function(attribute, classname) {
            var $this = this;
            if (isString(attribute)) {
                var groups = [], ndom = $dom();
                this.each(function() {
                    var atr = this.getAttribute(attribute);
                    atr && "" !== atr ? groups.indexOf(atr) < 0 && groups.push(atr) : (this.setAttribute(attribute, "unknown"), 
                    groups.indexOf("unknown") < 0 && groups.push("unknown"));
                }), foreach(groups, function(groupid) {
                    $('<div class="' + (classname || groupid) + '" groupid="' + groupid + '">').append($this.filter("[" + attribute + "=" + groupid + "]")).appendTo(ndom);
                });
            }
        };
    }
}(window.jQuery || !1), function($) {
    "use strict";
    if ($) {
        var $plg = $.fn;
        $plg.hasAttr = function(name) {
            var has = !1, hasfalse = !1, atrs = Object.keys(this.attr());
            if (isString(name)) {
                if (name.match(/\s+/)) return name = name.split(/\s+/), foreach(name, function(key) {
                    atrs.indexOf(key) > -1 ? has = !0 : hasfalse = !0;
                }), has === !0 && hasfalse === !1 ? !0 : !1;
                atrs.indexOf(name) > -1 && (has = !0);
            } else isArray(name) && foreach(name, function(key) {
                atrs.indexOf(key) > -1 && (has = !0);
            });
            return has;
        }, $plg.hasData = function(name) {
            if (isString(name)) if (name.match(/\s+/)) {
                var ns = name.split(/\s+/);
                foreach(ns, function(value) {
                    name = name.replace(value, "data-" + value);
                });
            } else name = "data-" + name; else isArray(name) && foreach(name, function(value, i) {
                name[i] = "data-" + value;
            });
            return this.hasAttr(name);
        };
    }
}(window.jQuery || !1), function($) {
    "use strict";
    if ($) {
        var $plg = $.fn, countRatio = function(width, height) {
            var getDivisor, temp, divisor;
            return getDivisor = function(a, b) {
                return 0 === b ? a : getDivisor(b, a % b);
            }, width === height ? "1:1" : (+height > +width && (temp = width, width = height, 
            height = temp), divisor = getDivisor(+width, +height), "undefined" == typeof temp ? width / divisor + ":" + height / divisor : height / divisor + ":" + width / divisor);
        };
        $plg.ratio = function(value, reverse) {
            return this.length <= 0 ? this : isString(value) && value.match(/^\d+:\d+$/) ? (this.each(function() {
                this.ratio = value;
                var part = this.ratio.split(":");
                if (reverse) {
                    var width = Math.round($(this).height() / part[1] * part[0]);
                    $(this).width(width);
                } else {
                    var height = Math.round($(this).width() / part[0] * part[1]);
                    $(this).height(height);
                }
            }), this) : this.get(0).ratio ? this.get(0).ratio : this.get(0).ratio = countRatio(this.width(), this.height());
        }, $plg.offset = function() {
            return this.length <= 0 ? this : {
                width: this.width(),
                height: this.height(),
                left: this.get(0).offsetLeft,
                top: this.get(0).offsetTop,
                scrollTop: this.get(0).scrollTop,
                scrollLeft: this.get(0).scrollLeft,
                ratio: this.first().ratio()
            };
        }, $plg.orientation = function() {
            return this.length <= 0 ? this : (this.each(function() {
                var offset = $(this).offset();
                offset.width > offset.height ? ($(this).attr("landscape", ""), this.orientation = "landscape") : ($(this).attr("portrait", ""), 
                this.orientation = "portrait");
            }), this.first().prop("orientation"));
        }, $plg.cstyle = function(name) {
            if (this.length > 0 && isString(name)) return getComputedStyle(this.get(0))[name] ? getComputedStyle(this.get(0))[name] : null;
            if (this.length > 0 && isArray(name)) {
                var props = {}, $this = this;
                return foreach(name, function(name) {
                    getComputedStyle($this.get(0))[name] && (props[name] = getComputedStyle($this.get(0))[name]);
                }), props;
            }
            return null;
        };
    }
}(window.jQuery || !1), function($) {
    var $plg = $.fn || $.module, defCount = 0;
    document.addEventListener("readystatechange", function() {
        "interactive" == document.readyState && $("[switch]").initSwitch();
    }), $plg.initSwitch = function() {
        return this.each(function() {
            var id = $(this).attr("swid") || $(this).attr("swid", "switch-#" + (defCount + 1)).attr("swid");
            $(this).attr("preinit", !0), $("[switch-item]", this).attr("switch-item", id), $("[switch-next]", this).attr("switch-next", id), 
            $("[switch-prev]", this).attr("switch-prev", id), $("[switch-select]", this).attr("switch-select", id), 
            $("[switch-hide]", this).attr("switch-hide", id), $("[switch-progress]", this).attr("switch-progress", id);
        }), this.each(function() {
            var slider = new Switch(this);
            this.switcher = slider;
        }), this;
    }, $plg.nextSwitch = function() {
        return this.each(function() {
            this.hasOwnProperty("slider") && this.switcher.next();
        });
    }, $plg.prevSwitch = function() {
        return this.each(function() {
            this.hasOwnProperty("slider") && this.switcher.prev();
        });
    }, $plg.goSwitch = function(idx) {
        return this.each(function() {
            this.hasOwnProperty("slider") && this.switcher.select(idx);
        });
    }, $plg.pauseSwitch = function() {
        return this.each(function() {
            $(".progress", this).pause();
        });
    }, $plg.resumeSwitch = function() {
        return this.each(function() {
            $(".progress", this).resume();
        });
    };
    var Switch = function($object) {
        if (isHTML($object)) {
            var $holder = $($object), $this = this, defCf = {
                auto: !1,
                hoverPause: !1,
                "default": 1,
                duration: 1,
                hover: !1,
                ease: Power3.easeInOut || "Linear",
                effect: "default"
            };
            if (this.ID = $holder.attr("swid") || "switch" + (defCount + 1), defCount++, this.preInit = $holder.attr("preinit") ? !0 : !1, 
            this.current = 0, this.init = !0, this.holder = $object, this.options = $holder.attr("switch"), 
            this.options = this.options ? Object.merge(defCf, this.options) : defCf, (!this.options.duration || this.options.duration <= 0) && (this.options.duration = 1), 
            this.options.hoverPause && $(this.holder).hover(function(e) {
                "enter" === e.status ? $(".progress", this).pause() : "leave" === e.status && $(".progress", this).resume();
            }), this.preInit) {
                var vqr = '="' + this.ID + '"';
                $holder.remAttr("preinit");
            } else var vqr = "";
            if (this.items = $("[switch-item" + vqr + "]", this.holder), this.nextBtn = $("[switch-next" + vqr + "]", this.holder).click(function(e) {
                e.preventDefault(), $this.next();
            }), this.prevBtn = $("[switch-prev" + vqr + "]", this.holder).click(function(e) {
                e.preventDefault(), $this.prev();
            }), this.selectBtns = $("[switch-select" + vqr + "]", this.holder).click(function(e) {
                e.preventDefault();
                var idx = $this.selectBtns.indexOf(this);
                $this.select(idx);
            }), this.options.hover) {
                var hvTime = setTimeout(function() {});
                this.selectBtns.mouseenter(function(e) {
                    e.preventDefault();
                    var self = this;
                    clearTimeout(hvTime), hvTime = setTimeout(function() {
                        self.click();
                    }, 200);
                }).mouseleave(function() {
                    clearTimeout(hvTime);
                });
            }
            return this.closer = $("[switch-hide" + vqr + "]", this.holder).click(function(e) {
                e.preventDefault(), $this.hide();
            }), this.progress = $("[switch-progress" + vqr + "]", this.holder), this.options.auto && this.progress.length <= 0 && (this.progress = $('<div class="progress">').attr("switch-progress", this.ID).prependTo(this.holder)), 
            isNumber(this.options["default"]) ? this.items.each(function(i) {
                i + 1 === $this.options["default"] ? $this.select(i) : $(this).addClass("inactive");
            }) : (this.init = !1, this.items.addClass("inactive").attr("switch-item", "inactive")), 
            this.options.auto && $.loaded(function() {
                $this.start();
            }), this;
        }
    };
    Switch.prototype = {
        next: function() {
            return this.select("next");
        },
        prev: function() {
            return this.select("prev");
        },
        select: function(index) {
            var $this = this;
            return $this.active = $this.items.filter('[switch-item="active"]'), isNumber(index) ? ($this.target = $this.items.nth(index), 
            $this.current = index, $this.target.length <= 0 && ($this.target = $this.items.nth(0), 
            $this.current = 0)) : isString(index) && ("next" === index ? $this.current >= $this.items.length - 1 ? ($this.target = $this.items.first(), 
            $this.current = 0) : ($this.target = $this.items.nth($this.current + 1), $this.current++) : "prev" === index && ($this.current <= 0 ? ($this.target = $this.items.last(), 
            $this.current = $this.items.length - 1) : ($this.target = $this.items.nth($this.current - 1), 
            $this.current--))), this.stop(), this.animate(), this;
        },
        animate: function(single) {
            return !this.init && this.options.auto && this.start(), SWEffects.hasOwnProperty(this.options.effect) ? SWEffects[this.options.effect].call(this, single) : SWEffects["default"].call(this), 
            this.options.callback && isFunction(this.options.callback) && this.options.callback.call(this), 
            this;
        },
        start: function() {
            var $this = this;
            return $this.progress.ganimate({
                width: "100%"
            }, this.options.auto, function() {
                $this.next();
            }), this;
        },
        stop: function() {
            return this.progress.kill().css("width", 0), this;
        },
        hide: function() {
            return this.active = this.items.filter('[switch-item="active"]'), this.animate(!0), 
            this;
        }
    }, Switch.addEffect = function(name, handler) {
        return isString(name) && isFunction(handler) ? SWEffects[name] = handler : isObject(name) && foreach(name, function(name, handler) {
            isFunction(handler) && (SWEffects[name] = handler);
        }), Switch;
    }, window.Switch = Switch;
    var SWEffects = {
        "default": function(single) {
            var $this = this;
            $this.init ? ($this.init = !1, $this.target.css("opacity", 1).addClass("active").attr("switch-item", "active"), 
            $this.selectBtns.nth($this.current).addClass("active").attr("switch-select", "active")) : ($this.active && $this.active.remClass("active").ganimate({
                opacity: 0
            }, {
                duration: $this.options.duration,
                ease: $this.options.ease
            }, function() {
                $(this).attr("switch-item", "").addClass("inactive");
            }), single || $this.target && $this.target.remClass("inactive").ganimate({
                opacity: 1
            }, {
                duration: $this.options.duration,
                ease: $this.options.ease
            }, function() {
                $(this).attr("switch-item", "active").addClass("active");
            }), $this.selectBtns.remClass("active").attr("switch-select", "inactive"), $this.selectBtns.nth($this.current).addClass("active").attr("switch-select", "active"));
        }
    };
}(window.DOMList || window.jQuery), function($) {
    "use strict";
    if ($) {
        var $plg = $.fn;
        $plg.ganimate = function(props, options, callback) {
            if (!window.TweenMax) return this;
            var duration;
            return isObject(props) && (isNumber(options) ? duration = options : isObject(options) ? (foreach(options, function(key, value) {
                "duration" !== key && isDefined(value) && (props[key] = value);
            }), duration = options.duration ? options.duration : .5) : duration = .5, this.each(function() {
                var $this = this;
                isFunction(callback) && (props.onCompleteParams = [ $this ], props.onComplete = function(elem) {
                    callback.call(elem, $this.tweens);
                }), $this.tweens = new TweenMax($this, duration, props);
            })), this;
        }, $plg.keyframes = function(frames, options, callback) {
            if (isObject(frames)) {
                var dur, $this = this, time = Object.keys(frames), all = time.length, start = 0, curnt = 0;
                isNumber(options) ? dur = options : isObject(options) ? dur = options.duration ? options.duration : .5 : options = {
                    duration: .5
                };
                var repeat = function() {
                    if (all > 0) {
                        var timei = Number(time[start]), frame = Object.merge(frames[timei]), durat = (timei - curnt) / 100 * dur, optio = Object.merge(options, {
                            duration: durat
                        });
                        $this.ganimate(frame, optio), setTimeout(function() {
                            repeat();
                        }, 1e3 * durat), all -= 1, start += 1, curnt = timei;
                    } else isFunction(callback) && callback.call($this);
                };
                return repeat(), this;
            }
        }, $plg.ctrlAnimate = function(type, arg) {
            return isString(type) && this.each(function() {
                this.tweens && this.tweens[type] && this.tweens[type](arg);
            }), this;
        }, foreach([ "pause", "resume", "reverse", "seek", "timeScale", "kill" ], function(method) {
            $plg[method] = function(arg) {
                return this.ctrlAnimate(method, arg);
            };
        }), $plg.gstop = function() {
            return this.each(function() {
                this.tweens && (this.tweens.kill(), $(this).css(this.tweens.vars.css));
            });
        };
    }
}(window.jQuery || !1), function($) {
    "use strict";
    if ($) {
        var $plg = $.fn, EventProvider = function() {
            this.events = {};
        };
        EventProvider.prototype = {
            search: function(name) {
                return isString(name) && isObject(this.events[name]) ? this.events[name] : void 0;
            },
            register: function(name, provider, options) {
                return isString(name) && isFunction(provider) && (this.events[name] = {
                    maker: provider,
                    event: new CustomEvent(name, options)
                }), this.events[name].event;
            },
            dispatch: function(name, elem, props) {
                if (isString(name) && isHTML(elem) && this.events[name]) {
                    var event = this.events[name].event;
                    isObject(props) && foreach(props, function(key, value) {
                        event[key] = value;
                    }), elem.dispatchEvent(event);
                }
            }
        };
        var eventProvider = new EventProvider();
        window.EventProvider = eventProvider, $plg.listen = function(name, type, handler) {
            return this.each(function() {
                var elem = this;
                if (isString(type) && elem.hasOwnProperty("on" + type) && (type = "on" + type), 
                isString(name) ? isString(type) && isFunction(handler) ? (elem._evcol || (elem._evcol = {}), 
                elem._evcol[type] || (elem._evcol[type] = {
                    _init: !0
                }), elem._evcol[type][name] || (elem._evcol[type][name] = []), elem._evcol[type][name].push(handler)) : isObject(type) && foreach(type, function(type, handler) {
                    isFunction(handler) && $(elem).listen(name, type, handler);
                }) : isObject(name) && foreach(name, function(name, types) {
                    isObject(types) && foreach(types, function(type, handler) {
                        isFunction(handler) && $(elem).listen(type, name, handler);
                    });
                }), elem._evcol && elem._evcol[type] && elem._evcol[type]._init) {
                    elem._evcol[type]._init = !1;
                    var cev = eventProvider.search(type);
                    cev && cev.maker.call(elem);
                    var defHandler = function(e) {
                        var $self = this;
                        $self._evcol[type] && foreach($self._evcol[type], function(name, handlers) {
                            "_init" !== name && foreach(handlers, function(handler) {
                                isFunction(handler) && handler.call($self, e);
                            });
                        });
                    };
                    $(elem).on(type.replace(/^on/, ""), defHandler);
                }
            }), this;
        }, $plg.unlisten = function(name, type) {
            var self = this;
            return isString(name) ? isString(type) ? this.each(function() {
                this.hasOwnProperty("on" + type) && (type = "on" + type), this._evcol[type] && this._evcol[type][name] && delete this._evcol[type][name];
            }) : isArray(type) ? foreach(type, function(type) {
                self.unlisten(name, type);
            }) : this.each(function() {
                var $this = this;
                foreach($this._evcol, function(type, names) {
                    isObject(names) && names.hasOwnProperty(name) && delete $this._evcol[type][name];
                });
            }) : isArray(name) && (isString(type) ? foreach(name, function(name) {
                self.unlisten(name, type);
            }) : isArray(type) && foreach(name, function(name) {
                foreach(type, function(type) {
                    self.unlisten(name, type);
                });
            })), this;
        }, $plg.handle = function(type, handler) {
            var $this = this;
            return isString(type) && isFunction(handler) ? $this.listen("default", type, handler) : isObject(type) ? $this.listen("default", type) : isArray(type) && isFunction(handler) && foreach(type, function(type) {
                $this.listen("default", type, handler);
            }), this;
        }, $plg.unhanlde = function(type) {
            return (isString(type) || isArray(type)) && this.unlisten("default", type), this;
        };
    }
}(window.jQuery || !1), function($) {
    "use strict";
    if ($) {
        var DOMNotice = function(message, options) {
            this.allowed = "Notification" in window ? !0 : !1, this.title = message || "", this.engine = void 0, 
            this.options = {}, this.events = {};
            var $this = this;
            return isObject(options) && (foreach([ "onclick", "onclose", "onerror", "onshow" ], function(type) {
                type in options && ($this.events[type] = options[type]);
            }), foreach([ "icon", "tag", "body", "lang", "dir" ], function(prop) {
                prop in options && ($this.options[prop] = options[prop]);
            })), this.granted = !1, this.queued = !1, "granted" !== Notification.permission && "denied" !== Notification.permission ? this.ask(function(permission) {
                "granted" === permission ? (this.granted = !0, this.queued && this.show()) : console.error("Notification: Permission denied.");
            }) : this.granted = !0, this;
        };
        DOMNotice.prototype = {
            handle: function(type, handler) {
                return isString(type) && isFunction(handler) && (this.events["on" + type] = handler), 
                this;
            },
            ask: function(handler) {
                var $this = this;
                return Notification.requestPermission(function(permission) {
                    isFunction(handler) && handler.call($this, permission);
                }), this;
            },
            show: function(message, options) {
                var $this = this;
                return isString(message) && (this.title = message), isObject(options) && (this.options = Object.merge(this.options, options)), 
                this.allowed && isString(this.title) && this.granted ? (this.engine = new Notification(this.title, this.options), 
                foreach([ "click", "close", "error", "show" ], function(type) {
                    $this.engine["on" + type] = function(e) {
                        $this.events["on" + type] && $this.events["on" + type].call($this, e);
                    };
                })) : this.queued = !0, this;
            },
            set: function(name, value) {
                return isString(name) && value ? this.options[name] = value : isObject(name) && (this.options = Object.merge(this.options, name)), 
                this;
            }
        }, foreach([ "click", "show", "error", "close" ], function(type) {
            DOMNotice.prototype["on" + type] = function(handler) {
                return this.handle(type, handler);
            };
        }), $.notification = function(message, options) {
            return new DOMNotice(message, options);
        };
    }
}(window.jQuery || !1), function($) {
    document.addEventListener("readystatechange", function() {
        "interactive" == document.readyState && ($("[icon-a]").each(function() {
            var icona = $(this).attr("icon-a");
            icona && window.DataIcons[icona] && $(this).attr("icon-a", window.DataIcons[icona]).addClass("ready");
        }), $("[icon]").each(function() {
            var iconb = $(this).attr("icon");
            iconb && window.DataIcons[iconb] && $(this).attr("icon", window.DataIcons[iconb]).addClass("ready");
        }));
    });
    var DataIcons = function() {
        return this;
    };
    DataIcons.prototype = {
        push: function(name, value) {
            var $this = this;
            return isString(name) && isString(value) ? $this[name] = value : isObject(name) && foreach(name, function(name, value) {
                $this[name] = value;
            }), this;
        }
    }, window.DataIcons = new DataIcons();
}(window.DOMList || window.jQuery);