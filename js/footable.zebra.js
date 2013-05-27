(function ($, w, undefined) {
    if (w.footable === undefined || w.foobox === null) {
        throw new Error('Please check and make sure footable.js is included in the page and is loaded prior to this script.');
    }

    var defaults = {
        zebra: true,
        classes: {
            zebra: {
                even: 'footable-even',
                odd: 'footable-odd'
            }
        }
    };

    function Zebra() {
        var p = this;
        p.name = 'Footable Zebra';
        p.init = function(ft) {
            if (ft.options.zebra === true) {
                $(ft.table).bind({
                    'footable_initialized footable_sorted footable_filtered footable_page_changed': function(e) {
                        var cls = ft.options.classes.zebra;

                        $(e.ft.table).find('> tbody > tr')
                            .removeClass(cls.odd + ' ' + cls.even)
                            .filter(':visible')
                            .not('.footable-row-detail')
                            .each(function(i) {
                                if (i % 2) {
                                    $(this).addClass(cls.even);
                                } else {
                                    $(this).addClass(cls.odd);
                                }
                            });


                        e.ft.raise('footable_striped');
                    }
                });
            }
        };

        p.stripe = function(ft, e) {

        };
    }

    w.footable.plugins.register(new Zebra(), defaults);

})(jQuery, window);