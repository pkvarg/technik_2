import React from 'react'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
Image

const ConcourseShort = () => {
  return (
    <div className="bg-[#050505] px-4 py-16 text-white lg:px-[20%]">
      <h1 className="text-center title-color text-3xl md:text-4xl font-bold">
        Hráš na sláčikovom nástroji?
      </h1>
      <div className="text-[20px]">
        <div className="my-8 flex flex-col items-center gap-16 lg:flex-row">
          <Image
            src={'/concourse01rm.png'}
            alt="instrument"
            width={500}
            height={500}
            className="w-[80%] lg:w-[35%] 2xl:w-[30%]"
          />

          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-center text-[35px] title-color">Príď medzi nás!</p>
            <p className="text-center title-color">
              Privítame posily: husle, viola, čelo, kontrabas.
            </p>

            <Link
              href={'/actual'}
              className="button-color hover:bg-amber-600 transition-all duration-300 px-4 py-2 my-6 rounded-md max-w-max "
            >
              <p className="cursor-pointer text-center text-white py-2`">Viac info</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConcourseShort
