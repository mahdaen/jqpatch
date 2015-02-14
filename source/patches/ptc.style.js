(function($) {
    'use strict';

    /* Escape if no jQuery loaded */
    if (!$) return;

    /* Plugins holder */
    var $plg = $.fn, $dom = $; $.module = $.fn;

    /* Remove Class Shorted */
    $plg._remclass = $plg.removeClass;
    $plg.removeClass = function(name) {
        var $this = this;

        if (isString(name)) {
            if (name.match(/\s+/)) {
                name = name.split(/\s+/);

                foreach(name, function(attr) {
                    $this._remclass(attr);
                });
            }

            else {
                $this._remclass(name);
            }
        }

        else if (isArray(name)) {
            foreach(name, function (attr) {
                $this._remclass(attr);
            });
        }

        return this;
    }
    $plg.remClass = $plg.removeClass;

    /* Browser CSS Property List */
    var propList = {
        default: [], // Default css in lowercase.
        publics: [], // Default css in normal.

        customs: [], // Browser specific in lowercase and without prefix.
        origins: [], // Browser specific in normal.
        browser: '', // Broser type.
    };

    /* Creating new element to get style */
    var style = document.createElement('span').style;
    var lists = [];

    /* Collecting css properties */
    for (var key in style) {
        lists.push(key);
    }

    /* Checking browser */
    if (lists.indexOf('webkitUserSelect') > -1) {
        propList.browser = 'webkit';
    }
    else if (lists.indexOf('MozUserSelect') > -1) {
        propList.browser = 'Moz';
    }
    else if (lists.indexOf('msUserSelect') > -1) {
        propList.browser = 'ms';
    }

    /* Splitting default properties and vendor specific properties */
    foreach(lists, function (prop) {
        /* If property contains current browser pattern, add to custom list */
        if (prop.search(propList.browser) > -1) {
            propList.origins.push(prop);
            propList.customs.push(prop.replace(propList.browser, '').toLowerCase());
        }
        /* Else add to default list */
        else {
            propList.default.push(prop.toLowerCase());
            propList.publics.push(prop);
        }
    });

    /* Patch CSS Plugin */
    $plg.css = function(prop, value) {
        var $this = this;

        if (isString(prop)) {
            // Removing dashes.
            if (prop.search('-')) {
                prop = prop.replace(/\-/g, '');
            }

            // Converting to lowercase to search index.
            prop = prop.toLowerCase();

            // Searching in custom lists.
            var propIndex = propList.customs.indexOf(prop);

            // If custom prop, get the original property from the list.
            if (propIndex > -1) {
                prop = propList.origins[propIndex];
            }

            // If not custom prop, then try looking on default list.
            else {
                propIndex = propList.default.indexOf(prop);

                /* If default prop, then get the original property from default lists */
                if (propIndex > -1) {
                    prop = propList.publics[propIndex];
                }

                /* Else tell the user that defined property is not valid css property */
                else {
                    throw prop + ' is not valid CSS Property!'
                }
            }

            if (value) {
                return this._css(prop, value);
            }

            else {
                return this.length > 0 ? this.get(0).style[prop] : undefined;
            }
        }

        else if (isObject(prop)) {
            foreach(prop, function (key, value) {
                $this.css(key, value);
            });
        }

        else if (isArray(prop)) {
            var proplist = {};

            foreach(prop, function(key) {
                proplist[key] = $this.css(key);
            });

            return proplist;
        }

        else {
            var style = this.first().prop('style'), props = {};

            for (var property in style) {
                if (isNaN(Number(property)) && property !== 'length' && property !== 'cssText' && style[property] !== '' && !isFunction(style[property]) && style[property] !== null) {
                    props[property] = style[property];
                }
            }

            return props;
        }

        return this;
    }

})(window.jQuery || false);
