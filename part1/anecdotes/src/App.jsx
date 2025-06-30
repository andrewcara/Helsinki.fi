import { useState } from 'react'
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const handleVote = () =>{
    var copy = [...votes]

    if (copy[selected]){
      copy[selected]+=1
    }else{
      copy[selected] = 1
    }
    setVotes(copy)

    if (copy[selected] >= copy[maxVotes]){
      setMaxVote(selected)
    }

  }


  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0])
  const [maxVotes, setMaxVote] = useState(0)
  return (
    <div>
      {anecdotes[selected]}
      <div>
      <button onClick={()=>{setSelected(getRandomInt(anecdotes.length-1))}}>Get Next anecdote</button>
      <p>{votes[selected]}</p>
      <button onClick = {handleVote}>Vote</button>
      </div>

      <p>Here is the element with the most votes right now</p>
      {<p>{anecdotes[maxVotes]}</p>}
    </div>
  )
}

export default App