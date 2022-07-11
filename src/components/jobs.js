import React from "react"

function jobs({ data }) {
  console.log(data)
  let job1 = data.nodes[0]
  let job2 = data.nodes[1]

  return (
    <section className="flex-center jobs" id="jobs">
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
  )
}

export default jobs
