// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <div className="planet-card">
      <div className="image-container">
        <img src={imageUrl} alt={name} className="image" />
      </div>
      <h2 className="planet-name">{name}</h2>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
