import MDXStaticResume from '@/components/(resume)/MDXStaticResume'

export default function MDXStaticPage() {
  return (
    <>
      <h2 className='mx-auto w-full max-w-[36rem] text-center text-base leading-snug font-medium'>
        This resume is rendered using MDX (Markdown with JSX). It converts a static Markdown string
        into HTML with MDXRemote, allowing for rich text formatting and links, and displays all the
        sections.
      </h2>
      <div className='mx-auto mt-2 mb-4 size-fit rounded-lg bg-white shadow-lg'>
        <MDXStaticResume />
      </div>
    </>
  )
}
