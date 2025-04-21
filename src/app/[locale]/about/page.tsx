'use client'
import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Navbar from '@/app/components/Navbar'

const KtoSmeComponent = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start('visible')
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <motion.div
        className="container mx-auto px-4 py-16"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h1
          className="mt-4 text-center text-4xl md:text-5xl font-serif text-[#e6c78c]"
          variants={itemVariants}
        >
          Kto sme
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-6 text-white">
              Slovo o súbore / Charakteristika hudobného kolektívu:
            </h2>
            <div className="space-y-4 text-[#e6c78c] text-justify text-lg">
              <p>
                Komorný orchester Technik je súčasťou Vysokoškolského umeleckého súboru TECHNIK,
                ktorý už viac než 70 rokov pôsobí na pôde Slovenskej technickej univerzity.
                Sláčikový orchester je samostatnou zložkou súboru od roku 1965 a tradične ho tvoria
                nadšení amatérski hudobníci všetkých vekových kategórií od študentov stredných a
                vysokých škôl nielen umeleckého zamerania, ich absolventov aj učiteľov, ľudí
                pracujúcich v najrôznejších profesiách až po seniorov.
              </p>
              <p>
                Základným spojivkom je láska k hudbe a záujem o spoločne strávený čas pri jej
                spoznávaní a interpretácii. V súčasnosti má orchester približne 20 členov v
                nástrojových skupinách husle, viola, violončelo a kontrabas, umeleckým vedúcim a
                dirigentom je Mirko Krajči, hudobným pedagógom a koncertným majstrom je František
                Török. V sezóne 2024/2025 je hosťujúcim dirigentom Ken-Wassim Ubukata.
              </p>
              <p>
                V repertoári Komorného orchestra Technik sú zastúpené diela rôznych štýlových období
                a trvalé miesto v ňom má tvorba slovenských skladateľov vrátane prezentácie menej
                známych autorov, často v premiére. Orchester zároveň spolupracuje aj s nádejnými
                mladými talentmi – sólovými interpretmi, skladateľmi či dirigentmi.
              </p>
              <p>
                Koncertuje v Bratislave i ďalších miestach na Slovensku, príležitostne sa zúčastňuje
                aj na koncertoch a hudobných festivaloch v zahraničí. Za svoje umenie interpretácie
                získal niekoľko významných ocenení.
              </p>
              <p>
                Viac informácii o koncertoch, repertoári, histórii súboru a pôsobiacich osobnostiach
                nájdete na{' '}
                <a
                  href="http://www.technik.stuba.sk/orchester/"
                  className="text-blue-400 hover:underline"
                >
                  www.technik.stuba.sk/orchester/
                </a>{' '}
                a na{' '}
                <a
                  href="http://www.facebook.com/orchester.technik"
                  className="text-blue-400 hover:underline"
                >
                  www.facebook.com/orchester.technik
                </a>
                .
              </p>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="flex flex-col space-y-6">
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-xl"
              variants={imageVariants}
            >
              <img
                src="/arena.jpg"
                alt="Komorný orchester Technik"
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-semibold">Komorný orchester</h3>
                <p className="text-4xl font-bold">Technik</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default KtoSmeComponent
