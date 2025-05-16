import {getMDXResume} from '@/lib/getMDXResume'

export default async function MDXServerResume({params}) {
  const {content} = await getMDXResume(params)

  return <main className='animate-fade-in opacity-0'>{content}</main>
}
