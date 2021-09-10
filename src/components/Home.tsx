import React, { useState } from 'react'

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
    <section  key={index} className='sectionWords'>
      <button className={`buttonWord class${index}`} onClick={(e)=>{getData(e)}} id={index.toString()} >
        {index===0 ? res.toUpperCase() : res}
      </button>
    </section>
    )
  }

  const components = myMsj.split('').map((res,index)=>{
    return component(res, index)
  })

  return (
    <>
    <div className='welcome'>
      {components.slice(0,7).map(res=>{return res})}
    </div>
    <div className='home'>
      {components.slice(7,11).map(res=>{return res})}
    </div>
    </>
  )

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
