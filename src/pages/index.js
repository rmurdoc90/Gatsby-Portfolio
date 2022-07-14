import React from "react"
import { graphql } from "gatsby"

import "../style.css"
import Header from "../components/header"
import Projects from "../components/projects"
import Jobs from "../components/jobs"
import Loader from "../components/loader"
import About from "../components/about"
import Socials from "../components/socials"
import Contact from "../components/contact"

export default function Home({ data }) {
  return (
    <section className="site-wrapper">
      <Loader />
      <Header />
      <About />
      <Projects data={data.allSanityProjects} />
      <Jobs data={data.allSanityJobs} />
      <Socials />
      <Contact />
    </section>
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
