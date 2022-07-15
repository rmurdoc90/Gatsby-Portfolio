import React from "react"
import { useEffect } from "react"

function Loader() {
  function loaderFade() {
    setTimeout(() => {
      let wrapper = document.getElementById("loader")
      let count = 100
      setInterval(opacChange, 10)

      function opacChange() {
        if (count >= 0) {
          console.log(`In loop ${count}`)
          wrapper.style.filter = `opacity(${count}%)`
          count--
        } else {
          clearInterval(count)
        }
      }
    }, 3000)
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
