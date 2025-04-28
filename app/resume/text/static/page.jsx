import TextStaticResume from '@/components/(resume)/TextStaticResume'

export default function TextStaticPage() {
  return (
    <>
      <h2 className='mx-auto w-full max-w-[36rem] text-center text-base leading-snug font-medium'>
        This resume renders a static resume with detailed sections. It displays all the information
        directly without fetching data from an external source.
      </h2>
      <div className='mx-auto mt-2 mb-4 size-fit rounded-lg bg-white shadow-lg'>
        <TextStaticResume />
      </div>
    </>
  )
}
