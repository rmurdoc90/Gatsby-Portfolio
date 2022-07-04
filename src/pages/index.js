import React from "react"
import { graphql } from "gatsby"
import "../style.css"
import Nav from "../components/nav"
import Header from "../components/header"

export default function Home({ data }) {
  let job1 = data.allSanityJobs.nodes[0]
  let job2 = data.allSanityJobs.nodes[1]

  return (
    <>
      <Nav />
      <Header />
      <section className="flex-center">
        <div className="main-container">
          <div>
            <h1>{job1.companyName}</h1>
            <h2>{job1.jobTitle}</h2>
            <h4>
              {job1.startDate} - {job1.endDate}
            </h4>
            <p>{job1.description}</p>
          </div>
          <div>
            <h1>{job2.companyName}</h1>
            <h2>{job2.jobTitle}</h2>
            <h4>{job2.startDate} - Present</h4>
            <p>{job2.description}</p>
          </div>
        </div>
      </section>
    </>
  )
}

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
