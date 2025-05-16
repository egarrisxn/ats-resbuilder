import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='mx-auto my-16 flex flex-col justify-center gap-y-20 p-4 lg:px-12 xl:w-full xl:max-w-(--breakpoint-2xl) xl:flex-row xl:gap-x-8 xl:gap-y-0'>
      <section className='mx-auto my-4 flex w-full flex-col items-center gap-5 xl:items-start xl:pt-28 2xl:pt-36'>
        <div className='w-full max-w-[48rem] text-center text-5xl leading-none font-black tracking-tighter sm:text-7xl xl:text-start 2xl:text-8xl'>
          ATS RESUME <span className='text-slate-500'>&</span>
          <br />
          COVER LETTER
        </div>
        <div className='w-full max-w-[30rem] pb-2 pl-1 text-center text-lg text-slate-700 sm:text-xl xl:max-w-[34rem] xl:text-start xl:text-2xl 2xl:max-w-[38rem]'>
          Create a resume or cover letter that meets 99.9% of the Applicant Tracking System
          standards & get insight on how to craft the perfect resume!
        </div>
        <div className='mx-auto xl:mx-0 xl:w-full xl:xl:max-w-[34rem] 2xl:max-w-[38rem]'>
          <Link href='/docs'>
            <button className='rounded-lg border-2 bg-slate-900 p-2 text-lg tracking-wide text-white uppercase shadow-xl hover:bg-slate-900/80 xl:w-full 2xl:max-w-[38rem]'>
              Let&apos;s Begin!
            </button>
          </Link>
        </div>
      </section>
      <section className='mx-auto my-4 flex w-full items-center xl:items-end'>
        <Image
          src='/exampleresume.png'
          alt='Example of a resume created with ATS Resbuilder.'
          width={850}
          height={1100}
          className='w-full max-w-[48rem]'
        />
      </section>
    </div>
  )
}
