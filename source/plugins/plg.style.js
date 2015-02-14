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
    }

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
            if (this.get(0).ratio) {
                return this.get(0).ratio;
            }

            /* Count if not exist */
            else {
                return this.get(0).ratio = countRatio(this.width(), this.height());
            }
        }
    }

    /* Creating offset getter module */
    $plg.offset = function() {
        if (this.length <= 0) return this;

        return {
            /* Dimensions */
            width: this.width(),
            height: this.height(),

            /* Positions */
            left: this.get(0).offsetLeft,
            top: this.get(0).offsetTop,

            /* Scrolls */
            scrollTop: this.get(0).scrollTop,
            scrollLeft: this.get(0).scrollLeft,

            /* Box ratio */
            ratio: this.first().ratio()
        };
    }

    /* Creating Box Orientation Module */
    $plg.orientation = function() {
        if (this.length <= 0) return this;

        this.each(function() {
            var offset = $(this).offset();

            if (offset.width > offset.height) {
                $(this).attr('landscape', '');

                this.orientation = 'landscape';
            } else {
                $(this).attr('portrait', '');

                this.orientation = 'portrait';
            }
        });

        return this.first().prop('orientation');
    }

    /* Computed Style Getter */
    $plg.cstyle = function(name) {
        if (this.length > 0 && isString(name)) {
            return getComputedStyle(this.get(0))[name] ? getComputedStyle(this.get(0))[name] : null;
        }
        else if (this.length > 0 && isArray(name)) {
            var props = {}, $this = this;

            foreach(name, function (name) {
                if (getComputedStyle($this.get(0))[name]) props[name] = getComputedStyle($this.get(0))[name];
            });

            return props;
        }

        return null;
    }

})(window.jQuery || false);
