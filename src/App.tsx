import * as React from 'react'
import Home from './components/Home'
import './App.css'

import styled from 'styled-components'

const StyleDiv = styled.div`
display: flex;
justify-content:space-evenly;
align-items: center;
color: white;
background-color: #131A22;
width: 100%;
height: 100vh;
padding: 2em;
box-sizing: border-box;
font-size: 5em;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
`

function App() {
  return (
    <StyleDiv>
      <Home />
    </StyleDiv>
  )
}

export default App
