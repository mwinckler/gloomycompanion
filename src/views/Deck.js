var m = require("mithril");
var Card = require("./Card");

module.exports = {
    view: function(vnode) {
        var deck = vnode.attrs.deck;

        return m(".card-container", { onclick: deck.draw },
            m(Card, {
                monsterName: deck.name,
                currentCard: deck.currentCard
            }));
    }
}