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
