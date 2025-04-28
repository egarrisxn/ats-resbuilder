import Link from 'next/link'
import AllButtons from '@/components/(PDF)/AllButtons'

export const metadata = {
  title: 'Generate',
  description: 'Take a peak and save your resume & cover letter!',
}

export default function GeneratePage() {
  return (
    <div className='my-16 flex w-full max-w-4xl flex-col justify-between gap-6 sm:mx-auto lg:flex-row xl:max-w-(--breakpoint-2xl)'>
      <section className='flex flex-col gap-8 p-4 md:p-8 lg:p-6'>
        <div className='text-3xl font-black sm:pl-1 sm:text-4xl'>
          Generate your resume
          <br />
          <span className='text-slate-500'>&</span> cover letter below!
        </div>
        <AllButtons />
      </section>

      <section className='flex flex-col items-end justify-end gap-1 p-4 md:p-8 lg:p-6'>
        <div className='mt-0 mb-0 text-[20px] leading-[20px] font-semibold'>
          Visit <Link href='/tips'>Tips</Link> to perfect your resume!
        </div>
        <div className='mt-0 mb-0 text-[20px] leading-[20px] font-semibold'>
          Visit <Link href='/examples'>Examples</Link> to see a few resumes!
        </div>
      </section>
    </div>
  )
}
