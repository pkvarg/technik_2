'use client'
import Navbar from './Navbar'
import ConcourseShort from './shorts/ConcourseShort'
import NewEvents from './shorts/NewEvents'

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

      {/* Embed from Facebook ? */}

      {/* <div className="bg-black rounded-lg overflow-hidden flex justify-center">
        <div className="aspect-video">
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Forchester.technik%2Fposts%2Fpfbid025E4zJZEA3fswEkAdBtczcsnyDcex3by2Cty8M1CVrQnqxE8Ra1TgfdLEEpM3ZG58l&show_text=true&width=500"
            width="500"
            height="787"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div> */}

      <NewEvents />
      {/* <MailingList /> */}

      <ConcourseShort />
    </main>
  )
}
