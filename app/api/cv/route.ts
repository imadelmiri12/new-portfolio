import { NextResponse } from 'next/server'
import { existsSync } from 'fs'
import { join } from 'path'

export async function GET() {
  // Find which filename exists in public/
  const filenames = ['Imad_Elmiri_CV.pdf', 'Imad_Elmiri.pdf', 'imad_elmiri.pdf', 'cv.pdf']
  let foundFile = ''

  for (const name of filenames) {
    if (existsSync(join(process.cwd(), 'public', name))) {
      foundFile = name
      break
    }
  }

  if (!foundFile) {
    return NextResponse.json({ error: 'CV not found' }, { status: 404 })
  }

  // Return HTML page with PDF embedded — bypasses Brave/Firefox download managers
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Imad Elmiri — CV</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; background: #0a0e1a; }
    iframe {
      width: 100%;
      height: 100vh;
      border: none;
      display: block;
    }
  </style>
</head>
<body>
  <iframe src="/${foundFile}#toolbar=1&navpanes=0&scrollbar=1" type="application/pdf">
    <p style="color:white;text-align:center;padding:2rem;">
      Your browser cannot display PDFs.
      <a href="/${foundFile}" style="color:#c9a84c;">Click here to open it.</a>
    </p>
  </iframe>
</body>
</html>`

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
}