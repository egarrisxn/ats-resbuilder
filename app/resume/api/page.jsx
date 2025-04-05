import APIResume from '@/components/(resume)/APIResume'
import ExampleLinks from '@/components/ExampleLinks'

export default function APIPage() {
  return (
    <div className='mx-auto my-16 flex flex-col gap-4 px-2 sm:px-4'>
      <ExampleLinks />
      <h2 className='mx-auto w-full max-w-[36rem] text-center text-base leading-snug font-medium'>
        This resume fetches data from an API endpoint (app/api/resume-data) and displays it using
        various section components (components/sections). It initializes with empty state, updates
        with fetched data, and renders the sections.
      </h2>
      <div className='mx-auto mt-2 mb-4 size-fit rounded-lg bg-white shadow-lg'>
        <APIResume />
      </div>
    </div>
  )
}
