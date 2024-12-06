import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex h-10 flex-row items-center justify-between border-b-2 border-slate-400 bg-white px-2 sm:px-4 md:px-24'>
      <div className='flex text-sm font-bold sm:text-base'>
        ATS <span className='hidden sm:block sm:pl-1'> Resbuilder</span>
      </div>
      <div className='flex flex-row gap-2 text-sm sm:gap-4 sm:text-base md:gap-8'>
        <Link href='/'>Home</Link>
        <Link href='/create'>Create</Link>
        <Link href='/resume'>Preview/Save</Link>
        <Link href='/examples'>Examples</Link>
        <Link href='/tips'>Tips</Link>
      </div>
    </nav>
  )
}
