import React from "react"
import img from "../imgs/lucas-calloch-P-yzuyWFEIk-unsplash.jpeg"
import Nav from "../components/nav"
function header() {
  return (
    <section className="header-section flex-center">
      <div className="main-container flex-center">
        <div className="Header-img flex-center">
          <img src={img} alt="" />
          <Nav />
        </div>
      </div>
    </section>
  )
}

export default header
