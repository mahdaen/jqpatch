(function($) {
    'use strict';

    /* Escape if no jQuery loaded */
    if (!$) return;

    /* Plugins holder */
    var $plg = $.fn;

    /* Event Provider */
    var EventProvider = function() {
        this.events = {};
    };

    /* Event Provider Core Function */
    EventProvider.prototype = {
        /* Search Event Provider */
        search: function(name) {
            if (isString(name)) {
                return isObject(this.events[name]) ? this.events[name] : undefined;
            }

            return undefined;
        },

        /* Register Event Provider */
        register: function(name, provider, options) {
            if (isString(name) && isFunction(provider)) {
                this.events[name] = {
                    maker: provider,
                    event: new CustomEvent(name, options)
                };
            }

            return this.events[name].event;
        },

        /* Dispatch Event Provider */
        dispatch: function(name, elem, props) {
            if (isString(name) && isHTML(elem) && this.events[name]) {
                var event = this.events[name].event;

                if (isObject(props)) {
                    foreach(props, function (key, value) {
                        event[key] = value;
                    });
                }

                elem.dispatchEvent(event);
            }
        }
    };

    /* Register EventProvider to window */
    var eventProvider = new EventProvider;
    window.EventProvider = eventProvider;

    /* Event Listener */
    $plg.listen = function(name, type, handler) {
        this.each(function() {
            var elem = this;

            /* Add prefix to event type */
            if (isString(type) && elem.hasOwnProperty('on' + type))  type = 'on' + type;

            /* Using single name registration */
            if (isString(name)) {
                /* Using single event type registration */
                if (isString(type) && isFunction(handler)) {
                    /* Add event collection if not exist */
                    if (!elem._evcol) elem._evcol = {};

                    /* Add event type collection if not exist */
                    if (!elem._evcol[type]) elem._evcol[type] = { _init: true };

                    /* Add event type handler collection if not exist */
                    if (!elem._evcol[type][name]) elem._evcol[type][name] = [];

                    /* Pushing event handler to collections */
                    elem._evcol[type][name].push(handler);
                }

                /* Using multiple event type registration */
                else if (isObject(type)) {
                    foreach(type, function(type, handler) {
                        if (isFunction(handler)) {
                            $(elem).listen(name, type, handler);
                        }
                    });
                }
            }

            /* Using multiple name registration */
            else if (isObject(name)) {
                /* Iterate type list */
                foreach(name, function (name, types) {
                    if (isObject(types)) {
                        /* Iterate names list */
                        foreach(types, function (type, handler) {
                            if (isFunction(handler)) {
                                $(elem).listen(type, name, handler);
                            }
                        });
                    }
                });
            }

            /* Create DOMList Event Handler if not already defined */
            if (elem._evcol) {
                if (elem._evcol[type] && elem._evcol[type]._init) {
                    elem._evcol[type]._init = false;

                    /* Tell Event Provider (if available) to provide custom event to this element */
                    var cev = eventProvider.search(type);
                    if (cev) cev.maker.call(elem);

                    /* Creating Default Handler */
                    var defHandler = function(e) {
                        var $self = this;

                        if ($self._evcol[type]) {
                            foreach($self._evcol[type], function (name, handlers) {
                                if (name !== '_init') {
                                    foreach(handlers, function (handler) {
                                        if (isFunction(handler)) {
                                            handler.call($self, e);
                                        }
                                    });
                                }
                            });
                        }
                    }

                    $(elem).on(type.replace(/^on/, ''), defHandler);
                }
            }
        });

        return this;
    };

    /* Event Unlistener */
    $plg.unlisten = function(name, type) {
        var self = this;
        if (isString(name)) {
            if (isString(type)) {
                this.each(function() {
                    if (this.hasOwnProperty('on' + type)) type = 'on' + type;

                    if (this._evcol[type] && this._evcol[type][name]) {
                        delete this._evcol[type][name];
                    }
                });
            } else if (isArray(type)) {
                foreach(type, function (type) {
                    self.unlisten(name, type);
                });
            } else {
                this.each(function() {
                    var $this = this;

                    foreach($this._evcol, function (type, names) {
                        if (isObject(names) && names.hasOwnProperty(name)) {
                            delete $this._evcol[type][name];
                        }
                    });
                });
            }
        } else if (isArray(name)) {
            if (isString(type)) {
                foreach(name, function(name) {
                    self.unlisten(name, type);
                });
            } else if (isArray(type)) {
                foreach(name, function(name) {
                    foreach(type, function (type) {
                        self.unlisten(name, type);
                    });
                });
            }
        }

        return this;
    };

    /* Handle Events */
    $plg.handle = function(type, handler) {
        var $this = this;

        if (isString(type) && isFunction(handler)) {
            $this.listen('default', type, handler);
        } else if (isObject(type)) {
            $this.listen('default', type);
        } else if (isArray(type) && isFunction(handler)) {
            foreach(type, function (type) {
                $this.listen('default', type, handler);
            });
        }

        return this;
    };

    /* Unhandle events */
    $plg.unhanlde = function(type) {
        if (isString(type) || isArray(type)) {
            this.unlisten('default', type);
        }

        return this;
    }

    /* Patching Loaded Event */
    $.loaded = function(handler) {
        $(document).ready(handler);
    }
})(window.jQuery || false);
