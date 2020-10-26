import Parc from './parc.js'

(() => {
    console.log(`App is running now !`)

    // Create an object from Parc class
    const parc = new Parc('Mon beau parc', 'Le parc qui va bien')
    parc.setTitle('Euro Disney')
    console.log(parc.attractions)
    parc.render()
    
})()