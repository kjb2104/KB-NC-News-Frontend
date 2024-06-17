import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Articles from './components/Articles'
import Users from './components/users'
import Header from './components/Header'
import './App.css'





function App() {

  return (
   
      <main className='App'>
        
        <Header />
        <Routes>
          <Route path='/' element={<Articles/>}/>
        </Routes>
      </main>
  )
}

export default App
