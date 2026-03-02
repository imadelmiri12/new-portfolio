import { NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'

export async function GET() {
  try {
    // Path to the CV PDF in the public folder
    const cvPath = join(process.cwd(), 'public', 'cv.pdf')
    
    // Read the file
    const file = readFileSync(cvPath)
    
    // Return the file as PDF
    return new NextResponse(file, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Imad_Elmiri_CV.pdf"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    })
  } catch (error) {
    console.error('Error serving CV:', error)
    // Return a fallback response
    return NextResponse.json(
      { error: 'CV not found' },
      { status: 404 }
    )
  }
}
