// cardDefinition expected format (from DeckList.js):
// [ (bool) shuffle, (int) initiative, (string) ability1, ... (string) abilityN ]
function Card(cardDefinition) {
    this.triggersShuffle = cardDefinition[0];
    this.initiative = cardDefinition[1];
    this.abilities = cardDefinition.splice(2);
}

module.exports = Card;