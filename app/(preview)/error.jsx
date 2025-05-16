'use client'

export default function PreviewError({error, reset}) {
  return (
    <section className='mx-auto my-8 flex max-w-[40rem] flex-col'>
      <h1>Oh no! Something went wrong.</h1>
      <h4>If you feel there was a mistake, please contact me: (egarrisxn@gmail.com).</h4>
      <button onClick={reset}>Try again</button>
      <pre className='bg-muted rounded-md p-2 text-sm break-words whitespace-pre-wrap'>
        {error.message}
      </pre>
    </section>
  )
}
