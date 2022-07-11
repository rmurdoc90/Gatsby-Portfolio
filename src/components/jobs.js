import React from "react"

function jobs({ data }) {
  console.log(data)

  return (
    <section className="flex-center jobs" id="jobs">
      <div className="flex-center-center job">
        {data.nodes.map(job => {
          return (
            <article className="job-article">
              <div className="job-info">
                <h1>{job.companyName}</h1>
                <h2>{job.jobTitle}</h2>
                <h4>{job.startDate} - Present</h4>
                <p>{job.description}</p>
                {job.techStack.map(item => {
                  return <p>{item}</p>
                })}
              </div>
              <div className="job-img">
                <img src={job.projectImg.asset.url} alt=" " />
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default jobs
