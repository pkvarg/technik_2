// import React from 'react';
// import Image from 'next/image';
// import EmailTel from './EmailTel';

// const ConcourseFull = () => {
//   return (
//     <div className="px-1 lg:px-[20%]">
//       <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
//         <div className="w-[80%] lg:w-[40%]">
//           <Image
//             src={'/concoursef.jpg'}
//             alt="technik"
//             width={900}
//             height={900}
//             className="w-[100%]"
//           />
//         </div>
//         <div className="w-[80%] lg:w-[60%]">
//           {' '}
//           <h1 className="text-center text-[25px] text-yellow-500">
//             Príď medzi nás
//           </h1>
//           <p className="mt-2 text-justify">
//             Nezáleží na tom, či hudbu ešte len študuješ, alebo to už bolo
//             dávnejšie. Ani vek nie je podstatný - náš priemer je síce okolo 25,
//             ale máme členov od čerstvých držiteľov občianskeho preukazu po
//             členov aj nad 50 rokov. Podstatná je chuť si zahrať.
//           </p>
//           <p className="mt-4 text-justify">
//             Niektorí z nás hudbu práve študujeme (konzervatórium alebo VŠMU) a
//             Technik je pre nás výbornou príležitosťou, ako získať ďalšie
//             skúsenosti. Mnohí z nás však máme len základné hudobné vzdelanie
//             (absolventi II. a III. cyklu základných umeleckých škôl), a Technik
//             nám vyhovuje ako hodnotný koníček, či už popri štúdiu alebo práci.
//           </p>
//           <p className="mt-4 text-justify">
//             Nácviky orchestra sú každý pondelok a stredu v čase od 19:30 – 22:00
//             hod. (okrem obdobia letných školských prázdnin) v priestoroch
//             Rektorátu Slovenskej technickej univerzity v Bratislave na Vazovovej
//             ul. č. 5 (vojdete do budovy, prejdete po vstupných schodoch
//             vestibulom okolo vrátnice, choďte doľava dlhšou chodbou, na jej
//             konci zabočte vľavo a po pravej strane vojdite do dverí UE 123.).
//           </p>
//         </div>
//       </div>
//       <div className="flex flex-col items-center gap-8 py-4 lg:flex-row">
//         <div className="w-[80%] lg:w-[40%]">
//           <p className="mt-4 text-justify">
//             Príležitostne okrem toho mávame počas sezóny aj víkendové
//             sústredenie. Vystúpenia máme asi raz za dva mesiace (väčšinou v
//             Bratislave) a jeden niekoľkodňový zájazd do zahraničia za sezónu. No
//             a náš aktuálny repertoár nájdeš na rovnomennej stránke.
//           </p>

//           <p className="mt-4 text-justify">
//             Konkurzy sa bežne konajú začiatkom sezóny v septembri, no radi
//             privítame každého nového záujemcu kedykoľvek aj počas roka. Stačí sa
//             informovať – telefonicky, alebo e-mailom, alebo priamo prísť na
//             skúšku.
//           </p>
//         </div>

//         <div className="flex w-[100%] items-center justify-center lg:w-[60%]">
//           <EmailTel />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConcourseFull;

'use client'
import React from 'react'
import Image from 'next/image'
import EmailTel from './EmailTel'
import { MdAccessTime, MdLocationOn, MdCalendarMonth, MdPeople } from 'react-icons/md'

