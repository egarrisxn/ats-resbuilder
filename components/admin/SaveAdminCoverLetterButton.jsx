'use client'
import {useState, useEffect} from 'react'

export default function SaveAdminCoverLetterButton({onGenerate}) {
  const [content, setContent] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  useEffect(() => {
    fetch('/api/admin/admin-fetch-cover-letter')
      .then((response) => response.json())
      .then((data) => setContent(data.content))
      .catch((error) => console.error('Error fetching text file:', error))
  }, [])
  const handleSavePDF = async () => {
    if (!content) return
    setIsSaving(true)
    try {
      const response = await fetch('/api/admin/admin-generate-cover-letter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({content: content.trim()}),
      })

      if (!response.ok) {
        throw new Error('Failed to save admin cover letter')
      }
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'admin-cover-letter.pdf'
      link.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error saving admin cover letter:', error)
    } finally {
      setIsSaving(false)
    }
  }
  return (
    <button
      className='rounded-lg border-2 bg-blue-500 px-6 py-2 text-white uppercase shadow-xl hover:bg-blue-500/90'
      onClick={handleSavePDF}
      disabled={isSaving}
    >
      {isSaving ? 'Saving...' : 'Save Cover Letter'}
    </button>
  )
}
