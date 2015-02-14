/**
 * @apiVersion 1.0.0
 * @apiGroup Core Plugins
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
 * @apiGroup Core Plugins
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
 * @apiGroup Core Plugins
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
 * @apiGroup Core Plugins
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
 * @apiGroup Core Plugins
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

