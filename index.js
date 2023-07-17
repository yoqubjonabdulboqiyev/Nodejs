class Food {
    constructor(ingrediets = []) {
        this.ingrediets = ingrediets
    }
    show() {
        return `Ingrediets: ${this.ingrediets}`
    }
}


module.exports = Food