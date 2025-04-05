import Link from 'next/link'

export const metadata = {
  title: 'Examples',
  description: 'Examples of the many ways we can resume!',
}

export default function ResumesPage() {
  return (
    <div className='my-8 flex w-full max-w-(--breakpoint-2xl) flex-col justify-between gap-8 sm:mx-auto sm:p-4 lg:flex-row lg:gap-12 lg:px-12'>
      <section className='flex flex-col gap-8 pl-4 lg:mt-16 lg:mb-4 lg:gap-6 lg:pl-16'>
        <h1 className='text-3xl font-black sm:text-4xl'>
          A couple examples
          <br />
          on how we resume!
        </h1>
        <div className='flex flex-col gap-0 text-lg lg:gap-1 lg:text-xl'>
          <Link className='text-lg lg:text-xl' href='/resume/api'>
            Dynamic API route
          </Link>
          <Link className='text-lg lg:text-xl' href='/resume/json'>
            Local .json file
          </Link>
          <Link className='text-lg lg:text-xl' href='/resume/markdown/1'>
            Local .md file
          </Link>
          <Link className='text-lg lg:text-xl' href='/resume/markdown/2'>
            Client-side .md file
          </Link>
          <Link className='text-lg lg:text-xl' href='/resume/mdx/1'>
            Server-side .mdx file
          </Link>
          <Link className='text-lg lg:text-xl' href='/resume/mdx/2'>
            Static .mdx file
          </Link>
          <Link className='text-lg lg:text-xl' href='/resume/text'>
            Static .txt file
          </Link>
        </div>
      </section>

      <section className='flex flex-col items-end justify-end gap-1 pr-4 lg:mt-4 lg:mb-16 lg:pr-16'>
        <p className='mt-0 mb-0 text-[20px] leading-[20px] font-semibold'>
          Visit <Link href='/tips'>Tips</Link> to perfect your resume!
        </p>
        <p className='mt-0 mb-0 text-[20px] leading-[20px] font-semibold'>
          Visit <Link href='/tips'>Docs</Link> to begin your resume!
        </p>
      </section>
    </div>
  )
}
