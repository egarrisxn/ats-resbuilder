export default function Footer() {
  return (
    <footer className='flex h-10 flex-row items-center justify-between border-t-2 border-slate-400 bg-white px-2 sm:px-4 md:px-24'>
      <div className='flex flex-row gap-2 text-sm sm:gap-4 sm:text-base md:gap-8'>
        <a target='_blank' rel='noopener noreferrer' href='https://egxworld.net'>
          Contact
        </a>{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/egarrisxn/resume-builder'
        >
          Source Code
        </a>
      </div>
      <div className='flex text-sm font-bold sm:text-base'>EG|2024</div>
    </footer>
  )
}
