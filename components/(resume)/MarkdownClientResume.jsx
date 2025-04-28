'use client'
import {useEffect, useState} from 'react'
import {remark} from 'remark'
import html from 'remark-html'
import ResumeSkeleton from '@/components/ResumeSkeleton'

export default function MarkdownClientResume() {
  const [content, setContent] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/resume.md')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.text()
      })
      .then((text) => {
        remark()
          .use(html)
          .process(text)
          .then((result) => {
            setContent(result.toString())
            setIsLoading(false)
          })
          .catch((err) => console.error('Remark processing error:', err))
      })
      .catch((err) => console.error('Fetch error:', err))
  }, [])

  if (isLoading) {
    return <ResumeSkeleton />
  }

  return <main className='animate-fade-in opacity-0' dangerouslySetInnerHTML={{__html: content}} />
}
