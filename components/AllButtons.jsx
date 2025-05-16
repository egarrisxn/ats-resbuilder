'use client'
import {useState} from 'react'
import SaveResumeButton from './SaveResumeButton'
import ViewResumeButton from './ViewResumeButton'
import SaveCoverLetterButton from './SaveCoverLetterButton'
import ViewCoverLetterButton from './ViewCoverLetterButton'

export default function AllButtons() {
  // eslint-disable-next-line no-unused-vars
  const [pdfUrl, setPdfUrl] = useState(null)

  const handleGenerate = (url) => {
    setPdfUrl(url)
  }

  return (
    <div className='flex w-fit flex-col gap-4'>
      <section className='flex flex-col gap-4 sm:flex-row'>
        <ViewResumeButton onGenerate={handleGenerate} />
        <ViewCoverLetterButton onGenerate={handleGenerate} />
      </section>
      <section className='flex flex-col gap-4 sm:flex-row'>
        <SaveResumeButton onGenerate={handleGenerate} />
        <SaveCoverLetterButton onGenerate={handleGenerate} />
      </section>
    </div>
  )
}
