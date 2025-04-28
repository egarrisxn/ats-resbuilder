import {Suspense} from 'react'
import APIServerResume from '@/components/(resume)/APIServerResume'
import ResumeSkeleton from '@/components/ResumeSkeleton'

export default function APIServerPage() {
  return (
    <>
      <h2 className='mx-auto w-full max-w-[36rem] text-center text-base leading-snug font-medium'>
        This resume fetches data from an API endpoint and renders it server-side with prebuilt
        section components.
      </h2>
      <div className='mx-auto mt-2 mb-4 size-fit w-full max-w-full rounded-lg bg-white shadow-lg'>
        <Suspense fallback={<ResumeSkeleton />}>
          <APIServerResume />
        </Suspense>
      </div>
    </>
  )
}
