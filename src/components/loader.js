import React from "react"
import { useEffect } from "react"

function Loader() {
  function loaderFade() {
    let wrapper = document.getElementById("loader").style
    console.log(wrapper)
    setTimeout(() => {}, 3000)
  }

  useEffect(() => {
    loaderFade()
  })

  return (
    <div className="loader-wrapper flex-center-center" id="loader">
      <div className="loader"></div>
    </div>
  )
}

export default Loader
