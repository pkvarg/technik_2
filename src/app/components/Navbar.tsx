// 'use client'
// import React, { useState } from 'react'
// import { Link } from '@/i18n/routing'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'

// const Navbar = () => {
//   const [navbar, setNavbar] = useState(false)
//   const router = useRouter()

//   return (
//     <nav className="bg-tra nav-font w-full font-bold text-white">
//       <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8">
//         <div className="mb-0 lg:mb-2">
//           <div className="flex items-center justify-between py-3 md:block md:py-4">
//             <div
//               onClick={() => router.push('/')}
//               className="flex cursor-pointer flex-row items-center gap-4"
//             >
//               <Image
//                 src="/logo_alb.png"
//                 alt="technik"
//                 width={500}
//                 height={500}
//                 className="w-[50px]"
//               />
//               <h1 className="text-[20px] leading-[22.5px]">Vysokoškolský umelecký súbor</h1>
//             </div>
//             <div className="md:hidden">
//               <button
//                 className="rounded-md p-2 text-white outline-none focus:border focus:border-gray-400"
//                 onClick={() => setNavbar(!navbar)}
//               >
//                 {navbar ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-10 w-10"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-10 w-10"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="">
//           <div
//             className={`mt-8 h-[80vh] flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 lg:h-auto ${
//               navbar ? 'block' : 'hidden'
//             }`}
//           >
//             <ul className="justify-center space-y-2 text-[20px] md:flex md:space-x-6 md:space-y-0 lg:space-y-0 lg:text-[20px]">
//               <li>
//                 <Link href={'/'} className="cursor-pointer hover:text-[#e6c78c]">
//                   Domov
//                 </Link>
//               </li>

//               <div className="group relative  cursor-pointer">
//                 <div className="flex items-center justify-between lg:px-4">
//                   <a className="menu-hover hover:text-[#e6c78c]">O nás</a>
//                 </div>
//                 <div className="invisible absolute z-50 flex w-max flex-col  bg-black px-4 py-1 text-white shadow-xl group-hover:visible">
//                   {/* <a className="my-2 block py-1  md:mx-2">Product</a> */}
//                   <Link href={'/about'} className="cursor-pointer hover:text-[#e6c78c]">
//                     Kto sme
//                   </Link>
//                   <Link href={'/repertoire'} className="cursor-pointer hover:text-[#e6c78c]">
//                     Repertoár
//                   </Link>
//                   <Link href={'/actual'} className="cursor-pointer hover:text-[#e6c78c]">
//                     Príď medzi nás
//                   </Link>

//                   <Link href={'/personages'} className="cursor-pointer hover:text-[#e6c78c]">
//                     Osobnosti
//                   </Link>
//                   <Link href={'/concerts'} className="cursor-pointer hover:text-[#e6c78c]">
//                     Koncerty a podujatia
//                   </Link>

//                   <Link href={'/history'} className="cursor-pointer hover:text-[#e6c78c]">
//                     História
//                   </Link>
//                 </div>
//               </div>

//               <div className="group relative  cursor-pointer">
//                 <div className="flex items-center justify-between lg:px-4">
//                   <a className="menu-hover hover:text-[#e6c78c]">Galéria</a>
//                 </div>
//                 <div className="invisible absolute z-50 flex w-max flex-col  bg-black px-4 py-1 text-white shadow-xl group-hover:visible">
//                   <Link href={'/gallery'} className="cursor-pointer hover:text-[#e6c78c]">
//                     Foto
//                   </Link>
//                   <Link href={'/audio'} className="cursor-pointer hover:text-[#e6c78c]">
//                     Audio
//                   </Link>
//                   <Link href={'/video'} className="cursor-pointer hover:text-[#e6c78c]">
//                     Video
//                   </Link>
//                 </div>
//               </div>

//               <li>
//                 <Link href={'/contact'} className="cursor-pointer hover:text-[#e6c78c]">
//                   Kontakt
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

