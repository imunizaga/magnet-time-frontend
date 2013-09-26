/*global $: false */
/*global console: false */
/*global document: false */
/*global window: false */

/*global Tickets: false */

var app;
(function () {
    "use strict";
    app = {
        initialize: function () {
            var tickets = new Tickets();
            tickets.fetch();

            $(".ticket form").hide().removeClass('hidden');

            $(".ticket:first a").focus();

            $("select").chosen({
                width: "100%"
            });
            this.bindEvents();
        },

        bindEvents: function () {
            $(".ticket").click(function () {
                var $this = $(this);
                $('.ticket').removeClass('active');
                $this.addClass('active');

                $("form", $this).animate({height: 'toggle'}, 350);
                $("input:first", $this).focus();
            });
        }
    }
}());


app.initialize();
