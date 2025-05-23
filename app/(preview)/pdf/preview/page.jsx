'use client'
import dynamic from 'next/dynamic'

const PDFPreview = dynamic(() => import('@/components/PDFPreview'), {ssr: false})

export default function PDFPreviewPage() {
  return <PDFPreview />
}
