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

    /* Module to get index number of element */
    $plg.indexOf = function(elem) {
        if (isHTML(elem)) {
            return this.toArray().indexOf(elem);
        } else if (isString(elem)) {
            return this.toArray().indexOf(this.filter(elem).get());
        }

        return -1;
    };

    /* Module to get parent element until meet with condition */
    $plg.parentUntil = function(query) {
        if (this.parent().get() === $('body').get()) return $();

        if (isString(query)) {
            if (this.parent().filter(query).length > 0) {
                return this.parent();
            } else {
                return this.parent().parentUntil(query);
            }
        }

        else if (isFunction(query)) {
            if (query.call(this.parent().get())) {
                return this.parent();
            } else {
                return this.parent().parentUntil(query);
            }
        }

        return this;
    };
})(window.jQuery || false);
