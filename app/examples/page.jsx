import Link from 'next/link'

export const metadata = {
  title: 'Examples',
  description: 'Examples of the many ways we resume!',
}

export default function ExamplesPage() {
  return (
    <div className='my-16 flex w-full max-w-4xl flex-col justify-between gap-6 sm:mx-auto lg:flex-row xl:max-w-(--breakpoint-2xl)'>
      <section className='flex flex-col gap-8 p-4 md:p-8 lg:p-6'>
        <div className='text-3xl font-black sm:pl-1 sm:text-4xl'>
          Examples of resumes
          <br />
          <span className='text-slate-500'>&</span> cover letters below!
        </div>
        <div className='flex flex-col text-base lg:gap-y-1 lg:text-lg'>
          <Link href='/resume/api/client'>API route (client)</Link>
          <Link href='/resume/api/server'>API route (server)</Link>
          <Link href='/resume/json/local'>JSON file (local)</Link>
          <Link href='/resume/markdown/client'>Markdown file (client)</Link>
          <Link href='/resume/markdown/server'>Markdown file (server)</Link>
          <Link href='/resume/mdx/server'>MDX file (server)</Link>
          <Link href='/resume/mdx/static'> MDX file (static)</Link>
          <Link href='/resume/text/static'>Text file (static)</Link>
        </div>
      </section>

      <section className='flex flex-col items-end justify-end gap-1 p-4 md:p-8 lg:p-6'>
        <div className='mt-0 mb-0 text-[20px] leading-[20px] font-semibold'>
          Visit <Link href='/tips'>Tips</Link> to perfect your resume!
        </div>
        <div className='mt-0 mb-0 text-[20px] leading-[20px] font-semibold'>
          Visit <Link href='/tips'>Docs</Link> to begin your resume!
        </div>
      </section>
    </div>
  )
}
