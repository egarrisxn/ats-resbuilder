import Link from 'next/link'
import {Github} from 'lucide-react'

export const metadata = {
  title: 'Create',
  description: 'Create your own ATS Resume & Cover Letter!',
}

export default function CreatePage() {
  return (
    <div className='min-h-screen bg-gray-100 py-12 dark:bg-gray-900'>
      <div className='mx-auto w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800'>
        <div className='p-4 md:p-8'>
          <header className='mb-6'>
            <div className='mb-2 text-3xl leading-tight font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-gray-100'>
              Create Your ATS-Friendly Resume & Cover Letter
            </div>
            <div className='w-full max-w-3xl text-gray-600 md:text-lg dark:text-gray-400'>
              Follow these detailed steps to set up and customize your resume and cover letter for
              Applicant Tracking Systems.
            </div>
          </header>

          <section className='mb-8 xl:mr-8'>
            <div className='mb-4 text-xl font-semibold text-gray-900 md:text-2xl dark:text-gray-100'>
              Getting Started
            </div>
            <div className='relative ml-2 border-l border-gray-300 md:ml-4 dark:border-gray-600'>
              <div className='mb-6 ml-4 md:ml-6'>
                <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <div className='text-sm font-semibold text-blue-600 dark:text-blue-300'>01</div>
                </div>
                <div className='pb-4'>
                  <div className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Visit the GitHub Repository
                  </div>
                  <div className='text-sm text-gray-700 md:text-base dark:text-gray-300'>
                    Navigate to the project's GitHub page to access the source code and further
                    instructions.
                  </div>
                  <a
                    href='https://github.com/egarrisxn/resume-builder'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-2 inline-flex items-center rounded-md bg-blue-100 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-blue-700 dark:text-blue-300 dark:hover:bg-blue-600'
                  >
                    View on GitHub <Github className='ml-2' />
                  </a>
                </div>
              </div>
              <div className='mb-6 ml-4 md:ml-6'>
                <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <div className='text-sm font-semibold text-blue-600 dark:text-blue-300'>02</div>
                </div>
                <div className='pb-4'>
                  <div className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Clone the Project Repository
                  </div>
                  <div className='text-sm text-gray-700 md:text-base dark:text-gray-300'>
                    Open your terminal or command prompt and clone the repository to your local
                    development environment using the `git clone` command followed by the repository
                    URL.
                  </div>
                  <pre className='mt-2 max-w-80 overflow-x-auto rounded-md bg-gray-200 p-2 text-xs tracking-tighter text-gray-800 sm:max-w-none sm:p-3 sm:text-sm dark:bg-gray-700 dark:text-gray-200'>
                    <code>git clone https://github.com/egarrisxn/resume-builder.git</code>
                  </pre>
                </div>
              </div>
              <div className='mb-6 ml-4 md:ml-6'>
                <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <div className='text-sm font-semibold text-blue-600 dark:text-blue-300'>03</div>
                </div>
                <div className='pb-4'>
                  <div className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Install Project Dependencies
                  </div>
                  <div className='text-sm text-gray-700 md:text-base dark:text-gray-300'>
                    Navigate into the cloned project directory in your terminal and install the
                    necessary dependencies using either `npm` or `yarn`.
                  </div>
                  <div className='mt-2 flex gap-2'>
                    <pre className='overflow-x-auto rounded-md bg-gray-200 p-2 text-xs text-gray-800 sm:p-3 sm:text-sm dark:bg-gray-700 dark:text-gray-200'>
                      <code>npm install</code>
                    </pre>
                    <pre className='overflow-x-auto rounded-md bg-gray-200 p-2 text-xs text-gray-800 sm:p-3 sm:text-sm dark:bg-gray-700 dark:text-gray-200'>
                      <code>yarn install</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className='mb-6 ml-4 md:ml-6'>
                <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <div className='text-sm font-semibold text-blue-600 dark:text-blue-300'>04</div>
                </div>
                <div className='pb-4'>
                  <div className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Start Local Development Server
                  </div>
                  <div className='text-sm text-gray-700 md:text-base dark:text-gray-300'>
                    Start the local development server to preview and work on your resume and cover
                    letter. This usually involves running a command provided by the project.
                  </div>
                  <pre className='mt-2 max-w-80 overflow-x-auto rounded-md bg-gray-200 p-2 text-xs tracking-tighter text-gray-800 sm:max-w-none sm:p-3 sm:text-sm dark:bg-gray-700 dark:text-gray-200'>
                    <code>npm run dev</code>
                  </pre>
                  <pre className='mt-2 max-w-80 overflow-x-auto rounded-md bg-gray-200 p-2 text-xs tracking-tighter text-gray-800 sm:max-w-none sm:p-3 sm:text-sm dark:bg-gray-700 dark:text-gray-200'>
                    <code>yarn dev</code>
                  </pre>
                </div>
              </div>
              <div className='mb-6 ml-4 md:ml-6'>
                <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <div className='text-sm font-semibold text-blue-600 dark:text-blue-300'>05</div>
                </div>
                <div className='pb-4'>
                  <div className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Locate Template Files
                  </div>
                  <div className='text-sm text-gray-700 md:text-base dark:text-gray-300'>
                    Find the template files for your resume and cover letter within the{' '}
                    <code>public</code> directory of the project.
                  </div>
                  <pre className='mt-2 max-w-80 overflow-x-auto rounded-md bg-gray-200 p-2 text-xs tracking-tighter text-gray-800 sm:max-w-none sm:p-3 sm:text-sm dark:bg-gray-700 dark:text-gray-200'>
                    <code>public/resume</code>
                  </pre>
                  <pre className='mt-2 max-w-80 overflow-x-auto rounded-md bg-gray-200 p-2 text-xs tracking-tighter text-gray-800 sm:max-w-none sm:p-3 sm:text-sm dark:bg-gray-700 dark:text-gray-200'>
                    <code>public/cover-letter</code>
                  </pre>
                </div>
              </div>
              <div className='mb-6 ml-4 md:ml-6'>
                <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <div className='text-sm font-semibold text-blue-600 dark:text-blue-300'>06</div>
                </div>
                <div className='pb-4'>
                  <div className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Update Your Personal Data
                  </div>
                  <div className='text-sm text-gray-700 md:text-base dark:text-gray-300'>
                    Open the <code>resume</code> and/or <code>cover-letter</code> files and replace
                    the placeholder content with your own information, including your work
                    experience, education, skills, and contact details.
                  </div>
                  <div className='mt-2 text-sm text-gray-700 dark:text-gray-300'>
                    Pay close attention to the formatting and structure of the templates to ensure
                    they are ATS-friendly.
                  </div>
                </div>
              </div>
              <div className='mb-6 ml-4 md:ml-6'>
                <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <div className='text-sm font-semibold text-blue-600 dark:text-blue-300'>07</div>
                </div>
                <div className='pb-4'>
                  <div className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Locate API Endpoint Functions
                  </div>
                  <div className='text-sm text-gray-700 md:text-base dark:text-gray-300'>
                    Find the API endpoint functions responsible for generating the resume and cover
                    letter. These are typically located in the <code>api</code> directory.
                  </div>
                  <pre className='mt-2 max-w-80 overflow-x-auto rounded-md bg-gray-200 p-2 text-xs tracking-tighter text-gray-800 sm:max-w-none sm:p-3 sm:text-sm dark:bg-gray-700 dark:text-gray-200'>
                    <code>api/generate-resume</code>
                  </pre>
                  <pre className='mt-2 max-w-80 overflow-x-auto rounded-md bg-gray-200 p-2 text-xs tracking-tighter text-gray-800 sm:max-w-none sm:p-3 sm:text-sm dark:bg-gray-700 dark:text-gray-200'>
                    <code>api/generate-cover-letter</code>
                  </pre>
                </div>
              </div>
              <div className='mb-6 ml-4 md:ml-6'>
                <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <div className='text-sm font-semibold text-blue-600 dark:text-blue-300'>08</div>
                </div>
                <div className='pb-4'>
                  <div className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Update the Header Keyword Function
                  </div>
                  <div className='text-sm text-gray-700 md:text-base dark:text-gray-300'>
                    Within the API endpoint files, locate and update the <code>headerKeyword</code>{' '}
                    function (or similar) to include relevant keywords that align with the job
                    descriptions you are targeting. This helps your resume and cover letter get
                    noticed by ATS.
                  </div>
                  <div className='mt-2 text-sm text-gray-700 dark:text-gray-300'>
                    Refer to the comments or documentation within the code for specific instructions
                    on how to modify this function.
                  </div>
                </div>
              </div>
              <div className='mb-6 ml-4 md:ml-6'>
                <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <div className='text-sm font-semibold text-blue-600 dark:text-blue-300'>09</div>
                </div>
                <div className='pb-4'>
                  <div className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Navigate to the Preview/Save Page
                  </div>
                  <div className='text-sm text-gray-700 md:text-base dark:text-gray-300'>
                    Once you have updated your data and the header keywords, navigate to the{' '}
                    <Link
                      href='/examples'
                      className='font-medium text-blue-600 hover:underline dark:text-blue-500'
                    >
                      Preview/Save
                    </Link>{' '}
                    page of the application in your web browser.
                  </div>
                </div>
              </div>
              <div className='mb-6 ml-4 md:ml-6'>
                <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <div className='text-sm font-semibold text-blue-600 dark:text-blue-300'>10</div>
                </div>
                <div className='pb-4'>
                  <div className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Preview Your Files
                  </div>
                  <div className='text-sm text-gray-700 md:text-base dark:text-gray-300'>
                    On the Preview/Save page, you should be able to see a rendered version of your
                    resume and cover letter. Carefully review both documents to ensure all your
                    information is displayed correctly and the formatting looks as expected.
                  </div>
                </div>
              </div>
              <div className='mb-6 ml-4 md:ml-6'>
                <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <div className='text-sm font-semibold text-blue-600 dark:text-blue-300'>11</div>
                </div>
                <div className='pb-4'>
                  <div className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Revise if Necessary
                  </div>
                  <div className='text-sm text-gray-700 md:text-base dark:text-gray-300'>
                    If you notice any errors, missing information, or formatting issues during the
                    preview, go back to the <code>public/resume</code> and{' '}
                    <code>public/cover-letter</code> files and make the necessary revisions. Repeat
                    steps 7-10 until you are satisfied with the result.
                  </div>
                </div>
              </div>
              <div className='ml-6'>
                <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700'>
                  <div className='text-sm font-semibold text-blue-600 dark:text-blue-300'>12</div>
                </div>
                <div>
                  <div className='mb-1 font-semibold text-gray-900 dark:text-gray-100'>
                    Your Perfect Documents!
                  </div>
                  <div className='text-sm text-gray-700 md:text-base dark:text-gray-300'>
                    Once you are completely satisfied with the preview of your resume and cover
                    letter, you can proceed to save or download them from the Preview/Save page.
                    Congratulations, you now have ATS-friendly documents ready for your job
                    applications!
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className='border-t border-gray-200 pt-6 dark:border-gray-700'>
            <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0'>
              <div className='font-semibold tracking-tighter text-gray-700 dark:text-gray-300'>
                Need tips? Visit{' '}
                <Link href='/tips' className='text-blue-600 hover:underline dark:text-blue-500'>
                  Tips
                </Link>{' '}
                to perfect your resume!
              </div>
              <div className='font-semibold tracking-tighter text-gray-700 dark:text-gray-300'>
                Ready to preview? Go to{' '}
                <Link href='/resume' className='text-blue-600 hover:underline dark:text-blue-500'>
                  Preview/Save
                </Link>{' '}
                for your resume!
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
