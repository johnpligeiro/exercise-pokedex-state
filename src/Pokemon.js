import React from 'react'
import './data'
import PropTypes from 'prop-types';

function Pokemon(props) {
  const { name, type, image, id, averageWeight:{ value, measurementUnit } } = props.pokemon
  return (
    <div key={`${id}`} className='poke'>
      <p>{name}</p>
      <img src={image} alt={`${name} Sprite`}/>
      <p>{`Type: ${type}`}</p>
      <p>{`Average Weight: ${value + measurementUnit}`}</p>          
    </div>
  )
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    })
  })
}

export default Pokemon