'use client'
import React, { useState } from 'react'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false)
  const router = useRouter()

  // Function to close everything when a link is clicked
  const handleLinkClick = () => {
    setNavbar(false)
    setAboutDropdownOpen(false)
    setGalleryDropdownOpen(false)
  }

  // Toggle dropdown states for mobile
  const toggleAboutDropdown = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setAboutDropdownOpen(!aboutDropdownOpen)
    // Close the other dropdown when opening this one
    if (!aboutDropdownOpen) setGalleryDropdownOpen(false)
  }

  const toggleGalleryDropdown = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setGalleryDropdownOpen(!galleryDropdownOpen)
    // Close the other dropdown when opening this one
    if (!galleryDropdownOpen) setAboutDropdownOpen(false)
  }

  return (
    <nav className="w-full bg-tra nav-font font-bold text-white">
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
        <div>
          <div
            className={`mt-8 flex-1 lg:justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? 'block h-[80vh] overflow-y-auto' : 'hidden'
            }`}
          >
            <ul className="space-y-2 text-[20px] md:flex md:space-x-6 md:space-y-0 lg:space-y-0 lg:text-[20px]">
              <li className="py-2 md:py-0">
                <Link
                  href={'/'}
                  className="cursor-pointer hover:text-[#e6c78c]"
                  onClick={handleLinkClick}
                >
                  Domov
                </Link>
              </li>

              {/* O nás dropdown - desktop uses hover, mobile uses click */}
              <li className="group relative cursor-pointer py-2 md:py-0">
                <div className="flex items-center justify-between">
                  <a
                    className="menu-hover hover:text-[#e6c78c] flex items-center justify-between w-full"
                    onClick={toggleAboutDropdown}
                  >
                    O nás
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ml-1 transform transition-transform duration-200 md:hidden ${
                        aboutDropdownOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </a>
                </div>

                {/* Desktop dropdown (hover-based) */}
                <div className="invisible absolute z-50 w-max flex-col bg-black px-4 py-1 text-white shadow-xl group-hover:visible md:flex hidden">
                  <Link
                    href={'/about'}
                    className="cursor-pointer hover:text-[#e6c78c] py-2"
                    onClick={handleLinkClick}
                  >
                    Kto sme
                  </Link>
                  <Link
                    href={'/repertoire'}
                    className="cursor-pointer hover:text-[#e6c78c] py-2"
                    onClick={handleLinkClick}
                  >
                    Repertoár
                  </Link>
                  <Link
                    href={'/actual'}
                    className="cursor-pointer hover:text-[#e6c78c] py-2"
                    onClick={handleLinkClick}
                  >
                    Príď medzi nás
                  </Link>
                  <Link
                    href={'/personages'}
                    className="cursor-pointer hover:text-[#e6c78c] py-2"
                    onClick={handleLinkClick}
                  >
                    Osobnosti
                  </Link>
                  <Link
                    href={'/concerts'}
                    className="cursor-pointer hover:text-[#e6c78c] py-2"
                    onClick={handleLinkClick}
                  >
                    Koncerty a podujatia
                  </Link>
                  <Link
                    href={'/history'}
                    className="cursor-pointer hover:text-[#e6c78c] py-2"
                    onClick={handleLinkClick}
                  >
                    História
                  </Link>
                </div>

                {/* Mobile dropdown (click-based) */}
                <div
                  className={`${
                    aboutDropdownOpen ? 'block' : 'hidden'
                  } md:hidden pl-4 mt-2 border-l-2 border-[#e6c78c]/30`}
                >
                  <Link
                    href={'/about'}
                    className="block cursor-pointer hover:text-[#e6c78c] py-2"
                    onClick={handleLinkClick}
                  >
                    Kto sme
                  </Link>
                  <Link
                    href={'/repertoire'}
                    className="block cursor-pointer hover:text-[#e6c78c] py-2"
                    onClick={handleLinkClick}
                  >
                    Repertoár
                  </Link>
                  <Link
                    href={'/actual'}
                    className="block cursor-pointer hover:text-[#e6c78c] py-2"
                    onClick={handleLinkClick}
                  >
                    Príď medzi nás
                  </Link>
                  <Link
                    href={'/personages'}
                    className="block cursor-pointer hover:text-[#e6c78c] py-2"
                    onClick={handleLinkClick}
                  >
                    Osobnosti
                  </Link>
                  <Link
                    href={'/concerts'}
                    className="block cursor-pointer hover:text-[#e6c78c] py-2"
                    onClick={handleLinkClick}
                  >
                    Koncerty a podujatia
                  </Link>
                  <Link
                    href={'/history'}
                    className="block cursor-pointer hover:text-[#e6c78c] py-2"
                    onClick={handleLinkClick}
                  >
                    História
                  </Link>
                </div>
              </li>

              {/* Galéria dropdown - desktop uses hover, mobile uses click */}
              <li className="group relative cursor-pointer py-2 md:py-0">
                <div className="flex items-center justify-between">
                  <a
                    className="menu-hover hover:text-[#e6c78c] flex items-center justify-between w-full"
                    onClick={toggleGalleryDropdown}
                  >
                    Galéria
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ml-1 transform transition-transform duration-200 md:hidden ${
                        galleryDropdownOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </a>
                </div>

                {/* Desktop dropdown (hover-based) */}
                <div className="invisible absolute z-50 w-max flex-col bg-black px-4 py-1 text-white shadow-xl group-hover:visible md:flex hidden">
                  <Link
                    href={'/gallery'}
                    className="cursor-pointer hover:text-[#e6c78c] py-2"
                    onClick={handleLinkClick}
                  >
                    Foto
                  </Link>
                  <Link
                    href={'/audio'}
                    className="cursor-pointer hover:text-[#e6c78c] py-2"
                    onClick={handleLinkClick}
                  >
                    Audio
                  </Link>
                  <Link
                    href={'/video'}
                    className="cursor-pointer hover:text-[#e6c78c] py-2"
                    onClick={handleLinkClick}
                  >
                    Video
                  </Link>
                </div>

                {/* Mobile dropdown (click-based) */}
                <div
                  className={`${
                    galleryDropdownOpen ? 'block' : 'hidden'
                  } md:hidden pl-4 mt-2 border-l-2 border-[#e6c78c]/30`}
                >
                  <Link
                    href={'/gallery'}
                    className="block cursor-pointer hover:text-[#e6c78c] py-2"
                    onClick={handleLinkClick}
                  >
                    Foto
                  </Link>
                  <Link
                    href={'/audio'}
                    className="block cursor-pointer hover:text-[#e6c78c] py-2"
                    onClick={handleLinkClick}
                  >
                    Audio
                  </Link>
                  <Link
                    href={'/video'}
                    className="block cursor-pointer hover:text-[#e6c78c] py-2"
                    onClick={handleLinkClick}
                  >
                    Video
                  </Link>
                </div>
              </li>

              <li className="py-2 md:py-0">
                <Link
                  href={'/contact'}
                  className="cursor-pointer hover:text-[#e6c78c]"
                  onClick={handleLinkClick}
                >
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
