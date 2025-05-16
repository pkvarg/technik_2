'use client'
import React, { FC } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import CookieConsent from 'react-cookie-consent'

interface TranslationProps {
  translations: {
    cookies: string
    agree: string
    disagree: string
  }
}

const Footer: FC<TranslationProps> = ({ translations }) => {
  const { cookies, agree, disagree } = translations

  const apiUrl = 'https://hono-api.pictusweb.com/api/visitors/technik/increase'
  //const apiUrl = 'http://localhost:3013/api/visitors/technik/increase'

  const incrementCount = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) {
        throw new Error('Failed to increment count')
      }
    } catch (err) {
      console.log(err instanceof Error ? err.message : 'An unknown error occurred')
    }
  }

  return (
    <div className="flex flex-col footer-gradient py-8 text-white">
      <CookieConsent
        location="bottom"
        style={{
          background: '#0e0d0d', // Dark background (nearly black)
          backdropFilter: 'blur(10px)',
          color: '#ffffff',
          fontSize: '16px',
          textAlign: 'start',
          borderTop: '1px solid #E6C78B',
          boxShadow: '0 -5px 20px rgba(0, 0, 0, 0.3)',
          padding: '16px 24px',
        }}
        buttonStyle={{
          background: '#E6C78B',
          color: '#0e0d0d', // Nearly black text
          fontSize: '16px',
          fontWeight: 'bold',
          padding: '10px 24px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
        buttonText={agree}
        expires={365}
        enableDeclineButton
        onDecline={() => {
          incrementCount()
        }}
        declineButtonStyle={{
          background: 'transparent',
          color: '#fff',
          fontSize: '16px',
          fontWeight: 'bold',
          padding: '8px 24px',
          borderRadius: '8px',
          border: `2px solid #E6C78B`, // Techniks border
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          marginRight: '10px',
        }}
        declineButtonText={disagree}
        onAccept={() => {
          incrementCount()
        }}
        contentStyle={{
          flex: '1',
          margin: '0',
        }}
      >
        {cookies}
      </CookieConsent>
      <div className="mx-4 flex flex-col items-start justify-between lg:mx-[20%] lg:flex-row 2xl:mx-[25%]">
        <div>
          <Image
            src="/logo_alb.png"
            alt="technik"
            width={500}
            height={500}
            className="-ml-3 w-[80px] pb-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col lg:flex-row">
            <p className="mr-[5px]">
              Patríme pod{' '}
              <a
                href="http://www.technik.stuba.sk/index.html"
                target="_blank"
                className="cursor-pointer underline"
              >
                Vysokoškolský umelecký súbor Technik{' '}
              </a>
            </p>
            <p>
              {' '}
              a{' '}
              <a href="https://www.stuba.sk/" target="_blank" className="cursor-pointer underline">
                STU Bratislava
              </a>
            </p>
          </div>

          <p className="mt-0"> &copy; {Date().substring(11, 15)} Komorný orchester Technik</p>
          {/* <p>Sledujte nás</p> */}
          <div className="flex flex-row items-center gap-4">
            <a href="https://www.facebook.com/orchester.technik" target="_blank">
              <Image
                src={'/facebook.png'}
                alt="facebook"
                width={100}
                height={100}
                className="h-[25px] w-[30.5px]"
              />
            </a>
            <a href="https://www.youtube.com/channel/UCN5EhFknLnEjzKUPCZfg7FA" target="_blank">
              <Image
                src={'/youtube.png'}
                alt="youtube"
                width={100}
                height={100}
                className="w-[35px]"
              />
            </a>
          </div>
        </div>

        <div className="mt-4 lg:mt-0">
          <div
            className="flex flex-col text-[20px]
           font-bold"
          >
            <Link href={'/partners'} className="cursor-pointer hover:text-[#e6c78c]">
              Partneri
            </Link>
            <Link href={'/contact'} className="cursor-pointer hover:text-[#e6c78c]">
              Kontakt
            </Link>
            <Link href={'/admin'} className="cursor-pointer hover:text-[#e6c78c]">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
