import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='mx-auto my-16 flex flex-col justify-center gap-8 p-4 lg:gap-12 lg:rounded-lg lg:border-2 lg:bg-slate-100 lg:px-12 xl:w-full xl:max-w-(--breakpoint-2xl) xl:flex-row xl:gap-8'>
      <section className='mx-auto my-4 flex flex-col gap-6 lg:pt-16 xl:w-full'>
        <h1 className='w-full max-w-[48rem] text-6xl leading-none font-black tracking-tighter sm:text-7xl 2xl:text-8xl'>
          ATS RESUME <span className='text-slate-500'>&</span>
          <br />
          COVER LETTER
        </h1>
        <h2 className='w-full max-w-[34rem] pl-1 text-base leading-snug sm:max-w-[40rem] sm:text-lg 2xl:text-xl'>
          <a href='https://github.com/egarrisxn/ats-resbuilder'>ATS Resbuilder</a> is a tool
          designed to help you create, edit, and save a resume or cover letter that meets ATS
          (Applicant Tracking System) standards. It also provides tips and insights to craft the
          perfect resume, showcasing different ways to generate one effectively.
        </h2>
        <p className='w-full max-w-[36rem] pb-2 pl-1 text-sm sm:max-w-[42rem] sm:text-base 2xl:text-lg'>
          Built with <a href='https://nextjs.org/'>Next.js</a>, this project explores various
          approaches to resume creation, including rendering from Markdown, MDX, plain text, JSON
          data, or an API. Each method offers unique advantages and challenges, demonstrating the
          flexibility of modern web development. Currently, users can preview and save their resumes
          as PDFs using <a href='https://pdf-lib.js.org/'>pdf-lib</a>, with future updates planned
          to support DOC and DOCX formats.
        </p>
        <Link href='/docs'>
          <button className='w-full max-w-[30rem] rounded-lg border-2 bg-slate-900 p-2 text-lg tracking-wide text-white uppercase shadow-xl hover:bg-slate-900/80 sm:max-w-[38rem]'>
            Let&apos;s Begin!
          </button>
        </Link>
      </section>
      <section className='mx-auto my-4 flex xl:w-full'>
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
