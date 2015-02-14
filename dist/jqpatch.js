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
}();
(function ($root) {
    /* Array.isArray Polyfill */
    if (!Array.isArray) {
        Array.prototype.isArray = function () {
            return Object.prototype.toString.call(this) === '[object Array]';
        }
    }

    /* Array.indexOf Polyfill */
    if (!Array.indexOf) {
        Array.prototype.indexOf = function (searchElement, fromIndex) {

            var k;

            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var O = Object(this);

            var len = O.length >>> 0;

            if (len === 0) {
                return -1;
            }

            var n = +fromIndex || 0;

            if (Math.abs(n) === Infinity) {
                n = 0;
            }

            if (n >= len) {
                return -1;
            }

            k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

            while (k < len) {
                var kValue;
                if (k in O && O[k] === searchElement) {
                    return k;
                }
                k++;
            }
            return -1;
        };
    }

    /* Object.keys Polyfill */
    if (!Object.keys) {
        Object.prototype.keys = function () {
            var arr = [];

            for (var key in this) {
                if (this.hasOwnProperty(key)) {
                    arr.push(key);
                }
            }

            return arr;
        }
    }

    /* Object.merge prototype */
    Object.prototype.merge = function() {
        var nobj = {};

        for (var c = 0; c < arguments.length; ++c) {
            if (isObject(arguments[c])) {
                foreach(arguments[c], function (key, value) {
                    nobj[key] = value;
                });
            }
        }

        return nobj;
    };

    Object.defineProperty(Object.prototype, 'merge', {
        enumerable: false
    });

    /* CustomEvent Polyfill */
    var CustomEvent = function (eventName, options) {
        var event;

        if (isString(eventName)) {
            options = options || { bubbles: false, cancelable: false, detail: undefined };

            event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, options.bubbles, options.cancelable, options.detail);
        }

        return event;
    };

    /* CustomEvent Prototype */
    CustomEvent.prototype = $root.Event.prototype;

    /* Register to window if no default CustomEvent */
    if (!$root.CustomEvent || !isFunction($root.CustomEvent)) $root.CustomEvent = CustomEvent;
})(window);

