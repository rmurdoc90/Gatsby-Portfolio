import React from "react"
import { graphql } from "gatsby"

import "../style.css"
import Header from "../components/header"
import Projects from "../components/projects"
import Jobs from "../components/jobs"
import Loader from "../components/loader"

export default function Home({ data }) {
  console.log(data)

  return (
    <>
      <Loader />
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
