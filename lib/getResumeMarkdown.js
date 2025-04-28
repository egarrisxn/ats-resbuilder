import {remark} from 'remark'
import html from 'remark-html'
import {readFile} from 'fs/promises'
import path from 'path'

export async function getResumeMarkdown() {
  const filePath = path.join(process.cwd(), 'app', 'data', 'resume.md')
  const fileContent = await readFile(filePath, 'utf8')
  const processedContent = await remark().use(html).process(fileContent)
  return processedContent.toString()
}
