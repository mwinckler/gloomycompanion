function Deck(deckDefinition) {
    return {
        name: deckDefinition.name,
        cards: deckDefinition.cards,
        currentIndex: 0,

        shuffle: function(includeDiscards = true) {
            for (var i = includeDiscards ? 0 : currentIndex; i < this.cards.length; i++)
            {
                var switchIndex = Math.floor(Math.random() * this.cards.length);
                var tmp = this.cards[switchIndex];
                this.cards[switchIndex] = this.cards[i];
                this.cards[i] = tmp;
            }
        },

        draw: function() {
            if (currentIndex >= cards.length) {
                this.shuffle();
            }

            return cards[currentIndex++];
        }
    };
}

module.exports = Deck;