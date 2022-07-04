import React from "react"

import "../style.css"
import Nav from "../components/nav"
import Header from "../components/header"
import Projects from "../components/projects"
import Jobs from "../components/jobs"

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Projects />
      <Jobs />
    </>
  )
}
