import React from "react"

function projects({ data }) {
  console.log(data)

  return (
    <section className="flex-center projects" id="projects">
      <div className="main-container">
        {data.nodes.map(proj => {
          return (
            <div>
              <h1>{proj.projectName}</h1>
              <h2>{proj.githubSlug.current}</h2>
              <h2>{proj.projectSlug.current}</h2>
              {proj.techStack.map(item => {
                return <p>{item}</p>
              })}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default projects
