import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

function footer() {
  return (
    <div className="bg-slate-700 h-12 p-8">
      <h1>Footer</h1>
      <button
        onClick={() => scrollTo("#home")}
        className="py-2 px-4 rounded text-sm"
      >
        Home
      </button>
      <button
        onClick={() => scrollTo("#about")}
        className="py-2 px-4 rounded text-sm"
      >
        About
      </button>
      <button
        onClick={() => scrollTo("#projects")}
        className="py-2 px-4 rounded text-sm"
      >
        Projects
      </button>
      <button
        onClick={() => scrollTo("#jobs")}
        className="py-2 px-4 rounded text-sm"
      >
        Experience
      </button>
      <button
        onClick={() => scrollTo("#contact")}
        className="py-2 px-4 rounded text-sm"
      >
        Contact
      </button>
    </div>
  )
}

export default footer
