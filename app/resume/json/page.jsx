import JSONResume from '@/components/(resume)/JSONResume'
import ExampleLinks from '@/components/ExampleLinks'

export default function JSONPage() {
  return (
    <div className='mx-auto my-16 flex flex-col gap-4 px-2 sm:px-4'>
      <ExampleLinks />
      <h2 className='mx-auto w-full max-w-[36rem] text-center text-base font-medium leading-snug'>
        This resume fetches data from a local JSON file (public/resume.json) and displays it in a
        structured format. It handles loading states and renders sections once the data is
        available.
      </h2>
      <div className='mx-auto mb-4 mt-2 size-fit rounded-lg bg-white shadow-lg'>
        <JSONResume />
      </div>
    </div>
  )
}
