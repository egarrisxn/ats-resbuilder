export function Contact({data}) {
  if (!data) return null

  return (
    <section>
      <h1>
        {data.name} {data.pronouns}
      </h1>
      <h2>{data.title}</h2>
      <p>
        {data.location} | <a href={`tel:${data.phone}`}>{data.phone}</a> |{' '}
        <a href={`mailto:${data.email}`}>{data.email}</a>{' '}
      </p>
      <p>
        <a href={`https://${data.website}`} target='_blank'>
          {data.website}
        </a>{' '}
        |{' '}
        <a href={`https://${data.github}`} target='_blank'>
          {data.github}
        </a>{' '}
        |{' '}
        <a href={`https://${data.linkedin}`} target='_blank'>
          {data.linkedin}
        </a>
      </p>
    </section>
  )
}
