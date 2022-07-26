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
                return (
                  <button className="bg-slate-400/75 hover:bg-green-600 p-1 rounded text-xs mr-2">
                    {item}
                  </button>
                )
              })}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default projects
