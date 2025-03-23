import React from 'react'
import { motion } from "motion/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import "./HomePage.css"
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate=useNavigate();
  return (
    <>
                  <div className="navpage">
                      <div className="logo" onClick={()=>navigate("/")}>
                          <motion.h3 className="logotxt">E Store</motion.h3>
                      </div>
                      <div className="navlist-icon">
                          <div className="navlist">
                              <motion.ul initial={{x:-10,y:-20,opacity:0}} animate={{x:0,y:0,opacity:1}} transition={{delay:0.7,duration:1}}>
                                  <motion.li  whileHover={{ scale:1.1,}} whileTap={{scale:0.8}}><motion.a animate={{color:"#000"}} whileHover= {{color:"#ba943f"}}  href="#" onClick={()=>navigate("/category")}>shop now</motion.a> </motion.li>
                                  <motion.li  whileHover={{ scale:1.1,}} whileTap={{scale:0.8}}><motion.a animate={{color:"#000"}} whileHover= {{color:"#ba943f"}}  href="#" onClick={()=>navigate("/user")}>profile</motion.a> </motion.li>
                              </motion.ul>
                          </div>
                      <motion.div initial={{x:-10,y:-20,opacity:0}} animate={{x:0,y:0,opacity:1}} transition={{delay:0.7,duration:1}} className="navicon">
                      <motion.span whileHover={{ scale:1.1,}} whileTap={{scale:0.8}}><FontAwesomeIcon className='icon' icon={faMagnifyingGlass} /></motion.span>
                      <motion.span whileHover={{ scale:1.1,}} whileTap={{scale:0.8}}><FontAwesomeIcon className='icon'  icon ={faCartShopping}/> </motion.span>
                      <motion.span whileHover={{ scale:1.1,}} whileTap={{scale:0.8}}><FontAwesomeIcon className='icon' icon ={faUser}/></motion.span>
                      <ul className='user'>
                          <li >LogIn/</li>
                          <li>Register</li>
                      </ul>
      
                      </motion.div>
                      </div>
                      
                  </div>
    </>
  )
}

export default Navbar
