export function Projects({data}) {
  if (!data) return null

  return (
    <>
      <h3>Projects</h3>
      {data.length === 0 ? (
        <p>No projects listed.</p>
      ) : (
        data.map((project, index) => (
          <div key={index}>
            <p className='font-bold'>
              {project.name} |{' '}
              <a href={`https://${project.github}`} target='_blank'>
                {project.github}
              </a>
            </p>
            <ul>
              {project.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </>
  )
}
