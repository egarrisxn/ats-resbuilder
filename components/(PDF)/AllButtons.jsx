'use client'
import {useState} from 'react'
import SaveResumeButton from './SaveResumeButton'
import ViewResumeButton from './ViewResumeButton'
import SaveCoverLetterButton from './SaveCoverLetterButton'
import ViewCoverLetterButton from './ViewCoverLetterButton'

export default function ResumeButtons() {
  const [pdfUrl, setPdfUrl] = useState(null)

  const handleGenerate = (url) => {
    setPdfUrl(url)
  }

  return (
    <section className='flex w-fit flex-col gap-4'>
      <ViewResumeButton onGenerate={handleGenerate} />
      <SaveResumeButton onGenerate={handleGenerate} />
      <ViewCoverLetterButton onGenerate={handleGenerate} />
      <SaveCoverLetterButton onGenerate={handleGenerate} />
    </section>
  )
}
