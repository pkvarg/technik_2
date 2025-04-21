'use client'
import Navbar from '@/app/components/Navbar'
import React from 'react'
import { motion } from 'framer-motion'

const Video = () => {
  // List of YouTube videos
  const videos = [
    {
      id: 'LVAInbqJ0Ok',
      title: 'Komorný orchester Technik - Performance 1',
    },
    {
      id: 'zay0vvbT8mM',
      title: 'Komorný orchester Technik - Performance 2',
    },
  ]

  return (
    <main className="bg-black min-h-screen text-[#e6c78c]">
      <Navbar />

      <div className="w-full flex justify-center text-center">
        <motion.div
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mt-8 mb-12 text-4xl md:text-5xl font-serif relative inline-block pb-2">
            Video
            <span className="absolute bottom-0 left-0 w-full h-1 bg-current"></span>
          </h1>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-24 space-y-12">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            className="bg-gradient-to-br from-[#0a1a4f] via-[#2c5cb3] to-[#95a7e0] p-1 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="bg-black rounded-lg overflow-hidden">
              {/* <h3 className="text-xl font-medium p-4">{video.title}</h3> */}
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}

export default Video
