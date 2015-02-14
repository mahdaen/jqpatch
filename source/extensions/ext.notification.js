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
