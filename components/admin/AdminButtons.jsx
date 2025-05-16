'use client'
import {useState} from 'react'
import SaveAdminCoverLetterButton from './AdminCoverLetterButton'
import SaveAdminResumeButton from './AdminResumeButton'

export default function AdminButtons() {
  // eslint-disable-next-line no-unused-vars
  const [pdfUrl, setPdfUrl] = useState(null)
  const handleGenerate = (url) => {
    setPdfUrl(url)
  }

  return (
    <section className='flex flex-col gap-4'>
      <SaveAdminResumeButton onGenerate={handleGenerate} />
      <SaveAdminCoverLetterButton onGenerate={handleGenerate} />
    </section>
  )
}
