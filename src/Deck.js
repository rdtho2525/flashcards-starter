class Deck {
    constructor(pile) {
        this.pile = pile;
    }

    countCards() {
        return this.pile.length
    }
}

module.exports = Deck;