import React from "react"

function projects({ data }) {
  console.log(data)
  let proj1 = data.nodes[0]
  let proj2 = data.nodes[1]

  return (
    <section className="flex-center projects" id="projects">
      <div className="main-container">
        <div>
          <h1>{proj1.projectName}</h1>
          <p>{proj1.description}</p>
        </div>
        <div>
          <h1>{proj2.projectName}</h1>
          <p>{proj2.description}</p>
        </div>
      </div>
    </section>
  )
}

export default projects
