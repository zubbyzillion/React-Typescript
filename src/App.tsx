// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: "Zubby",
    last: "Zillion",
  }

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Zubby",
      last: "Zillion",
    },
    {
      first: "Princewill",
      last: "Ogbo",
    },
  ]

  return (
  <div className="App">
    <Greet name="Zubby" messageCount={20} isLoggedIn={false} />
    <Person name={personName} />
    <PersonList names={nameList} />
  </div>
  )
}

export default App;