(function($) {
    'use strict';

    /* Escape if no jQuery loaded */
    if (!$) return;

    /* Plugins holder */
    var $plg = $.fn, $dom = $; $.module = $.fn; $plg._css = $plg.css;

    /* Module to set or get elements attribute */
    $plg.attr = function(name, value, nodata) {
        var $this = this;

        /* Skip if no items */
        if (this.length <= 0) return;

        /* Single attribute setter */
        if (isString(name)) {
            /* Set attribute value to all items if value is defined. Else get the first item attribute */
            if (isDefined(value)) {
                /* Convert to JSON if value is object or array */
                if (isObject(value) || isArray(value)) {
                    value = JSON.stringify(value);
                }

                /* Iterate each element to assign attribute and value */
                $this.each(function() {
                    this.setAttribute(name, value);

                    if (name in this && name != 'text' && name != 'comment' && name != 'attribute') {
                        this[name] = value;
                    }
                });

                return this;
            } else {
                /* Getting attribute value */
                var result = $this[0].getAttribute(name), parsed;

                if (!nodata) {
                    /* Try to convert result as object. If success, return it */
                    try {
                        parsed = JSON.parse(result);
                    } catch (err) {
                        try {
                            eval('parsed = {' + result + '}');
                        } catch (err) {
                            try {
                                eval('parsed = [' + result.replace(';', ',') + ']');
                            } catch (err) {}
                        }
                    }

                    if (parsed) return parsed;

                    /* Convert result as data if possible and return it */

                    /* Boolean */
                    if (result === 'true') {
                        return true;
                    }

                    else if (result === 'false') {
                        return false;
                    }

                    /* Convert to undefined */
                    else if (result === 'undefined') {
                        return undefined;
                    }

                    /* Convert to null */
                    else if (result === 'null') {
                        return null;
                    }

                    /* Convert to NaN */
                    else if (result === 'NaN') {
                        return NaN;
                    }

                    /* Convert to number */
                    else if (Number(result)) {
                        return Number(result);
                    }
                }

                /* Return as plain result */
                return result;
            }
        }

        /* Multiple attribute and value setter with object */
        else if (isObject(name)) {
            foreach(name, function (key, value) {
                $this.attr(key, value);
            });
        }

        /* Multiple attribute setter with array */
        else if (isArray(name)) {
            foreach(name, function (key) {
                $this.attr(key, '');
            });
        }

        /* Get all attributes and convert the value */
        else {
            var attributes = $this[0].attributes, result = {};

            foreach(attributes, function (attr) {
                result[attr.name] = $this.attr(attr.name);
            });

            return result;
        }

        return $this;
    }

    /* Module to remove elements attribute */
    $plg.removeAttr = function(name) {
        if (isString(name)) {
            if (name.match(/\s+/)) {
                name = name.split(/\s+/);

                this.each(function() {
                    var self = this;

                    foreach(name, function (name) {
                        self.removeAttribute(name);
                    });
                });
            } else {
                this.each(function() {
                    this.removeAttribute(name);
                });
            }
        } else if (isArray(name)) {
            this.each(function() {
                var self = this;

                foreach(name, function (name) {
                    self.removeAttribute(name);
                });
            });
        }

        return this;
    }
    $plg.remAttr = $plg.removeAttr;

    /* Module to get or set elements data attribute */
    $plg.data = function(name, value) {
        var $this = this;

        /* Return if no selected childs */
        if ($this.length <= 0) $this;

        if (isString(name)) {
            if (name.match(/\s+/)) {
                name = name.split(/\s+/);

                if (isDefined(value)) {
                    foreach(name, function(attr, i) {
                        if (isString(value)) {
                            $this.attr('data-' + attr, value);
                        } else if (isArray(value)) {
                            $this.attr('data-' + attr, value[i]);
                        }
                    });
                } else {
                    var data = {};

                    foreach(name, function (attr) {
                        data[attr] = $this.attr('data-' + attr);
                    });

                    return data;
                }
            } else {
                if (isDefined(value)) {
                    $this.attr('data-' + name, value);
                } else {
                    return $this.first().attr('data-' + name);
                }
            }
        } else {
            var atrs = $this.attr(), data = {};

            foreach(atrs, function (attr, i) {
                if (attr.match(/data-/)) {
                    data[attr.replace('data-', '')] = $this.attr(attr);
                }
            });

            return data;
        }

        return $this;
    }

    /* Element Property setter or getter */
    $plg.prop = function(name, value) {
        var $this = this;

        if (isString(name)) {
            if (name.match(/\s+/)) {
                name = name.split(/\s+/);

                foreach(name, function (prop) {
                    $this.prop(prop, value);
                });
            }

            else {
                if (value) {
                    $this.each(function() {
                        if (name != 'text' && name != 'comment' && name != 'attribute') {
                            this[name] = value;

                            if ($(this).hasAttr(name)) {
                                $(this).attr(name, value);
                            }
                        }
                    });
                }

                else {
                    return $this[0][name] || undefined;
                }
            }
        }

        else if (isObject(name)) {
            foreach(name, function(prop, value) {
                $this.prop(prop, value);
            });
        }

        else {
            return undefined;
        }

        return this;
    }

    /* Remove Class Shorted */
    $plg.remClass = $plg.removeClass;

    /* Patch CSS Plugin */
    $plg.css = function(prop, value) {
        if (prop) {
            return this._css(prop, value);
        }

        else {
            var style = this.first().prop('style'), props = {};

            for (var property in style) {
                if (isNaN(Number(property)) && property !== 'length' && style[property] !== '' && !isFunction(style[property]) && style[property] !== null) {
                    props[property] = style[property];
                }
            }

            return props;
        }

        return this;
    }

})(window.jQuery || false);

