
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Articles from './components/Articles'
import SingleArticle from './components/Single-Article'
import Users from './components/users'
import Topics from './components/topics'
import Header from './components/Header'
import { UserProvider } from './components/UserContext'
import './App.css'





function App() {

  const user = ''
  return (
   
      <main className='App'>
        <UserProvider>
        <Header user={user}/>
        <Nav/>
        <Routes>
          <Route path='/'/>
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
