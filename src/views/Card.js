var m = require("mithril");
var MonsterAbilities = require("./MonsterAbilities");

module.exports = {
    view: function(vnode) {
        var card = vnode.attrs.currentCard();
        var elements = [m(".card.ability.back.up.draw")];

        if (card !== undefined) {
            elements.push(
                m(".card.ability.front.up.discard",
                    m("span.name", vnode.monsterName),
                    m("span.initiative", card.initiative)
                )
            );
        }

        return elements;
    }
};