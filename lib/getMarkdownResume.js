import path from 'path'
import {readFile} from 'fs/promises'
import {remark} from 'remark'
import html from 'remark-html'

export async function getMarkdownResume() {
  const filePath = path.join(process.cwd(), 'app', 'data', 'resume.md')
  const fileContent = await readFile(filePath, 'utf8')
  const processedContent = await remark().use(html).process(fileContent)
  return processedContent.toString()
}
