import React from "react"
import { Link } from "gatsby"

function nav() {
  return (
    <nav className="">
      <div className="nav">
        <Link className="link flex-center-center" to="/">
          {" "}
          Home{" "}
        </Link>
        <Link className="link flex-center-center" to="/about">
          {" "}
          About{" "}
        </Link>
        <Link className="link flex-center-center" to="/projects">
          {" "}
          Projects{" "}
        </Link>
        <Link className="link flex-center-center" to="/experience">
          {" "}
          Experience{" "}
        </Link>
        <Link className="link flex-center-center" to="/contact">
          {" "}
          Contact{" "}
        </Link>
      </div>
    </nav>
  )
}

export default nav
