import MarkdownClientResume from '@/components/(resume)/MarkdownClientResume'

export default function MarkdownClientPage() {
  return (
    <>
      <h2 className='mx-auto w-full max-w-[36rem] text-center text-base leading-snug font-medium'>
        This resume fetches Markdown content from a local file, converts it to HTML client-side, and
        renders it dynamically.
      </h2>
      <div className='mx-auto mt-2 mb-4 size-fit w-full max-w-full rounded-lg bg-white shadow-lg'>
        <MarkdownClientResume />
      </div>
    </>
  )
}
