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
  let jobs = data.allSanityJobs.nodes
  console.log(jobs)

  return (
    <div>
      <div>Data</div>
      <div>{strings} test</div>
      <div>
        {jobs.forEach(item => {
          for (let key in item) {
            console.log(`${key}: ${item[key]}`)
            return (
              <div>
                <h2>{item.jobTitle}</h2>
                <p>{item.description}</p>
                {/* {item.techStack.forEach(tech => {
                  return <h4>{tech}</h4>
                })} */}
              </div>
            )
          }
          // console.log(item)
          // let name = item.companyName
        })}
      </div>
    </div>
  )
}
