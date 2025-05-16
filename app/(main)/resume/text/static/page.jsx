import {Suspense} from 'react'
import ResumeSkeleton from '@/components/ResumeSkeleton'
import TextStaticResume from '@/components/resume/TextStaticResume'

export default function TextStaticPage() {
  return (
    <>
      <h2 className='mx-auto w-full max-w-[36rem] text-center text-base leading-snug font-medium'>
        This resume displays static structured content without fetching or compiling external data.
      </h2>
      <div className='mx-auto mt-2 mb-4 size-fit w-full max-w-full rounded-lg bg-white shadow-lg'>
        <Suspense fallback={<ResumeSkeleton />}>
          <TextStaticResume />
        </Suspense>
      </div>
    </>
  )
}
