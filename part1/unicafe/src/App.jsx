import { useState } from 'react'

const Title = ({title}) => {
  return (
    <>
      <h1>{title}</h1> 
    </>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button> 
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad} </p>
    </>
  )
}

function App() {
  const [goodCount, setGoodCount] = useState(0)
  const [neutralCount, setNeutralCount] = useState(0)
  const [badCount, setBadCount] = useState(0)

  const handleGoodClick = () => {
    setGoodCount(goodCount + 1)
  }

  const handleNeutralClick = () => {
    setNeutralCount(neutralCount + 1)
  }

  const handleBadClick = () => {
    setBadCount(badCount + 1)
  }

  return (
    <>
      <Title title="give feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics good={goodCount} neutral={neutralCount} bad={badCount} />
    </>
  )
}

export default App
