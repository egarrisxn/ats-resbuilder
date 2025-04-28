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

// import Markdown2Resume from '@/components/(resume)/Markdown2Resume'
// import ExampleLinks from '@/components/ExampleLinks'

// export default function Markdown2Page() {
//   return (
//     <div className='mx-auto my-16 flex flex-col gap-4 px-2 sm:px-4'>
//       <ExampleLinks />
//       <h2 className='mx-auto w-full max-w-[36rem] text-center text-base leading-snug font-medium'>
//         This resume fetches Markdown content (app/data/resume.md) from an API
//         (app/api/get-markdown), converts it to HTML using remark, and renders it on the client-side
//         . It provides a way to dynamically display resume content formatted in Markdown.
//       </h2>
//       <div className='mx-auto mt-2 mb-4 size-fit rounded-lg bg-white shadow-lg'>
//         <Markdown2Resume />
//       </div>
//     </div>
//   )
// }