(function($) {
    'use strict';

    /* Escape if no jQuery loaded */
    if (!$) return;

    /* Plugins holder */
    var $plg = $.fn, $dom = $; $.module = $.fn;

    /* Module to push new elements to current list */
    $plg.push = function(elem) {
        var $this = this;

        if (isHTML(elem)) {
            $this[$this.length] = elem;
            $this.length++;
        } else if (isJQuery(elem) || isArray(elem)) {
            foreach(elem, function (elem) {
                $this[$this.length] = elem;
                $this.length++;
            });
        } else if (isString(elem)) {
            $this.push($(elem));
        }

        return this;
    };

    /* Module to get first child element in first selected element */
    $plg.firstChild = function() {
        if (this.length <= 0) return this;

        var first = this[0];
        var child = first.children;

        if (child.length > 0) {
            return $(child[0]);
        } else {
            return $();
        }
    };

    /* Module to get last child element in first selected element */
    $plg.lastChild = function() {
        if (this.length <= 0) return this;

        var first = this[0];
        var child = first.children;

        if (child.length > 0) {
            return $(child[child.length - 1]);
        } else {
            return $();
        }
    };

    /* Module to get element by index number in DOMList */
    $plg.nth = function(i) {
        return isNumber(i) && this.hasOwnProperty(i) ? $(this[i]) : $();
    };

    /* Module to get child element by index number in first selected element */
    $plg.nthChild = function(i) {
        if (this.length <= 0) return this;

        var fisrt = this[0];
        var child = fisrt.children;

        if (child.length > 0) {
            return child.hasOwnProperty(i) ? $(child[i]) : $();
        } else {
            return $();
        }
    };

    /* Module to remove elements data attribute */
    $plg.removeData = function(name) {
        var $this = this;

        if (isString(name)) {
            if (name.match(/\s+/)) {
                name = name.split(/\s+/);

                foreach(name, function (attr) {
                    $this.removeAttr('data-' + attr);
                });
            } else {
                $this.removeAttr('data-' + name);
            }
        }

        return $this;
    }
    $plg.remData = $plg.removeData;

    /* Module to sort selected elements by attribute name */
    $plg.sortBy = function(attr, options) {
        var $this = this;

        /* Creating default option */
        var option = { type: 'string', direction: 'ascending' };

        /* Replace option using user defined if exist */
        if (isObject(options)) {
            foreach(options, function (key, value) {
                option[key] = value;
            });
        }

        /* Attribute name should be string */
        if (isString(attr)) {
            /* Creating array to sort value */
            var list = [];

            /* Iterate each element to get value and add pattern as index number. */
            $this.each(function(i) {
                var val = this.getAttribute(attr);

                /* If have attribute or value, just add index pattern */
                if (isString(val)) {
                    list.push(val + '<>' + i);
                }

                /* If don't have attribute or value, use 'zabc' to ensure placed in bottom of list */
                else {
                    list.push('zabc<>' + i);
                }
            });

            /* Use custom sort compare if type is number.*/
            if (option.type === 'number') {
                /* Sort values with custom compare */
                list = list.sort(function(a, b) {
                    var ap = Number(a.split('<>')[0]);
                    var bp = Number(b.split('<>')[0]);

                    if (!ap) ap = 999999999999999;
                    if (!bp) bp = 999999999999999;

                    if (ap > bp) {
                        return 1;
                    } else {
                        return -1;
                    }

                    return 0;
                });
            } else {
                /* Simply sort it if not numeric values */
                list = list.sort();
            }

            /* Reverse order if dirs is 'desc' */
            if (option.direction === 'descending') {
                list = list.reverse();
            }

            /* Create DOMList */
            var newlist = $dom();
            /* Assign DOMList length using values length */
            newlist.length = list.length;

            /* Iterating values to get index number and insert the element to DOMList */
            foreach(list, function (s, i) {
                s = s.split('<>')[1];
                newlist[i] = $this[s];
            });

            return newlist;
        }

        return this;
    };

    /* Module to remove properties from selected elements */
    $plg.removeProp = function(prop) {
        if (isString(prop)) {
            this.each(function() {
                if (this[prop]) {
                    delete this[prop];

                    if (this.hasAttribute(prop)) {
                        this.removeAttribute(prop);
                    }
                }
            });
        } else if (isArray(prop)) {
            foreach(prop, function (prop) {
                this.remProp(prop);
            });
        }

        return this;
    };
    $plg.remProp = $plg.removeProp;

    /* Filter selected elements from start number and total to get */
    $plg.rangeFrom = function(start, total) {
        if (isNumber(start) && isNumber(total)) {
            var ndom = $dom();

            this.each(function(i) {
                if (i >= start && total >= 0) {
                    ndom.push(this);
                    total--;
                }
            });

            return ndom;
        }
    };

    /* Filter selected elements between start number and end number */
    $plg.rangeWithin = function(start, finish) {
        if (isNumber(start) && isNumber(finish)) {
            var ndom = $dom();

            this.each(function(i) {
                if (i >= start && i <= finish) {
                    ndom.push(this);
                }
            });

            return ndom;
        }
    };

    /* Module to group child elements by number of column */
    $plg.groupChilds = function(count, classname) {
        var $this = this;

        if (isNumber(count)) {
            var childs = this.children();
            var rowlen = Math.round(childs.length / count);

            foreach(count, function (row) {
                var chrow = $('<div>').addClass(classname || 'col-group'),
                    start = (row - 1) * rowlen,
                    total = rowlen;

                childs.each(function(i) {
                    if (i >= start && total >= 0) {
                        chrow.append(this);
                        total--;
                    }
                });

                chrow.appendTo($this);
            });
        }

        return this;
    };

    /* Group selected elements by specific attribute value */
    $plg.groupBy = function(attribute, classname) {
        var $this = this;

        if (isString(attribute)) {
            var groups = [], ndom = $dom();

            this.each(function() {
                var atr = this.getAttribute(attribute);

                if (!atr || atr === '') {
                    this.setAttribute(attribute, 'unknown');

                    if (groups.indexOf('unknown') < 0) {
                        groups.push('unknown');
                    }
                }

                else {
                    if (groups.indexOf(atr) < 0) {
                        groups.push(atr);
                    }
                }
            });

            foreach(groups, function (groupid) {
                $('<div class="' + (classname || groupid) + '" groupid="' + groupid + '">')
                    .append($this.filter('[' + attribute + '=' + groupid + ']'))
                    .appendTo(ndom);
            });
        }
    };



})(window.jQuery || false);

