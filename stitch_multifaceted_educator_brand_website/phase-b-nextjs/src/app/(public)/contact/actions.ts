'use server'

import nodemailer from 'nodemailer'
import { createClient } from '@/lib/supabase/server'

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  if (!name || !email || !subject || !message) {
    return { success: false, error: 'All fields are required' }
  }

  try {
    // 1. Save to Supabase (Admin Panel)
    const supabase = await createClient()
    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert({ name, email, subject, message })

    if (dbError) throw dbError

    // 2. Send Email Notification (if SMTP is configured)
    if (process.env.SMTP_EMAIL && process.env.SMTP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD,
        },
      })

      const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: process.env.SMTP_EMAIL, // Send to yourself
        replyTo: email, // If you click "reply", it goes to the person who filled the form
        subject: `New Contact Form Message: ${subject}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; max-width: 600px;">
            <h2 style="color: #d4af37;">New Website Message</h2>
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border-color: #eee;" />
            <p style="white-space: pre-wrap;">${message}</p>
            <hr style="border-color: #eee;" />
            <p style="font-size: 12px; color: #888;">This message was sent from your portfolio website's contact form.</p>
          </div>
        `,
      }

      await transporter.sendMail(mailOptions)
    }

    return { success: true }
  } catch (error) {
    console.error('Error in contact form submission:', error)
    return { success: false, error: 'Failed to submit message' }
  }
}
