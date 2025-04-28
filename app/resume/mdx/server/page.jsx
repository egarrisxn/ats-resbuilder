import {Suspense} from 'react'
import ResumeSkeleton from '@/components/ResumeSkeleton'
import MDXServerResume from '@/components/(resume)/MDXServerResume'

export default function MDXServerPage() {
  return (
    <>
      <h2 className='mx-auto w-full max-w-[36rem] text-center text-base leading-snug font-medium'>
        This resume compiles an MDX file server-side and renders the content dynamically with React
        and JSX support.
      </h2>
      <div className='mx-auto mt-2 mb-4 size-fit w-full max-w-full rounded-lg bg-white shadow-lg'>
        <Suspense fallback={<ResumeSkeleton />}>
          <MDXServerResume />
        </Suspense>
      </div>
    </>
  )
}
