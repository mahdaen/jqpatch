/**
 * @apiVersion 1.0.0
 * @apiGroup jQPatch
 *
 * @api {push} jQuery.push(element); .push()
 * @apiName Push
 * @apiDescription Push single element or multiple element (jQuery or Array) to current jQuery. Using CSS selector string as element also accepted.
 *
 * @apiParam {Multi} element HTML Element, jQuery, Array Element List, or CSS Selector String.
 *
 * @apiExample Sample
 * var foo = $('.foo');
 * var bar = $('.bar')[0];
 *
 * foo.push(bar); // Push bar to foo.
 * foo.push([bar]); // Push bar to foo.
 * foo.push('.bar'); // Push bar to foo.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQPatch
 *
 * @api {firstchild} jQuery.firstChild(); .firstChild()
 * @apiName FirstChild
 * @apiDescription Get the first child of the first selected elements. Return jQuery object.
 *
 * @apiExample {js} Sample #1
 * $('.container').firstChild();
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQPatch
 *
 * @api {lastchild} jQuery.lastChild(); .lastChild()
 * @apiName LastChild
 * @apiDescription Get the last child of the first selected elements. Return jQuery object.
 *
 * @apiExample {js} Sample #1
 * $('.container').lastChild();
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQPatch
 *
 * @api {nth} jQuery.nth(index); .nth()
 * @apiName NTH
 * @apiDescription Get the selected elements by specific index. Return jQuery object.
 *
 * @apiParam {Number} index Index number. Start from 0.
 *
 * @apiExample {js} Sample #1
 * $('span').nth(0);
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQPatch
 *
 * @api {nthChild} jQuery.nthChild(index); .nthChild()
 * @apiName NthChild
 * @apiDescription Get the child elements by specific index from the first selected elements. Return jQuery object.
 *
 * @apiParam {Number} index Index number. Start from 0.
 *
 * @apiExample {js} Sample #1
 * $('.container').nthChild(3);
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQPatch
 *
 * @api {attr} jQuery.attr(name,value); .attr()
 * @apiName Attr
 * @apiDescription Attribute getter and setter. You can set value with anythings. They will be automatically converted. When you get the value, they also will be converted automatically.
 *
 * @apiParam {Any} name String attribute name or Object containing list of attributes or Array containing attribute name list.
 * @apiParam {Any} [value] Attribute value.
 *
 * @apiExample {js} Sample #1
 * // <span class="foo" bar="10" foo="false" foobar="[1,2,3]"></span>
 *
 * // Get all attributes.
 * var attr = $('.foo').attr();
 * //>> attr => { class: "foo", bar: 10, foo: false, foobar: [1,2,3] }
 *
 * @apiExample {js} Sample #2
 * // <span class="foo" bar="10" foo="false" foobar="[1,2,3]"></span>
 *
 * // Get single attribute value.
 * var attr = $('.foo').attr('foo');
 * //>> attr => false
 *
 * @apiExample {js} Sample #3
 * // <span class="foo" bar="10" foo="false" foobar="[1,2,3]"></span>
 *
 * // Set single attribute and value.
 * $('.foo').attr('barfoo', { a: 1, b: 2, c: 3 });
 *
 * @apiExample {js} Sample #4
 * // <span class="foo" bar="10" foo="false" foobar="[1,2,3]"></span>
 *
 * // Set multiple attribute and value.
 * $('.foo').attr({ foo: true, bar: 100, foobar: { a: 1, b: 2, c: 3 } });
 *
 * @apiExample {js} Sample #5
 * // <span class="foo" bar="10" foo="false" foobar="[1,2,3]"></span>
 *
 * // Set multiple attribute without values.
 * $('.foo').attr(['solved', 'required', 'async']);
 *
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQPatch
 *
 * @api {remattr} jQuery.removeAttr(name); .removeAttr()
 * @apiName RemAttr
 * @apiDescription Remove one or many attribute from selected elements.
 *
 * @apiParam {Any} name String attribute name or array name list.<br />Use space to separate the attribute name for multiple removal. E.g 'foo bar'.
 *
 * @apiExample {js} Sample #1
 * $('span').remAtrr('foo'); // Remove single attribute.
 * $('span').removeAttr(['foo', 'bar']); // Remove multiple attribute.
 * $('span').removeAttr('foo bar'); // Remove multiple attribute.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQPatch
 *
 * @api {data} jQuery.data(name,value); .data()
 * @apiName Data
 * @apiDescription Get first selected element data or set all selected elements data.
 *
 * @apiParam {Any} name String data-attribute name. E.g. 'profile' for 'data-profile'.<br>Use string space-delimiter to get or set multiple data-attribute. E.g 'foo bar' for 'data-foo data-bar'.
 * @apiParam {Any} [value] Value to set. Leave blank if yout want to get the data-attribute-value. Use array to wrap values if you set multiple data-attribute.
 *
 * @apiExample {js} Sample #1
 * $('span').data(); // Get all data-attributes.
 *
 * $('span').data('foo'); // Get value of 'data-foo'.
 * $('span').data('foo', {a: 1, b: 2}); // Set 'data-foo' value.
 *
 * $('span').data('foo bar'); // Get data-foo and data-bar.
 * $('span').data('foo bar', [200, {a: 1, b: 2}]); // Set data-foo with 200, data-bar with object.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQPatch
 *
 * @api {remdata} jQuery.removeData(name); .removeData()
 * @apiName RemData
 * @apiDescription Remove data-attribute from selected elements.
 *
 * @apiParam {String} name String data-attribute name. E.g 'foo' for 'data-foo'.<br>Use space-delimiter to separate multiple name. E.g 'foo bar' for 'data-foo data-bar'.
 *
 * @apiExample Sample #1
 * $('span').removeData('foo'); // Remove data-foo.
 * $('span').removeData('foo bar'); // Remove data-foo and data-bar.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQPatch
 *
 * @api {prop} jQuery.prop(name,value); .prop()
 * @apiName Prop
 * @apiDescription Get the first selected elements property value or set all selected elements property value.<br />If element also have attribute with that name, setting property will also set the attribute.
 *
 * @apiParam {String} name String property name.
 * @apiParam {Any} [value] String property value.
 *
 * @apiExample {js} Sample #1
 * $('input[type="text"]').prop('value'); // Get value.
 * $('input[type="text"]').prop('value', 'Foo'); // Set value to Foo.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQPatch
 *
 * @api {css} jQuery.css(property,value); .css()
 * @apiName CSS
 * @apiDescription Get or Set Inline CSS Styles. We detect and use native browser version of css. So you don't need to add prefix in non-standard css properties.
 *
 * @apiParam {String} property String CSS Property name. You can use object to set multiple CSS. Leave blank to get all available inline css and jQuery will return an object. CSS Property name is case incensitive.
 * @apiParam {String} value String CSS Value. You can use number or boolean as well.
 *
 * @apiExample {js} Sample
 * // Set single property.
 * $('span').css('background-image', 'url(...)');
 *
 * // Set multiple properties.
 * $('span').css({
 *     backgroundImage: 'url(...)',
 *     'background-color': '#ccc',
 *     borderradius: 3
 * });
 *
 * // Get single property.
 * var bg = $('span').css('background-image');
 *
 * // Get all css.
 * var csses = $('span').css();
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQPatch
 *
 * @api {cstyle} jQuery.cstyle(property); .cstyle()
 * @apiName CStyle
 * @apiDescription Get computed css from first selected element.
 *
 * @apiParam {String} property String CSS Property name or array property list to get multiple properties.
 *
 * @apiExample {js} Sample
 * $('span').cstyle('width'); // Get computed width.
 * $('span').cstyle(['width', 'height']); // Get computed width and height.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQPatch
 *
 * @api {offset} jQuery.offset(); .offset()
 * @apiName offset
 * @apiDescription Get offset of first selected element. Returns object { width, height, scrollTop, scrollLeft, top, left, ratio };
 *
 * @apiExample {js} Sample
 * $('span').offset();
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQPatch
 *
 * @api {ratio} jQuery.ratio(ratio); .ratio()
 * @apiName ratio
 * @apiDescription Get or set box ratio of first selected element.
 *
 * @apiExample {js} Sample
 * $('span').ratio(); // Get the box ratio.
 * $('span').ratio('16:9'); // Set the box ratio.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQPatch
 *
 * @api {orientation} jQuery.orientation(); .orientation()
 * @apiName orientation
 * @apiDescription Get and apply box orientation of first selected element. Attribute 'portrait' or 'landscape' will added to each elements.
 *
 * @apiExample {js} Sample
 * $('span').orientation(); // Get the box orientation.
 */