(function($) {
    'use strict';

    /* Escape if no jQuery loaded */
    if (!$) return;

    /* Plugins holder */
    var $plg = $.fn, $dom = $; $.module = $.fn;

    /* Has Attribute Checker */
    $plg.hasAttr = function(name) {
        var has = false, hasfalse = false;

        var atrs = Object.keys(this.attr());

        if (isString(name)) {
            if (name.match(/\s+/)) {
                name = name.split(/\s+/);

                foreach(name, function(key) {
                    if (atrs.indexOf(key) > -1) {
                        has = true;
                    } else {
                        hasfalse = true;
                    }
                });

                return has === true && hasfalse === false ? true : false;
            } else {
                if (atrs.indexOf(name) > -1) {
                    has = true;
                }
            }
        } else if (isArray(name)) {
            foreach(name, function(key) {
                if (atrs.indexOf(key) > -1) {
                    has = true;
                }
            });
        }

        return has;
    };

    /* Has Data Attribut Checker */
    $plg.hasData = function(name) {
        var has = false, hasfalse = false;

        if (isString(name)) {
            if (name.match(/\s+/)) {
                var ns = name.split(/\s+/);

                foreach(ns, function (value, i) {
                    name = name.replace(value, 'data-' + value);
                });
            } else {
                name = 'data-' + name;
            }
        } else if (isArray(name)) {
            foreach(name, function (value, i) {
                name[i] = 'data-' + value;
            });
        }

        return this.hasAttr(name);
    };

})(window.jQuery || false);

