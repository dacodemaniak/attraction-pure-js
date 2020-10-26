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

    render() {
        const tr = document.createElement('tr')

        // First column :
        const td1 = document.createElement('td')
        td1.innerHTML = `&nbsp;` // Html Entity & (Non Breakable SPace); &euro; &copy; &lt;

        // Seconde column : title
        const td2 = document.createElement('td')
        td2.textContent = this.name

        // third column
        const td3 = document.createElement('td')
        td3.innerHTML = `&nbsp;`;

        tr.append(td1)
        tr.append(td2)
        tr.append(td3)

        return tr
    }
}

Un texte très long avec plein&nbsp;de mots 
de partout et qui s'étale sur plein de lignes