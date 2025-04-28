import Link from 'next/link'

export default function ExampleLinks() {
  return (
    <header className='mx-auto flex flex-row flex-wrap items-center justify-center gap-1.5 text-center text-sm text-wrap sm:gap-2 lg:gap-2.5 lg:text-base'>
      <Link href='/resume/api/client'>api/(client)</Link>
      <Link href='/resume/api/server'>api/(server)</Link>
      <Link href='/resume/json/local'>.json(local)</Link>
      <Link href='/resume/markdown/client'>.md(client)</Link>
      <Link href='/resume/markdown/local'>.md(local)</Link>
      <Link href='/resume/mdx/server'>.mdx(server)</Link>
      <Link href='/resume/mdx/static'>.mdx(static)</Link>
      <Link href='/resume/text/static'>.txt(static)</Link>
    </header>
  )
}
