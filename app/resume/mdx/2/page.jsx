import MDX2Resume from '@/components/(resume)/MDX2Resume'
import ExampleLinks from '@/components/ExampleLinks'

export default function MDX2Page() {
  return (
    <div className='mx-auto my-16 flex flex-col gap-4 px-2 sm:px-4'>
      <ExampleLinks />
      <h2 className='mx-auto w-full max-w-[36rem] text-center text-base leading-snug font-medium'>
        This resume is rendered using MDX (Markdown with JSX). It converts a static Markdown string
        into HTML with MDXRemote, allowing for rich text formatting and links, and displays all the
        sections.
      </h2>
      <div className='mx-auto mt-2 mb-4 size-fit rounded-lg bg-white shadow-lg'>
        <MDX2Resume />
      </div>
    </div>
  )
}
