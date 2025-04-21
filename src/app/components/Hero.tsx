'use client'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <main className="relative  bg-[#0d0e2f]">
      <div className="techhero h-screen lg:h-[100vh]">
        <Navbar />
        <h1 className="pl-8 pt-12 text-[35px] font-bold leading-[45px] text-white lg:pl-[8%] lg:pt-8 lg:text-[45px] lg:leading-[75px]">
          {' '}
          Komorný orchester
        </h1>
        <h2 className="-mt-2 pl-8 text-[95px] font-bold text-white lg:-mt-10  lg:pl-[10%] lg:text-[105px]">
          Technik
        </h2>
      </div>
      {/* <NewEvents />
  <MailingList /> */}

      {/* <ConcourseShort /> */}
    </main>
  )
}
