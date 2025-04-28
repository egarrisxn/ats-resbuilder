import {Suspense} from 'react'
import ResumeSkeleton from '@/components/ResumeSkeleton'
import MDXStaticResume from '@/components/(resume)/MDXStaticResume'

export default function MDXStaticPage() {
  return (
    <>
      <h2 className='mx-auto w-full max-w-[36rem] text-center text-base leading-snug font-medium'>
        This resume renders a static MDX string using MDXRemote, enabling rich text formatting and
        custom components.
      </h2>
      <div className='mx-auto mt-2 mb-4 size-fit w-full max-w-full rounded-lg bg-white shadow-lg'>
        <Suspense fallback={<ResumeSkeleton />}>
          <MDXStaticResume />
        </Suspense>
      </div>
    </>
  )
}
