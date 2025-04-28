import {SITE_URL} from '@/lib/utils'
import {Contact, Summary, Experience, Education, Skills, Projects} from '@/components/sections'

async function getResumeData() {
  const response = await fetch(`${SITE_URL}/api/resume-data`, {
    cache: 'no-store',
  })
  const data = await response.json()
  return data
}

export default async function APIServerResume() {
  const resumeData = await getResumeData()

  return (
    <main>
      <Contact data={resumeData.contact} />
      <Summary data={resumeData.summary} />
      <Experience data={resumeData.experience} />
      <Education data={resumeData.education} />
      <Skills data={resumeData.skills} />
      <Projects data={resumeData.projects} />
    </main>
  )
}
