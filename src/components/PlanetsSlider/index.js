// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {PlanetsList} = props

  return (
    <div className="bg-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {PlanetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} planetDetails={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
