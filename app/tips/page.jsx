import Link from 'next/link'

export const metadata = {
  title: 'Tips',
  description: 'A few tips on how to perfect your resume!',
}

export default function TipsPage() {
  return (
    <div className='mx-auto my-16 w-full max-w-4xl overflow-hidden xl:max-w-(--breakpoint-2xl)'>
      <div className='w-full max-w-4xl p-4 md:p-8 lg:p-6'>
        <div className='mb-6'>
          <div className='text-2 mb-2 leading-tight font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl'>
            Tips for the Perfect Resume!
          </div>
          <div className='w-full max-w-3xl text-slate-600 md:text-lg'>
            Maximize your chances with these key strategies.
          </div>
        </div>
        <div className='mb-8 text-slate-800 xl:mr-8'>
          <div className='pb-2'>
            <span className='font-semibold'>STRATEGIC TOOL:</span> Treat your resume as a strategic
            tool, not just a summary of your past.
          </div>
          <div className='pb-2'>
            <span className='font-semibold'>OPTIMIZE & HUMAN TOUCH:</span> Optimize for the
            algorithm (ATS) while maintaining a human-friendly and engaging tone.
          </div>
          <div className='pb-2'>
            <span className='font-semibold'>TAILORING:</span> Tailor job titles and skills to match
            the specific requirements of each position you apply for.
          </div>
          <div className='pb-2'>
            <span className='font-semibold'>ACTION & BUZZWORDS:</span> Use strong action verbs and
            relevant industry buzzwords throughout your resume.
          </div>
          <div className='pb-2'>
            <span className='font-semibold'>AVOID GRAPHICS:</span> Avoid using pictures, graphs,
            tables, columns, and other complex formatting that can confuse ATS.
          </div>
          <div className='pb-2'>
            <span className='font-semibold'>SIMPLICITY & CLARITY:</span> Prioritize simplicity and
            clarity without omitting crucial information.
          </div>
          <div className='pb-2'>
            <span className='font-semibold'>DATA-DRIVEN:</span> Highlight your skills and
            experiences with quantifiable data and achievements whenever possible.
          </div>
          <div className='pb-0'>
            <span className='font-semibold'>ALIGNMENT:</span> Clearly demonstrate how your skills
            and experience align with the specific needs and requirements of the target role.
          </div>
        </div>

        <div className='border-t border-slate-200 pt-6 xl:mr-8'>
          <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0'>
            <div className='font-semibold tracking-tighter text-slate-700'>
              Ready to begin? Check the{' '}
              <Link href='/docs' className='text-blue-600 hover:underline'>
                Docs
              </Link>{' '}
              Page to get at it.
            </div>
            <div className='font-semibold tracking-tighter text-slate-700'>
              Need more inspiration? visit our{' '}
              <Link href='/examples' className='text-blue-600 hover:underline'>
                Examples
              </Link>{' '}
              page for it.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
