import React from "react"
import { Link } from "gatsby"

function nav() {
  return (
    <nav className="flex-center sticky">
      <div className="main-container nav">
        <Link to="/"> Home </Link>

        <div>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/experience"> Experience </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
    </nav>
  )
}

export default nav
