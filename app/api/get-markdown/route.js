import fs from 'fs'
import path from 'path'

export async function GET() {
  const filePath = path.join(process.cwd(), 'app/data/resume.md')
  const markdownContent = fs.readFileSync(filePath, 'utf8')

  return new Response(markdownContent, {
    headers: {
      'Content-Type': 'text/markdown',
    },
  })
}
