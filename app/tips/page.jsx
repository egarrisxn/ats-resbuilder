import Link from 'next/link'

export default function TipsPage() {
  return (
    <>
      <section className='mt-4 flex flex-col gap-4 pl-4 sm:mt-24 sm:pl-24'>
        <h1>A few tips for the perfect resume!</h1>
        <ul className='flex flex-col gap-2'>
          <li>TREAT YOUR RESUME AS A STRATEGIC TOOL!</li>
          <li>Optimize for the algorithm, while keeping a human touch to it.</li>
          <li>Tailor job titles and skills for the position being applied for.</li>
          <li>Use buzzwords and action verbs throughout your resume!</li>
          <li>Avoid using pictures, graphs, tables, columns, etc.</li>
          <li>Simplicity and clarity are key, without leaving anything out.</li>
          <li>Highlight skills and experiences with data (when possible).</li>
          <li>Show you are in sync with who they are searching for.</li>
        </ul>
      </section>
      <section className='mb-4 flex flex-col items-end justify-end gap-1 pr-4 sm:mb-24 sm:pr-24'>
        <h1>
          Visit <Link href='/create'>Create</Link> to begin your resume.
        </h1>
        <h1>
          Visit <Link href='/examples'>Examples</Link> to see a few resumes!
        </h1>
      </section>
    </>
  )
}
