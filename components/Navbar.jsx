import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className='flex flex-row items-center justify-between border-b-2 bg-white px-2 py-4 shadow-sm lg:px-12 lg:py-5'>
      <Link href='/' className='font-black text-black'>
        <div className='flex items-center sm:flex-row sm:gap-1 sm:pl-1'>
          <Image src='/favicon-32x32.png' alt='ATS Rebuilder Logo' width={32} height={32} />
          <p className='hidden text-[1.40rem] font-extrabold tracking-tighter sm:block'>
            Resbuilder
          </p>
        </div>
      </Link>
      <div className='flex flex-row gap-1.5 text-sm sm:gap-4 sm:text-base lg:gap-6 lg:text-lg'>
        <Link href='/'>Home</Link>
        <Link href='/create'>Create</Link>
        <Link href='/resume'>Preview/Save</Link>
        <Link href='/examples'>Examples</Link>
        <Link href='/tips'>Tips</Link>
      </div>
    </nav>
  )
}
