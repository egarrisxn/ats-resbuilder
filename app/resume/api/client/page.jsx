import APIClientResume from '@/components/(resume)/APIClientResume'

export default function APIClientPage() {
  return (
    <>
      <h2 className='mx-auto w-full max-w-[36rem] text-center text-base leading-snug font-medium'>
        This resume fetches data from an API endpoint (app/api/resume-data) and displays it using
        various section components (components/sections). It initializes with empty state, updates
        with fetched data, and renders the sections.
      </h2>
      <div className='mx-auto mt-2 mb-4 size-fit rounded-lg bg-white shadow-lg'>
        <APIClientResume />
      </div>
    </>
  )
}
