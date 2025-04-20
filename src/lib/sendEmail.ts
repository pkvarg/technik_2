'use server'
import nodemailer from 'nodemailer'

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD
const SMTP_SERVER_BCC = process.env.SMTP_SERVER_BCC

interface SendMailOptions {
  name: string
  email: string
  phone: string
  mailMessage: string
  locale: string
}

const transporter = nodemailer.createTransport({
  pool: true,
  host: SMTP_SERVER_HOST,
  port: 465,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
})

export async function sendMail(options: SendMailOptions) {
  const { name, email, phone, mailMessage, locale } = options
  try {
    const isVerified = await transporter.verify()
    console.log('is verified', isVerified)
  } catch (error) {
    console.error('Something Went Wrong', SMTP_SERVER_USERNAME, SMTP_SERVER_PASSWORD, error)
    return
  }

  //throw new Error()

  const html =
    locale === 'sk'
      ? `<div>
    <p>Dobrý deň ${name}</p>
    <p>Váš email: ${email}</p>
       <p>Váš telefón: ${phone}</p>
    <p>Vaša správa: ${mailMessage}</p>
    <p>Ďakujeme Vám za správu.</p
    <p>Ozveme sa čoskoro.</p>
    <p>Barubo</p>
    </div>`
      : locale === 'en'
      ? `<div>
    <p>Hello ${name}</p>
    <p>Your email: ${email}</p>
       <p>Your phone: ${phone}</p>
    <p>Your message: ${mailMessage}</p>
    <p>Thank you for contacting us.</p
    <p>We will get back to you soon.</p>
    <p>Barubo</p>
    </div>`
      : ''

  const info = await transporter.sendMail({
    from: SMTP_SERVER_USERNAME,
    to: email,
    subject: locale === 'sk' ? 'Správa od Barubo' : locale === 'en' ? 'Message from Barubo' : '',
    bcc: SMTP_SERVER_BCC,
    html: html ? html : '',
  })
  console.log('Message Sent', info.messageId)
  console.log('Mail sent to', email)
  return info
}
