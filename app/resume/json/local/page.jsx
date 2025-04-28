import JSONResume from '@/components/(resume)/JSONLocalResume'

export default function JSONLocalPage() {
  return (
    <>
      <h2 className='mx-auto w-full max-w-[36rem] text-center text-base leading-snug font-medium'>
        This resume fetches data from a local JSON file (public/resume.json) and displays it in a
        structured format. It handles loading states and renders sections once the data is
        available.
      </h2>
      <div className='mx-auto mt-2 mb-4 size-fit rounded-lg bg-white shadow-lg'>
        <JSONResume />
      </div>
    </>
  )
}
