'use client'
import {useEffect, useState} from 'react'
import {Contact, Summary, Experience, Education, Skills, Projects} from '@/components/sections'
import ResumeSkeleton from '@/components/ResumeSkeleton'

export default function APIClientResume() {
  const [resumeData, setResumeData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/resume-data')
        const data = await response.json()
        setResumeData(data)
      } catch (error) {
        console.error('Error fetching resume data:', error)
      }
    }
    fetchData()
  }, [])

  if (!resumeData) {
    return <ResumeSkeleton />
  }

  return (
    <main className='animate-fade-in opacity-0'>
      <Contact data={resumeData.contact} />
      <Summary data={resumeData.summary} />
      <Experience data={resumeData.experience} />
      <Education data={resumeData.education} />
      <Skills data={resumeData.skills} />
      <Projects data={resumeData.projects} />
    </main>
  )
}
