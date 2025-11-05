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
    const fontSize = 12 // Font size for body text
    const headerFontSize = 13 // Font size for default headers
    const largestHeaderFontSize = 19 // Font size for largest header
    const lineHeight = 1.2 * fontSize // Line height for body text
    const paragraphSpacing = 0.69 * lineHeight // Paragraph spacing
    const margin = 48 // Margin from page edges
    const maxLineWidth = width - 2 * margin // Maximum width for text lines

    //! Initial y position for text, starting from top margin
    let yPosition = height - 4.7 * fontSize

    //! Define header keywords to identify header lines
    const headerKeywords = {
      'ETHAN GARRISON': largestHeaderFontSize,
      'Full Stack Developer': headerFontSize,
      'ExampleTech Solutions Hiring Team': headerFontSize,
      'Ethan Garrison': headerFontSize,
    }

    //! Loop through the content lines
    lines.forEach((line) => {
      if (yPosition < 0) {
        return //? Stop rendering if there's no space left on the page
      }

      const trimmedLine = line.trim()
      const isHeader = headerKeywords.hasOwnProperty(trimmedLine)

      //! Determine the font, size, and color based on header status
      const currentFont = isHeader ? helveticaBoldFont : helveticaFont
      const currentFontSize = isHeader ? headerKeywords[trimmedLine] || headerFontSize : fontSize
      const textColor =
        trimmedLine === 'ETHAN GARRISON'
          ? rgb(0.039, 0.58, 0.98) //? Blue for the largest header
          : rgb(0, 0, 0) //? Black for all other text

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
        'Content-Disposition': 'attachment; filename="admin-cover-letter.pdf"',
      },
    })
  } catch (error) {
    console.error('Error generating cover letter PDF:', error)
    return new Response('Failed to generate cover letter', {status: 500})
  }
}

// import {PDFDocument, StandardFonts, rgb} from 'pdf-lib'

// export async function POST(req) {
//   try {
//     const {content} = await req.json()
//     const lines = content.split('\n')

//     //! Create a new PDFDocument
//     const pdfDoc = await PDFDocument.create()

//     //! Define page size (US Letter)
//     const pageWidth = 8.5 * 72 // 612 points (8.5 inches)
//     const pageHeight = 11 * 72 // 792 points (11 inches)

//     //! Define page size (A4)
//     // const pageWidth = 8.27 * 72 // 595.44 points (8.27 inches)
//     // const pageHeight = 11.69 * 72 // 841.68 points (11.69 inches)

//     //! Add a page
//     const page = pdfDoc.addPage([pageWidth, pageHeight])

//     //! Embed fonts
//     const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica)
//     const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

//     let {width, height} = page.getSize()

//     //! Font Sizes and Spacing
//     const h1 = 19 // Name
//     const h2 = 13 // Section headers
//     const p = 12 // Body text

//     const lineHeight = 1.2 * p
//     const paragraphSpacing = 0.8 * lineHeight
//     const margin = 32
//     const maxLineWidth = width - 2 * margin

//     //! Initial y position
//     let yPosition = height - 48

//     //! Define header keywords
//     const headerKeywords = {
//       'ETHAN GARRISON': h1,
//       'Full Stack Developer': h2,
//       'ExampleTech Solutions Hiring Team': h2,
//       'Ethan Garrison': h2,
//     }

//     //! Loop through lines
//     lines.forEach((line) => {
//       if (yPosition < margin) return // Stop if out of space

//       const trimmedLine = line.trim()
//       const isHeader = headerKeywords.hasOwnProperty(trimmedLine)

//       const currentFont = isHeader ? fontBold : fontRegular
//       const currentFontSize = isHeader ? headerKeywords[trimmedLine] || h2 : p

//       const textColor =
//         trimmedLine === 'ETHAN GARRISON'
//           ? rgb(0.039, 0.58, 0.98) // Blue name
//           : rgb(0, 0, 0) // Black text
//       //! Split into wrapped lines
//       const words = trimmedLine.split(' ')
//       let currentLine = ''
//       words.forEach((word) => {
//         const testLine = `${currentLine} ${word}`.trim()
//         const testLineWidth = currentFont.widthOfTextAtSize(testLine, currentFontSize)

//         if (testLineWidth < maxLineWidth) {
//           currentLine = testLine
//         } else {
//           //! Draw the current line and reset for the next line
//           page.drawText(currentLine, {
//             x: margin,
//             y: yPosition,
//             size: currentFontSize,
//             font: currentFont,
//             color: textColor,
//           })
//           yPosition -= lineHeight
//           currentLine = word
//         }
//       })

//       //! Draw the last line if any content is left
//       if (currentLine) {
//         page.drawText(currentLine, {
//           x: margin,
//           y: yPosition,
//           size: currentFontSize,
//           font: currentFont,
//           color: textColor,
//         })
//         yPosition -= lineHeight
//       }

//       //! Extra spacing rules
//       if (trimmedLine === 'ETHAN GARRISON') {
//         yPosition -= 0.4 * lineHeight
//       }

//       if (trimmedLine === 'Full Stack Developer') {
//         yPosition -= 0.5 * lineHeight
//       }

//       //! Apply paragraph spacing after empty lines
//       if (trimmedLine === '') {
//         yPosition -= paragraphSpacing
//       }
//     })

//     //! Save the PDF
//     const pdfBytes = await pdfDoc.save()

//     //! Return the generated PDF as a response
//     return new Response(new Uint8Array(pdfBytes), {
//       headers: {
//         'Content-Type': 'application/pdf',
//         'Content-Disposition': 'attachment; filename="admin-cover-letter.pdf"',
//       },
//     })
//   } catch (error) {
//     console.error('Error generating cover letter PDF:', error)
//     return new Response('Failed to generate cover letter', {status: 500})
//   }
// }
