import TextResume from '@/components/(resume)/TextResume'
import ExampleLinks from '@/components/ExampleLinks'

export default function TextPage() {
  return (
    <div className='mx-auto my-16 flex flex-col gap-4 px-2 sm:px-4'>
      <ExampleLinks />
      <h2 className='mx-auto w-full max-w-[36rem] text-center text-base font-medium leading-snug'>
        This resume renders a static resume with detailed sections. It displays all the information
        directly without fetching data from an external source.
      </h2>
      <div className='mx-auto mb-4 mt-2 size-fit rounded-lg bg-white shadow-lg'>
        <TextResume />
      </div>
    </div>
  )
}
