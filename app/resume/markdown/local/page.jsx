import Markdown1Resume from '@/components/(resume)/MarkdownClientResume'

export default function MarkdownLocalPage() {
  return (
    <>
      <h2 className='mx-auto w-full max-w-[36rem] text-center text-base leading-snug font-medium'>
        This resume fetches Markdown content from a local file (public/resume.md), converts it to
        HTML using remark, and renders it on the client-side. It provides a way to display static
        resume content formatted in Markdown.
      </h2>
      <div className='mx-auto mt-2 mb-4 size-fit rounded-lg bg-white shadow-lg'>
        <Markdown1Resume />
      </div>
    </>
  )
}
