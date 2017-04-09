var m = require("mithril");
var DeckList = require("../models/DeckList");

module.exports = {
    view: function() {
        return m("#deckspage.tabbody",
            m("ul.selectionlist", DeckList.monsterAbilityDecks.map(deck =>
                m("li",
                    m("label",
                        m("input[type=checkbox]", { name: "deck", value: deck.name }),
                        deck.name
                    )
                )
            )),
            m("input[type=button]", { onclick: () => alert("apply decks"), value: "Apply" })
        );
    }
};