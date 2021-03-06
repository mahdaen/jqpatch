define({ "api": [
  {
    "version": "1.0.0",
    "group": "Animation",
    "type": "animate",
    "url": "jQuery.ganimate(properties,options,callback);",
    "title": ".ganimate()",
    "name": "animate",
    "description": "<p>Animate selected elements. Animation needs TweenMax (GSAP) to run. See TweenMax docs to find needed options.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "properties",
            "description": "<p>Object CSS Property and value list. Use CSS Properties only for each key. Don&#39;t put GSAP options here.</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "options",
            "description": "<p>Object animation options. Use number as duration if no special options like easing. Duration is in seconds not milliseconds. Default duration if no options defined or nor duration defined is 0.5s</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "callback",
            "description": "<p>Function to be called when animations finished.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "// Animate with callback and special options in 3s.\n$('.card').ganimate({\n    color: 'red',\n    opacity: 0.5\n}, {\n    duration: 3,\n    ease: Power4.easeInOut\n}, function() {\n    console.log('animation finished');\n});\n\n// Animate without callback and special options in 5s.\n$('.card').ganimate({\n    opacity: 0.5,\n    backgroundColor: 'green'\n}, 5);",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "Animation"
  },
  {
    "version": "1.0.0",
    "group": "Animation",
    "type": "keyframes",
    "url": "jQuery.keyframes(times,options,callback);",
    "title": ".keyframes()",
    "name": "keyframes",
    "description": "<p>Animate selected elements with keyframes.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "times",
            "description": "<p>Object css timeline. Main key should use number. E.g { 10: {}, 50: {}, 100: {} }. 10 is mean 10%, 50 is 50% an so on.</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "options",
            "description": "<p>Each animation options. See .ganimate() docs to find out about the options.</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "callback",
            "description": "<p>Callback that will be called when keyframes finished.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$('.card').keyframes({\n   10: {\n       color: 'red'\n   },\n   50: {\n       color: 'green'\n   },\n   100: {\n       color: 'blue'\n   }\n}, {\n    duration: 5,\n    ease: Power3.easeInOut\n}, function() {\n    console.log('Keyframes finished.');\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "Animation"
  },
  {
    "version": "1.0.0",
    "group": "Animation",
    "type": "pause",
    "url": "jQuery.pause()",
    "title": ".pause()",
    "name": "pause",
    "description": "<p>Pause animation in selected elements.</p> ",
    "filename": "tags/v1.0.0.js",
    "groupTitle": "Animation"
  },
  {
    "version": "1.0.0",
    "group": "Animation",
    "type": "resume",
    "url": "jQuery.resume()",
    "title": ".resume()",
    "name": "resume",
    "description": "<p>Resume animation in selected elements.</p> ",
    "filename": "tags/v1.0.0.js",
    "groupTitle": "Animation"
  },
  {
    "version": "1.0.0",
    "group": "Animation",
    "type": "reverse",
    "url": "jQuery.reverse()",
    "title": ".reverse()",
    "name": "reverse",
    "description": "<p>Reverse animation in selected elements.</p> ",
    "filename": "tags/v1.0.0.js",
    "groupTitle": "Animation"
  },
  {
    "version": "1.0.0",
    "group": "Animation",
    "type": "seek",
    "url": "jQuery.seek(time)",
    "title": ".seek()",
    "name": "seek",
    "description": "<p>Seek animation to time in selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "time",
            "description": "<p>Time in seconds to jump in.</p> "
          }
        ]
      }
    },
    "filename": "tags/v1.0.0.js",
    "groupTitle": "Animation"
  },
  {
    "version": "1.0.0",
    "group": "Animation",
    "type": "stop",
    "url": "jQuery.gstop()",
    "title": ".gstop()",
    "name": "stop",
    "description": "<p>Stop animation in selected elements.</p> ",
    "filename": "tags/v1.0.0.js",
    "groupTitle": "Animation"
  },
  {
    "version": "1.0.0",
    "group": "Animation",
    "type": "timeScale",
    "url": "jQuery.timeScale(scale)",
    "title": ".timeScale()",
    "name": "timeScale",
    "description": "<p>Scale animation time in selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "scale",
            "description": "<p>Number of scale time.</p> "
          }
        ]
      }
    },
    "filename": "tags/v1.0.0.js",
    "groupTitle": "Animation"
  },
  {
    "version": "1.0.0",
    "group": "EventProvider",
    "type": "eventprovider",
    "url": "EventProvider",
    "title": ".about",
    "name": "EventProvider",
    "description": "<p>Create or trigger custom event to element.</p> ",
    "filename": "tags/v1.0.0.js",
    "groupTitle": "EventProvider"
  },
  {
    "version": "1.0.0",
    "group": "EventProvider",
    "type": "handle",
    "url": "jQuery.handle(type,handler);",
    "title": ".handle()",
    "name": "Handle",
    "description": "<p>Add event handler to selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Multi",
            "optional": false,
            "field": "type",
            "description": "<p>String event type or object contains events.</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": true,
            "field": "handler",
            "description": "<p>Function to handle event.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "// Hanlde single event.\n$('span').handle('click', function() {});\n\n// Handle multiple events.\n$('span').handle({\n    click: function() {},\n    mouseenter: function() {}\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "EventProvider"
  },
  {
    "version": "1.0.0",
    "group": "EventProvider",
    "type": "listen",
    "url": "jQuery.listen(name,type,handler);",
    "title": ".listen()",
    "name": "Listen",
    "description": "<p>Add named event handler to selected elements. Named event handler give possibility to remove event handler only that has specific name, not remove all event handler.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Multi",
            "optional": false,
            "field": "name",
            "description": "<p>String handler name, or object contains names, types and handlers.</p> "
          },
          {
            "group": "Parameter",
            "type": "Multi",
            "optional": false,
            "field": "type",
            "description": "<p>String event type, or object contains types.</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "handler",
            "description": "<p>Function to handle event.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "// Handle click on spans with name fooclick.\n$('span').listen('fooclick', 'click', function() {});\n\n// Handle multiple event with name foo.\n$('span').listen('foo', {\n    click: function() {},\n    mouseenter: function() {}\n);\n\n// Handle mutiple name and events.\n$('span').listen({\n    foo: {\n        click: function() {}\n    },\n    bar: {\n        click: function() {}\n    }\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "EventProvider"
  },
  {
    "version": "1.0.0",
    "group": "EventProvider",
    "type": "unhandle",
    "url": "jQuery.unhandle(type);",
    "title": ".unhandle()",
    "name": "Unhandle",
    "description": "<p>Remove event handler from selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Multi",
            "optional": false,
            "field": "type",
            "description": "<p>String event type or array type list.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "// Remove single event.\n$('span').unhandle('click');\n\n// Remove multiple event.\n$('span').unhandle(['click', 'mouseenter']);",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "EventProvider"
  },
  {
    "version": "1.0.0",
    "group": "EventProvider",
    "type": "unlisten",
    "url": "jQuery.unlisten(name,type);",
    "title": ".unlisten()",
    "name": "Unlisten",
    "description": "<p>Remove named event handler from selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Multi",
            "optional": false,
            "field": "name",
            "description": "<p>handler name or array handler names.</p> "
          },
          {
            "group": "Parameter",
            "type": "Multi",
            "optional": true,
            "field": "type",
            "description": "<p>String event type or array event types. Leave blank to remove all event from that name.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "// Remove fooclick handler.\n$('span').unlisten('fooclick');\n\n// Remove click event from foo.\n$('span').unlisten('foo', 'click');\n\n// Remove click event from foo and bar.\n$('span').unlisten(['foo', 'bar'], 'click');\n\n// Remove click and mouseenter event from foo.\n$('span').unlisten('foo', ['click', 'mouseenter']);\n\n// Remove click and mouseenter event from foo and bar.\n$('span').unlisten(['foo', 'bar'], ['click', 'moueseenter']);",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "EventProvider"
  },
  {
    "version": "1.0.0",
    "group": "EventProvider",
    "type": "dispatch",
    "url": "EventProvider.dispatch(name,targetElement,properties);",
    "title": ".dispatch()",
    "name": "evDispatch",
    "description": "<p>Trigger custom event to element.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Custom",
            "description": "<p>event name.</p> "
          },
          {
            "group": "Parameter",
            "type": "HTMLElement",
            "optional": false,
            "field": "HTML",
            "description": "<p>Element to trigger custom event on.</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "properties",
            "description": "<p>Properties that will be added to event object. E.g { a: 1, b: 2 }. Then when event listener will get &#39;event.a&#39; and &#39;event.b&#39;.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$('span')\n    // Create listener.\n    .handle('foo', function(e) {\n        console.log(e.a, e.b);\n    })\n\n    // Triggering event.\n    .each(function() {\n        EventProvider.dispatch('foo', this, { a: 1, b: 2 });\n    });",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "EventProvider"
  },
  {
    "version": "1.0.0",
    "group": "EventProvider",
    "type": "register",
    "url": "EventProvider.register(name,maker,options);",
    "title": ".register()",
    "name": "evRegister",
    "description": "<p>Register custom event.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>String custom event name.</p> "
          },
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "maker",
            "description": "<p>Function that handle event initialization. This function will be called by element if element listen to that event. You must manually trigger that event under this function.</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "options",
            "description": "<p>Custom event options. E.g { bubbles: false, cancelable: false, detail: undefind }</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "// Registering custom event.\nEventProvider.register('maxclick', function() {\n    // Listen click to the element.\n    $(this).click(function() {\n        if (!this.maxclick) this.maxclick = 1;\n\n        if (this.maxclick === 5) {\n            // Trigger the event to target and add maxclick property to event object.\n            EventProvider.dispatch('maxclick', this, { maxclick: this.maxclick });\n        } else {\n            this.maxclick++;\n        }\n    });\n});\n\n// Listening event.\n$('span').handle('maxclick', function(e) {\n    console.log('Your reached max click: ' + e.maxclick);\n});",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "EventProvider"
  },
  {
    "version": "1.0.0",
    "group": "EventProvider",
    "type": "",
    "url": "EventProvider.search(name);",
    "title": ".search()",
    "name": "evSearch",
    "description": "<p>Search custom event.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>String event name.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "EventProvider.search('swipe'); // Return swipe event provider object.",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "EventProvider"
  },
  {
    "version": "1.1.0",
    "group": "Extensions",
    "type": "background-img",
    "url": "background-img",
    "title": "background-img",
    "name": "BackgroundImage",
    "description": "<p>Set background image of elements using attribute.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "HTMLAttribute",
            "optional": false,
            "field": "background-img",
            "description": "<p>String background iamge url.</p> "
          },
          {
            "group": "Parameter",
            "type": "HTMLAttribute",
            "optional": false,
            "field": "x",
            "description": "<p>Backround image left position.</p> "
          },
          {
            "group": "Parameter",
            "type": "HTMLAttribute",
            "optional": false,
            "field": "y",
            "description": "<p>Background image top position.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "HTML",
        "content": "<div class=\"thumbnail\" background-img=\"../images/bg1.jpg\" x=\"center\" y=\"center\"></div>",
        "type": "html"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "Extensions"
  },
  {
    "version": "1.1.0",
    "group": "Extensions",
    "type": "box-fill",
    "url": "box-fill",
    "title": "box-fill",
    "name": "BoxFill",
    "description": "<p>Capture the tallest childrens height or maintain childrens height to the tallest height.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "HTMLAttribute",
            "optional": false,
            "field": "box-fill",
            "description": "<p>String box-fill type: capture-children or maintain-children</p> "
          },
          {
            "group": "Parameter",
            "type": "HTMLAttribute",
            "optional": false,
            "field": "box-child",
            "description": "<p>The the box fill that this element is children of box-fill.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "HTML",
        "content": "<ul box-fill=\"capture-children\">\n    <li box-child style=\"height: 20px\"></li>\n    <li box-child style=\"height: 30px\"></li>\n    <li box-child style=\"height: 40px\"></li>\n    <li box-child style=\"height: 50px\"></li>\n</ul>",
        "type": "html"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "Extensions"
  },
  {
    "version": "1.1.0",
    "group": "Extensions",
    "type": "icon",
    "url": "data-icon",
    "title": "data-icon",
    "name": "DataIcon",
    "description": "<p>Set font-icon for :after/:before elements without adding too many class in css. We only need to register the character to dataicon collections.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "HTMLAttribute",
            "optional": false,
            "field": "icon-a",
            "description": "<p>Set icon to :after element.</p> "
          },
          {
            "group": "Parameter",
            "type": "HTMLAttribute",
            "optional": false,
            "field": "icon-b",
            "description": "<p>Set icon to :before element.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "HTML",
        "content": "<span class=\"icon\" icon-b=\"setting\"></span>\n<span class=\"icon\" icon-a=\"pencil\"></span>",
        "type": "html"
      },
      {
        "title": "CSS",
        "content": ".icon {\n    // Set font family and icon styles.\n}\n\n[icon-b].ready:before {\n    content: attr(icon-b);\n}\n[icon-a].ready:after {\n    content: attr(icon-a);\n}",
        "type": "css"
      },
      {
        "title": "Javascript",
        "content": "$(document).ready(function() {\n    // Register icon character and name to data icon collections.\n    DataIcons.push({ setting: 'a', pencil: 'b', warning: '@' });\n});",
        "type": "javascript"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "Extensions"
  },
  {
    "version": "1.0.0",
    "group": "jQNotice",
    "type": "notification",
    "url": "jQuery.notification(title,options)",
    "title": "jQuery.notification()",
    "name": "notification",
    "description": "<p>Create new or manage HTML5 Notification API. With jQNotice, you can simply show new notification or use existing notification object to show notification. jQNotice will request permission when first time created.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>String Notification title.</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "options",
            "description": "<p>Object that contains Notifications options. options contains &quot;body, dir, tag, icon, lang&quot; and noticiation callbacks &quot;onclick, onclose, onshow, onerror&quot;.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample:",
        "content": "// Create new notifications and request permission if not already granted.\n// Notification will show after permission granted.\nvar notif = $.notification('Notification Test', { body: 'Lorem ipsum dolor' }).show();\n\n// Show another message using existing jQNotice object.\nnotif.set('body', 'Another lorem ipsum').show('Another Test');\n\n// Using callback in existing jQNotice object.\nnotif.onclick(function(e) { console.log(e, this) }).show('Notification with callback');",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQNotice"
  },
  {
    "version": "1.0.0",
    "group": "jQNotice",
    "type": "onclick",
    "url": "jQNotice.onclick(handler)",
    "title": ".onclick()",
    "name": "onclick",
    "description": "<p>Handle notification onclick event.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "handler",
            "description": "<p>Function to handle event. Hanlder will become jQNotice object and get event as param.</p> "
          }
        ]
      }
    },
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQNotice"
  },
  {
    "version": "1.0.0",
    "group": "jQNotice",
    "type": "onclose",
    "url": "jQNotice.onclose(handler)",
    "title": ".onclose()",
    "name": "onclose",
    "description": "<p>Handle notification onclose event.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "handler",
            "description": "<p>Function to handle event. Hanlder will become jQNotice object and get event as param.</p> "
          }
        ]
      }
    },
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQNotice"
  },
  {
    "version": "1.0.0",
    "group": "jQNotice",
    "type": "onerror",
    "url": "jQNotice.onerror(handler)",
    "title": ".onerror()",
    "name": "onerror",
    "description": "<p>Handle notification onerror event.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "handler",
            "description": "<p>Function to handle event. Hanlder will become jQNotice object and get event as param.</p> "
          }
        ]
      }
    },
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQNotice"
  },
  {
    "version": "1.0.0",
    "group": "jQNotice",
    "type": "onshow",
    "url": "jQNotice.onshow(handler)",
    "title": ".onshow()",
    "name": "onshow",
    "description": "<p>Handle notification onshow event.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Function",
            "optional": false,
            "field": "handler",
            "description": "<p>Function to handle event. Hanlder will become jQNotice object and get event as param.</p> "
          }
        ]
      }
    },
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQNotice"
  },
  {
    "version": "1.0.0",
    "group": "jQNotice",
    "type": "set",
    "url": "jQNotice.set(name,value)",
    "title": ".set()",
    "name": "set",
    "description": "<p>Set notification options.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>String option name or Object options.</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "value",
            "description": "<p>String option value or leave blank if name is object.</p> "
          }
        ]
      }
    },
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQNotice"
  },
  {
    "version": "1.0.0",
    "group": "jQNotice",
    "type": "show",
    "url": "jQNotice.show(title,options)",
    "title": ".show()",
    "name": "show",
    "description": "<p>Show the notification.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>String notification title.</p> "
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "options",
            "description": "<p>Object notification options without callbacks.</p> "
          }
        ]
      }
    },
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQNotice"
  },
  {
    "version": "1.0.0",
    "group": "jQPatch",
    "type": "attr",
    "url": "jQuery.attr(name,value);",
    "title": ".attr()",
    "name": "Attr",
    "description": "<p>Attribute getter and setter. You can set value with anythings. They will be automatically converted. When you get the value, they also will be converted automatically.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "name",
            "description": "<p>String attribute name or Object containing list of attributes or Array containing attribute name list.</p> "
          },
          {
            "group": "Parameter",
            "type": "Any",
            "optional": true,
            "field": "value",
            "description": "<p>Attribute value.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "// <span class=\"foo\" bar=\"10\" foo=\"false\" foobar=\"[1,2,3]\"></span>\n\n// Get all attributes.\nvar attr = $('.foo').attr();\n//>> attr => { class: \"foo\", bar: 10, foo: false, foobar: [1,2,3] }",
        "type": "js"
      },
      {
        "title": "Sample #2",
        "content": "// <span class=\"foo\" bar=\"10\" foo=\"false\" foobar=\"[1,2,3]\"></span>\n\n// Get single attribute value.\nvar attr = $('.foo').attr('foo');\n//>> attr => false",
        "type": "js"
      },
      {
        "title": "Sample #3",
        "content": "// <span class=\"foo\" bar=\"10\" foo=\"false\" foobar=\"[1,2,3]\"></span>\n\n// Set single attribute and value.\n$('.foo').attr('barfoo', { a: 1, b: 2, c: 3 });",
        "type": "js"
      },
      {
        "title": "Sample #4",
        "content": "// <span class=\"foo\" bar=\"10\" foo=\"false\" foobar=\"[1,2,3]\"></span>\n\n// Set multiple attribute and value.\n$('.foo').attr({ foo: true, bar: 100, foobar: { a: 1, b: 2, c: 3 } });",
        "type": "js"
      },
      {
        "title": "Sample #5",
        "content": "// <span class=\"foo\" bar=\"10\" foo=\"false\" foobar=\"[1,2,3]\"></span>\n\n// Set multiple attribute without values.\n$('.foo').attr(['solved', 'required', 'async']);",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  },
  {
    "version": "1.0.0",
    "group": "jQPatch",
    "type": "css",
    "url": "jQuery.css(property,value);",
    "title": ".css()",
    "name": "CSS",
    "description": "<p>Get or Set Inline CSS Styles. We detect and use native browser version of css. So you don&#39;t need to add prefix in non-standard css properties.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "property",
            "description": "<p>String CSS Property name. You can use object to set multiple CSS. Leave blank to get all available inline css and jQuery will return an object. CSS Property name is case incensitive.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>String CSS Value. You can use number or boolean as well.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "// Set single property.\n$('span').css('background-image', 'url(...)');\n\n// Set multiple properties.\n$('span').css({\n    backgroundImage: 'url(...)',\n    'background-color': '#ccc',\n    borderradius: 3\n});\n\n// Get single property.\nvar bg = $('span').css('background-image');\n\n// Get all css.\nvar csses = $('span').css();",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  },
  {
    "version": "1.0.0",
    "group": "jQPatch",
    "type": "cstyle",
    "url": "jQuery.cstyle(property);",
    "title": ".cstyle()",
    "name": "CStyle",
    "description": "<p>Get computed css from first selected element.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "property",
            "description": "<p>String CSS Property name or array property list to get multiple properties.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "$('span').cstyle('width'); // Get computed width.\n$('span').cstyle(['width', 'height']); // Get computed width and height.",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  },
  {
    "version": "1.0.0",
    "group": "jQPatch",
    "type": "data",
    "url": "jQuery.data(name,value);",
    "title": ".data()",
    "name": "Data",
    "description": "<p>Get first selected element data or set all selected elements data.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "name",
            "description": "<p>String data-attribute name. E.g. &#39;profile&#39; for &#39;data-profile&#39;.<br>Use string space-delimiter to get or set multiple data-attribute. E.g &#39;foo bar&#39; for &#39;data-foo data-bar&#39;.</p> "
          },
          {
            "group": "Parameter",
            "type": "Any",
            "optional": true,
            "field": "value",
            "description": "<p>Value to set. Leave blank if yout want to get the data-attribute-value. Use array to wrap values if you set multiple data-attribute.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$('span').data(); // Get all data-attributes.\n\n$('span').data('foo'); // Get value of 'data-foo'.\n$('span').data('foo', {a: 1, b: 2}); // Set 'data-foo' value.\n\n$('span').data('foo bar'); // Get data-foo and data-bar.\n$('span').data('foo bar', [200, {a: 1, b: 2}]); // Set data-foo with 200, data-bar with object.",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  },
  {
    "version": "1.0.0",
    "group": "jQPatch",
    "type": "firstchild",
    "url": "jQuery.firstChild();",
    "title": ".firstChild()",
    "name": "FirstChild",
    "description": "<p>Get the first child of the first selected elements. Return jQuery object.</p> ",
    "examples": [
      {
        "title": "Sample #1",
        "content": "$('.container').firstChild();",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  },
  {
    "version": "1.0.0",
    "group": "jQPatch",
    "type": "hasattr",
    "url": "jQuery.hasAttr(name);",
    "title": ".hasAttr()",
    "name": "HasAttr",
    "description": "<p>Check does the first selected element has specific attribute or not.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "name",
            "description": "<p>String attribute name to check.<br>Use array to check does have one of attributes, or string separated by space to check does has both attribute.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$('span').hasAttr('foo'); // Does has attribute foo.\n$('span').hasAttr(['foo', 'bar']); // Does has attribute foo or bar.\n$('span').hasAttr('foo bar'); // Does has attribute foo and bar.",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  },
  {
    "version": "1.0.0",
    "group": "jQPatch",
    "type": "hasdata",
    "url": "jQuery.hasData(name);",
    "title": ".hasData()",
    "name": "HasData",
    "description": "<p>Check does first selected element has specific data attribute.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "String",
            "description": "<p>data-attribute name. Use array to check does has one of data-attribute, or use string to check does has both data-attribute.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$('span').hasData('foo'); // Check does has data-attribute 'data-foo'.\n$('span').hasData(['foo', 'bar']); // Check does has data-attribute 'data-foo' or 'data-bar'.\n$('span').hasData('foo bar'); // Check does has data-attribute 'data-foo' and 'data-bar'.",
        "type": "json"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  },
  {
    "version": "1.0.2",
    "group": "jQPatch",
    "type": "indexof",
    "url": "jQuery.indexOf(element);",
    "title": ".indexOf()",
    "name": "IndexOf",
    "description": "<p>Get index of element from selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "HTMLElement",
            "optional": false,
            "field": "element",
            "description": "<p>HTML ELement or string CSS Selector. Return -1 if not found.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "// Get index number using HTML Element.\nvar span = $('span').get(2);\n$('span').indexOf(span); // Return 2\n\n// Get index number using selector.\n$('span').indexOf('.foo');",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  },
  {
    "version": "1.0.0",
    "group": "jQPatch",
    "type": "lastchild",
    "url": "jQuery.lastChild();",
    "title": ".lastChild()",
    "name": "LastChild",
    "description": "<p>Get the last child of the first selected elements. Return jQuery object.</p> ",
    "examples": [
      {
        "title": "Sample #1",
        "content": "$('.container').lastChild();",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  },
  {
    "version": "1.0.0",
    "group": "jQPatch",
    "type": "nth",
    "url": "jQuery.nth(index);",
    "title": ".nth()",
    "name": "NTH",
    "description": "<p>Get the selected elements by specific index. Return jQuery object.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "index",
            "description": "<p>Index number. Start from 0.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$('span').nth(0);",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  },
  {
    "version": "1.0.0",
    "group": "jQPatch",
    "type": "nthChild",
    "url": "jQuery.nthChild(index);",
    "title": ".nthChild()",
    "name": "NthChild",
    "description": "<p>Get the child elements by specific index from the first selected elements. Return jQuery object.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "index",
            "description": "<p>Index number. Start from 0.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$('.container').nthChild(3);",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  },
  {
    "version": "1.0.0",
    "group": "jQPatch",
    "type": "prop",
    "url": "jQuery.prop(name,value);",
    "title": ".prop()",
    "name": "Prop",
    "description": "<p>Get the first selected elements property value or set all selected elements property value.<br />If element also have attribute with that name, setting property will also set the attribute.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>String property name.</p> "
          },
          {
            "group": "Parameter",
            "type": "Any",
            "optional": true,
            "field": "value",
            "description": "<p>String property value.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$('input[type=\"text\"]').prop('value'); // Get value.\n$('input[type=\"text\"]').prop('value', 'Foo'); // Set value to Foo.",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  },
  {
    "version": "1.0.0",
    "group": "jQPatch",
    "type": "push",
    "url": "jQuery.push(element);",
    "title": ".push()",
    "name": "Push",
    "description": "<p>Push single element or multiple element (jQuery or Array) to current jQuery. Using CSS selector string as element also accepted.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Multi",
            "optional": false,
            "field": "element",
            "description": "<p>HTML Element, jQuery, Array Element List, or CSS Selector String.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample",
        "content": "var foo = $('.foo');\nvar bar = $('.bar')[0];\n\nfoo.push(bar); // Push bar to foo.\nfoo.push([bar]); // Push bar to foo.\nfoo.push('.bar'); // Push bar to foo.",
        "type": "json"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  },
  {
    "version": "1.0.0",
    "group": "jQPatch",
    "type": "remattr",
    "url": "jQuery.removeAttr(name);",
    "title": ".removeAttr()",
    "name": "RemAttr",
    "description": "<p>Remove one or many attribute from selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Any",
            "optional": false,
            "field": "name",
            "description": "<p>String attribute name or array name list.<br />Use space to separate the attribute name for multiple removal. E.g &#39;foo bar&#39;.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$('span').remAtrr('foo'); // Remove single attribute.\n$('span').removeAttr(['foo', 'bar']); // Remove multiple attribute.\n$('span').removeAttr('foo bar'); // Remove multiple attribute.",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  },
  {
    "version": "1.0.0",
    "group": "jQPatch",
    "type": "remclass",
    "url": "jQuery.removeClass(name);",
    "title": ".removeClass()",
    "name": "RemClass",
    "description": "<p>Remove class from selected elements class lists.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>String class name. You can use array if you want to use remove multiple class.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$('.foo').removeClass('bar');\n$('.foo').removeClass(['bar', 'foo', 'foobar']);",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  },
  {
    "version": "1.0.0",
    "group": "jQPatch",
    "type": "remdata",
    "url": "jQuery.removeData(name);",
    "title": ".removeData()",
    "name": "RemData",
    "description": "<p>Remove data-attribute from selected elements.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>String data-attribute name. E.g &#39;foo&#39; for &#39;data-foo&#39;.<br>Use space-delimiter to separate multiple name. E.g &#39;foo bar&#39; for &#39;data-foo data-bar&#39;.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Sample #1",
        "content": "$('span').removeData('foo'); // Remove data-foo.\n$('span').removeData('foo bar'); // Remove data-foo and data-bar.",
        "type": "json"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  },
  {
    "version": "1.0.0",
    "group": "jQPatch",
    "type": "offset",
    "url": "jQuery.offset();",
    "title": ".offset()",
    "name": "offset",
    "description": "<p>Get offset of first selected element. Returns object { width, height, scrollTop, scrollLeft, top, left, ratio };</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$('span').offset();",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  },
  {
    "version": "1.0.0",
    "group": "jQPatch",
    "type": "orientation",
    "url": "jQuery.orientation();",
    "title": ".orientation()",
    "name": "orientation",
    "description": "<p>Get and apply box orientation of first selected element. Attribute &#39;portrait&#39; or &#39;landscape&#39; will added to each elements.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$('span').orientation(); // Get the box orientation.",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  },
  {
    "version": "1.0.0",
    "group": "jQPatch",
    "type": "ratio",
    "url": "jQuery.ratio(ratio);",
    "title": ".ratio()",
    "name": "ratio",
    "description": "<p>Get or set box ratio of first selected element.</p> ",
    "examples": [
      {
        "title": "Sample",
        "content": "$('span').ratio(); // Get the box ratio.\n$('span').ratio('16:9'); // Set the box ratio.",
        "type": "js"
      }
    ],
    "filename": "tags/v1.0.0.js",
    "groupTitle": "jQPatch"
  }
] });