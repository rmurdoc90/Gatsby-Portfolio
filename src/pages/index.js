import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  {
    allSanityJobs {
      nodes {
        companyName
        description
        startDate
        endDate
        techStack
        jobTitle
        projectImg {
          asset {
            url
          }
        }
      }
    }
  }
`

export default function Home({ data }) {
  const strings = "string"
  const jobs = data.allSanityJobs
  return (
    <div>
      <div>Data</div>
      <div>{strings}</div>
      <div>
        {jobs.nodes.forEach(item => {
          console.log(item)
          let name = item.companyName
          return (
            <div>
              <h1>{name}</h1>
              <h2>{item.jobTitle}</h2>
              <p>{item.description}</p>
              {item.techStack.forEach(tech => {
                return <h4>{tech}</h4>
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
