import React from 'react'
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../style/App.css'
import Header from './Header'
import Content from './Content'

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    return(
      <div>
      <Header/>
      <Content/>
      </div>
    )
  }
}

export default App;
