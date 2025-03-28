import Link from 'next/link'

export default function ExampleLinks() {
  return (
    <header className='mx-auto flex flex-row gap-1 text-sm sm:gap-1.5 lg:gap-2 lg:text-base'>
      <Link href='/resume/api'>api/</Link> |<Link href='/resume/json'>.json</Link> |
      <Link href='/resume/markdown/1'>.md/1</Link> |<Link href='/resume/markdown/2'>.md/2</Link> |
      <Link href='/resume/mdx/1'>.mdx/1</Link> |<Link href='/resume/mdx/2'>.mdx/2</Link> |
      <Link href='/resume/text'>.txt</Link>
    </header>
  )
}
