import MDX1Resume from '@/components/(resume)/MDX1Resume'
import ExampleLinks from '@/components/ExampleLinks'

export default function MDX1Page() {
  return (
    <div className='mx-auto my-16 flex flex-col gap-4 px-2 sm:px-4'>
      <ExampleLinks />
      <h2 className='mx-auto w-full max-w-[36rem] text-center text-base leading-snug font-medium'>
        This resume reads an MDX file from the server-side (app/data/resume.mdx), compiles it, and
        renders the content dynamically on the client-side. It provides a flexible and customizable
        way to display resume information.
      </h2>
      <div className='mx-auto mt-2 mb-4 size-fit rounded-lg bg-white shadow-lg'>
        <MDX1Resume />
      </div>
    </div>
  )
}
