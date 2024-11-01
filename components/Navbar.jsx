import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='flex h-10 flex-row items-center justify-end gap-4 border-b-2 border-slate-400 bg-white pr-4 md:gap-8 md:pr-24'>
      <Link href='/'>Home</Link>
      <Link href='/create'>Create</Link>
      <Link href='/tips'>Tips</Link>
      <Link href='/resume'>Preview/Save</Link>
      <Link href='/resumes'>Examples</Link>
    </nav>
  )
}
