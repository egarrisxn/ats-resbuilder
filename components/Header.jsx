import Link from 'next/link'

export default function Header() {
  return (
    <header className='mx-auto flex flex-row gap-2 border-b-2 border-slate-400 text-sm md:text-base'>
      <Link href='/resume/api'>api/</Link>
      <Link href='/resume/json'>.json</Link>
      <Link href='/resume/markdown/1'>.md/1</Link>
      <Link href='/resume/markdown/2'>.md/2</Link>
      <Link href='/resume/mdx/1'>.mdx/1</Link>
      <Link href='/resume/mdx/2'>.mdx/2</Link>
      <Link href='/resume/text'>.txt</Link>
    </header>
  )
}
