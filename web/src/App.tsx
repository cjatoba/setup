import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Habit} from "./components/Habit";

function App() {
  return (
    <>
      <Habit completed={1} />
      <Habit completed={10} />
      <Habit completed={5} />
    </>
  )
}

export default App
