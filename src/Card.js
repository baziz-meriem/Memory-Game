import React from 'react'
import "./SingleCard.css"

function Card({card,handleChoice,flipped}) {
    const handleClick=()=>{
        handleChoice(card)
    }
  return (
    <div className='card' >
    <div className={flipped ? "flipped": ""}>
      <img className='front' src={card.src} alt="cardFront" />
      <img 
      className='back' 
      src="/images/cover.png" 
      alt="cardBack" 
      onClick={handleClick} />
    </div>
   </div>
  )
}

export default Card