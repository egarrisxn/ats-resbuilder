import Link from 'next/link'

export default function ResumesPage() {
  return (
    <>
      <section className='mt-4 flex flex-col gap-4 pl-4 sm:mt-24 sm:pl-24'>
        <h1>The many different ways to resume!</h1>
        <div className='flex flex-row gap-2'>
          <Link href='/resume/api'>API</Link>
          <Link href='/resume/json'>JSON</Link>
          <Link href='/resume/text'>TEXT</Link>
          <Link href='/resume/markdown/1'>MD1</Link>
          <Link href='/resume/markdown/2'>MD2</Link>
          <Link href='/resume/mdx/1'>MDX1</Link>
          <Link href='/resume/mdx/2'>MDX2</Link>
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
