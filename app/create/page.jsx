import Link from 'next/link'

export default function CreatePage() {
  return (
    <>
      <section className='mt-4 flex flex-col gap-4 pl-4 sm:mt-24 sm:pl-24'>
        <h1>How to create your resume:</h1>
        <ol className='flex flex-col gap-2'>
          <li>
            1. Visit the <a href='https://github.com/egarrisxn/resume-builder'>GitHub</a> page.
          </li>
          <li>2. Clone the project repository.</li>
          <li>3. Install the project dependecnies.</li>
          <li>4. Start your local development server.</li>
          <li>5. Navigate to (app/api/resume-data).</li>
          <li>6. Update this file with your data.</li>
          <li>7. Navigate to (app/api/generate-pdf).</li>
          <li>8. Update the headerKeyword function.</li>
          <li>
            9. Head to the <Link href='/resumes'>Preview/Save</Link> page.
          </li>
          <li>10. Ensure your PDF looks great and enjoy!</li>
        </ol>
      </section>
      <section className='mb-4 flex flex-col items-end justify-end gap-1 pr-4 sm:mb-24 sm:pr-24'>
        <h1>
          Visit <Link href='/tips'>Tips</Link> to perfect your resume!
        </h1>
        <h1>
          Visit <Link href='/resume'>Preview/Save</Link> for your resume.
        </h1>
      </section>
    </>
  )
}
