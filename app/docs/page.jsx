import Link from 'next/link'
import {Github} from 'lucide-react'

export const metadata = {
  title: 'Create',
  description: 'Create your own ATS Resume & Cover Letter!',
}

export default function CreatePage() {
  return (
    <div className='min-h-screen bg-gray-100 py-12 dark:bg-gray-900'>
      <div className='mx-auto max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800'>
        <div className='p-8'>
          <header className='mb-6'>
            <h1 className='mb-2 text-4xl leading-tight font-extrabold tracking-tight text-gray-900 dark:text-gray-100'>
              Create Your ATS-Friendly Resume & Cover Letter
            </h1>
            <p className='text-lg text-gray-600 dark:text-gray-400'>
              Follow these detailed steps to set up and customize your resume and cover letter for
              Applicant Tracking Systems.
            </p>
          </header>

          <section className='mb-8'>
            <h2 className='mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-100'>
              Getting Started
            </h2>
            <ol className='relative ml-4 border-l border-gray-300 dark:border-gray-600'>
              <li className='mb-6 ml-6'>
                <span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <span className='text-sm font-semibold text-blue-600 dark:text-blue-300'>01</span>
                </span>
                <div className='pb-4'>
                  <h3 className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Visit the GitHub Repository
                  </h3>
                  <p className='text-base text-gray-700 dark:text-gray-300'>
                    Navigate to the project's GitHub page to access the source code and further
                    instructions.
                  </p>
                  <a
                    href='https://github.com/egarrisxn/resume-builder'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-2 inline-flex items-center rounded-md bg-blue-100 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-blue-700 dark:text-blue-300 dark:hover:bg-blue-600'
                  >
                    View on GitHub <Github className='ml-2' />
                  </a>
                </div>
              </li>
              <li className='mb-6 ml-6'>
                <span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <span className='text-sm font-semibold text-blue-600 dark:text-blue-300'>02</span>
                </span>
                <div className='pb-4'>
                  <h3 className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Clone the Project Repository
                  </h3>
                  <p className='text-base text-gray-700 dark:text-gray-300'>
                    Open your terminal or command prompt and clone the repository to your local
                    development environment using the `git clone` command followed by the repository
                    URL.
                  </p>
                  <pre className='mt-2 overflow-x-auto rounded-md bg-gray-200 p-3 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200'>
                    <code>git clone https://github.com/egarrisxn/resume-builder.git</code>
                  </pre>
                </div>
              </li>
              <li className='mb-6 ml-6'>
                <span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <span className='text-sm font-semibold text-blue-600 dark:text-blue-300'>03</span>
                </span>
                <div className='pb-4'>
                  <h3 className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Install Project Dependencies
                  </h3>
                  <p className='text-base text-gray-700 dark:text-gray-300'>
                    Navigate into the cloned project directory in your terminal and install the
                    necessary dependencies using either `npm` or `yarn`.
                  </p>
                  <div className='mt-2 flex gap-2'>
                    <pre className='overflow-x-auto rounded-md bg-gray-200 p-3 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200'>
                      <code>npm install</code>
                    </pre>
                    <pre className='overflow-x-auto rounded-md bg-gray-200 p-3 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200'>
                      <code>yarn install</code>
                    </pre>
                  </div>
                </div>
              </li>
              <li className='mb-6 ml-6'>
                <span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <span className='text-sm font-semibold text-blue-600 dark:text-blue-300'>04</span>
                </span>
                <div className='pb-4'>
                  <h3 className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Start Local Development Server
                  </h3>
                  <p className='text-base text-gray-700 dark:text-gray-300'>
                    Start the local development server to preview and work on your resume and cover
                    letter. This usually involves running a command provided by the project.
                  </p>
                  <pre className='mt-2 overflow-x-auto rounded-md bg-gray-200 p-3 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200'>
                    <code>npm run dev</code>
                  </pre>
                  <pre className='mt-2 overflow-x-auto rounded-md bg-gray-200 p-3 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200'>
                    <code>yarn dev</code>
                  </pre>
                </div>
              </li>
              <li className='mb-6 ml-6'>
                <span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <span className='text-sm font-semibold text-blue-600 dark:text-blue-300'>05</span>
                </span>
                <div className='pb-4'>
                  <h3 className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Locate Template Files
                  </h3>
                  <p className='text-base text-gray-700 dark:text-gray-300'>
                    Find the template files for your resume and cover letter within the{' '}
                    <code>public</code> directory of the project.
                  </p>
                  <pre className='mt-2 overflow-x-auto rounded-md bg-gray-200 p-3 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200'>
                    <code>public/resume</code>
                  </pre>
                  <pre className='mt-2 overflow-x-auto rounded-md bg-gray-200 p-3 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200'>
                    <code>public/cover-letter</code>
                  </pre>
                </div>
              </li>
              <li className='mb-6 ml-6'>
                <span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <span className='text-sm font-semibold text-blue-600 dark:text-blue-300'>06</span>
                </span>
                <div className='pb-4'>
                  <h3 className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Update Your Personal Data
                  </h3>
                  <p className='text-base text-gray-700 dark:text-gray-300'>
                    Open the <code>resume</code> and/or <code>cover-letter</code> files and replace
                    the placeholder content with your own information, including your work
                    experience, education, skills, and contact details.
                  </p>
                  <p className='mt-2 text-sm text-gray-700 dark:text-gray-300'>
                    Pay close attention to the formatting and structure of the templates to ensure
                    they are ATS-friendly.
                  </p>
                </div>
              </li>
              <li className='mb-6 ml-6'>
                <span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <span className='text-sm font-semibold text-blue-600 dark:text-blue-300'>07</span>
                </span>
                <div className='pb-4'>
                  <h3 className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Locate API Endpoint Functions
                  </h3>
                  <p className='text-base text-gray-700 dark:text-gray-300'>
                    Find the API endpoint functions responsible for generating the resume and cover
                    letter. These are typically located in the <code>api</code> directory.
                  </p>
                  <pre className='mt-2 overflow-x-auto rounded-md bg-gray-200 p-3 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200'>
                    <code>api/generate-resume</code>
                  </pre>
                  <pre className='mt-2 overflow-x-auto rounded-md bg-gray-200 p-3 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200'>
                    <code>api/generate-cover-letter</code>
                  </pre>
                </div>
              </li>
              <li className='mb-6 ml-6'>
                <span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <span className='text-sm font-semibold text-blue-600 dark:text-blue-300'>08</span>
                </span>
                <div className='pb-4'>
                  <h3 className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Update the Header Keyword Function
                  </h3>
                  <p className='text-base text-gray-700 dark:text-gray-300'>
                    Within the API endpoint files, locate and update the <code>headerKeyword</code>{' '}
                    function (or similar) to include relevant keywords that align with the job
                    descriptions you are targeting. This helps your resume and cover letter get
                    noticed by ATS.
                  </p>
                  <p className='mt-2 text-sm text-gray-700 dark:text-gray-300'>
                    Refer to the comments or documentation within the code for specific instructions
                    on how to modify this function.
                  </p>
                </div>
              </li>
              <li className='mb-6 ml-6'>
                <span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <span className='text-sm font-semibold text-blue-600 dark:text-blue-300'>09</span>
                </span>
                <div className='pb-4'>
                  <h3 className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Navigate to the Preview/Save Page
                  </h3>
                  <p className='text-base text-gray-700 dark:text-gray-300'>
                    Once you have updated your data and the header keywords, navigate to the{' '}
                    <Link
                      href='/examples'
                      className='font-medium text-blue-600 hover:underline dark:text-blue-500'
                    >
                      Preview/Save
                    </Link>{' '}
                    page of the application in your web browser.
                  </p>
                </div>
              </li>
              <li className='mb-6 ml-6'>
                <span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <span className='text-sm font-semibold text-blue-600 dark:text-blue-300'>10</span>
                </span>
                <div className='pb-4'>
                  <h3 className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Preview Your Files
                  </h3>
                  <p className='text-base text-gray-700 dark:text-gray-300'>
                    On the Preview/Save page, you should be able to see a rendered version of your
                    resume and cover letter. Carefully review both documents to ensure all your
                    information is displayed correctly and the formatting looks as expected.
                  </p>
                </div>
              </li>
              <li className='mb-6 ml-6'>
                <span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <span className='text-sm font-semibold text-blue-600 dark:text-blue-300'>11</span>
                </span>
                <div className='pb-4'>
                  <h3 className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Revise if Necessary
                  </h3>
                  <p className='text-base text-gray-700 dark:text-gray-300'>
                    If you notice any errors, missing information, or formatting issues during the
                    preview, go back to the <code>public/resume</code> and{' '}
                    <code>public/cover-letter</code> files and make the necessary revisions. Repeat
                    steps 7-10 until you are satisfied with the result.
                  </p>
                </div>
              </li>
              <li className='ml-6'>
                <span className='absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <span className='text-sm font-semibold text-blue-600 dark:text-blue-300'>12</span>
                </span>
                <div>
                  <h3 className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Your Perfect Documents!
                  </h3>
                  <p className='text-base text-gray-700 dark:text-gray-300'>
                    Once you are completely satisfied with the preview of your resume and cover
                    letter, you can proceed to save or download them from the Preview/Save page.
                    Congratulations, you now have ATS-friendly documents ready for your job
                    applications!
                  </p>
                </div>
              </li>
            </ol>
          </section>

          <footer className='border-t border-gray-200 pt-6 dark:border-gray-700'>
            <div className='flex justify-end gap-4'>
              <p className='text-base font-semibold text-gray-700 dark:text-gray-300'>
                Need tips? Visit{' '}
                <Link href='/tips' className='text-blue-600 hover:underline dark:text-blue-500'>
                  Tips
                </Link>{' '}
                to perfect your resume!
              </p>
              <p className='text-base font-semibold text-gray-700 dark:text-gray-300'>
                Ready to preview? Go to{' '}
                <Link href='/resume' className='text-blue-600 hover:underline dark:text-blue-500'>
                  Preview/Save
                </Link>{' '}
                for your resume!
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

// import Link from 'next/link'

// export const metadata = {
//   title: 'Create',
//   description: 'Create your own ATS Resume & Cover Letter!',
// }

// export default function CreatePage() {
//   return (
//     <div className='my-8 flex w-full max-w-(--breakpoint-2xl) flex-col justify-between gap-8 sm:mx-auto sm:p-4 lg:flex-row lg:gap-12 lg:px-12'>
//       <section className='flex flex-col gap-8 pl-4 lg:mb-4 lg:mt-16 lg:gap-6 lg:pl-16'>
//         <h1 className='text-3xl font-black sm:text-4xl'>
//           How to create your
//           <br />
//           resume <span className='text-slate-500'>&</span> cover letter!
//         </h1>
//         <ol className='flex flex-col gap-0 text-base lg:gap-1'>
//           <li className='text-base'>
//             01. Visit the <a href='https://github.com/egarrisxn/resume-builder'>GitHub</a> page.
//           </li>
//           <li className='text-base'>02. Clone the project repository.</li>
//           <li className='text-base'>03. Install the project dependecnies.</li>
//           <li className='text-base'>04. Start your local development server.</li>
//           <li className='text-base'>
//             05. Go to <code>public/resume</code> or <code>public/cover-letter</code>.
//           </li>
//           <li className='text-base'>06. Update either/both files with your data.</li>
//           <li className='text-base'>
//             07. Go to <code>api/generate-resume</code> or <code>api/generate-cover-letter</code>.
//           </li>
//           <li className='text-base'>08. Update the headerKeyword function.</li>
//           <li className='text-base'>
//             09. Head to the <Link href='/examples'>Preview/Save</Link> page.
//           </li>
//           <li className='text-base'>10. Preview your files and ensure they looks great!</li>
//           <li className='text-base'>11. If you are not satisfied, go back and revise them.</li>
//           <li className='text-base'>12. Eventually, it will be just perfect for you!</li>
//         </ol>
//       </section>

//       <section className='flex flex-col items-end justify-end gap-1 pr-4 lg:mb-16 lg:mt-4 lg:pr-16'>
//         <p className='mb-0 mt-0 text-[20px] font-semibold leading-[20px]'>
//           Visit <Link href='/tips'>Tips</Link> to perfect your resume!
//         </p>
//         <p className='mb-0 mt-0 text-[20px] font-semibold leading-[20px]'>
//           Visit <Link href='/resume'>Preview/Save</Link> for your resume!
//         </p>
//       </section>
//     </div>
//   )
// }