(function($) {
    'use strict';

    /* Escape if no jQuery loaded */
    if (!$) return;

    /* Plugins holder */
    var $plg = $.fn;

    /* Box Ratio Counter */
    var countRatio = function (width, height) {
        var getDivisor, temp, divisor;

        getDivisor = function(a, b) {
            if (b === 0) return a;
            return getDivisor(b, a % b);
        }

        if (width === height) return '1:1';

        if (+width < +height) {
            temp = width;
            width = height;
            height = temp;
        }

        divisor = getDivisor(+width, +height);

        return 'undefined' === typeof temp ? (width / divisor) + ':' + (height / divisor) : (height / divisor) + ':' + (width / divisor);
    };

    /* Box Ratio Getter and Setter */
    $plg.ratio = function(value, reverse) {
        if (this.length <= 0) return this;

        /* If value is defined, then set it */
        if (isString(value) && value.match(/^\d+:\d+$/)) {
            this.each(function() {
                this.ratio = value;

                // Getting box ratio part.
                var part = this.ratio.split(':');

                /* Get height by width */
                if (!reverse) {
                    // Getting the box height depend on ratio.
                    var height = Math.round($(this).width() / part[0] * part[1]);

                    // Setting the box height.
                    $(this).height(height);
                }

                /* Get width by height */
                else {
                    /* Getting box width depend on ratio */
                    var width = Math.round($(this).height() / part[1] * part[0]);

                    /* Setting the box width */
                    $(this).width(width);
                }
            });

            return this;
        }

        /* If no value given, try to get the ratio value */
        else {
            /* Return if already exist */
            if (this.get().ratio) {
                return this.get().ratio;
            }

            /* Count if not exist */
            else {
                return this.get().ratio = countRatio(this.width(), this.height());
            }
        }
    };

})(window.jQuery || false);

