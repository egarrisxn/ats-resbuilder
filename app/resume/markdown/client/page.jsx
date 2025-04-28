import {Suspense} from 'react'
import Skeleton from '@/components/Skeleton'
import MarkdownClientResume from '@/components/(resume)/MarkdownClientResume'

export default function MarkdownClientPage() {
  return (
    <>
      <h2 className='mx-auto w-full max-w-[36rem] text-center text-base leading-snug font-medium'>
        This resume fetches Markdown content (app/data/resume.md) from the file system, converts it
        to HTML using remark, and renders it server-side.
      </h2>
      <div className='mx-auto mt-2 mb-4 size-fit rounded-lg bg-white shadow-lg'>
        <Suspense fallback={<Skeleton />}>
          <MarkdownClientResume />
        </Suspense>
      </div>
    </>
  )
}
