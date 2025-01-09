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

const StatisticLine = ({text, value}) => {
  return (
    <>
      <tr>
        <td>{text}</td><td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const averageScore = ((good * 1) + (neutral * 0) + (bad * -1)) / total
  const positiveFeedback = (good / total) * 100 + " %"

  if (total === 0)
    return (
      <><p>No feedback given.</p></>
    )

  return (
    <>
      <table>
        <thead></thead>
        <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={averageScore} />
        <StatisticLine text="positive" value={positiveFeedback} />
        </tbody>
      </table>
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
      <Title title="statistics" />
      <Statistics good={goodCount} neutral={neutralCount} bad={badCount} />
    </>
  )
}

export default App
