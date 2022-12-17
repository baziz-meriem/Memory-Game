import './App.css'
import React,{useState,useEffect} from 'react'
import Card from './Card.js'

const cardImages=[
  {"src":"/images/helmet-1.png", matched:false},
  {"src":"/images/potion-1.png", matched:false},
  {"src":"/images/ring-1.png", matched:false},
  {"src":"/images/scroll-1.png", matched:false},
  {"src":"/images/shield-1.png", matched:false},
  {"src":"/images/sword-1.png", matched:false}
]

function App() {
  const [cards,setCards]=useState([]);
  const [turns,setTurns]=useState(0);
  const [choiceOne,setChoiceOne]=useState(null);
  const [choiceTwo,setChoiceTwo]=useState(null);


  const shuffleCards=()=>{

  const shuffledCards = [...cardImages,...cardImages]
  .sort(()=>Math.random()-0.5)
  .map((card)=>({...card,id:Math.random()}))
  setCards(shuffledCards)
  setTurns(0)
}

const handleChoice=(card)=>{
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
}

useEffect(() => {
  if(choiceTwo){
  if(choiceOne.src === choiceTwo.src) {
    setCards(prevCards => {
      return prevCards.map(card=> {
        if(card.src === choiceOne.src) {
          return { ...card,matched:true }
        } else {return card}
      } )
    })
    Reset()
  }
  else {
    setTimeout(()=>Reset(),1000)}
  }
}, [choiceTwo])


const Reset=()=>{
  setChoiceOne(null);
  setChoiceTwo(null);
  setTurns(0);

}
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">{cards.map(card => (
        <Card 
        card={card} 
        key={card.id} 
        handleChoice={handleChoice}
        flipped={card === choiceOne ||card === choiceTwo || card.matched}/>
       
      ))}</div>
      <h1> Number of turns : {turns}</h1>

    </div>
  );
}

export default App