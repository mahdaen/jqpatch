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
