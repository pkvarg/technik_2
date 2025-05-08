'use client'
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const MailingList = () => {
  const [email, setEmail] = useState('')
  const [showAgree, setShowAgree] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const validateEmail = (email: string) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // eslint-disable-next-line
  const subscribe = async (e: any) => {
    e.preventDefault()
    const isValid = validateEmail(email)

    if (!isValid) return toast.error('Zadajte platný email, prosím.')
    if (email === '') return toast.error('Zadajte email, prosím.')

    try {
      const res = await axios.put('api/subscribe', {
        email,
        createdAt: new Date(),
      })

      if (res.data.exists) {
        toast.success('Tento email je už prihlásený!')
      } else if (res.data) {
        toast.success('Ďakujeme za prihlásenie!')
        setEmail('')
        setShowForm(false) // Hide form after successful submission
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('Nastala chyba. Napíšte nám email, prosím.')
    }
  }

  return (
    <div className="bg-[#673515] px-4 py-16 text-white lg:px-[20%]">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-center title-color text-3xl md:text-4xl font-bold mb-6">
          Ostaňme v kontakte
        </h2>

        <p className="text-center text-lg mb-8 max-w-2xl">
          Dostávajte pozvánky na naše koncerty a buďte informovaní o všetkých našich hudobných
          podujatiach.
        </p>

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="border-[1px] border-amber-600 hover:bg-amber-600 transition-all duration-300 px-8 py-3 rounded-md text-lg font-medium cursor-pointer"
          >
            Prihlásiť sa k odberu pozvánok
          </button>
        ) : (
          <div className="w-full max-w-md mt-4 bg-[#0a0a0a] p-6 rounded-lg border border-gray-800">
            <form onSubmit={subscribe} className="flex flex-col">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2 title-color">
                  Váš email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#1a1a1a] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="flex items-start mt-2 mb-4">
                <div className="flex items-center h-5">
                  <input id="terms" type="checkbox" required className="w-4 h-4 accent-amber-500" />
                </div>
                <div className="ml-3">
                  <label htmlFor="terms" className="text-sm">
                    <span className="cursor-pointer" onClick={() => setShowAgree(!showAgree)}>
                      Súhlasím so spracovaním údajov
                    </span>
                  </label>
                  {showAgree && (
                    <p className="mt-2 text-sm text-amber-300">
                      Údaje nezdieľame tretím stranám. Používame ich výlučne na zasielanie
                      informácií o koncertoch.
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-3 mt-2">
                <button
                  type="submit"
                  className="flex-1 button-color hover:bg-amber-600 transition-all duration-300 px-4 py-3 rounded-md font-medium"
                >
                  Prihlásiť sa
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-3 bg-transparent border border-gray-600 rounded-md hover:bg-gray-800 transition-all duration-300"
                >
                  Zrušiť
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default MailingList
