/**
 * Content Switcher Scripts
 */

(function ($) {
    /* Plugins holder */
    var $plg = $.fn || $.module, $dom = $;

    /* Default Counter */
    var defCount = 0;

    /* Attach to document ready event */
    document.addEventListener('readystatechange', function () {
        if ( document.readyState == 'interactive' ) {
            jqpatch.initswitch();
        }
    });

    /* Initializer */
    jqpatch.initswitch = function (context) {
        !context ? document : context;

        $('[switch]', context).initSwitch();
    };

    /* jQuery or DOMList Plugin */
    $plg.initSwitch = function () {
        /* Pre init switch */
        this.each(function () {
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
        this.each(function () {
            var slider = new Switch(this);
            this.switcher = slider;
        });

        return this;
    };
    $plg.nextSwitch = function () {
        return this.each(function () {
            if ( this.hasOwnProperty('switcher') ) {
                this.switcher.next();
            }
        });
    };
    $plg.prevSwitch = function () {
        return this.each(function () {
            if ( this.hasOwnProperty('switcher') ) {
                this.switcher.prev();
            }
        });
    };
    $plg.goSwitch = function (idx) {
        return this.each(function () {
            if ( this.hasOwnProperty('switcher') ) {
                this.switcher.select(idx);
            }
        });
    };
    $plg.pauseSwitch = function () {
        return this.each(function () {
            $('.progress', this).pause();
        });
    };
    $plg.resumeSwitch = function () {
        return this.each(function () {
            $('.progress', this).resume();
        });
    };

    /* Content Switcher */
    var Switch = function ($object) {
        if ( !isHTML($object) ) return;

        /* Initializing Objects */
        var $holder = $($object), $this = this;

        var defCf = {
            auto       : false,
            hoverPause : false,
            default    : 1,
            duration   : 1,
            hover      : false,
            ease       : Power3.easeInOut || 'Linear',
            effect     : 'default'
        }

        this.ID = $holder.attr('swid') || 'switch' + (defCount + 1);
        defCount++;

        /* Check if already initialized */
        this.preInit = $holder.attr('preinit') ? true : false;

        this.current = 0;
        this.init = true;
        this.ready = true;

        /* Getting Options */
        this.holder = $object;

        /* Getting Configurations */
        this.options = $holder.attr('switch');

        if ( !this.options ) {
            this.options = defCf;
        }
        else {
            this.options = Object.merge(defCf, this.options);
        }

        if ( !this.options.duration || this.options.duration <= 0 ) {
            this.options.duration = 1;
        }

        if ( this.options.hoverPause ) {
            $holder.mouseenter(function (e) {
                e.stopPropagation();
                e.preventDefault();

                $this.progress.pause();
                $this.holdover = true;

                return false;
            }).mouseleave(function (e) {
                e.stopPropagation();
                e.preventDefault();

                $this.progress.resume();
                $this.holdover = false;

                return false;
            });
        }

        /* Define Value to Query */
        if ( this.preInit ) {
            var vqr = '="' + this.ID + '"';
            $holder.remAttr('preinit');
        }
        else {
            var vqr = '';
        }

        /* Getting Switch Item */
        this.items = $('[switch-item' + vqr + ']', this.holder);

        /* Getting Switch Next Button */
        this.nextBtn = $('[switch-next' + vqr + ']', this.holder)
            .click(function (e) {
                if ( !$this.ready ) return;

                e.preventDefault();
                e.stopPropagation();

                $this.next();

                return false;
            });

        /* Getting Switch Prev Button */
        this.prevBtn = $('[switch-prev' + vqr + ']', this.holder)
            .click(function (e) {
                if ( !$this.ready ) return;

                e.preventDefault();
                e.stopPropagation();

                $this.prev();

                return false;
            });

        /* Getting Switch Select */
        this.selectBtns = $('[switch-select' + vqr + ']', this.holder)
            .click(function (e) {
                if ( !$this.ready ) return;

                e.preventDefault();
                e.stopPropagation();

                var idx = $this.selectBtns.indexOf(this);
                $this.select(idx);

                return false;
            });

        /* If hover is enabled */
        if ( this.options.hover ) {
            var hvTime = setTimeout(function () {});

            this.selectBtns
                .mouseenter(function (e) {
                    if ( !$this.ready ) return;

                    e.preventDefault();
                    e.stopPropagation();

                    var self = this;

                    clearTimeout(hvTime);

                    hvTime = setTimeout(function () {
                        self.click();
                    }, 200);

                    return false;
                })
                .mouseleave(function (e) {
                    clearTimeout(hvTime);
                });
        }

        /* Switch Item Closer */
        this.closer = $('[switch-hide' + vqr + ']', this.holder)
            .click(function (e) {
                e.preventDefault();
                e.stopPropagation();

                $this.hide();

                return false;
            });

        /* Getting Switch Progress */
        this.progress = $('[switch-progress' + vqr + ']', this.holder);

        /* If auto is enabled and no progress, create it */
        if ( this.options.auto && this.progress.length <= 0 ) {
            this.progress = $('<div class="progress">')
                .attr('switch-progress', this.ID)
                .prependTo(this.holder);
        }

        /* Activating Default Items execpt options.default is false */
        if ( isNumber(this.options.default) ) {
            this.items.each(function (i) {
                if ( (i + 1) === $this.options.default ) {
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
        if ( this.options.auto ) {
            $this.start();
        }

        return this;
    };

    /* Content Switcher Methods */
    Switch.prototype = {
        next : function () {
            return this.select('next');
        },

        prev : function () {
            return this.select('prev');
        },

        select : function (index) {
            var $this = this;

            $this.active = $this.items.filter('[switch-item="active"]');
            $this.progress.addClass('reset').width('0%');

            if ( isNumber(index) ) {
                $this.target = $this.items.nth(index);
                $this.current = index;

                if ( $this.target.length <= 0 ) {
                    $this.target = $this.items.nth(0);
                    $this.current = 0;
                }
            }

            else if ( isString(index) ) {
                if ( index === 'next' ) {
                    if ( $this.current >= ($this.items.length - 1) ) {
                        $this.target = $this.items.first();
                        $this.current = 0;
                    }
                    else {
                        $this.target = $this.items.nth($this.current + 1);
                        $this.current++;
                    }
                }
                else if ( index === 'prev' ) {
                    if ( $this.current <= 0 ) {
                        $this.target = $this.items.last();
                        $this.current = ($this.items.length - 1);
                    }
                    else {
                        $this.target = $this.items.nth($this.current - 1);
                        $this.current--;
                    }
                }
            }

            this.stop();
            this.animate();

            return this;
        },

        animate : function (single) {
            this.ready = false;

            if ( SWEffects.hasOwnProperty(this.options.effect) ) {
                SWEffects[ this.options.effect ].call(this, single);
            }
            else {
                SWEffects[ 'default' ].call(this);
            }

            return this;
        },

        start : function () {
            var $this = this;

            if (!this.holdover) {
                $this.progress.removeClass('reset').ganimate({width : '100%' }, this.options.auto, function () {
                    $this.next();
                });
            }

            return this;
        },

        stop : function () {
            this.progress.kill().css('width', 0);

            return this;
        },

        hide : function () {
            this.active = this.items.filter('[switch-item="active"]');
            this.animate(true);

            return this;
        },

        done : function () {
            this.ready = true;

            if ( !this.init && this.options.auto ) {
                this.start();
            }

            if ( this.options.callback && isFunction(this.options.callback) ) {
                this.options.callback.call(this);
            }

            return this;
        }
    };

    /* Effect maker */
    Switch.addEffect = function (name, handler) {
        if ( isString(name) && isFunction(handler) ) {
            SWEffects[ name ] = handler;
        }

        else if ( isObject(name) ) {
            foreach(name, function (name, handler) {
                if ( isFunction(handler) ) {
                    SWEffects[ name ] = handler;
                }
            });
        }

        return Switch;
    };

    /* Attach Switch to Window */
    window.Switch = Switch;

    /* Switch Effect Collections */
    var SWEffects = {
        /* Default Effect */
        default : function (single) {
            var $this = this;

            if ( $this.init ) {
                $this.init = false;
                $this.target.css('opacity', 1).addClass('active').attr('switch-item', 'active');
                $this.selectBtns.nth($this.current).addClass('active').attr('switch-select', 'active');

                $this.done();
            }

            else {
                /* Deactivate Active Item */
                if ( $this.active ) {
                    $this.active.remClass('active').ganimate({
                        opacity : 0
                    }, {
                        duration : $this.options.duration,
                        ease     : $this.options.ease
                    }, function () {
                        $(this).attr('switch-item', '').addClass('inactive');

                        $this.done();
                    });
                }

                /* If not single switch, activate target */
                if ( !single ) {
                    /* Activate Target Item */
                    if ( $this.target ) {
                        $this.target.remClass('inactive').ganimate({
                            opacity : 1
                        }, {
                            duration : $this.options.duration,
                            ease     : $this.options.ease
                        }, function () {
                            $(this).attr('switch-item', 'active').addClass('active');

                            $this.done();
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
        }
    };
})(window.DOMList || window.jQuery);
