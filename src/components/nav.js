import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

function nav() {
  return (
    <nav className="">
      <div className="nav">
        <button
          onClick={() => scrollTo("#about")}
          className="link flex-center-center"
        >
          About
        </button>
        <button
          onClick={() => scrollTo("#projects")}
          className="link flex-center-center"
        >
          Projects
        </button>
        <button
          onClick={() => scrollTo("#jobs")}
          className="link flex-center-center"
        >
          Experience
        </button>
        <button
          onClick={() => scrollTo("#socials")}
          className="link flex-center-center"
        >
          Socials
        </button>
        <button
          onClick={() => scrollTo("#contact")}
          className="link flex-center-center"
        >
          Contact
        </button>
      </div>
    </nav>
  )
}

export default nav