/**
 * @apiVersion 1.0.0
 * @apiGroup jQPatch
 *
 * @api {remclass} jQuery.removeClass(name); .removeClass()
 * @apiName RemClass
 * @apiDescription Remove class from selected elements class lists.
 *
 * @apiParam {String} name String class name. You can use array if you want to use remove multiple class.
 *
 * @apiExample {js} Sample #1
 * $('.foo').removeClass('bar');
 * $('.foo').removeClass(['bar', 'foo', 'foobar']);
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQPatch
 *
 * @api {hasattr} jQuery.hasAttr(name); .hasAttr()
 * @apiName HasAttr
 * @apiDescription Check does the first selected element has specific attribute or not.
 *
 * @apiParam {Any} name String attribute name to check.<br>Use array to check does have one of attributes, or string separated by space to check does has both attribute.
 *
 * @apiExample {js} Sample #1
 * $('span').hasAttr('foo'); // Does has attribute foo.
 * $('span').hasAttr(['foo', 'bar']); // Does has attribute foo or bar.
 * $('span').hasAttr('foo bar'); // Does has attribute foo and bar.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQPatch
 *
 * @api {hasdata} jQuery.hasData(name); .hasData()
 * @apiName HasData
 * @apiDescription Check does first selected element has specific data attribute.
 *
 * @apiParam {Any} String data-attribute name. Use array to check does has one of data-attribute, or use string to check does has both data-attribute.
 *
 * @apiExample Sample #1
 * $('span').hasData('foo'); // Check does has data-attribute 'data-foo'.
 * $('span').hasData(['foo', 'bar']); // Check does has data-attribute 'data-foo' or 'data-bar'.
 * $('span').hasData('foo bar'); // Check does has data-attribute 'data-foo' and 'data-bar'.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQNotice
 *
 * @api {notification} jQuery.notification(title,options) jQuery.notification()
 * @apiName notification
 * @apiDescription Create new or manage HTML5 Notification API.
 * With jQNotice, you can simply show new notification or use existing notification object to show notification.
 * jQNotice will request permission when first time created.
 *
 * @apiParam {String} [title] String Notification title.
 * @apiParam {Object} [options] Object that contains Notifications options.
 * options contains "body, dir, tag, icon, lang" and noticiation callbacks "onclick, onclose, onshow, onerror".
 *
 * @apiExample {js} Sample:
 * // Create new notifications and request permission if not already granted.
 * // Notification will show after permission granted.
 * var notif = $.notification('Notification Test', { body: 'Lorem ipsum dolor' }).show();
 *
 * // Show another message using existing jQNotice object.
 * notif.set('body', 'Another lorem ipsum').show('Another Test');
 *
 * // Using callback in existing jQNotice object.
 * notif.onclick(function(e) { console.log(e, this) }).show('Notification with callback');
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQNotice
 *
 * @api {show} jQNotice.show(title,options) .show()
 * @apiName show
 * @apiDescription Show the notification.
 *
 * @apiParam {String} [title] String notification title.
 * @apiParam {Object} [options] Object notification options without callbacks.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQNotice
 *
 * @api {set} jQNotice.set(name,value) .set()
 * @apiName set
 * @apiDescription Set notification options.
 *
 * @apiParam {String} name String option name or Object options.
 * @apiParam {Object} value String option value or leave blank if name is object.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQNotice
 *
 * @api {onclick} jQNotice.onclick(handler) .onclick()
 * @apiName onclick
 * @apiDescription Handle notification onclick event.
 *
 * @apiParam {Function} handler Function to handle event. Hanlder will become jQNotice object and get event as param.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQNotice
 *
 * @api {onshow} jQNotice.onshow(handler) .onshow()
 * @apiName onshow
 * @apiDescription Handle notification onshow event.
 *
 * @apiParam {Function} handler Function to handle event. Hanlder will become jQNotice object and get event as param.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQNotice
 *
 * @api {onerror} jQNotice.onerror(handler) .onerror()
 * @apiName onerror
 * @apiDescription Handle notification onerror event.
 *
 * @apiParam {Function} handler Function to handle event. Hanlder will become jQNotice object and get event as param.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup jQNotice
 *
 * @api {onclose} jQNotice.onclose(handler) .onclose()
 * @apiName onclose
 * @apiDescription Handle notification onclose event.
 *
 * @apiParam {Function} handler Function to handle event. Hanlder will become jQNotice object and get event as param.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup EventProvider
 *
 * @api {eventprovider} EventProvider .about
 * @apiName EventProvider
 * @apiDescription Create or trigger custom event to element.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup EventProvider
 *
 * @api EventProvider.search(name); .search()
 * @apiName evSearch
 * @apiDescription Search custom event.
 *
 * @apiParam {String} name String event name.
 *
 * @apiExample {js} Sample
 * EventProvider.search('swipe'); // Return swipe event provider object.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup EventProvider
 * @api {register} EventProvider.register(name,maker,options); .register()
 * @apiName evRegister
 * @apiDescription Register custom event.
 *
 * @apiParam {String} name String custom event name.
 * @apiParam {Function} maker Function that handle event initialization. This function will be called by element if element listen to that event. You must manually trigger that event under this function.
 * @apiParam {Object} options Custom event options. E.g { bubbles: false, cancelable: false, detail: undefind }
 *
 * @apiExample {js} Sample
 * // Registering custom event.
 * EventProvider.register('maxclick', function() {
 *     // Listen click to the element.
 *     $(this).click(function() {
 *         if (!this.maxclick) this.maxclick = 1;
 *
 *         if (this.maxclick === 5) {
 *             // Trigger the event to target and add maxclick property to event object.
 *             EventProvider.dispatch('maxclick', this, { maxclick: this.maxclick });
 *         } else {
 *             this.maxclick++;
 *         }
 *     });
 * });
 *
 * // Listening event.
 * $('span').handle('maxclick', function(e) {
 *     console.log('Your reached max click: ' + e.maxclick);
 * });
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup EventProvider
 *
 * @api {dispatch} EventProvider.dispatch(name,targetElement,properties); .dispatch()
 * @apiName evDispatch
 * @apiDescription Trigger custom event to element.
 *
 * @apiParam {String} Custom event name.
 * @apiParam {HTMLElement} HTML Element to trigger custom event on.
 * @apiParam {Object} [properties] Properties that will be added to event object. E.g { a: 1, b: 2 }. Then when event listener will get 'event.a' and 'event.b'.
 *
 * @apiExample {js} Sample
 * $('span')
 *     // Create listener.
 *     .handle('foo', function(e) {
 *         console.log(e.a, e.b);
 *     })
 *
 *     // Triggering event.
 *     .each(function() {
 *         EventProvider.dispatch('foo', this, { a: 1, b: 2 });
 *     });
 */


