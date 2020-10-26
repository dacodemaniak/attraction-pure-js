const Parc = (props) => {

    { attractions } = props

    const liste = () => {
        return {attractions.map((attraction) => <Attraction key={attraction.id} attraction={attraction})}
    }

    return (
        <div>
            {liste()}
        </div>
    )
}