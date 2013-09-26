/*global $: false */
/*global console: false */
/*global document: false */
/*global window: false */

/*global Backbone: false */

/*global Ticket: false */

var Tickets;

(function () {
    "use strict";
    Tickets = Backbone.Collection.extend({
        model: Ticket,
        url: 'json/tickets.json'
    });
}());
