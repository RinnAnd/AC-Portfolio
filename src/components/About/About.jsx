import React, { useEffect, useState } from "react";
import "./About.css";
import self from "../../assets/one.jfif";
import { useInView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";
import react from '../../assets/React_Logo.png'
import redux from '../../assets/Redux_Logo.png'
import javascript from '../../assets/JS_Logo.png'
import typescript from '../../assets/TS_Logo.png'
import node from '../../assets/Node_Logo.png'
import postgre from '../../assets/Postgres_Logo.png'

const About = () => {
  const { ref: myRef, inView: textVisible } = useInView({
    triggerOnce: true
  });
  const { ref: refTwo, inView: picVisible } = useInView({
    triggerOnce: true
  });
  const [text, setText] = useState(false);
  const [pic, setPic] = useState(false);

  useEffect(() => {
    setText(textVisible);
    setPic(picVisible);
  });

  return (
    <div id="about">
      <div className="center_box_about">
        <CSSTransition in={text} timeout={5000} classNames="slideinX">
          <div ref={myRef} className="text_box">
            <h1 className="about_me">About me</h1>

            <p className="about_me_text">
              I am able to successfully communicate myself in{" "}
              <span className="important">English</span> and{" "}
              <span className="important">Spanish</span>, wether it is written
              or spoken. I have a great skillset in development techonologies
              and the ability to pick up new ones in relatively short times.
            </p>

            <p className="about_me_text">
              I have a very <span className="important">responsible</span>{" "}
              personality in terms of always trying to improve the time in which
              I deliver any results.
            </p>

            <p className="about_me_text">
              I'm looking for the oportunity to grow and learn in a work
              environment so I can prove to be a valuable{" "}
              <span className="important">team member</span> for anyone who will
              count on me.
            </p>

            <p className="about_me_text">These are some of the technologies I've been using the most:</p>

            <CSSTransition in={pic} timeout={5000} classNames="slidein">
            <div style={{display: 'flex', width:'100%', justifyContent:'space-around', alignItems:'center'}}>
            <ul className="skillset">
              <div style={{display:'flex', gap:'1.2rem', alignItems:'center', margin: '10px 0'}}>
              <li className="skill">React.js</li><img src={react} width='20px'/>
              </div>
              <div style={{display:'flex', gap:'2.5rem', alignItems:'center', margin: '10px 0'}}>
              <li className="skill">Redux</li><img src={redux} width='20px'/>
              </div>
              <div style={{display:'flex', gap:'6px', alignItems:'center', margin: '10px 0'}}>
              <li className="skill">Javascript</li><img src={javascript} width='20px'/>
              </div>
            </ul>
            <ul className="skillset">
            <div style={{display:'flex', gap:'4px', alignItems:'center', margin: '10px 0'}}>
              <li className="skill">Typescript</li><img src={typescript} width='20px'/>
            </div>
            <div style={{display:'flex', gap:'1.6rem', alignItems:'center',margin: '10px 0'}}>             
              <li className="skill">Node.js</li><img src={node} width='20px'/>
            </div>
            <div style={{display:'flex', gap:'4px', alignItems:'center', margin: '10px 0'}}>
              <li className="skill">PostgreSQL</li><img src={postgre} width='20px'/>
            </div>
            </ul>
            </div>
            </CSSTransition>
          </div>
        </CSSTransition>
        <CSSTransition in={pic} timeout={5000} classNames="slidein">
          <div ref={refTwo} className="picture">
            <img className="self" src={self} alt="couldn't find resource" width="80%" />
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default About;
