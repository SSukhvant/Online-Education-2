import React from 'react';
import 'react-modal-video/scss/modal-video.scss';
import './App.scss';
import { Navbar } from './components'
import { About, Contact, Footer, Home, Pages, Service } from './containers';

function App() {

  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Service/>
    <About/>
    <Contact/>
    <Pages/>
    <Footer/>

    </div>
  )
}

export default App;
