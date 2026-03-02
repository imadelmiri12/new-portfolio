import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'imadmiri12@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #A78BFA; margin-bottom: 20px;">${subject}</h2>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0; color: #666;">
              <strong>From:</strong> ${name} (${email})
            </p>
          </div>
          <div style="background-color: #fafafa; padding: 20px; border-left: 4px solid #A78BFA; border-radius: 4px;">
            <p style="white-space: pre-wrap; color: #333; line-height: 1.6;">${message}</p>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px; text-align: center;">
            This email was sent from your portfolio contact form
          </p>
        </div>
      `,
    })

    console.log('Contact form email sent successfully:', {
      name,
      email,
      subject,
      timestamp: new Date().toISOString(),
    })
    
    return NextResponse.json(
      {
        message: 'Message received successfully! I will get back to you soon.',
        data: { name, email, subject },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    )
  }
}

// Optional: Add CORS headers if needed
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
