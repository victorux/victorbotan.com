import * as React from "react"
import herobg from "../../src/images/hero-bg.webp"
import logo from "../images/logo.webp"

const IndexPage = () => {
  return (
    <header className="h-screen wh-200 pt-20 bg-cover bg-black flex flex-col" style={{ backgroundImage: `url('${herobg}')`}} >
      <div className="container mx-auto px-10 flex-none">
        {/* Navigation */}
        <nav className="flex justify-between flex-nowrap flex-wrapw-full items-center">
          <div className="z-20">
            <a href="/" className="flex flex-row items-center">
              <img src={logo} className=""></img>
              <span className="text-white pl-5 text-xl tracking-wider">Victor Botan</span>
            </a>
          </div>
          <div className="menu text-white text-xl z-20 flex gap-6 tracking-wide">
            <a href="/">About</a>
            <a href="/">Work</a>
            <a href="/">hello@victorbotan.com</a>
          </div>
        </nav>
      </div> 
      {/* Hero Message */}
      <div className="container mx-auto mt-0  pb-20 pl-10 z-20 relative text-white text-xl flex flex-col place-items-start justify-center gap-6 flex-grow ">
        <h1 className="text-6xl font-bold">Hello, I’m Front End Developer</h1>
        <p>I code beautifuly simple things</p>
        <button className="py-5 px-8 bg-pur hover:bg-pur-dark hover:shadow-md transition duration-480 ease-in-out z-10 relative rounded-2xl">See my work ↓ </button>
      </div>   
         
    </ header>
  )
}

export default IndexPage
