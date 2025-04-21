'use client'
import Navbar from '@/app/components/Navbar'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Gallery = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <div className="w-full flex justify-center mt-4 text-center text-4xl md:text-5xl font-serif text-[#e6c78c] h-screen">
        <motion.div
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mt-8 mb-12 text-4xl md:text-5xl font-serif relative inline-block pb-2">
            Foto
            <span className="absolute bottom-0 left-0 w-full h-1 bg-current"></span>
          </h1>
        </motion.div>
      </div>
      {/* <div className="mt-4 text-center text-4xl md:text-5xl font-serif text-[#e6c78c] h-screen">
        Foto
      </div> */}
    </main>
  )
}

export default Gallery
