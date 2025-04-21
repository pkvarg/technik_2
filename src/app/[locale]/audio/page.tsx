'use client'
import Navbar from '@/app/components/Navbar'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const Audio = () => {
  // CD data with image paths
  const cdData = [
    {
      id: 'cd1',
      images: ['/cd_fragmenty_1.png', '/cd_fragmenty_2.png', '/cd_fragmenty_3.png'],
    },
    {
      id: 'cd2',
      images: ['/cd_2_1.png', '/cd_2_3.png', '/cd_2_2.png'],
    },
  ]

  // Flatten all images into a single array for the slideshow
  const allImages = cdData.flatMap((cd) => cd.images)

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
      transition: { duration: 0.3 },
    },
  }

  // Open slideshow with selected image
  const openSlideshow = (globalIndex: number): void => {
    setSelectedImageIndex(globalIndex)
  }

  // Close slideshow
  const closeSlideshow = (): void => {
    setSelectedImageIndex(null)
  }

  // Navigate through images
  const navigateSlideshow = (direction: 'prev' | 'next'): void => {
    if (selectedImageIndex === null) return

    if (direction === 'prev') {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? allImages.length - 1 : selectedImageIndex - 1,
      )
    } else {
      setSelectedImageIndex(
        selectedImageIndex === allImages.length - 1 ? 0 : selectedImageIndex + 1,
      )
    }
  }

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
            Audio
            <span className="absolute bottom-0 left-0 w-full h-1 bg-current"></span>
          </h1>
        </motion.div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto px-4 pb-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* CD Gallery */}
        <div className="space-y-16">
          {cdData.map((cd, cdIndex) => (
            <motion.div
              key={cd.id}
              className="bg-gradient-to-br from-[#0a1a4f] via-[#2c5cb3] to-[#95a7e0] p-1 rounded-lg"
              variants={itemVariants}
            >
              <div className="bg-black rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {cd.images.map((image, imageIndex) => {
                    // Calculate the global index for this image across all CDs
                    const globalIndex =
                      cdIndex === 0 ? imageIndex : cdData[0].images.length + imageIndex

                    return (
                      <motion.div
                        key={imageIndex}
                        className="bg-gradient-to-br from-[#0a1a4f] to-[#2c5cb3] p-0.5 rounded-lg overflow-hidden cursor-pointer"
                        variants={itemVariants}
                        whileHover="hover"
                        onClick={() => openSlideshow(globalIndex)}
                      >
                        <div className="relative aspect-square bg-black rounded-lg overflow-hidden">
                          <Image
                            src={image}
                            alt={`CD Image ${imageIndex + 1}`}
                            width={500}
                            height={500}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Slideshow Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-5xl max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              {/* Image */}
              <div className="relative aspect-auto flex justify-center items-center">
                <Image
                  src={allImages[selectedImageIndex]}
                  alt="CD Detail"
                  width={1000}
                  height={1000}
                  className="object-contain max-h-[80vh]"
                />
              </div>

              {/* Navigation buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <button
                  className="p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateSlideshow('prev')
                  }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 right-4">
                <button
                  className="p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateSlideshow('next')
                  }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Close button */}
              <button
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70"
                onClick={(e) => {
                  e.stopPropagation()
                  closeSlideshow()
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-full text-white">
                {selectedImageIndex + 1} / {allImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default Audio
