import {getMarkdownResume} from '@/lib/getMarkdownResume'

export default async function MarkdownServerResume() {
  const content = await getMarkdownResume()

  return <main className='animate-fade-in opacity-0' dangerouslySetInnerHTML={{__html: content}} />
}
