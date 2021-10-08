import React, { useState } from "react"

// images
import herobg from "../../src/images/hero-bg.webp"
import getintouchbg from "../../src/images/bg2.webp"
import logo from "../images/logo.webp"
import close from "../images/close.svg"
import menu from "../images/menu.svg"
import meImg from "../images/me.webp"
import jsImg from "../images/js6.svg"
import reactImg from "../images/react.svg"
import vueImg from "../images/vue.svg"
import eithApp from "../../src/images/eith-mess-app.webp"
import nikeApp from "../../src/images/nikeapp.webp"
import artdecoLogo from "../../src/images/artdeco.png"

// social icons
import linkedin from "../images/social-icons/linkedin.svg"
import dribbble from "../images/social-icons/dribbble.svg"
import instagram from "../images/social-icons/instagram.svg"
import behance from "../images/social-icons/behance.svg"
import github from "../images/social-icons/github.svg"


// animation
import Typewriter from "typewriter-effect"
import { useSpring, animated } from 'react-spring'
// import ReactLoading from "react-loading" de realizat la urma!!


const IndexPage = () => {

  const [isMenuHide, setMenuHide] = useState(true)
  const [myImg, setMyImg] = useState(false)
  const [techList, setTechList] = useState(false)
  
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
              <a href="#aboutme" className="leading-loose">About</a>
              <a href="#myworks" className="leading-loose">Work</a>
              <a href="mailto:hi.victorb@gmail.com" className="leading-loose">hello@victorbotan.com</a>
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
        <p className="mt-6 text-xl">I design and code beautifuly simple things</p>
        </animated.div>

        <animated.div style={styles3}>
          <button className="py-5 px-8 bg-pur hover:bg-pur-dark hover:shadow-md transition duration-480 ease-in-out z-10 relative rounded-2xl">See my work ↓ </button>
        </animated.div>

      </div>
      
         
    </ header>

    {/* About Me */}


    <div id="aboutme" className={'container select-none mx-auto transition ease-in-out duration-500 pb-20 px-8 md:px-10 items-start ' + (myImg ? 'transform -translate-y-8 md:-translate-y-32 opacity-100' : ' opacity-0')}>
          <img src={meImg} className="w-full block" />
          <h2 className="font-semibold block text-5xl text-primary mt-24 md:mt-44 mb-12 text-center md:text-left z-20" >About me</h2>
          <div className="aboutme relative flex flex-row justify-betwen flex-wrap md:flex-nowrap">
            
            <div className="w-full md:mr-24">
              <p className="break-words text-secondary font-normal max-w-500px leading-9 tracking-normal text-xl text-center md:text-left">Hello! My name is Victor and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
            </div>

            <div className="w-full max-w-500px select-none">
              <p className="text-secondary leading-7 text-xl mt-6 md:mt-0 text-center md:text-left">Here are a few technologies I've been working with recently:</p>
              <div className="tech flex flex-row flex-wrap justify-items-center items-center text-secondary text-lg mt-6">
              <TechItem title={'JavaScript ES6+'} imgSrc={jsImg} />
              <TechItem title={'React'} imgSrc={reactImg} />
              <TechItem title={'Vue'} imgSrc={vueImg} />
              <TechItem title={'TailwindCSS'} imgSrc={jsImg} />
                {techList ? <React.Fragment>
                  <TechItem title={'Git'} imgSrc={jsImg} />
                  <TechItem title={'Photoshop'} imgSrc={jsImg} />
                  <TechItem title={'Sketch'} imgSrc={jsImg} />
                  <TechItem title={'Bootstrap'} imgSrc={jsImg} />
                  <TechItem title={'Styled Components'} imgSrc={jsImg} />
                  <TechItem title={'Gatsby'} imgSrc={jsImg} />
                  <TechItem title={'UxPin'} imgSrc={jsImg} />
                  <TechItem title={'Miro'} imgSrc={jsImg} />
                </React.Fragment> : ''}
              </div>
              <button type="button" className="text-center text-xl w-full bg-transparent py-5 border-2 mt-4 text-link font-medium hover:border-transparent hover:bg-primary hover:text-white transition-all" onClick={() => setTechList(!techList)}>{techList ? 'Show Less' : 'Show All'}</button>
            </div>
          </div>
    </div>

    {/* My Work */}

    <div id="myworks" className="bg-second select-none">
      <div className="container mx-auto w-full">
        <div className="pt-24 md:pt-44  pb-12 md:pb-24">
          <SectionTitle title="My Latest Works" />
          <p className="text-xl text-center mt-6 text-bluegray">Some things I have built</p>
        </div>
        <ProjectPost imgSrc={eithApp} title={'Eith Mess App'} role={'Frontend'} /> 
        <ProjectPost imgSrc={nikeApp} title={'Nike E-Commerce Concept'} role={'UX/UI'} />
        <ProjectPost imgSrc={artdecoLogo} title={'Artdeco Solution Logo'} role={'Graphic Design'} />
      </div>
    </div>

    {/* Get in touch */}
    <section id="contact" className="w-full select-none py-24 md:py-44 bg-cover bg-center" style={{ backgroundImage: `url('${getintouchbg}')`}}>
      <div className="container mx-auto w-full">
        <SectionTitle title="Let's Get In Touch" />
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-center mt-12  md:mt-20">
        <div className="flex flex-col justify-center md:justify-items-start">
          <div className="message mb-6 md:mb-12 p-4 md:p-6 rounded-t-2xl rounded-br-2xl bg-black bg-opacity-20 w-60 md:w-80"><p className="text-white text-2xl">Say hello, 🦊👋!!</p></div>
          <button className="py-5 px-8 bg-pur items-center hover:bg-pur-dark hover:shadow-md transition duration-480 ease-in-out z-10 relative rounded-2xl text-white text-xl mx-auto md:mx-0">hi.victorb@gmail.com</button>
        </div>
        <div className="w-px hidden  md:block bg-white h-48  mx-12 opacity-50" />
        <div>
          <p className="text-2xl text-white text-center md:text-left font-medium mt-12 md:mt-0">Follow me on:</p>
          <div className="flex flex-row flex-wrap gap-1 md:gap-3 mt-4">
            <a href="#" className="hover:opacity-70 transition-all"><img src={linkedin} /></a>
            <a href="#" className="hover:opacity-70 transition-all"><img src={dribbble} /></a>
            <a href="#" className="hover:opacity-70 transition-all"><img src={instagram} /></a>
            <a href="#" className="hover:opacity-70 transition-all"><img src={behance} /></a>
            <a href="#" className="hover:opacity-70 transition-all"><img src={github} /></a>
          </div>
        </div>
      </div>
    </section>
    
    {/* Footer */}
    <footer className="bg-white py-8 w-full select-none">
      <p className="text-bluegray text-center text-xl">Designed & Built by Victor Botan (using Sketch, Gatsby, TailwindCSS)</p>
    </footer>
    </>
    )
}

const SectionTitle = (props) => <h2 className="text-white text-center text-4xl md:text-5xl font-semibold">{props.title}</h2>


const TechItem = (props) => {
  return (
    <div className="flex items-center mb-6 font-medium"><img src={props.imgSrc} className="block pr-4" />{props.title}</div>
  )
}

const ProjectPost = (props) => {
  return (
    <article className=" pb-20">
      <img src={props.imgSrc} className="w-full" />
      <div className="mt-6 ml-6 flex flex-row flex-wrap justify-start items-center">
        <h3 className="text-white text-2xl font-medium tracking-wide">{props.title}</h3>
        <div className="w-px h-3 bg-gray-700 mx-5" /> 
        <p className="text-xl text-bluegray font-normal">Role: {props.role}</p>
        <div className="w-px h-3 bg-gray-700 mx-5" /> 
        <div className="text-xl text-blue-500 font-normal">
          <a href="#" className="mr-2 hover:underline">Dribble</a>
          <a href="#" className="mr-2 hover:underline">GitHub</a>
          <a href="#" className="mr-2 hover:underline">See Live</a>
        </div>
        
      </div>
    </article>
  )
}

export default IndexPage
