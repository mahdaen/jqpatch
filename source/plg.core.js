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
