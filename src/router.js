import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import LoginPage from './components/login'
import SignupPage from './components/signup'
import HomePage from './components/Home'
import NewsPage from './components/News'
import PeoplePage from './pages/people'
import PublicationPage from './components/Publication'
import ContactPage from './components/Contact'
import AdminPage from './components/admin'
import Admin2Page from './components/News/admin2'
import ProjectPage from './components/Projects'
import { WorkoutsContextProvider } from './context/WorkoutsContext'
import { WorkoutsContextProvider2 } from './context/WorkoutsContext2'


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/Projects" element={<ProjectPage />} />
      <Route path="/News" element={
      <WorkoutsContextProvider2>
        <NewsPage />
      </WorkoutsContextProvider2>
      }/>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/Publication" element={<PublicationPage />} />
      <Route path="/admin2" element={
      <WorkoutsContextProvider2>
        <Admin2Page />
      </WorkoutsContextProvider2>
      }/>
      <Route path="/People" element={
        <WorkoutsContextProvider>
          <PeoplePage />
        </WorkoutsContextProvider>
      } />
      <Route path="/Contact" element={<ContactPage />} />
    </Routes>
  )
}

export default Router
