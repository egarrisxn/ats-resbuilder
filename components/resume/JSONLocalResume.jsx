'use client'
import {useEffect, useState} from 'react'
import ResumeSkeleton from '@/components/ResumeSkeleton'

export default function JSONLocalResume() {
  const [resume, setResume] = useState(null)

  useEffect(() => {
    fetch('/resume.json')
      .then((response) => response.json())
      .then((data) => setResume(data))
  }, [])

  if (!resume) return <ResumeSkeleton />

  return (
    <main className='animate-fade-in opacity-0'>
      <h1>
        {resume.contact.name} {resume.contact.pronouns}
      </h1>
      <h2>{resume.contact.title}</h2>
      <p>
        {resume.contact.location} |{' '}
        <a href={`tel:${resume.contact.phone}`}>{resume.contact.phone}</a> |{' '}
        <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>{' '}
      </p>
      <p>
        <a href={`https://${resume.contact.website}`} target='_blank'>
          {resume.contact.website}
        </a>{' '}
        |{' '}
        <a href={`https://${resume.contact.github}`} target='_blank'>
          {resume.contact.github}
        </a>{' '}
        |{' '}
        <a href={`https://${resume.contact.linkedin}`} target='_blank'>
          {resume.contact.linkedin}
        </a>
      </p>

      <h3>Summary</h3>
      <p>{resume.summary}</p>

      <h3>Work Experience</h3>
      {resume.experience.map((job, index) => (
        <div key={index}>
          <p className='font-bold'>
            {job.position} | <span className='italic'>{job.dates}</span>
          </p>
          <p>
            {job.company}, {job.location}
          </p>
          <ul>
            {job.responsibilities?.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3>Education & Certifications</h3>
      {resume.education.map((edu, index) => (
        <div key={index}>
          <p className='font-bold'>
            {edu.degree} - {edu.field_of_study} | {edu.dates}
          </p>
          <p>
            {edu.institution}, {edu.location}
          </p>
          <p>
            <span className='italic'>{edu.summary}</span>
          </p>
        </div>
      ))}

      <h3>Technical Skills</h3>
      <ul>
        {resume.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Projects</h3>
      {resume.projects.map((project, index) => (
        <div key={index}>
          <p className='font-bold'>
            {project.name} |{' '}
            <a href={`https://${project.github}`} target='_blank'>
              {project.github}
            </a>
          </p>
          <ul>
            {project.description.map((description, idx) => (
              <li key={idx}>{description}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  )
}
