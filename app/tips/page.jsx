import Link from 'next/link'

export const metadata = {
  title: 'Tips',
  description: 'A few tips on how to perfect your resume!',
}

export default function TipsPage() {
  return (
    <div className='my-8 flex w-full max-w-screen-2xl flex-col justify-between gap-8 sm:mx-auto sm:p-4 lg:flex-row lg:gap-12 lg:px-12'>
      <section className='flex flex-col gap-8 pl-4 lg:mb-4 lg:mt-16 lg:gap-6 lg:pl-16'>
        <h1 className='text-3xl font-black sm:text-4xl'>
          Some tips for the
          <br />
          perfect resume!
        </h1>
        <ul className='flex flex-col gap-0 text-base lg:gap-1 lg:text-lg'>
          <li className='text-base lg:text-lg'>TREAT YOUR RESUME AS A STRATEGIC TOOL!</li>
          <li className='text-base lg:text-lg'>
            Optimize for the algorithm, while keeping a human touch to it.
          </li>
          <li className='text-base lg:text-lg'>
            Tailor job titles and skills for the position being applied for.
          </li>
          <li className='text-base lg:text-lg'>
            Use buzzwords and action verbs throughout your resume!
          </li>
          <li className='text-base lg:text-lg'>
            Avoid using pictures, graphs, tables, columns, etc.
          </li>
          <li className='text-base lg:text-lg'>
            Simplicity and clarity are key, without leaving anything out.
          </li>
          <li className='text-base lg:text-lg'>
            Highlight skills and experiences with data (when possible).
          </li>
          <li className='text-base lg:text-lg'>
            Show you are in sync with who they are searching for.
          </li>
        </ul>
      </section>

      <section className='flex flex-col items-end justify-end gap-1 pr-4 lg:mb-16 lg:mt-4 lg:pr-16'>
        <p className='mb-0 mt-0 text-[20px] font-semibold leading-[20px]'>
          Visit <Link href='/create'>Create</Link> to begin your resume!
        </p>
        <p className='mb-0 mt-0 text-[20px] font-semibold leading-[20px]'>
          Visit <Link href='/examples'>Examples</Link> to see a few resumes!
        </p>
      </section>
    </div>
  )
}
