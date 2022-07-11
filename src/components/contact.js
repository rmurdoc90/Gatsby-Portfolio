import React from "react"

function contact() {
  return (
    <section className="flex-center-center contact" id="contact">
      <div>
        <h3>Feel free to reach out</h3>
        <form action="post">
          <label htmlFor="name"></label>
          <input type="text" />
          <label htmlFor="email"></label>
          <input type="text" />
        </form>
      </div>
    </section>
  )
}

export default contact
