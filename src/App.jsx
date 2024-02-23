import { useState } from 'react'
import Counter from './components/Counter'
import Input from './components/Input'


function App() {

  return (
  <>
  <Counter start ="2"/>
  <Counter start = "5"/>
  <Counter start = "7"/>
  <Input/>
  </>
  )
}

export default App
