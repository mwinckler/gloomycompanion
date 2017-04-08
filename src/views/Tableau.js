var m = require("mithril");

var DeckList = require("../models/DeckList");
var Deck = require("../views/Deck");

module.exports = {
    view: function(vnode) {
        return m(".tableau", DeckList.monsterAbilityDecks.map(deck => m(Deck, deck)));
    }
}