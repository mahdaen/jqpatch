(function($) {
    /* Plugins holder */
    var $plg = $.fn || $.module, $dom = $;

    /* Proceed when document is ready */
    document.addEventListener('readystatechange', function() {
        if (document.readyState == 'interactive') {
            /* Find elements that has attribute background-img */
            jqpatch.initbg();
        }
    });

    /* Background Initializer */
    jqpatch.initbg = function(context) {
        !context ? document : context;

        /* Find elements that has attribute background-img */
        $('[background-img]', context).each(function() {
            var self = $(this), src = this.getAttribute('background-img');

            /* Creating new image to detect load status */
            var nImg = $('<img>').attr('src', src);

            nImg.handle('load', function() {
                /* Setting up background image */
                self.css('background-image', 'url(' + src + ')').remAttr('background-img');
            });

            /* Getting Positions */
            if (this.hasAttribute('x') && !this.hasAttribute('y')) {
                self.css('background-position', this.getAttribute('x') + ' center').remAttr('x');
            } else if (this.hasAttribute('y') && !this.hasAttribute('x')) {
                self.css('background-position', 'center ' + this.getAttribute('y')).remAttr('y');
            } else if (this.hasAttribute('x') && this.hasAttribute('y')) {
                self.css('background-position', this.getAttribute('x') + ' ' + this.getAttribute('y')).remAttr(['x', 'y']);
            }
        });
    };
})(window.jQuery);
