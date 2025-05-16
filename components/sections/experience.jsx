export function Experience({data}) {
  if (!data) return null

  return (
    <>
      <h3>Work Experience</h3>
      {data.length === 0 ? (
        <p>No experience listed.</p>
      ) : (
        data.map((job, index) => (
          <div key={index}>
            <p className='font-bold'>
              {job.position} | <span className='italic'>{job.dates}</span>
            </p>
            <p>
              {job.company}, {job.location}
            </p>
            <ul>
              {job.responsibilities?.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </>
  )
}