const ConcourseFull = () => {
  return (
    <div className="footer-gradient px-6 py-16 text-white lg:px-[15%] rounded-lg shadow-xl">
      {/* Section Header with decorative elements */}
      <div className="relative mb-12">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-amber-200 tracking-wide">
          Príď medzi nás
        </h1>
      </div>

      {/* Main content section */}
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
        {/* Image with enhanced styling */}
        <div className="w-full lg:w-[40%]">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-lg blur opacity-40 group-hover:opacity-70 transition duration-300"></div>
            <div className="relative">
              <Image
                src={'/concoursef.jpg'}
                alt="Komorný orchester Technik"
                width={900}
                height={900}
                className="w-full rounded-lg shadow-lg object-cover transform transition-transform duration-300 group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-black/10 rounded-lg group-hover:bg-black/0 transition-all"></div>
            </div>
          </div>
        </div>

        {/* Text content with improved styling */}
        <div className="w-full lg:w-[60%]">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-justify md:text-left">
              Nezáleží na tom, či hudbu ešte len študuješ, alebo to už bolo dávnejšie. Ani vek nie
              je podstatný - náš priemer je síce okolo 25, ale máme členov od čerstvých držiteľov
              občianskeho preukazu po členov aj nad 50 rokov.{' '}
              <span className="font-semibold text-amber-200">Podstatná je chuť si zahrať.</span>
            </p>

            <p className="text-justify md:text-left">
              Niektorí z nás hudbu práve študujeme (konzervatórium alebo VŠMU) a Technik je pre nás
              výbornou príležitosťou, ako získať ďalšie skúsenosti. Mnohí z nás však máme len
              základné hudobné vzdelanie (absolventi II. a III. cyklu základných umeleckých škôl), a
              Technik nám vyhovuje ako hodnotný koníček, či už popri štúdiu alebo práci.
            </p>

            {/* Practice details with icons */}
            <div className="bg-white/10 rounded-lg p-5 backdrop-blur-sm text-[16px] lg:text-[18.5px]">
              <h3 className="text-xl font-semibold text-amber-200 mb-3">Nácviky orchestra</h3>
              <div className="flex items-start gap-3 mb-3">
                <MdCalendarMonth className="text-2xl text-amber-200 mt-1" />
                <span>Každý pondelok a stredu</span>
              </div>
              <div className="flex items-start gap-3 mb-3">
                <MdAccessTime className="ml-[2px] lg:ml-0 text-[20px] lg:text-[22.5px] text-amber-200 mt-1" />
                <span className="text-[15px] lg:text-[18.5px]">
                  19:30 – 22:00 hod. <br /> (okrem letných prázdnin)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MdLocationOn className="text-[105px] md:text-[35px] lg:text-[55px] xl:text-[25px] text-amber-200 mt-1" />
                <div className="text-[15px] lg:text-[18.5px]">
                  <p>Rektorát STU v Bratislave</p>
                  <p>Vazovova ul. č. 5, miestnosť UE 123</p>
                  <p className="text-sm text-amber-100/80 mt-2 italic">
                    (vojdeš do budovy, prejdeš po vstupných schodoch vestibulom okolo vrátnice, choď
                    doľava dlhšou chodbou, na jej konci zaboč vľavo a po pravej strane vojdi do
                    dverí UE 123.)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second row with additional info and contact */}
      <div className="flex flex-col items-start justify-between gap-10 mt-12 lg:flex-row">
        <div className="w-full lg:w-[40%]">
          <div className="bg-amber-900/40 p-5 rounded-lg text-lg leading-relaxed">
            <h3 className="text-xl font-semibold text-amber-200 mb-3 flex items-center">
              <MdPeople className="text-2xl mr-2" />
              Ďalšie aktivity
            </h3>
            <p className="mb-4">
              Príležitostne okrem toho mávame počas sezóny aj víkendové sústredenie. Vystúpenia máme
              asi raz za dva mesiace (väčšinou v Bratislave) a jeden niekoľkodňový zájazd do
              zahraničia za sezónu.
            </p>
            <p className="mb-4">Náš aktuálny repertoár nájdeš na rovnomennej stránke.</p>
            <p className="font-medium text-amber-100">
              Konkurzy sa bežne konajú začiatkom sezóny v septembri, no radi privítame každého
              nového záujemcu kedykoľvek aj počas roka. Stačí sa informovať – telefonicky, alebo
              e-mailom, alebo priamo prísť na skúšku.
            </p>
          </div>
        </div>

        {/* Contact information */}
        <div className="w-full lg:w-[60%] flex items-center justify-center">
          <div className="bg-white/10 p-6 rounded-lg w-full shadow-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-amber-200 mb-4 text-center">Kontaktuj nás</h3>
            <EmailTel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConcourseFull
