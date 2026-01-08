import React from 'react'
import Upper from './Upper'
import Lower from './Lower'

const Card = (props) => {
  return (
    <>
        <Upper cardData={props.cardData}/>
        <Lower cardData={props.cardData}/>
    </>
  )
}

export default Card