/**
 * @apiVersion 1.0.0
 * @apiGroup EventProvider
 *
 * @api {listen} jQuery.listen(name,type,handler); .listen()
 * @apiName Listen
 * @apiDescription Add named event handler to selected elements.
 * Named event handler give possibility to remove event handler only that has specific name, not remove all event handler.
 *
 * @apiParam {Multi} name String handler name, or object contains names, types and handlers.
 * @apiParam {Multi} type String event type, or object contains types.
 * @apiParam {Function} handler Function to handle event.
 *
 * @apiExample {js} Sample #1
 * // Handle click on spans with name fooclick.
 * $('span').listen('fooclick', 'click', function() {});
 *
 * // Handle multiple event with name foo.
 * $('span').listen('foo', {
 *     click: function() {},
 *     mouseenter: function() {}
 * );
 *
 * // Handle mutiple name and events.
 * $('span').listen({
 *     foo: {
 *         click: function() {}
 *     },
 *     bar: {
 *         click: function() {}
 *     }
 * });
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup EventProvider
 *
 * @api {unlisten} jQuery.unlisten(name,type); .unlisten()
 * @apiName Unlisten
 * @apiDescription Remove named event handler from selected elements.
 *
 * @apiParam {Multi} name handler name or array handler names.
 * @apiParam {Multi} [type] String event type or array event types. Leave blank to remove all event from that name.
 *
 * @apiExample {js} Sample
 * // Remove fooclick handler.
 * $('span').unlisten('fooclick');
 *
 * // Remove click event from foo.
 * $('span').unlisten('foo', 'click');
 *
 * // Remove click event from foo and bar.
 * $('span').unlisten(['foo', 'bar'], 'click');
 *
 * // Remove click and mouseenter event from foo.
 * $('span').unlisten('foo', ['click', 'mouseenter']);
 *
 * // Remove click and mouseenter event from foo and bar.
 * $('span').unlisten(['foo', 'bar'], ['click', 'moueseenter']);
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup EventProvider
 *
 * @api {handle} jQuery.handle(type,handler); .handle()
 * @apiName Handle
 * @apiDescription Add event handler to selected elements.
 *
 * @apiParam {Multi} type String event type or object contains events.
 * @apiParam {Function} [handler] Function to handle event.
 *
 * @apiExample {js} Sample
 * // Hanlde single event.
 * $('span').handle('click', function() {});
 *
 * // Handle multiple events.
 * $('span').handle({
 *     click: function() {},
 *     mouseenter: function() {}
 * });
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup EventProvider
 *
 * @api {unhandle} jQuery.unhandle(type); .unhandle()
 * @apiName Unhandle
 * @apiDescription Remove event handler from selected elements.
 *
 * @apiParam {Multi} type String event type or array type list.
 *
 * @apiExample {js} Sample
 * // Remove single event.
 * $('span').unhandle('click');
 *
 * // Remove multiple event.
 * $('span').unhandle(['click', 'mouseenter']);
 */

