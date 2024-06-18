import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Articles from './components/Articles'
import Users from './components/users'
import Topics from './components/topics'
import Header from './components/Header'
import './App.css'





function App() {

  return (
   
      <main className='App'>
        
        <Header />
        <Nav/>
        <Routes>
          <Route path='/'/>
          <Route path='/articles' element={<Articles/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/topics' element={<Topics/>}/>
        </Routes>
      </main>
  )
}

export default App
