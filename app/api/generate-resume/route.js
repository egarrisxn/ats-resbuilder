import {PDFDocument, StandardFonts, rgb} from 'pdf-lib'

export async function POST(req) {
  try {
    const {content} = await req.json()
    const lines = content.split('\n')

    //! Create a new PDFDocument
    const pdfDoc = await PDFDocument.create()

    //! Define page size (US Letter)
    const pageWidth = 8.5 * 72 // 612 points (8.5 inches)
    const pageHeight = 11 * 72 // 792 points (11 inches)

    //! Define page size (A4)
    // const pageWidth = 8.27 * 72 // 595.44 points (8.27 inches)
    // const pageHeight = 11.69 * 72 // 841.68 points (11.69 inches)

    //! Add a page
    const page = pdfDoc.addPage([pageWidth, pageHeight])

    //! Embed fonts
    const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

    let {width, height} = page.getSize()

    //! Font Sizes and Spacing
    const h1 = 26 // Name
    const h2 = 16 // Title
    const h3 = 14 // Section headers
    const h4 = 11.5 // Job/project headers
    const p = 11 // Body text

    const lineHeight = 1.2 * p
    const paragraphSpacing = 0.8 * lineHeight
    const bulletSize = p
    const bulletIndent = 7
    const margin = 32
    const maxLineWidth = width - 2 * margin

    //! Initial y position
    let yPosition = height - 48

    //! Define header keywords to identify header lines
    const headerKeywords = {
      'Riley Morgan': h1,
      'Full Stack Developer': h2,
      Summary: h3,
      Experience: h3,
      'Full Stack Developer | June 2023 - Present': h4,
      'Sales Lead | Aug 2021 - Jan 2023': h4,
      'Sales Supervisor | Dec 2019 - Aug 2021': h4,
      'Assistant Manager | Nov 2017 - Dec 2019': h4,
      'Client Manager | Oct 2014 - Nov 2017': h4,
      Education: h3,
      'Certification - Full Stack Web Development Boot Camp | 2023': h3,
      'Studied - Business Administration | 2008 - 2009': h3,
      Skills: h3,
      Projects: h3,
      'Loop Lane | https://github.com/rileymdev/looplane': h4,
      'AltWear | https://github.com/rileymdev/altwear': h4,
      'DevHues | https://github.com/rileymdev/devhues': h4,
      'FocusNode | https://github.com/rileymdev/focusnode': h4,
    }

    //! Loop through lines
    lines.forEach((line) => {
      if (yPosition < margin) return // Stop if out of space

      const trimmedLine = line.trim()
      const isHeader = headerKeywords.hasOwnProperty(trimmedLine)
      const isBulletPoint = trimmedLine.startsWith('-')

      const currentFont = isHeader ? fontBold : fontRegular
      const currentFontSize = isHeader ? headerKeywords[trimmedLine] || h3 : p

      const textColor =
        trimmedLine === 'Riley Morgan'
          ? rgb(0.039, 0.58, 0.98) // Blue name
          : rgb(0, 0, 0) // Black text

      if (isBulletPoint) {
        //! Draw bullet point
        page.drawText('•', {
          x: margin,
          y: yPosition,
          size: bulletSize,
          font: fontBold,
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

      //! Extra spacing rules
      if (trimmedLine === 'Riley Morgan') {
        yPosition -= 0.4 * lineHeight
      }

      if (trimmedLine === 'Full Stack Developer') {
        yPosition -= 0.5 * lineHeight
      }

      if (
        ['Summary', 'Work Experience', 'Education & Certifications', 'Skills', 'Projects'].includes(
          trimmedLine,
        )
      ) {
        yPosition -= 0.6 * lineHeight
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
        'Content-Disposition': 'attachment; filename="resume.pdf"',
      },
    })
  } catch (error) {
    console.error('Error generating resume:', error)
    return new Response('Failed to generate resume', {status: 500})
  }
}
