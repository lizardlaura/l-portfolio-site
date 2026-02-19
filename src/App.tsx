// import {Routes, Route} from 'react-router-dom'
import './App.css'
// import FlashCard from './components/FlashCard'
// import LoveButton from './components/LoveButton'
import Navbar from './components/Navbar'
// import AppShell from './pages/AppShell'
import Main from './pages/Main'


function App() {
  
  return (
    <>
    <Navbar path='/' />
    <Main />
    
    {/* <FlashCard />
      <LoveButton /> */}
    </>
  )
}

export default App
