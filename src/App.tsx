// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';

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
    <Greet name="Zubby" isLoggedIn={false} />
    <Person name={personName} />
    {/* <PersonList names={nameList} /> */}
      <Status status="loading" />
      <Oscar>
    <Heading>Oscar goes to di Caprio</Heading>
      </Oscar>
      <Button handleClick={(event, id) => {
        console.log("Button Clicked", event, id)
      }} />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem"}} />
  </div>
  )
}

export default App;
