import Link from 'next/link'

export default function CreatePage() {
  return (
    <>
      <section className='mt-4 flex flex-col gap-4 pl-4 sm:mt-24 sm:pl-24'>
        <h1>How to create your resume:</h1>
        <ol className='flex flex-col gap-2'>
          <li>
            01. Visit the <a href='https://github.com/egarrisxn/resume-builder'>GitHub</a> page.
          </li>
          <li>02. Clone the project repository.</li>
          <li>03. Install the project dependecnies.</li>
          <li>04. Start your local development server.</li>
          <li>
            05. Go to <code>public/resume</code> or <code>public/cover-letter</code>.
          </li>
          <li>06. Update either/both files with your data.</li>
          <li>
            07. Go to <code>api/generate-resume</code> or <code>api/generate-cover-letter</code>.
          </li>
          <li>08. Update the headerKeyword function.</li>
          <li>
            09. Head to the <Link href='/examples'>Preview/Save</Link> page.
          </li>
          <li>10. Preview your files and ensure they looks great!</li>
          <li>11. If you are not satisfied, go back and revise them.</li>
          <li>12. Eventually, it will be just perfect for you!</li>
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
