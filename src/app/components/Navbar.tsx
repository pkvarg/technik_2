'use client'
import React, { useState } from 'react'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const router = useRouter()

  return (
    <nav className="bg-tra nav-font w-full font-bold text-white">
      <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8">
        <div className="mb-0 lg:mb-2">
          <div className="flex items-center justify-between py-3 md:block md:py-4">
            <div
              onClick={() => router.push('/')}
              className="flex cursor-pointer flex-row items-center gap-4"
            >
              <Image
                src="/logo_alb.png"
                alt="technik"
                width={500}
                height={500}
                className="w-[50px]"
              />
              <h1 className="text-[20px] leading-[22.5px]">Vysokoškolský umelecký súbor</h1>
            </div>
            <div className="md:hidden">
              <button
                className="rounded-md p-2 text-white outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className={`mt-8 h-[80vh] flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 lg:h-auto ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="justify-center space-y-2 text-[20px] md:flex md:space-x-6 md:space-y-0 lg:space-y-0 lg:text-[20px]">
              <li>
                <Link href={'/'} className="cursor-pointer hover:text-yellow-500">
                  Domov
                </Link>
              </li>

              <div className="group relative  cursor-pointer">
                <div className="flex items-center justify-between lg:px-4">
                  <a className="menu-hover hover:text-yellow-500">O nás</a>
                </div>
                <div className="invisible absolute z-50 flex w-max flex-col  bg-black px-4 py-1 text-white shadow-xl group-hover:visible">
                  {/* <a className="my-2 block py-1  md:mx-2">Product</a> */}
                  <Link href={'/about'} className="cursor-pointer hover:text-yellow-500">
                    Kto sme
                  </Link>
                  <Link href={'/repertoire'} className="cursor-pointer hover:text-yellow-500">
                    Repertoár
                  </Link>
                  {/* <Link href={'/about'} className="cursor-pointer hover:text-yellow-500">
                    Členovia
                  </Link> */}
                  <Link href={'/personages'} className="cursor-pointer hover:text-yellow-500">
                    Osobnosti
                  </Link>
                  {/* <Link href={'/about'} className="cursor-pointer hover:text-yellow-500">
                    Zájazdy
                  </Link> */}
                  <Link href={'/about'} className="cursor-pointer hover:text-yellow-500">
                    História
                  </Link>
                </div>
              </div>

              {/* <li>
                  <Link
                    href={'/gallery'}
                    className="cursor-pointer hover:text-yellow-500"
                  >
                    Galéria
                  </Link>
                </li> */}

              <div className="group relative  cursor-pointer">
                <div className="flex items-center justify-between lg:px-4">
                  <a className="menu-hover hover:text-yellow-500">Galéria</a>
                </div>
                <div className="invisible absolute z-50 flex w-max flex-col  bg-black px-4 py-1 text-white shadow-xl group-hover:visible">
                  <Link href={'/gallery'} className="cursor-pointer hover:text-yellow-500">
                    Fotky
                  </Link>
                  <Link href={'/audio'} className="cursor-pointer hover:text-yellow-500">
                    Audio
                  </Link>
                  <Link href={'/video'} className="cursor-pointer hover:text-yellow-500">
                    Video
                  </Link>
                </div>
              </div>

              <li>
                <Link href={'/contact'} className="cursor-pointer hover:text-yellow-500">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
