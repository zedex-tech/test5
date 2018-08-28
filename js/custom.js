$(document).ready(function () {

    var vw = $(window).innerWidth();
    var vh = $(window).innerHeight();

    /* ========================================================================
    * Self Circle Dragging
    * ======================================================================== */
    var erSelf = $('.er-self-box');
    var erBrand = $('.er-brand-box');

    erSelf.draggable({
        containment: ".er-slider", scroll: false, axis: "x",
        start: function () {
            $('.er-icon').addClass('d-none');

            $(this).addClass('active');
        },
        stop: function () {
            $(this).removeClass('active');
        },
        drag: function (event, ui) {
            var selfPosition = parseInt($(this).css('left'));
            var erContainer = ($('.er-slider').outerWidth() - $(this).outerWidth());

            var erConactionProcentage = Math.round((selfPosition * 100) / erContainer);
            console.log('erConactionProcentage: ', erConactionProcentage);


        }
    });

    /* ========================================================================
    * Circles Text Same Height
    * ======================================================================== */
    function setSameHeightAll(obj) {
        var wv = $(window).innerWidth();
        var maxHeight = -1;
        obj.css('height', 'auto');
        obj.each(function () {
            if ($(this).outerHeight() > maxHeight) {
                maxHeight = $(this).outerHeight();
            }
        });
        obj.css('height', maxHeight);
    }
    setSameHeightAll($('.er-slider p'));

    $(window).resize(function () {
        setSameHeightAll($('.er-slider p'));
    });


});
