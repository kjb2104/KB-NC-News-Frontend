
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Articles from './components/Articles'
import SingleArticle from './components/Single-Article'
import { useState } from 'react'
import Users from './components/users'
import Topics from './components/topics'
import Header from './components/Header'
import Home from './components/home'
import { UserProvider } from './components/UserContext'
import './App.css'
import ErrorComponent from './components/error-component'





function App() {

  const user = ''
  const [err, setErr] = useState(null)

  return (
   
      <main className='App'>
        <UserProvider>
        <Nav/>
        <Header user={user}/>
        <Routes>
          <Route path='/' element={<Home/>} user={user}/>
          <Route path="*" element={<ErrorComponent/>} />
          <Route path='/articles' element={<Articles/>}/>
          <Route path='/articles/:article_id' element={<SingleArticle/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/topics' element={<Topics/>}/>
        </Routes>
        </UserProvider>
      </main>
  )
}

export default App
