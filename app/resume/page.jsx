import Link from 'next/link'
import AllButtons from '@/components/(PDF)/AllButtons'

export const metadata = {
  title: 'Preview/Save',
  description: 'Take a peak and save your resume & cover letter!',
}

export default function ResumePage() {
  return (
    <div className='my-8 flex w-full max-w-(--breakpoint-2xl) flex-col justify-between gap-8 sm:mx-auto sm:p-4 lg:flex-row lg:gap-12 lg:px-12'>
      <section className='flex flex-col gap-8 pl-4 lg:mt-16 lg:mb-4 lg:pl-16'>
        <h1 className='text-3xl font-black sm:pl-1 sm:text-4xl'>
          Generate your resume
          <br />
          <span className='text-slate-500'>&</span> cover letter below!
        </h1>
        <AllButtons />
      </section>

      <section className='flex flex-col items-end justify-end gap-1 pr-4 lg:mt-4 lg:mb-16 lg:pr-16'>
        <p className='mt-0 mb-0 text-[20px] leading-[20px] font-semibold'>
          Visit <Link href='/tips'>Tips</Link> to perfect your resume!
        </p>
        <p className='mt-0 mb-0 text-[20px] leading-[20px] font-semibold'>
          Visit <Link href='/examples'>Examples</Link> to see a few resumes!
        </p>
      </section>
    </div>
  )
}
