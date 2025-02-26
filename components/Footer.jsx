export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer className='flex flex-row items-center justify-between border-t-2 bg-white px-2 py-4 lg:px-12 lg:py-5'>
      <div className='flex flex-row gap-2 text-sm sm:gap-4 sm:text-base md:gap-8'>
        <a target='_blank' rel='noopener noreferrer' href='https://egxo.dev'>
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
      <div className='flex text-sm font-bold sm:text-base'>EG|{date}</div>
    </footer>
  )
}