(function($) {
    'use strict';

    /* Escape if no jQuery loaded */
    if (!$) return;

    /* Plugins holder */
    var $plg = $.fn;

    var defCount = 0;

    /* Switch Effect Collections */
    var SWEffects = {
        /* Default Effect */
        default: function(single) {
            var $this = this;

            if ($this.init) {
                $this.init = false;
                $this.target.css('opacity', 1).addClass('active').attr('switch-item', 'active');
                $this.selectBtns.nth($this.current).addClass('active').attr('switch-select', 'active');
            }

            else {
                /* Deactivate Active Item */
                if ($this.active) {
                    $this.active.remClass('active').ganimate({
                        opacity: 0
                    }, {
                        duration: $this.options.duration,
                        ease: $this.options.ease
                    }, function() {
                        $(this).attr('switch-item', '').addClass('inactive');
                    });
                }

                /* If not single switch, activate target */
                if (!single) {
                    /* Activate Target Item */
                    if ($this.target) {
                        $this.target.remClass('inactive').ganimate({
                            opacity: 1
                        }, {
                            duration: $this.options.duration,
                            ease: $this.options.ease
                        }, function() {
                            $(this).attr('switch-item', 'active').addClass('active');
                        });
                    }
                }

                /* Activate Selected Item Selector */
                $this.selectBtns
                    .remClass('active')
                    .attr('switch-select', 'inactive');

                /* Get the current item and activate it */
                $this.selectBtns
                    .nth($this.current)
                    .addClass('active')
                    .attr('switch-select', 'active');
            }

            if (this.options.callback && isFunction(this.options.callback)) {
                this.options.callback.call(this);
            }
        }
    };

    /* Content Switcher */
    var Switch = function($object) {
        if (!isHTML($object)) return;

        /* Initializing Objects */
        var $holder = $($object), $this = this;

        var defCf = {
            auto: false,
            hoverPause: false,
            default: 1,
            duration: 1,
            hover: false,
            ease: Power3.easeInOut || 'Linear',
            effect: 'default'
        }

        this.ID = $holder.attr('swid') || 'switch' + (defCount + 1);
        defCount++;

        /* Check if already initialized */
        this.preInit = $holder.attr('preinit') ? true : false;

        this.current = 0;
        this.init = true;

        /* Getting Options */
        this.holder = $object;

        /* Getting Configurations */
        this.options = $holder.attr('switch');

        if (!this.options) {
            this.options = defCf;
        } else {
            this.options = Object.merge(defCf, this.options);
        }

        if (!this.options.duration || this.options.duration <= 0) {
            this.options.duration = 1;
        }

        if (this.options.hoverPause) {
            $(this.holder).hover(function(e) {
                if (e.status === 'enter') {
                    $('.progress', this).pause();
                } else if (e.status === 'leave') {
                    $('.progress', this).resume();
                }
            });
        }

        /* Define Value to Query */
        if (this.preInit) {
            var vqr = '="' + this.ID + '"';
            $holder.remAttr('preinit');
        } else {
            var vqr = '';
        }

        /* Getting Switch Item */
        this.items = $('[switch-item' + vqr + ']', this.holder);

        /* Getting Switch Next Button */
        this.nextBtn = $('[switch-next' + vqr + ']', this.holder)
            .click(function(e) {
                e.preventDefault();

                $this.next();
            });

        /* Getting Switch Prev Button */
        this.prevBtn = $('[switch-prev' + vqr + ']', this.holder)
            .click(function(e) {
                e.preventDefault();

                $this.prev();
            });

        /* Getting Switch Select */
        this.selectBtns = $('[switch-select' + vqr + ']', this.holder)
            .click(function(e) {
                e.preventDefault();

                var idx = $this.selectBtns.indexOf(this);
                $this.select(idx);
            });

        /* If hover is enabled */
        if (this.options.hover) {
            var hvTime = setTimeout(function(){});

            this.selectBtns
                .mouseenter(function(e) {
                    e.preventDefault();

                    var self = this;

                    clearTimeout(hvTime);

                    hvTime = setTimeout(function() {
                        self.click();
                    }, 200);
                })
                .mouseleave(function(e) {
                    clearTimeout(hvTime);
                });
        }

        /* Switch Item Closer */
        this.closer = $('[switch-hide' + vqr + ']', this.holder)
            .click(function(e) {
                e.preventDefault();

                $this.hide();
            });

        /* Getting Switch Progress */
        this.progress = $('[switch-progress' + vqr + ']', this.holder);

        /* If auto is enabled and no progress, create it */
        if (this.options.auto && this.progress.length <= 0) {
            this.progress = $('<div class="progress">')
                .attr('switch-progress', this.ID)
                .prependTo(this.holder);
        }

        /* Activating Default Items execpt options.default is false */
        if (isNumber(this.options.default)) {
            this.items.each(function(i) {
                if ((i + 1) === $this.options.default) {
                    $this.select(i);
                }
                else {
                    $(this).addClass('inactive');
                }
            });
        }

        /* If no options.default then disable init */
        else {
            this.init = false;
            this.items.addClass('inactive').attr('switch-item', 'inactive');
        }

        /* Auto Rotate Switch */
        if (this.options.auto) {
            $.loaded(function() {
                $this.start();
            });
        }

        return this;
    };

    /* Content Switcher Methods */
    Switch.prototype = {
        animate: function(single) {
            if (!this.init && this.options.auto) {
                this.start();
            }

            if (SWEffects.hasOwnProperty(this.options.effect)) {
                SWEffects[this.options.effect].call(this, single);
            } else {
                SWEffects['default'].call(this);
            }

            return this;
        },

        next: function() {
            return this.select('next');
        },

        prev: function() {
            return this.select('prev');
        },

        select: function(index) {
            var $this = this;

            $this.active = $this.items.filter('[switch-item="active"]');

            if (isNumber(index)) {
                $this.target = $this.items.nth(index);
                $this.current = index;

                if ($this.target.length <= 0) {
                    $this.target = $this.items.nth(0);
                    $this.current = 0;
                }
            }

            else if (isString(index)) {
                if (index === 'next') {
                    if ($this.current >= ($this.items.length - 1)) {
                        $this.target = $this.items.first();
                        $this.current = 0;
                    } else {
                        $this.target = $this.items.nth($this.current + 1);
                        $this.current++;
                    }
                }
                else if (index === 'prev') {
                    if ($this.current <= 0) {
                        $this.target = $this.items.last();
                        $this.current = ($this.items.length - 1);
                    } else {
                        $this.target = $this.items.nth($this.current - 1);
                        $this.current--;
                    }
                }
            }

            this.stop();
            this.animate();

            return this;
        },

        start: function() {
            var $this = this;

            $this.progress.animate({ width: '100%' }, this.options.auto, function() {
                $this.next();
            });

            return this;
        },

        stop: function() {
            this.progress.kill().css('width', 0);

            return this;
        },

        hide: function() {
            this.active = this.items.filter('[switch-item="active"]');
            this.animate(true);

            return this;
        },

        addEffect: function(name, handler) {
            if (isString(name) && isFunction(handler)) {
                SWEffects[name] = handler;
            }

            return this;
        }
    };

    $.module.nextSlide = function() {
        return this.each(function() {
            if (this.hasOwnProperty('slider')) {
                this.switcher.next();
            }
        });
    };
    $.module.prevSlide = function() {
        return this.each(function() {
            if (this.hasOwnProperty('slider')) {
                this.switcher.prev();
            }
        });
    };
    $.module.goSlide = function(idx) {
        return this.each(function() {
            if (this.hasOwnProperty('slider')) {
                this.switcher.select(idx);
            }
        });
    };
    $.module.pauseSlide = function() {
        return this.each(function() {
            $('.progress', this).pause();
        });
    }
    $.module.resumeSlide = function() {
        return this.each(function() {
            $('.progress', this).resume();
        });
    }

    /* Attach to ready event */
    $(document).ready(function() {
        /* Pre init switch */
        $('[switch]').each(function() {
            var id = $(this).attr('swid') || $(this).attr('swid', 'switch-#' + (defCount + 1)).attr('swid');

            /* Pre init slider */
            $(this).attr('preinit', true);

            $('[switch-item]', this).attr('switch-item', id);
            $('[switch-next]', this).attr('switch-next', id);
            $('[switch-prev]', this).attr('switch-prev', id);
            $('[switch-select]', this).attr('switch-select', id);
            $('[switch-hide]', this).attr('switch-hide', id);
            $('[switch-progress]', this).attr('switch-progress', id);
        });

        /* Creating Switch */
        $('[switch]').each(function() {
            var slider = new Switch(this);
            this.switcher = slider;
        });
    });
})(window.jQuery || false);

