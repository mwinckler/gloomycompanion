var Card = require("./Card");

function Deck(deckDefinition) {
    var currentIndex = 0;
    var name = deckDefinition.name;
    var cards = deckDefinition.cards.map(cardDefinition => new Card(cardDefinition));

    function shuffle(includeDiscards = true) {
        for (var i = includeDiscards ? 0 : currentIndex; i < cards.length; i++)
        {
            var switchIndex = Math.floor(Math.random() * cards.length);
            var tmp = cards[switchIndex];
            cards[switchIndex] = cards[i];
            cards[i] = tmp;
        }

        currentIndex = 0;
    };

    this.name = name;
    this.cards = cards;
    this.shuffle = shuffle;

    this.draw = function() {
        if (currentIndex >= cards.length) {
            shuffle();
        }

        return cards[currentIndex++];
    };

    this.currentCard = function() {
        return cards[currentIndex - 1];
    };
}

module.exports = Deck;