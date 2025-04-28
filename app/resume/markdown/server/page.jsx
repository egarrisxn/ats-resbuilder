import {Suspense} from 'react'
import ResumeSkeleton from '@/components/ResumeSkeleton'
import MarkdownServerResume from '@/components/(resume)/MarkdownServerResume'

export default function MarkdownServerPage() {
  return (
    <>
      <h2 className='mx-auto w-full max-w-[36rem] text-center text-base leading-snug font-medium'>
        This resume reads Markdown content from the file system, converts it to HTML server-side,
        and renders it.
      </h2>
      <div className='mx-auto mt-2 mb-4 size-fit w-full max-w-full rounded-lg bg-white shadow-lg'>
        <Suspense fallback={<ResumeSkeleton />}>
          <MarkdownServerResume />
        </Suspense>
      </div>
    </>
  )
}
