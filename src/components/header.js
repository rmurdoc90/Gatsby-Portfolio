import React from "react"
import img from "../imgs/portfolio-header-placeholder.jpeg"

function header() {
  return (
    <section className="header-section flex-center">
      <div className="main-container flex">
        <div className="split">
          <h1>Header</h1>
          <h2>sub header</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, a
            harum error eum distinctio reiciendis deserunt commodi ratione esse
            pariatur quasi? In cum debitis minus excepturi harum? Expedita,
            distinctio provident?
          </p>
          <button>Projects</button>
        </div>
        <div className="split">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  )
}

export default header
