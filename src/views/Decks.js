var m = require("mithril");
var _ = require("underscore");
var DeckList = require("../models/DeckList");

module.exports = {
    view: function() {
        var selectedDecks = DeckList.getSelectedDecks();

        return m("#deckspage.tabbody",
            m("ul.selectionlist",
                DeckList.monsterAbilityDecks.map(deck =>
                    m("li",
                        m("label",
                            m("input[type=checkbox]", {
                                name: "deck",
                                value: deck.name,
                                onclick: m.withAttr("checked", value => DeckList.selectDeck(value, deck), deck),
                                checked: _.contains(selectedDecks, deck)
                            }),
                            deck.name
                        )
                    )
                )
            )
        );
    }
};