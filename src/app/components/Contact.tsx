'use client'
import React, { useRef, useState, FC } from 'react'
import Message from './Message'
import { sendMail } from '@/lib/sendEmail'
import { useParams } from 'next/navigation'

interface TranslationProps {
  translations: {
    contactTitle: string
    contactName: string
    contactEmail: string
    contactPhone: string
    contactMessage: string
    contactAgree: string
    contactGdpr: string
    contactSend: string
    //contactError2: string
    contactError: string
    contactSuccess: string
    contactGdpr1: string
    //contactGdpr2: string
  }
}

const ContactComponent: FC<TranslationProps> = ({ translations }) => {
  const {
    contactTitle,
    contactName,
    contactEmail,
    contactPhone,
    contactMessage,
    contactAgree,
    contactGdpr,
    contactSend,
    //contactError2,
    contactError,
    contactSuccess,
    contactGdpr1,
    //contactGdpr2,
  } = translations
  const [message, setMessage] = useState<string | null>(null)
  const [messageSuccess, setMessageSuccess] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [mailMessage, setMailMessage] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [checkBox, setCheckBox] = useState<boolean>(false)
  const [showGdpr, setShowGdpr] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const params = useParams()

  // Extract the locale parameter
  // Type assertion needed since params can contain various types
  const locale = typeof params.locale === 'string' ? params.locale : 'sk'

  console.log('lcl', locale)

  const toggleShowGdpr = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowGdpr((prev) => !prev)
  }

  const handleCheckBox = () => {
    setCheckBox((current) => !current)
  }

  const form = useRef<HTMLFormElement>(null)
  const x = process.env.EMAIL_EXTRA_ONE
  const y = process.env.EMAIL_EXTRA_TWO
  const [passwordGroupOne, setPasswordGroupOne] = useState(x)
  const [passwordGroupTwo, setPasswordGroupTwo] = useState(y)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sendEmail = async (e: any) => {
    e.preventDefault()

    if (passwordGroupOne !== x || passwordGroupTwo !== y) {
      setMessage(contactError)
      setName('')
      setEmail('')
      setPhone('')
      setMailMessage('')

      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      const options = {
        name,
        email,
        phone,
        mailMessage,
        locale,
      }

      try {
        await sendMail(options)
        setName('')
        setPhone('')
        setEmail('')
        setMailMessage('')
        setMessageSuccess(contactSuccess)
      } catch (error) {
        setMessage(contactError)
        console.log(error)
      }
      const element = document.getElementById('contact')
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className="bg-[#2e2236] h-8 lg:scroll-mt-14" id="contact"></div>
      <div className="bg-[#2e2236] pt-8 lg:pt-16 pb-10 text-[25px] text-white">
        <h1 className="text-[30px] lg:text-[35px] text-white text-center lg:pt-0 py-4">
          {contactTitle}
        </h1>
        <div className="mx-4 md:mx-6 lg:mx-0 flex lg:flex-row flex-col lg:justify-center lg:gap-[10%] ">
          <div className="pt-[50px] lg:pt-0 lg:w-[30%]">
            {messageSuccess && <Message variant="success">{messageSuccess}</Message>}
            {message && <Message variant="danger">{message}</Message>}
            <div>
              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-[2.5px]">
                <div>
                  <div className="flex flex-col">
                    <label className="form-label mt-[2.5%] text-[20px]">{contactName}</label>
                    <input
                      className="rounded-xl pl-[5px] border"
                      type="text"
                      name="user_name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />

                    <label className="form-label mt-[2.5%] text-[20px]">{contactEmail}</label>
                    <input
                      className="rounded-xl pl-[5px] border"
                      type="email"
                      name="user_email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label className="form-label mt-[2.5%] text-[20px]"> {contactPhone}</label>
                    <input
                      className="rounded-xl pl-[5px] border"
                      type="text"
                      name="user_phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="form-label mt-[2.5%] text-[20px]">{contactMessage}</label>
                  <textarea
                    className="rounded-xl pl-[5px] border"
                    rows={5}
                    name="message"
                    value={mailMessage}
                    onChange={(e) => setMailMessage(e.target.value)}
                    required
                  ></textarea>

                  <div className="flex flex-row form-check mt-8 items-center">
                    <input
                      id="flexCheckDefault"
                      type="checkbox"
                      defaultChecked={false}
                      //value={checkBox}
                      onChange={handleCheckBox}
                      required
                      className="rounded-xl w-[25px] h-[25px] lg:h-[20px]"
                    />

                    <label
                      className="form-check-label text-[25px] lg:text-[25px] ml-[15px]"
                      htmlFor="flexCheckDefault"
                    >
                      {contactAgree}{' '}
                      <button className="underline" onClick={(e) => toggleShowGdpr(e)}>
                        {contactGdpr}{' '}
                      </button>
                      {showGdpr && (
                        <p className="w-[300px] lg:w-[240px] text-[22.5px] text-left mt-2 leading-6">
                          {contactGdpr1}
                        </p>
                      )}
                    </label>
                  </div>
                </div>
                <input
                  className="hidden"
                  type="text"
                  defaultValue={passwordGroupOne}
                  onChange={(e) => setPasswordGroupOne(e.target.value)}
                />
                <input
                  className="hidden"
                  type="text"
                  defaultValue={passwordGroupTwo}
                  onChange={(e) => setPasswordGroupTwo(e.target.value)}
                />
                <button
                  className="text-[25px] bg-violet mt-10 pt-[5px] rounded-xl border border-white hover:text-[#2e2236] hover:bg-white"
                  type="submit"
                  value="Send"
                >
                  {contactSend}
                </button>
              </form>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactComponent
