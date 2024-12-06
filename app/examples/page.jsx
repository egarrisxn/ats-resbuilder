import Link from 'next/link'

export default function ResumesPage() {
  return (
    <>
      <section className='mt-4 flex flex-col gap-4 pl-4 sm:mt-24 sm:pl-24'>
        <h1>The many ways to resume!</h1>
        <div className='flex flex-col gap-2'>
          <Link href='/resume/api'>Dynamic API route</Link>
          <Link href='/resume/json'>Local .json file</Link>
          <Link href='/resume/markdown/1'>Local .md file</Link>
          <Link href='/resume/markdown/2'>Client-side .md file</Link>
          <Link href='/resume/mdx/1'>Server-side .mdx file</Link>
          <Link href='/resume/mdx/2'>Static .mdx file</Link>
          <Link href='/resume/text'>Static .txt file</Link>
        </div>
      </section>
      <section className='mb-4 flex flex-col items-end justify-end gap-1 pr-4 sm:mb-24 sm:pr-24'>
        <h1>
          Visit <Link href='/tips'>Create</Link> to begin your resume.
        </h1>
        <h1>
          Visit <Link href='/tips'>Tips</Link> to perfect your resume!
        </h1>
      </section>
    </>
  )
}
