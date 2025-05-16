export function Education({data}) {
  if (!data) return null

  return (
    <>
      <h3>Education & Certifications</h3>
      {data.length === 0 ? (
        <p>No education listed.</p>
      ) : (
        data.map((edu, index) => (
          <div key={index}>
            <p className='font-bold'>
              {edu.degree} - {edu.field_of_study} | {edu.dates}
            </p>
            <p>
              {edu.institution}, {edu.location}
            </p>
            <p>
              <span className='italic'>{edu.summary}</span>
            </p>
          </div>
        ))
      )}
    </>
  )
}
