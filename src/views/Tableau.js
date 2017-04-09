var m = require("mithril");
var Deck = require("../views/Deck");

module.exports = {
    view: function(vnode) {
        return m(".tableau", "active decks go here");
    }
}