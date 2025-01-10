import { useState } from "react";

const Title = ({title}) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

const NextAnecdoteButton = ({handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

const VoteButton = ({handleVote}) => {
  return (
    <>
      <button onClick={handleVote}>vote</button>
    </>
  )
}

const DisplayVotes = ({votes}) => { 
  return (
    <>
      <p>has {votes} votes</p>
    </>
  )
}

const MostVotesAnecdote = ({anecdote, votes}) => {
  return (
    <>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </>
  )
}

const Anecdote = ({ anecdote }) => {
  return (
    <>
      <p>{anecdote}</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(() => {
    const emptyVotesMap = {};
    for (let i = 0; i < anecdotes.length; i++) {
      emptyVotesMap[i] = 0;
    }
    return emptyVotesMap;
  });

  const selectRandomAnecdote = () => {
    setSelected(getRandomInt(0, anecdotes.length - 1));
  };

  const handleVote = () => {
    setVotes({...votes, [selected]: votes[selected] + 1})
  }

  // return the index of the winner anecdote (that one that has more votes)
  let winner = () => {
    let winner = null; 
    let mostVotes = 0;
    for (let i = 0; i < anecdotes.length; i++) {
      if (votes[i] >= mostVotes) {
        mostVotes = votes[i]
        winner = i
      }
    }
    return winner
  }

  return (
    <div>
      <Title title="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} />
      <DisplayVotes votes={votes[selected]} />
      <VoteButton handleVote={handleVote} />
      <NextAnecdoteButton
        text="next anecdote"
        handleClick={selectRandomAnecdote}
      />
      <Title title="Anecdote with most votes" />
      <MostVotesAnecdote anecdote={anecdotes[winner()]} votes={votes[winner()]} />
    </div>
  );
};

export default App;
