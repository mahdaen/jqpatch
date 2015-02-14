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
