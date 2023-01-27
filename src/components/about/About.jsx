import React from 'react'
import classes from './about.module.css'
import { useEffect, useRef } from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {init} from 'ityped'
const About = () => {
  const titleRef = useRef();
  useEffect(()=>{
    init(titleRef.current,{
      backDelay:1000,
      showCursor:true,
      strings:["Babu Hasib","a Microsoft Architect Engineer"]
    })
  },[]);
  return (
    <section id="about" className={classes.container}>
       <div className={classes.wrapper}>
            <div className={classes.left}>
                <h2 className={classes.title}>Hi, I am <span  ref={titleRef}></span></h2>
                <h4 className={classes.subtitle}>System Engineer</h4>
                <p className={classes.desc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellendus quae pariatur odit iste tenetur aliquam voluptatum hic quam,
                   delectus eius modi dolorem, ullam blanditiis est perferendis atque rerum soluta!
                </p>
                <div className={classes.buttons}>
                  <button> Contact Me</button>
                  <button className={classes.seeMoreBtn}>See More <AiOutlineArrowDown/></button>
                </div>
           </div>
            <div className={classes.right}>

            </div>
      </div>
    </section>
  )
}

export default About;