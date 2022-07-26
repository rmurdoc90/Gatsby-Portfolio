import React, { useEffect } from "react"
import Lottie from "react-lottie"
import animationData from "../lottie/98955-hexagon-loading"

function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  function loaderFade() {
    setTimeout(() => {
      let wrapper = document.getElementById("loader")
      let count = 100
      setInterval(opacChange, 10)

      function opacChange() {
        if (count >= 0) {
          wrapper.style.filter = `opacity(${count}%)`
          count--
          if (count === 0) {
            wrapper.style.display = "none"
          }
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
      <div className="loader flex-center-center vert">
        <Lottie options={defaultOptions} height={100} width={100} />
        <h2>loading ...</h2>
      </div>
    </div>
  )
}

export default Loader
