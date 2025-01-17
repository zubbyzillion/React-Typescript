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
import { ThemeContextProvider } from "./components/context/ThemeContext"
import { Box } from "./components/context/Box"
import { UserContextProvider } from "./components/context/UserContext"
import { User } from "./components/context/User"
import { Counter } from "./components/class/Counter"
import { Private } from "./components/auth/Private"
import { Profile } from "./components/auth/Profile"
import { List } from "./components/generics/List"
import { RandomNumber } from "./components/restriction/RandomNumber"
import { Toast } from "./components/templateliterals/Toast"


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
    <PersonList names={nameList} />
      <Status status="loading" />
      <Oscar>
    <Heading>Oscar goes to di Caprio</Heading>
      </Oscar>
      <Button handleClick={(event, id) => {
        console.log("Button Clicked", event, id)
      }} />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid black", padding: "1rem"}} />
      <ThemeContextProvider>
      <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Counter message="The count value is"/>
      <Private isLoggedIn={true} component={Profile} />
      {/* <List items={["Batman", "Superman", "Wonder Woman",]} onClick={(item) => console.log(item)} />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List items={[
        {
          id: 1,
          first: "Bruce",
          last: "Wayne",
        },
        {
          id: 2,
          first: "Clark",
          last: "Kent",
        },
        {
          id: 3,
          first: "Princess",
          last: "Diana",
        },
      ]} onClick={(item) => console.log(item)} />
  <RandomNumber value={10} isPositive  />
  <Toast position="center" />
  </div>
  )
}

export default App;
