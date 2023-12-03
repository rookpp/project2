import React from 'react'
import Header from './components/header/header'
import Sidebar from './components/sidebar/Sidebar'
import { Container } from 'react-bootstrap'
import HomeScreen from './components/screens/homeScreen/HomeScreen'

const App = () => {
  return <>
  <Header/>
  <div className='app_container border border-info'><Sidebar/></div>
  <Container fluid className='app__main border border-warning'>
    <HomeScreen/>
  </Container>
  </>
}

export default App
