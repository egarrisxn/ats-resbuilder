import {getAPIResume} from '@/lib/getAPIResume'
import {Contact, Summary, Experience, Education, Skills, Projects} from '@/components/sections'

export default async function APIServerResume() {
  const resumeData = await getAPIResume()

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
