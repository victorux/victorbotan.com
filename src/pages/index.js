import * as React from "react"
import herobg from "../../src/images/hero-bg.webp"

const IndexPage = () => {
  return (
    <header className="w-full h-screen wh-200 pt-12 bg-cover" style={{ backgroundImage: `url('${herobg}')`}} >
      <div className="wrap">

      {/* Navigation */}
      <nav>
          <div>logo</div>
          <ul>
            <li><a href="http://localhost:8000/">About</a></li>
            <li><a href="http://localhost:8000/">Work</a></li>
            <li><a href="http://localhost:8000/">hello@victorbotan.com</a></li>
          </ul>
        </nav>

        {/* Hero Message */}
        <div>
          <h1>Hello, I’m Front End Developer</h1>
          <p>I code beautifuly simple things</p>
          <button className="py-4 px-4 bg-blue-600 text-white">Test Button</button>
        </div>   
      </div>    
    </ header>
  )
}

export default IndexPage
