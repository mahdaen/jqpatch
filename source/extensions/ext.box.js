(function ($) {
    /* Plugins holder */
    var $plg = $.fn || $.module, $dom = $;

    /* Proceed when document is ready */
    document.addEventListener('readystatechange', function () {
        if ( document.readyState === 'interactive' ) {
            /* Init Extension */
            jqpatch.initboxfill();
        }
    });

    /* Background Initializer */
    jqpatch.initboxfill = function (context) {
        context = !context ? document : context;

        /* Find elements that has attribute box-fill */
        $('[box-fill]', context).each(function () {
            var self = $(this),
                fill = this.getAttribute('box-fill'),
                tallest = 0,
                childs = $('[box-child]', this);

            // Find the childs.
            childs.each(function () {
                tallest = this.offsetHeight > tallest ? this.offsetHeight : tallest;
            });

            if ( fill === 'capture-children' ) {
                self.height(tallest);
            }
            else if ( fill === 'maintain-children' ) {
                childs.height(tallest);
            }
        });
    };
})(window.jQuery);
