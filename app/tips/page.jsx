import Link from 'next/link'
import {Lightbulb} from 'lucide-react'

export const metadata = {
  title: 'Tips',
  description: 'A few tips on how to perfect your resume!',
}

export default function TipsPage() {
  return (
    <div className='min-h-screen bg-slate-100 py-12 dark:bg-slate-900'>
      <div className='mx-auto w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800'>
        <div className='p-4 md:p-8'>
          <header className='mb-8 text-center'>
            <Lightbulb className='mb-1 inline-block text-4xl text-yellow-500 dark:text-yellow-300' />
            <div className='mb-1 text-3xl leading-tight font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-gray-100'>
              Tips for a Perfect Resume
            </div>
            <div className='text-gray-600 md:text-lg dark:text-gray-400'>
              Maximize your chances with these key strategies.
            </div>
          </header>

          <section className='mb-8 xl:mr-8'>
            <div className='text-xl text-gray-800 dark:text-gray-200'>
              <div className='pb-3'>
                <span className='font-semibold'>STRATEGIC TOOL:</span> Treat your resume as a
                strategic tool, not just a summary of your past.
              </div>
              <div className='pb-3'>
                <span className='font-semibold'>OPTIMIZE & HUMAN TOUCH:</span> Optimize for the
                algorithm (ATS) while maintaining a human-friendly and engaging tone.
              </div>
              <div className='pb-3'>
                <span className='font-semibold'>TAILORING:</span> Tailor job titles and skills to
                match the specific requirements of each position you apply for.
              </div>
              <div className='pb-3'>
                <span className='font-semibold'>ACTION & BUZZWORDS:</span> Use strong action verbs
                and relevant industry buzzwords throughout your resume.
              </div>
              <div className='pb-3'>
                <span className='font-semibold'>AVOID GRAPHICS:</span> Avoid using pictures, graphs,
                tables, columns, and other complex formatting that can confuse ATS.
              </div>
              <div className='pb-3'>
                <span className='font-semibold'>SIMPLICITY & CLARITY:</span> Prioritize simplicity
                and clarity without omitting crucial information.
              </div>
              <div className='pb-3'>
                <span className='font-semibold'>DATA-DRIVEN:</span> Highlight your skills and
                experiences with quantifiable data and achievements whenever possible.
              </div>
              <div className='pb-3'>
                <span className='font-semibold'>ALIGNMENT:</span> Clearly demonstrate how your
                skills and experience align with the specific needs and requirements of the target
                role.
              </div>
            </div>
          </section>

          <footer className='border-t border-gray-200 pt-6 dark:border-gray-700'>
            <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0'>
              <div className='font-semibold tracking-tighter text-gray-700 dark:text-gray-300'>
                Ready to start? Visit{' '}
                <Link
                  href='/docs'
                  className='inline-flex items-center text-blue-600 hover:underline dark:text-blue-500'
                >
                  Docs
                </Link>{' '}
                to begin your resume!
              </div>
              <div className='font-semibold tracking-tighter text-gray-700 dark:text-gray-300'>
                Want more inspiration? See our{' '}
                <Link
                  href='/examples'
                  className='inline-flex items-center text-blue-600 hover:underline dark:text-blue-500'
                >
                  Examples
                </Link>{' '}
                to view sample resumes!
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