(function($) {
    'use strict';

    /* Escape if no jQuery loaded */
    if (!$) return;

    /* Plugins holder */
    var $plg = $.fn;

    /* Animation Module */
    $plg.ganimate = function(props, options, callback) {
        if (!window.TweenMax) return this;

        var $this = this, duration;

        if (isObject(props)) {
            if (isNumber(options)) {
                duration = options;
            }
            else if (isObject(options)) {
                foreach(options, function (key, value) {
                    if (key !== 'duration' && isDefined(value)) {
                        props[key] = value;
                    }
                });

                if (options.duration) {
                    duration = options.duration;
                } else {
                    duration = 0.5;
                }
            }
            else {
                duration = 0.5;
            }

            this.each(function() {
                var $this = this;

                if (isFunction(callback)) {
                    props.onCompleteParams = [$this];

                    props.onComplete = function(elem) {
                        callback.call(elem, $this.tweens);
                    }
                }

                $this.tweens = new TweenMax($this, duration, props);
            });
        }

        return this;
    };

    /* Animation Keyframes */
    $plg.keyframes = function(frames, options, callback) {
        if (isObject(frames)) {
            var $this = this, dur, time = Object.keys(frames), all = time.length, start = 0, curnt = 0;

            if (isNumber(options)) {
                dur = options;
            } else if (isObject(options)) {
                if (options.duration) {
                    dur = options.duration;
                } else {
                    dur = 0.5;
                }
            } else {
                options = {
                    duration: 0.5
                };
            }

            var repeat = function() {
                if (all > 0) {
                    var timei = (Number(time[start]));
                    var frame = Object.merge(frames[timei]);
                    var durat = ((timei - curnt) / 100) * dur;
                    var optio = Object.merge(options, { duration: durat });

                    $this.ganimate(frame, optio);

                    setTimeout(function() {
                        repeat();
                    }, (durat * 1000));

                    all -= 1;
                    start += 1;
                    curnt = timei;
                } else {
                    if (isFunction(callback)) {
                        callback.call($this);
                    }
                }
            };

            repeat();

            return this;
        }
    };

    /* Animation Controll Module */
    $plg.ctrlAnimate = function(type, arg) {
        if (isString(type)) {
            this.each(function() {
                if (this.tweens && this.tweens[type]) {
                    this.tweens[type](arg);
                }
            });
        }

        return this;
    };

    /* Animation Controll Shorcut Modules */
    foreach(['pause', 'resume', 'reverse', 'seek', 'timeScale', 'kill'], function (method) {
        $plg[method] = function(arg) {
            return this.ctrlAnimate(method, arg);
        }
    });

    /* Animation Stopper */
    $plg.gstop = function() {
        return this.each(function() {
            if (this.tweens) {
                this.tweens.kill();

                $(this).css(this.tweens.vars.css);
            }
        });
    };

})(window.jQuery || false);

