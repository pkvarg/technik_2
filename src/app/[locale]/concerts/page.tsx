import Navbar from '@/app/components/Navbar'
import React from 'react'

const Concerts = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <div className="mt-4 text-center text-4xl md:text-5xl font-serif text-[#e6c78c] h-screen">
        Koncerty a podujatia
      </div>
    </main>
  )
}

export default Concerts
