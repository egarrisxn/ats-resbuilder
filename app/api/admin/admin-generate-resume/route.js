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
    const h1 = 22.5 // Font size for main header
    const h2 = 12.5 // Font size for main subheader
    const h3 = 12 // Font size for section headers
    const h4 = 11 // Font size for individual headers
    const p = 10.5 // Font size for body text
    const lineHeight = 1.05 * p // Line height for body text
    const paragraphSpacing = 0.6 * lineHeight // Paragraph spacing
    const bulletSize = p // Bullet point size
    const bulletIndent = 6 // Indent after bullet point
    const margin = 25 // Margin from page edges
    const maxLineWidth = width - 4 * margin // Maximum width for text lines

    //! Initial y position for text, starting from top margin
    let yPosition = height - 3.8 * p

    //! Define header keywords to identify header lines
    const headerKeywords = {
      'Ethan Garrison': h1,
      'Full Stack Developer': h2,
      Summary: h3,
      Experience: h3,
      'Full Stack Developer | June 2023 - Present': h4,
      'Creative Tech & Event Lead | Jan 2023 - Present': h4,
      'Regional Account Manager | Mar 2020 - Jan 2023': h4,
      'Assistant General Manager | May 2018 - Mar 2020': h4,
      'Account Manager | Feb 2015 - May 2018': h4,
      Education: h3,
      'Certification - Full Stack Development Boot Camp | 2023': h4,
      'Studied - Business Management | 2008 - 2009': h4,
      Skills: h3,
      Projects: h3,
      'Quik|Res | https://github.com/egarrisxn/quikres': h4,
      'ManyLinks | https://github.com/egarrisxn/manylinks': h4,
      'Unofficial Merchandise | https://github.com/egarrisxn/unofficial-merchandise': h4,
      'Sway Bae Official | https://github.com/egarrisxn/swaybaeofficial': h4,
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
        yPosition -= 1.05 * lineHeight
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

      //! Add extra space after the h1 (header)
      if (trimmedLine === 'Ethan Garrison') {
        yPosition -= 0.1 * lineHeight
      }

      //! Add extra space after the h2 (subheader)
      if (trimmedLine === 'Full Stack Developer') {
        yPosition -= 0.3 * lineHeight
      }

      //! Add extra space after the h3 (section header)
      if ((trimmedLine === 'Summary', 'Experience', 'Education', 'Skills', 'Projects')) {
        yPosition -= 0.025 * lineHeight
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