/* Animation Modules ---------------------------- */
/**
 * @apiVersion 1.0.0
 * @apiGroup Animation
 *
 * @api {animate} jQuery.ganimate(properties,options,callback); .ganimate()
 * @apiName animate
 * @apiDescription Animate selected elements. Animation needs TweenMax (GSAP) to run. See TweenMax docs to find needed options.
 *
 * @apiParam {Object} properties Object CSS Property and value list. Use CSS Properties only for each key. Don't put GSAP options here.
 *
 * @apiParam {Object} [options] Object animation options.
 * Use number as duration if no special options like easing. Duration is in seconds not milliseconds.
 * Default duration if no options defined or nor duration defined is 0.5s
 *
 * @apiParam {Function} [callback] Function to be called when animations finished.
 *
 * @apiExample {js} Sample
 * // Animate with callback and special options in 3s.
 * $dom('.card').ganimate({
 *     color: 'red',
 *     opacity: 0.5
 * }, {
 *     duration: 3,
 *     ease: Power4.easeInOut
 * }, function() {
 *     console.log('animation finished');
 * });
 *
 * // Animate without callback and special options in 5s.
 * $dom('.card').ganimate({
 *     opacity: 0.5,
 *     backgroundColor: 'green'
 * }, 5);
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup Animation
 *
 * @api {keyframes} jQuery.keyframes(times,options,callback); .keyframes()
 * @apiName keyframes
 * @apiDescription Animate selected elements with keyframes.
 *
 * @apiParam {Object} times Object css timeline. Main key should use number. E.g { 10: {}, 50: {}, 100: {} }. 10 is mean 10%, 50 is 50% an so on.
 * @apiParam {Object} [options] Each animation options. See .ganimate() docs to find out about the options.
 * @apiParam {Function} [callback] Callback that will be called when keyframes finished.
 *
 * @apiExample {js} Sample
 * $dom('.card').keyframes({
 *    10: {
 *        color: 'red'
 *    },
 *    50: {
 *        color: 'green'
 *    },
 *    100: {
 *        color: 'blue'
 *    }
 * }, {
 *     duration: 5,
 *     ease: Power3.easeInOut
 * }, function() {
 *     console.log('Keyframes finished.');
 * });
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup Animation
 *
 * @api {pause} jQuery.pause() .pause()
 * @apiName pause
 * @apiDescription Pause animation in selected elements.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup Animation
 *
 * @api {resume} jQuery.resume() .resume()
 * @apiName resume
 * @apiDescription Resume animation in selected elements.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup Animation
 *
 * @api {stop} jQuery.gstop() .gstop()
 * @apiName stop
 * @apiDescription Stop animation in selected elements.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup Animation
 *
 * @api {reverse} jQuery.reverse() .reverse()
 * @apiName reverse
 * @apiDescription Reverse animation in selected elements.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup Animation
 *
 * @api {seek} jQuery.seek(time) .seek()
 * @apiName seek
 * @apiDescription Seek animation to time in selected elements.
 * @apiParam {Number} time Time in seconds to jump in.
 */

/**
 * @apiVersion 1.0.0
 * @apiGroup Animation
 *
 * @api {timeScale} jQuery.timeScale(scale) .timeScale()
 * @apiName timeScale
 * @apiDescription Scale animation time in selected elements.
 * @apiParam {Number} scale Number of scale time.
 */
