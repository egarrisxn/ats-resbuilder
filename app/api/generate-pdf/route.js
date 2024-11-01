import {PDFDocument, StandardFonts, rgb} from 'pdf-lib'

export async function POST(req) {
  try {
    const {content} = await req.json()
    const lines = content.split('\n')

    //! Create a new PDFDocument
    const pdfDoc = await PDFDocument.create()

    //! Define page size
    //? US Letter format
    const pageWidth = 8.5 * 72 // 612 points (8.5 inches)
    const pageHeight = 11 * 72 // 792 points (11 inches)
    //? A4 format
    // const pageWidth = 8.27 * 72 // 595.44 points (8.27 inches)
    // const pageHeight = 11.69 * 72 // 841.68 points (11.69 inches)

    //! Add a page with the desired size
    const page = pdfDoc.addPage([pageWidth, pageHeight])

    // Check and log the size of the page to verify
    console.log(`Page size set to: ${pageWidth} x ${pageHeight} points`) // Log the set dimensions
    console.log(`Actual page size: ${page.getWidth()} x ${page.getHeight()} points`) // Log the actual dimensions

    // Embed fonts
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

    let {width, height} = page.getSize()

    //! Font Sizes and Spacing
    //? US Letter format
    const fontSize = 10 // Font size for body text
    const headerFontSize = 10 // Font size for default headers
    const largerHeaderFontSize = 12 // Font size for specific larger headers
    const largestHeaderFontSize = 13 // Font size for largest header
    const lineHeight = 1.07 * fontSize // Line height for body text
    const paragraphSpacing = 0.72 * lineHeight // Paragraph spacing
    const bulletPointSize = fontSize // Bullet point size
    const bulletIndent = 6 // Indent after bullet point
    const margin = 16 // Margin from page edges
    const maxLineWidth = width - 2 * margin // Maximum width for text lines
    //? A4 format
    // const fontSize = 10 // Font size for body text
    // const headerFontSize = 10 // Font size for default headers
    // const largerHeaderFontSize = 12 // Font size for specific larger headers
    // const largestHeaderFontSize = 15 // Font size for largest header
    // const lineHeight = 1.1 * fontSize // Line height for body text
    // const paragraphSpacing = 0.8 * lineHeight // Paragraph spacing
    // const bulletPointSize = fontSize // Bullet point size
    // const bulletIndent = 6 // Indent after bullet point
    // const margin = 16 // Margin from page edges
    // const maxLineWidth = width - 2 * margin // Maximum width for text lines

    //! Initial y position for text, starting from top margin
    let yPosition = height - 2.7 * fontSize

    //! Define header keywords to identify header lines
    const headerKeywords = {
      'Ethan Garrison (he/him)': largestHeaderFontSize,
      'Full-Stack Developer': largerHeaderFontSize,
      Summary: largerHeaderFontSize,
      'Work Experience': largerHeaderFontSize,
      'Full-Stack Developer | June 2023 - Present': headerFontSize,
      'Regional Account Manager | Aug 2021 - Jan 2023': headerFontSize,
      'Sales Manager | Dec 2019 - Aug 2021': headerFontSize,
      'Assistant General Manager | Nov 2017 - Dec 2019': headerFontSize,
      'Account Manager | Oct 2014 - Nov 2017': headerFontSize,
      'Education & Certifications': largerHeaderFontSize,
      'Certification - Full-Stack Development Boot Camp | Mar 2023 - June 2023': headerFontSize,
      'Studied - Business Management | Aug 2008 - Dec 2009': headerFontSize,
      'Technical Skills': largerHeaderFontSize,
      Projects: largerHeaderFontSize,
      'Sway Bae Official (swaybae.net) | github.com/egarrisxn/swaybaeofficial': headerFontSize,
      'Unofficial Merchandise (unofficialmerchandise.vercel.app) | github.com/egarrisxn/unofficial-merchandise':
        headerFontSize,
      'EGxWorld v1 (egxworld.vercel.app) | github.com/egarrisxn/egxworld-v1': headerFontSize,
      'ATS Resbuilder (ats-resbuilder.vercel.app) | github.com/egarrisxn/ats-resbuilder':
        headerFontSize,
      'n00bdev (n00bdev.vercel.app) | github.com/egarrisxn/n00bdev': headerFontSize,
    }

    lines.forEach((line) => {
      if (yPosition < 0) {
        return
      }

      const trimmedLine = line.trim()
      const isHeader = headerKeywords.hasOwnProperty(trimmedLine)
      const isBulletPoint = trimmedLine.startsWith('-')

      //! Determine the font and size based on whether it's a header or not
      const currentFont = isHeader ? helveticaBoldFont : helveticaFont
      const currentFontSize = isHeader ? headerKeywords[trimmedLine] || headerFontSize : fontSize

      if (isBulletPoint) {
        //! Draw bullet point
        page.drawText('•', {
          x: margin,
          y: yPosition,
          size: bulletPointSize,
          font: helveticaBoldFont,
          color: rgb(0.039, 0.58, 0.98),
        })

        //! Draw text after bullet point with some indent
        const textAfterBullet = trimmedLine.replace(/^- /, '').trim()

        page.drawText(textAfterBullet, {
          x: margin + bulletIndent,
          y: yPosition,
          size: currentFontSize,
          font: currentFont,
          color: rgb(0, 0, 0),
        })

        //! Apply additional line spacing for bullet points
        yPosition -= 1.03 * lineHeight // Increase spacing after bullet points
      } else {
        //! Split the line into chunks that fit the page width
        const words = trimmedLine.split(' ')
        let currentLine = ''
        words.forEach((word) => {
          const testLine = `${currentLine} ${word}`.trim()
          const testLineWidth = currentFont.widthOfTextAtSize(testLine, currentFontSize)

          if (testLineWidth < maxLineWidth) {
            currentLine = testLine
          } else {
            //! Draw the current line and reset for the next line
            page.drawText(currentLine, {
              x: margin,
              y: yPosition,
              size: currentFontSize,
              font: currentFont,
              color: rgb(0, 0, 0),
            })
            yPosition -= lineHeight

            if (yPosition < 0) {
              return
            }
            //! Set the current line to the word that didn't fit
            currentLine = word
          }
        })

        //! Draw the last line if any content is left
        if (currentLine) {
          page.drawText(currentLine, {
            x: margin,
            y: yPosition,
            size: currentFontSize,
            font: currentFont,
            color: rgb(0, 0, 0),
          })
          yPosition -= lineHeight
        }
      }

      //! Apply paragraph spacing after empty lines
      if (trimmedLine === '') {
        yPosition -= paragraphSpacing
      }
    })

    const pdfBytes = await pdfDoc.save()

    return new Response(new Uint8Array(pdfBytes), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"',
      },
    })
  } catch (error) {
    console.error('Error generating PDF:', error)
    return new Response('Failed to generate PDF', {status: 500})
  }
}
