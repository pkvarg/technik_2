'use client'
import React from 'react'
import Navbar from '@/app/components/Navbar'
import ConcourseFull from '@/app/components/actual/ConcourseFull'

const Actual = () => {
  return (
    <main className="footer-gradient">
      <Navbar />

      <ConcourseFull />
      <div className="">
        <div className="bg-black h-[1px]"></div>
      </div>
    </main>
  )
}

export default Actual