(function($) {
    'use strict';

    /* Escape if no jQuery loaded */
    if (!$) return;

    var DOMNotice = function(message, options) {
        if ('Notification' in window) { this.allowed = true; } else { this.allowed = false; }

        /* Preparing Options */
        this.title = message || '';
        this.engine = undefined;
        this.options = {};
        this.events = {};

        var $this = this;

        if (isObject(options)) {
            foreach(['onclick', 'onclose', 'onerror', 'onshow'], function(type) {
                if (type in options) {
                    $this.events[type] = options[type];
                }
            });

            foreach(['icon', 'tag', 'body', 'lang', 'dir'], function (prop) {
                if (prop in options) {
                    $this.options[prop] = options[prop];
                }
            });
        }

        this.granted = false;
        this.queued = false;

        /* Request permission */
        if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
            this.ask(function(permission) {
                if (permission === 'granted') {
                    this.granted = true;

                    if (this.queued) {
                        this.show();
                    }
                }

                else {
                    console.error('Notification: Permission denied.');
                }
            });
        } else {
            this.granted = true;
        }

        return this;
    };

    DOMNotice.prototype = {
        handle: function(type, handler) {
            if (isString(type) && isFunction(handler)) {
                this.events['on' + type] = handler;
            }

            return this;
        },

        ask: function(handler) {
            var $this = this;

            Notification.requestPermission(function(permission) {
                if (isFunction(handler)) {
                    handler.call($this, permission);
                }
            });

            return this;
        },

        show: function(message, options) {
            var $this = this;

            if (isString(message)) {
                this.title = message;
            }

            if (isObject(options)) {
                this.options = Object.merge(this.options, options);
            }

            if (this.allowed && isString(this.title) && this.granted) {
                this.engine = new Notification(this.title, this.options);

                foreach(['click', 'close', 'error', 'show'], function (type) {
                    $this.engine['on' + type] = function(e) {
                        if ($this.events['on' + type]) {
                            $this.events['on' + type].call($this, e);
                        }
                    }
                });
            } else {
                this.queued = true;
            }

            return this;
        },

        set: function(name, value) {
            if (isString(name) && value) {
                this.options[name] = value;
            } else if (isObject(name)) {
                this.options = Object.merge(this.options, name);
            }

            return this;
        }
    };

    foreach(['click', 'show', 'error', 'close'], function (type) {
        DOMNotice.prototype['on' + type] = function(handler) {
            return this.handle(type, handler);
        }
    });

    $.notification = function(message, options) { return new DOMNotice(message, options) };
})(window.jQuery || false);