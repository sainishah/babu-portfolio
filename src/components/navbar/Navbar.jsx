import React from 'react'
import classes from './navbar.module.css'
const Navbar = () => {
  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <div className={classes.left}>
               <h2>Babu Hasib</h2>
            </div>
            <div className={classes.right}>
               <ul className={classes.list}>
                  
                  <li className={classes.listItem}>
                    <a href='#'>Home</a>
                  </li>
                  <li className={classes.listItem}>
                    <a href='#about'>About</a>
                  </li>
                  <li className={classes.listItem}>
                    <a href='#services'>Services</a>
                  </li>
                  <li className={classes.listItem}>
                    <a href='#contact'>Contact</a>
                  </li>
                  <li className={classes.listItem}>
                    <a href='#testimonials'>Testimonials</a>
                  </li>
                  <button className={classes.getQuote}>Get a Quote</button>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;