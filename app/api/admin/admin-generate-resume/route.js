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

    //! Embed fonts
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

    let {width, height} = page.getSize()

    //! Font Sizes and Spacing
    const h1 = 19.5 // Font size for the largest header
    const h2 = 12 // Font size for specific larger headers
    const h3 = 10.5 // Font size for default headers
    const p = 10.5 // Font size for body text
    const lineHeight = 1.05 * p // Line height for body text
    const paragraphSpacing = 0.66 * lineHeight // Paragraph spacing
    const bulletSize = p // Bullet point size
    const bulletIndent = 6 // Indent after bullet point
    const margin = 22 // Margin from page edges
    const maxLineWidth = width - 2 * margin // Maximum width for text lines

    //! Initial y position for text, starting from top margin
    let yPosition = height - 3.5 * p

    //! Define header keywords to identify header lines
    const headerKeywords = {
      'Ethan Garrison': h1,
      'Full Stack Developer': h2,
      Summary: h2,
      Experience: h2,
      'Full Stack Developer | June 2023 - Present': h3,
      'Regional Account Manager | Aug 2021 - Jan 2023': h3,
      'Sales Manager | Dec 2019 - Aug 2021': h3,
      'Assistant General Manager | Nov 2017 - Dec 2019': h3,
      'Account Manager | Oct 2014 - Nov 2017': h3,
      Education: h2,
      'Certification - Full Stack Development Boot Camp | 2023': h3,
      'Studied - Business Management | 2008 - 2009': h3,
      Skills: h2,
      Projects: h2,
      'Quik|Res | https://github.com/egarrisxn/quikres': h3,
      'ManyLinks | https://github.com/egarrisxn/manylinks': h3,
      'Sway Bae Official | https://github.com/egarrisxn/swaybaeofficial': h3,
      'Unofficial Merchandise | https://github.com/egarrisxn/unofficial-merchandise': h3,
    }

    //! Loop through the content lines
    lines.forEach((line) => {
      if (yPosition < 0) {
        return //? Stop rendering if there's no space left on the page
      }

      const trimmedLine = line.trim()
      const isHeader = headerKeywords.hasOwnProperty(trimmedLine)
      const isBulletPoint = trimmedLine.startsWith('-')

      //! Determine the font, size, and color
      const currentFont = isHeader ? helveticaBoldFont : helveticaFont
      const currentFontSize = isHeader ? headerKeywords[trimmedLine] || h3 : p

      const textColor =
        trimmedLine === 'Ethan Garrison'
          ? rgb(0.039, 0.58, 0.98) //? Blue for the largest header
          : rgb(0, 0, 0) //? Black for all other text

      if (isBulletPoint) {
        //! Draw bullet point
        page.drawText('•', {
          x: margin,
          y: yPosition,
          size: bulletSize,
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
          color: textColor,
        })

        //! Apply additional line spacing for bullet points
        yPosition -= 1.03 * lineHeight
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
              color: textColor,
            })
            yPosition -= lineHeight

            if (yPosition < 0) {
              return //? Stop rendering if there's no space left
            }
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
            color: textColor,
          })
          yPosition -= lineHeight
        }
      }

      //! Add extra space after the h1 (name)
      if (trimmedLine === 'Ethan Garrison') {
        yPosition -= 0.3 * lineHeight
      }

      //! Apply paragraph spacing after empty lines
      if (trimmedLine === '') {
        yPosition -= paragraphSpacing
      }
    })

    //! Save the PDF
    const pdfBytes = await pdfDoc.save()

    //! Return the generated PDF as a response
    return new Response(new Uint8Array(pdfBytes), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="admin-resume.pdf"',
      },
    })
  } catch (error) {
    console.error('Error generating resume:', error)
    return new Response('Failed to generate resume', {status: 500})
  }
}
