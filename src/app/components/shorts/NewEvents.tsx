// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import { MdDownload } from 'react-icons/md'

// const NewEvents = () => {
//   const downloadFile = (fileName: string) => {
//     //const fileName = 'ebook.pdf';
//     fetch(`${fileName}`).then((response) => {
//       response.blob().then((blob) => {
//         // Creating new object of PDF file
//         const fileURL = window.URL.createObjectURL(blob)
//         // Setting various property values
//         let alink = document.createElement('a')
//         alink.href = fileURL
//         alink.download = `${fileName}`
//         alink.click()
//       })
//     })
//   }

//   // will be dynamic forEach event from DB
//   return (
//     <div className=" footer-gradient px-4 py-24 text-[#ffffff] lg:px-[20%]">
//       <h1 className="text-center text-[35px] title-color">
//         Pozvánka na vianočný koncert v utorok 19.12.2023
//       </h1>
//       <div className="my-8 flex flex-col items-center justify-center gap-8 lg:flex-row">
//         <div className="w-[100%] text-[25px] leading-[32.5px] lg:w-[55%]">
//           <p className="text-justify">
//             Vážení priaznivci, pozývame vás a vašich známych na
//             <span className="mx-2 title-color">
//               Vianočný koncert Komorného orchestra Technik v utorok 19. decemba 2023 o 19:00
//             </span>
//             v Koncertnej sieni Dvorana VŠMU, Zochova 1, Bratislava.
//           </p>
//           <p className="mt-8">
//             <span className="mr-2 title-color">TIP:</span>
//             Pridajte sa na
//             <a
//               href="https://www.facebook.com/events/341328608521070/"
//               target="_blank"
//               className="mx-2 title-color"
//             >
//               facebookové podujatie ku koncertu
//             </a>
//             a pozvite na ňu aj priateľov.
//           </p>
//           <p className="mt-4 text-[20px]">Vstupné je dobrovoľné a tešíme sa na vás!</p>
//           <div
//             onClick={() => downloadFile('20231219event.jpg')}
//             className="ml-auto mt-8 flex cursor-pointer flex-row items-center gap-2 text-[20px] title-color"
//           >
//             <p>Plagát PDF</p>
//             <MdDownload className="text-[25px]" />
//           </div>
//         </div>
//         <div className="w-[100%] lg:w-[35%] 2xl:w-[27.5%]">
//           <Image
//             src={'/20231219event.jpg'}
//             alt="orchester technik"
//             width={500}
//             height={500}
//             className="ml-auto w-[100%]"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NewEvents
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { MdDownload, MdEvent, MdLocationOn, MdAccessTime } from 'react-icons/md'

const NewEvents = () => {
  const [isHovered, setIsHovered] = useState(false)

  const downloadFile = (fileName: string) => {
    fetch(`${fileName}`).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        const alink = document.createElement('a')
        alink.href = fileURL
        alink.download = `${fileName}`
        alink.click()
      })
    })
  }

  return (
    <div className="bg-gradient-to-r from-[#3a2213] via-[#6e4122] to-[#a05a2c] px-6 py-16 text-white lg:px-[15%] shadow-xl">
      {/* Event Header with decorative elements */}
      <div className="relative">
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-8 text-amber-200 tracking-wide">
          Pozvánka na vianočný koncert
          <span className="block mt-2 text-white text-xl md:text-2xl font-normal">
            v utorok 19.12.2023
          </span>
        </h1>
      </div>

      {/* Event Details with enhanced layout */}
      <div className="my-4 flex flex-col items-center justify-between gap-10 lg:flex-row">
        <div className="w-full lg:w-[55%] text-lg leading-relaxed space-y-6">
          {/* Main event description with improved readability */}
          <p className="text-justify md:text-left">
            Vážení priaznivci, pozývame vás a vašich známych na
            <span className="mx-2 font-semibold text-amber-200">
              Vianočný koncert Komorného orchestra Technik v utorok 19. decemba 2023 o 19:00
            </span>
            v Koncertnej sieni Dvorana VŠMU, Zochova 1, Bratislava.
          </p>

          {/* Event details with icons */}
          <div className="bg-white/10 rounded-lg p-5 mt-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <MdEvent className="text-2xl text-amber-200" />
              <span className="font-medium">19. december 2023</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <MdAccessTime className="text-2xl text-amber-200" />
              <span className="font-medium">19:00</span>
            </div>
            <div className="flex items-center gap-3">
              <MdLocationOn className="text-[40px] lg:text-2xl text-amber-200" />
              <span className="font-medium text-[15px] lg:text-[18.5px]">
                Koncertná sieň Dvorana VŠMU, Zochova 1, Bratislava
              </span>
            </div>
          </div>

          {/* Social tip with enhanced styling */}
          <div className="bg-amber-900/40 p-5 rounded-lg ">
            <p>
              <span className="font-bold text-amber-200">TIP:</span>
              <span className="ml-2">Pridajte sa na</span>
              <a
                href="https://www.facebook.com/events/341328608521070/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-amber-200 underline hover:text-amber-100 transition-colors"
              >
                facebookové podujatie ku koncertu
              </a>
              <span>a pozvite na ňu aj priateľov.</span>
            </p>
          </div>

          {/* Entry fee notice */}
          <p className="text-xl font-medium text-center lg:text-left">
            Vstupné je dobrovoľné a tešíme sa na vás!
          </p>

          {/* Download button with animation */}
          <button
            onClick={() => downloadFile('20231219event.jpg')}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex items-center gap-2 button-color hover:bg-amber-600 transition-all duration-300 px-4 py-2 rounded-md ml-auto"
          >
            <p className="font-medium">Stiahnuť plagát</p>
            <MdDownload className={`text-xl ${isHovered ? 'animate-bounce' : ''}`} />
          </button>
        </div>

        {/* Event poster with enhanced styling */}
        <div className="w-full lg:w-[40%] 2xl:w-[35%]">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-lg blur opacity-40 group-hover:opacity-70 transition duration-300"></div>
            <div className="relative">
              <Image
                src={'/20231219event.jpg'}
                alt="Vianočný koncert Komorného orchestra Technik"
                width={500}
                height={700}
                className="w-full rounded-lg shadow-lg object-cover transform transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewEvents
