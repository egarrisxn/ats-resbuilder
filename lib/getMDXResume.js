import path from 'path'
import fs from 'fs'
import {compileMDX} from 'next-mdx-remote/rsc'

export async function getMDXResume() {
  const filePath = path.join(process.cwd(), 'app', 'data', 'resume.mdx')
  const fileContent = fs.readFileSync(filePath, {encoding: 'utf8'})

  const {content} = await compileMDX({
    source: fileContent,
  })

  return {content}
}
