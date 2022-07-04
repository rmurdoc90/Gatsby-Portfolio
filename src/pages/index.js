import React from "react"
import { graphql } from "gatsby"

import "../style.css"
import Nav from "../components/nav"
import Header from "../components/header"
import Projects from "../components/projects"
import Jobs from "../components/jobs"

export default function Home({ data }) {
  console.log(data)
  return (
    <>
      <Nav />
      <Header />
      <Projects data={data.allSanityProjects} />
      <Jobs data={data.allSanityJobs} />
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
