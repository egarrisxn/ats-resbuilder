import Link from 'next/link'

export const metadata = {
  title: 'Create',
  description: 'Create your own ATS Resume & Cover Letter!',
}

export default function CreatePage() {
  return (
    <div className='my-8 flex w-full max-w-screen-2xl flex-col justify-between gap-8 sm:mx-auto sm:p-4 lg:flex-row lg:gap-12 lg:px-12'>
      <section className='flex flex-col gap-8 pl-4 lg:mb-4 lg:mt-16 lg:gap-6 lg:pl-16'>
        <h1 className='text-3xl font-black sm:text-4xl'>
          How to create your
          <br />
          resume <span className='text-slate-500'>&</span> cover letter!
        </h1>
        <ol className='flex flex-col gap-0 text-base lg:gap-1'>
          <li className='text-base'>
            01. Visit the <a href='https://github.com/egarrisxn/resume-builder'>GitHub</a> page.
          </li>
          <li className='text-base'>02. Clone the project repository.</li>
          <li className='text-base'>03. Install the project dependecnies.</li>
          <li className='text-base'>04. Start your local development server.</li>
          <li className='text-base'>
            05. Go to <code>public/resume</code> or <code>public/cover-letter</code>.
          </li>
          <li className='text-base'>06. Update either/both files with your data.</li>
          <li className='text-base'>
            07. Go to <code>api/generate-resume</code> or <code>api/generate-cover-letter</code>.
          </li>
          <li className='text-base'>08. Update the headerKeyword function.</li>
          <li className='text-base'>
            09. Head to the <Link href='/examples'>Preview/Save</Link> page.
          </li>
          <li className='text-base'>10. Preview your files and ensure they looks great!</li>
          <li className='text-base'>11. If you are not satisfied, go back and revise them.</li>
          <li className='text-base'>12. Eventually, it will be just perfect for you!</li>
        </ol>
      </section>

      <section className='flex flex-col items-end justify-end gap-1 pr-4 lg:mb-16 lg:mt-4 lg:pr-16'>
        <p className='mb-0 mt-0 text-[20px] font-semibold leading-[20px]'>
          Visit <Link href='/tips'>Tips</Link> to perfect your resume!
        </p>
        <p className='mb-0 mt-0 text-[20px] font-semibold leading-[20px]'>
          Visit <Link href='/resume'>Preview/Save</Link> for your resume!
        </p>
      </section>
    </div>
  )
}
