import { useState } from 'react'


const Button = (props) =>{
return(

  <button onClick={props.handler}>{props.name}</button>
  )

}

const StatisticLine = (props) =>{
  return(
    <p>{props.text}     {props.value}</p>
  )
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [statistics, setStatistics] = useState({ total: 0, sum: 0 })
  const [anecdote, setAnecdote] = useState(false)
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
  const HandleGood = () => {
    setGood(prev => prev + 1)
    setStatistics(prev => ({ total: prev.total + 1, sum: prev.sum + 1 }))
  }

  const HandleBad = () => {
    setBad(prev => prev + 1)
    setStatistics(prev => ({ total: prev.total + 1, sum: prev.sum - 1 }))
  }

  const HandleNeutral = () => {
    setNeutral(prev => prev + 1)
    setStatistics(prev => ({ total: prev.total + 1, sum: prev.sum }))
  }

  return (
    <div>
      <Button handler={HandleGood} name="Good"/>
      <Button handler={HandleBad} name="Bad"/>
      <Button handler={HandleNeutral} name="Neutral"/>
    
    <p>Good {good}</p>
    <p>Bad {bad}</p>
    <p>Neutral {neutral}</p>
    
    {
      <>
      {!anecdote ? <button onClick={(e)=> setAnecdote(true)}>Click Button for Anecdote</button> : anecdotes[getRandomInt(anecdotes.length) - 1]}
      <br></br>
      {statistics.total === 0 ? "No Feedback Given":
      <table>
      <tbody>
      <tr> 
      <th>Statistics</th>
      </tr> 
      <tr> 
      <td><StatisticLine text="Good" value={good}/></td>
      </tr> 
      <tr> 
      <td><StatisticLine text="Bad" value={bad}/></td>
      </tr> 
      <tr> 
      <td><StatisticLine text="Neutral" value={neutral}/></td>
      </tr> 
      <tr> 
      <td><StatisticLine text="Total" value={statistics.total}/></td>
      </tr> 
      <tr> 
      <td><StatisticLine text="Average" value={statistics.sum/statistics.total}/></td>
      </tr> 
      <tr> 
      <td><StatisticLine text="Positivity" value={good/statistics.total}/></td>
      </tr>
      </tbody>
      </table>
    }
      </>
    }
  </div>
    



  )
}

export default App
