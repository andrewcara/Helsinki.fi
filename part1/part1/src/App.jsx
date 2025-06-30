const Header = (props) =>{
  return(<>
  <p>{props.name}</p>
  </>
  )
}

const Content = (props) =>{
  return(

  <>
  {props.courses.map((value, index)=> <p key={index}>
    {value.name}:   Tasks - {value.exercises} 
  </p>)}
  </>
  )
}

const Total = (props) =>{
  return(

    <>
  <p>Total Credits {props.totals.reduce((partialSum, a)=> partialSum+a.exercises, 0)}</p>
  </>
    )

}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      < Header name={course.name}/>
      <Content courses={course.parts}/>
      <Total totals={course.parts}/>
    </div>
  )
}

export default App