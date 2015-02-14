define({ "api": [
  {
    "version": "1.0.0",
    "group": "Core_Plugins",
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
    "groupTitle": "Core_Plugins"
  },
  {
    "version": "1.0.0",
    "group": "Core_Plugins",
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
    "groupTitle": "Core_Plugins"
  },
  {
    "version": "1.0.0",
    "group": "Core_Plugins",
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
    "groupTitle": "Core_Plugins"
  },
  {
    "version": "1.0.0",
    "group": "Core_Plugins",
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
    "groupTitle": "Core_Plugins"
  },
  {
    "version": "1.0.0",
    "group": "Core_Plugins",
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
    "groupTitle": "Core_Plugins"
  }
] });