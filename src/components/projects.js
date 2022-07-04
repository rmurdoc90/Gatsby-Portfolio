import React from "react"
import { graphql } from "gatsby"

function projects({ data }) {
  console.log(data)
  let proj1 = data.allSanityProjects.nodes[0]
  let proj2 = data.allSanityProjects.nodes[1]

  return (
    <section className="flex-center">
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

export const query = graphql`
  {
    allSanityProjects {
      nodes {
        projectName
        projectSlug {
          current
        }
        githubSlug {
          current
        }
        techStack
        projectImg {
          asset {
            url
          }
        }
      }
    }
  }
`
