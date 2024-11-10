import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import { Productionhouse } from './components/Productionhouse'
import GenreMovieList from './components/GenreMovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <Slider/>
     <Productionhouse/>
     <GenreMovieList/>
    </>
  )
}

export default App
