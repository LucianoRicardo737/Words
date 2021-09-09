import React, { useState } from 'react'
import styled from 'styled-components'

import './home.css'

const Home = () => {

 const [indexWord, setIndexWord] = useState(0)
 const [darkMode, setDarkMode] = useState(false)
  
 const myMsj = "welcomehome"
 const data = [
   'wind',
   'end',
   'laugh',
   'crossword',
   'overwhelming',
   'magic',
   'empire',
   'happy',
   'outfit',
   'mother',
   'elephant'
 ]

  const changeTheme = () => {
    let $ = (selector: String) => document.querySelector(`.${selector}`)

    
    $('styleDiv')?.classList.toggle('effect')
    setTimeout(() => {
      $('styleDiv')?.classList.toggle('effect')
    }, 100);

    $('styleDiv')?.classList.toggle('darkMode')
    $('modeButton')?.classList.toggle('modeButtonDark')

    darkMode ? setDarkMode(false) : setDarkMode(true)
  } 
  const welcomeHome = () => { 

  function getData(e: any){
      setIndexWord(parseInt(e.target.id))
  }

  function component(res : String ,index: number){
    return (
    <section className='sectionWords'>
      <button className={`buttonWord class${index}`} onClick={(e)=>{getData(e)}} id={index.toString()} >
        {index===0 ? res.toUpperCase() : res}
      </button>
    </section>
    )
  }

  function styling(res : String ,index: number){
    switch (index) {
      case index:
        return component(res, index)
      default: return res
    }
  }
  return myMsj.split('').map((res,index)=>{
    return styling(res, index)
  })
}

const ShowWord = (index: number) => {
  let word = data[index].slice(0,1).toUpperCase() + data[index].slice(1)
  return (
    <span className='word' id={`word` + index.toString()}>
        {word}
    </span>
  )
}

  


  return (
    <section className='sectionDiv'>
       <div className='divButton'>
        <button onClick={()=>{changeTheme()}} className='modeButton'>{darkMode===true ?  'Change to WhiteMode' : 'Change to DarkMode'  }</button>
      </div>
      <div className='divCont'>
        {welcomeHome()}
      </div>
      <div className='divWords'>
        {ShowWord(indexWord)}
      </div>
    </section>
  )
}

export default Home
