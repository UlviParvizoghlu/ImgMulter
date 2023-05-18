import React from 'react'
import '../Card/Card.scss'
const Card = ({item}) => {
  return (
    <div className="card">
        <div className="card__img"><img src={item.testImage} alt="adad" /></div>
        <div className="card__title">{item.name}</div>
        <div className="card__desc">{item.price}</div>
        <div className="card__desc">{item.desc}</div>

    </div>
  )
}

export default Card