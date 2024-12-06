import Link from 'next/link'
import AllButtons from '@/components/(PDF)/AllButtons'

export default function ResumePage() {
  return (
    <>
      <section className='mt-4 flex flex-col gap-4 pl-4 sm:mt-24 sm:pl-24'>
        <h1>Generate your resume & cover letter.</h1>
        <AllButtons />
      </section>

      <section className='mb-4 flex flex-col items-end justify-end gap-1 pr-4 sm:mb-24 sm:pr-24'>
        <h1>
          Visit <Link href='/tips'>Create</Link> to begin your resume.
        </h1>
        <h1>
          Visit <Link href='/tips'>Tips</Link> to perfect your resume!
        </h1>
      </section>
    </>
  )
}
