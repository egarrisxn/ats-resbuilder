import {SITE_URL} from '@/lib/utils'

export async function getAPIResume() {
  const response = await fetch(`${SITE_URL}/api/resume-data`, {
    cache: 'no-store',
  })
  const data = await response.json()
  return data
}
