import Attraction from "./attraction.js"

export default class Parc {
    constructor(title, description) {
        console.log(`Hello i'im the Parc constructor`)
        this.title = title
        this.description = description

        this.attractions = []
        // Appeler la méthode onSubmit de l'objet courant
        this.onSubmit() // Placer le gestionnaire d'événement sur le submit
    }

    // Mutateur pour définir les valeurs des attributs
    setTitle(title) {
        this.title = title
    }

    addAttraction(attraction){
        this.attractions.push(attraction)

        // Add the attraction.render to the tbody element
        document.querySelector('tbody').append(attraction.render())
    }

    setDescription(description) {
        this.description = description
    }

    render() {
        const title = document.querySelector('[parcTitle]')
        title.textContent = this.title
        const description = document.querySelector('[parcDescription]')
        description.textContent = this.description
    }

    onSubmit () {
        const form = document.getElementById('handle-attraction')
        form.addEventListener(
            'submit',
            (event) => {
                event.preventDefault() // Empêche la soumission du formulaire
                const attractionName = document.querySelector('[name="title"]')
                const attractionDescription = document.querySelector('[name="description"]')
                const attractionDifficulty = document.querySelector('[name="difficulty"]')

                const attractionNameValue = attractionName.value
                const attractionDescriptionValue = attractionDescription.value
                const attractionDifficultyValue = attractionDifficulty.options[attractionDifficulty.selectedIndex].value

                const attraction = new Attraction()
                attraction.setName(attractionNameValue)
                attraction.setDescription(attractionDescriptionValue)
                attraction.setDifficultyLevel(attractionDifficultyValue)

                this.addAttraction(attraction)

                console.log(attractionNameValue, attractionDescriptionValue, attractionDifficultyValue)

                // Reset fields
                attractionName.value = ''
                attractionDescription.value = ''
                attractionDifficulty.options.selectedIndex = 0
            }
        )
    }
}