import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className='mx-auto my-4 flex max-w-[40rem] flex-col gap-4 px-4 sm:mt-24'>
        <h1>ATS COMPLIANT RESUME & COVER LETTER</h1>
        <h4 className='border-l-2 pl-1 leading-relaxed'>
          This <a href='https://github.com/egarrisxn/ats-resbuilder'>project</a> allows you to
          create, view, edit, and save an <span className='font-medium'>ATS FRIENDLY </span> resume
          and cover letter! Along with that, the project showcases some of the many ways to generate
          your resume. Built with Next.js, it explores different methods to achieve the same
          outcome. Whether it&apos;s rendering your resume from Markdown, MDX, plain text, or
          fetching data from a JSON file or an API, this project illustrates the flexibility and
          creativity that can be applied to your development, each with unique advantages and
          challenges. Currently, users will be using <a href='https://pdf-lib.js.org/'>pdf-lib</a>{' '}
          to preview and save their PDF resume, and future enhancements will enable saving the
          resume as a doc/docx file. <span className='font-medium'>Cheers!</span>
        </h4>
        <Link href='/create'>
          <button className='w-full rounded bg-slate-800 p-2 text-white hover:bg-slate-950'>
            Let&apos;s Begin
          </button>
        </Link>
      </section>
    </>
  )
}
