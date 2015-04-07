/**
 * Icon Generator Scripts.
 */

(function($) {
    /* Add to ready event */
    document.addEventListener('readystatechange', function() {
        if (document.readyState == 'interactive') {
            jqpatch.initicon();
        }
    });

    /* Initializer */
    jqpatch.initicon = function(context) {
        !context ? document : context;

        /* Find elements that has attribute icon-a or icon-b */
        $('[icon-a]', context).each(function() {
            var icona = $(this).attr('icon-a');

            if (icona && window.DataIcons[icona]) {
                $(this).attr('icon-a', window.DataIcons[icona]).addClass('ready');
            }
        });

        $('[icon]', context).each(function() {
            var iconb = $(this).attr('icon');

            if (iconb && window.DataIcons[iconb]) {
                $(this).attr('icon', window.DataIcons[iconb]).addClass('ready');
            }
        });
    };
})(window.DOMList || window.jQuery);
