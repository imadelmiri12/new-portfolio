import { NextResponse } from 'next/server'
import { existsSync, readdirSync, readFileSync } from 'fs'
import { join } from 'path'

export async function GET() {
  const publicDir = join(process.cwd(), 'public')

  // Try the likely names first, but fall back to scanning public/ for any
  // .pdf file. The repo's actual file is "Imad_ELMIRI.pdf" — on a
  // case-sensitive filesystem (e.g. Vercel/Linux) a hardcoded guess like
  // "Imad_Elmiri.pdf" silently fails to match it, which is what was making
  // this 404 in production.
  const preferredNames = ['Imad_Elmiri_CV.pdf', 'Imad_Elmiri.pdf', 'Imad_ELMIRI.pdf', 'imad_elmiri.pdf', 'cv.pdf']
  let filename = preferredNames.find((name) => existsSync(join(publicDir, name)))

  if (!filename) {
    filename = readdirSync(publicDir).find((file) => file.toLowerCase().endsWith('.pdf'))
  }

  if (!filename) {
    return NextResponse.json({ error: 'CV not found' }, { status: 404 })
  }

  const fileBuffer = readFileSync(join(publicDir, filename))

  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      // "inline" (as opposed to "attachment") is what tells the browser to
      // render the PDF in a tab instead of triggering a download — this was
      // the actual cause of "View CV" downloading instead of opening.
      'Content-Disposition': 'inline; filename="Imad_Elmiri_CV.pdf"',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
