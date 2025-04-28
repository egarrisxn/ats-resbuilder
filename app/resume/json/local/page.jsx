import JSONResume from '@/components/(resume)/JSONLocalResume'

export default function JSONLocalPage() {
  return (
    <>
      <h2 className='mx-auto w-full max-w-[36rem] text-center text-base leading-snug font-medium'>
        This resume loads data from a local JSON file and renders it dynamically with structured
        sections.
      </h2>
      <div className='mx-auto mt-2 mb-4 size-fit w-full max-w-full rounded-lg bg-white shadow-lg'>
        <JSONResume />
      </div>
    </>
  )
}
