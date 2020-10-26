export default class Attraction {
    constructor() {
        this.name = ''
        this.description = ''
        // 1 => Facile, 2 => Moyen, 3 => Difficile
        this.difficultyLevel = 0
    }

    setName(name) {
        this.name = name
    }

    setDescription(description) {
        this.description = description
    }

    setDifficultyLevel(difficultyLevel) {
        if (difficultyLevel > 0 && difficultyLevel <= 3) {
            this.difficultyLevel = difficultyLevel
        } else {
            this.difficultyLevel = 1
        }
    }
}