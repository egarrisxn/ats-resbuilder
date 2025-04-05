import Link from 'next/link'
import {Lightbulb, ArrowRight} from 'lucide-react'

export const metadata = {
  title: 'Tips',
  description: 'A few tips on how to perfect your resume!',
}

export default function TipsPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-slate-100 py-16 dark:bg-slate-900'>
      <div className='w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800'>
        <div className='p-8'>
          <header className='mb-6 text-center'>
            <Lightbulb className='mb-2 inline-block text-4xl text-yellow-500 dark:text-yellow-300' />
            <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100'>
              Tips for a Perfect Resume
            </h1>
            <p className='mt-2 text-lg text-gray-600 dark:text-gray-400'>
              Maximize your chances with these key strategies.
            </p>
          </header>

          <section className='mb-8'>
            <ul className='list-disc text-lg text-gray-800 dark:text-gray-200'>
              <li className='pb-2'>
                <span className='font-semibold'>STRATEGIC TOOL:</span> Treat your resume as a
                strategic tool, not just a summary of your past.
              </li>
              <li className='pb-2'>
                <span className='font-semibold'>OPTIMIZE & HUMAN TOUCH:</span> Optimize for the
                algorithm (ATS) while maintaining a human-friendly and engaging tone.
              </li>
              <li className='pb-2'>
                <span className='font-semibold'>TAILORING:</span> Tailor job titles and skills to
                match the specific requirements of each position you apply for.
              </li>
              <li className='pb-2'>
                <span className='font-semibold'>ACTION & BUZZWORDS:</span> Use strong action verbs
                and relevant industry buzzwords throughout your resume.
              </li>
              <li className='pb-2'>
                <span className='font-semibold'>AVOID GRAPHICS:</span> Avoid using pictures, graphs,
                tables, columns, and other complex formatting that can confuse ATS.
              </li>
              <li className='pb-2'>
                <span className='font-semibold'>SIMPLICITY & CLARITY:</span> Prioritize simplicity
                and clarity without omitting crucial information.
              </li>
              <li className='pb-2'>
                <span className='font-semibold'>DATA-DRIVEN:</span> Highlight your skills and
                experiences with quantifiable data and achievements whenever possible.
              </li>
              <li className='pb-2'>
                <span className='font-semibold'>ALIGNMENT:</span> Clearly demonstrate how your
                skills and experience align with the specific needs and requirements of the target
                role.
              </li>
            </ul>
          </section>

          <footer className='border-t border-gray-200 pt-6 text-center lg:text-right dark:border-gray-700'>
            <div className='flex flex-col items-center gap-2 lg:items-end'>
              <p className='text-lg font-semibold text-gray-700 dark:text-gray-300'>
                Ready to start? Visit{' '}
                <Link
                  href='/docs'
                  className='inline-flex items-center text-blue-600 hover:underline dark:text-blue-500'
                >
                  Docs <ArrowRight className='ml-1' />
                </Link>{' '}
                to begin your resume!
              </p>
              <p className='text-lg font-semibold text-gray-700 dark:text-gray-300'>
                Want more inspiration? See our{' '}
                <Link
                  href='/examples'
                  className='inline-flex items-center text-blue-600 hover:underline dark:text-blue-500'
                >
                  Examples <ArrowRight className='ml-1' />
                </Link>{' '}
                to view sample resumes!
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
//   title: 'Tips',
//   description: 'A few tips on how to perfect your resume!',
// }

// export default function TipsPage() {
//   return (
//     <div className='my-8 flex w-full max-w-(--breakpoint-2xl) flex-col justify-between gap-8 sm:mx-auto sm:p-4 lg:flex-row lg:gap-12 lg:px-12'>
//       <section className='flex flex-col gap-8 pl-4 lg:mt-16 lg:mb-4 lg:gap-6 lg:pl-16'>
//         <h1 className='text-3xl font-black sm:text-4xl'>
//           Some tips for the
//           <br />
//           perfect resume!
//         </h1>
//         <ul className='flex flex-col gap-0 text-base lg:gap-1 lg:text-lg'>
//           <li className='text-base lg:text-lg'>TREAT YOUR RESUME AS A STRATEGIC TOOL!</li>
//           <li className='text-base lg:text-lg'>
//             Optimize for the algorithm, while keeping a human touch to it.
//           </li>
//           <li className='text-base lg:text-lg'>
//             Tailor job titles and skills for the position being applied for.
//           </li>
//           <li className='text-base lg:text-lg'>
//             Use buzzwords and action verbs throughout your resume!
//           </li>
//           <li className='text-base lg:text-lg'>
//             Avoid using pictures, graphs, tables, columns, etc.
//           </li>
//           <li className='text-base lg:text-lg'>
//             Simplicity and clarity are key, without leaving anything out.
//           </li>
//           <li className='text-base lg:text-lg'>
//             Highlight skills and experiences with data (when possible).
//           </li>
//           <li className='text-base lg:text-lg'>
//             Show you are in sync with who they are searching for.
//           </li>
//         </ul>
//       </section>

//       <section className='flex flex-col items-end justify-end gap-1 pr-4 lg:mt-4 lg:mb-16 lg:pr-16'>
//         <p className='mt-0 mb-0 text-[20px] leading-[20px] font-semibold'>
//           Visit <Link href='/docs'>Docs</Link> to begin your resume!
//         </p>
//         <p className='mt-0 mb-0 text-[20px] leading-[20px] font-semibold'>
//           Visit <Link href='/examples'>Examples</Link> to see a few resumes!
//         </p>
//       </section>
//     </div>
//   )
// }
