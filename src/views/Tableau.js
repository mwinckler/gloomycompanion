var m = require("mithril");
var DeckList = require("../models/DeckList");
var Deck = require("../views/Deck");

module.exports = {
    view: function(vnode) {
        return [
            m("a[href=/config/decks]", { oncreate: m.route.link }, "Config"),
            m(".tableau",
                DeckList.getSelectedDecks().map(deck =>
                    m(Deck, {
                        deck: deck
                    })
                )
            )
        ];
    }
}