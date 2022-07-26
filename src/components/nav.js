import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

function nav() {
  return (
    <nav className="">
      <div className="nav">
        <button
          onClick={() => scrollTo("#about")}
          className="bg-slate-500 hover:bg-green-600 py-2 px-4 rounded text-sm"
        >
          About
        </button>
        <button
          onClick={() => scrollTo("#projects")}
          className="bg-slate-500 hover:bg-green-600 py-2 px-4 rounded text-sm"
        >
          Projects
        </button>
        <button
          onClick={() => scrollTo("#jobs")}
          className="bg-slate-500 hover:bg-green-600 py-2 px-4 rounded text-sm"
        >
          Experience
        </button>
        <button
          onClick={() => scrollTo("#socials")}
          className="bg-slate-500 hover:bg-green-600 py-2 px-4 rounded text-sm"
        >
          Socials
        </button>
        <button
          onClick={() => scrollTo("#contact")}
          className="bg-slate-500 hover:bg-green-600 py-2 px-4 rounded text-sm"
        >
          Contact
        </button>
      </div>
    </nav>
  )
}

export default nav
