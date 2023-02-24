import React, { useEffect, useState } from 'react'
import './Intro.css'
import { CSSTransition } from "react-transition-group";

const Intro = () => {

  const [enter, setEnter] = useState(false)

  useEffect(() => {
    setEnter(true)
  }, [])

  return (
    <div className='intro_box'>
      <div className='center_box'>
      <CSSTransition in={enter} timeout={8000} classNames="fadein">
        <p className='hi' style={{ transitionDelay: "300ms" }}>Hi, I'm</p>
      </CSSTransition>
      <CSSTransition in={enter} timeout={8000} classNames="fadein">
        <h1 className='name' style={{ transitionDelay: "500ms" }}>Andrés Casas</h1>
      </CSSTransition>
      <CSSTransition in={enter} timeout={8000} classNames="fadein">
        <p className='paragraph' style={{ transitionDelay: "600ms" }}>and I'm a Javascript web developer (for now) who is very, very fond of building stuff that is made out of code. I'm growing more and more into this everyday while I'm figuring out how to create digital products of any requirements that are set for them.
        I can move gracefully through front-end and back-end and yeah... Loving this programming universe so far.</p>
      </CSSTransition>
      <CSSTransition in={enter} timeout={8000} classNames="fadein">
      <p className='paragraph' style={{ transitionDelay: "700ms" }}>
        If you wanna learn more about me just keep on scrolling through.
      </p>
      </CSSTransition>
      </div>
    </div>    
  )
}

export default Intro