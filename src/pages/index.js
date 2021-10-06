import React, { useState } from "react"

// images
import herobg from "../../src/images/hero-bg.webp"
import logo from "../images/logo.webp"
import close from "../images/close.svg"
import menu from "../images/menu.svg"
import meImg from "../images/me.webp"
import jsImg from "../images/js6.svg"
import reactImg from "../images/react.svg"
import vueImg from "../images/vue.svg"


// animation
import Typewriter from "typewriter-effect"
import { useSpring, animated } from 'react-spring'
// import ReactLoading from "react-loading" de realizat la urma!!


const IndexPage = () => {

  const [isMenuHide, setMenuHide] = useState(true)
  const [myImg, setMyImg] = useState(false)
  
  const styles = useSpring({ to: { opacity: 1,  transform: 'translateY(0px)' }, from: {opacity: 0, transform: 'translateY(-10px)' }, delay: 400})
  const styles2 = useSpring({ to: { opacity: 1, transform: 'translateX(0)' }, from: {opacity: 0, transform: 'translateX(40px)' }, delay: 800 })
  const styles3 = useSpring({ to: { opacity: 1 }, from: {opacity: 0 }, delay: 400 })

  const changeImagePosition = () => {
    if(window.scrollY >= 150){
      setMyImg(true)
    } else if (window.scrollY <= 50){
      setMyImg(false)
    }
  }

  window.addEventListener('scroll', changeImagePosition)


    return(
    <>
      <header className="h-screen pt-8 md:pt-10 lg:pt-20 bg-cover flex flex-col relative" style={{ backgroundImage: `url('${herobg}')`}} >
      <div className="container mx-auto px-6 md:px-10">
        {/* Navigation */}
        <nav className="flex select-none justify-between flex-wrap w-full items-center">
          <div className="z-20 hover:opacity-70">
              <animated.div style={styles}>
                <a href="/" className="flex flex-row items-center">
                  <img src={logo} className="w-14 md:w-auto transition-all" alt=""></img>
                  <span className="text-white pl-4 md:pl-5 text-xl tracking-wider">Victor Botan</span>
                </a>
              </animated.div>
          </div>
          <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block z-20">
            <img src={isMenuHide ? menu : close } className="w-7 mt-2 md:w-8" alt=""></img>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" onChange={ () => setMenuHide(!isMenuHide)} />
          <animated.div style={styles} className="menu select-none hidden px-8 py-4 lg:flex flex-col lg:flex-row w-full lg:w-auto text-white bg-black bg-opacity-10 lg:bg-transparent text-xl z-20 gap-6 tracking-wide text-left p-0 mt-4 lg:mt-0 w-vh">
              <a href="/" className="leading-loose">About</a>
              <a href="/" className="leading-loose">Work</a>
              <a href="/" className="leading-loose">hello@victorbotan.com</a>
          </animated.div>
        </nav>
      </div> 
      {/* Hero Message */}
      <div className="container select-none mx-auto mt-20 lg:mt-0  pb-20 px-8 md:px-10 relative text-white text-xl flex flex-col lg:fle-row place-items-start justify-center gap-6 flex-grow z-20">
      <animated.div style={styles2}>
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-4xl leading-10">
          <Typewriter 
            options={{
              autoStart: true,
              loop: false,
              delay: '40',
              deleteSpeed: '1'
            }}
            onInit={(typewriter) => {
            typewriter
            .pauseFor(1100)
            .typeString("Hey!")
            .pauseFor(900)
            .typeString(" I am Frontend Developer <br> and UI Designer")
            .start();
          }}
        /></h1>
        <p className="mt-6">I design and code beautifuly simple things</p>
        </animated.div>

        <animated.div style={styles3}>
          <button className="py-5 px-8 bg-pur hover:bg-pur-dark hover:shadow-md transition duration-480 ease-in-out z-10 relative rounded-2xl">See my work ↓ </button>
        </animated.div>

      </div>
      
         
    </ header>

    {/* About Me */}


    <div className={'container mx-auto transition ease-in-out duration-500 pb-20 px-8 md:px-10 items-start ' + (myImg ? 'transform -translate-y-8 md:-translate-y-32 opacity-100' : ' opacity-0')}>
          <img src={meImg} className="w-full block" />
          <h2 className="font-semibold text-5xl text-primary mt-24 md:mt-44 mb-6 text-center md:text-left" >About me</h2>
          <div className="flex flex-row justify-betwen flex-wrap md:flex-nowrap">
            <div className="w-full md:mr-24">
              <p className="break-words text-secondary max-w-500px leading-7 text-lg text-center md:text-left">Hello! My name is Victor and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
            </div>
            <div className="w-full max-w-500px select-none">
              <p className="text-secondary leading-7 text-lg mt-6 md:mt-0 text-center md:text-left">Here are a few technologies I've been working with recently:</p>
              <div className="tech flex flex-row flex-wrap justify-items-center items-center text-secondary text-lg mt-6">
                <div className="flex items-center mb-6"><img src={jsImg} className="block pr-4" />JavaScript (ES6+)</div>
                <div className="flex items-center mb-6"><img src={reactImg} className="block pr-4" />React</div>
                <div className="flex items-center mb-6"><img src={vueImg} className="block pr-4" />Vue</div>
                <div className="flex items-center mb-6"><img src={vueImg} className="block pr-4" />Vue</div>
              </div>
              <button type="button" className="text-center w-full bg-transparent py-5 border-2 mt-4 text-link font-medium hover:border-transparent hover:bg-primary hover:text-white transition-all">See All</button>
            </div>
          </div>
    </div>

    {/* My Work */}

    <div className="bg-second">
      <div className="container mx-auto w-full">
          <p>lorem </p>
      </div>
    </div>

    </>
    
    )
}

export default IndexPage
