'use client'
import Image from 'next/image'
import React from 'react'
import Navbar from '@/app/components/Navbar'
import { motion } from 'framer-motion'

const Personages = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  // Array of personages for consistent rendering
  const personages = [
    {
      name: 'Mirko Krajči',
      title: 'umelecký vedúci, dirigent',
      image: '/mKrajci.webp',
      background: 'bg-black',
      bio: [
        'Je laureátom medzinárodnej dirigentskej súťaže „Maestro Silva Pereira Prize", Porto (Portugalsko, 2002) a Medzinárodnej skladateľskej súťaže, Fulda (Nemecko, 1993).',
        'Štúdium na Konzervatóriu v Bratislave ukončil s titulom „Najlepší absolvent roka" a pokračoval v štúdiu na VŠMU v Bratislave (skladba, dirigovanie). V roku 1992 absolvoval dirigentskú stáž na Conservatoire National Supérieur v Paríži. Pôsobil ako zbormajster Detského a mládežníckeho speváckeho zboru Slovenského rozhlasu, neskôr ako dramaturg Symfonického orchestra Slovenského rozhlasu. V súčasnosti je hudobným režisérom Slovenského rozhlasu, od r. 2006 šéfrežisérom. Od r. 1996 je umeleckým vedúcim a dirigentom Komorného orchestra Technik.',
        'Ako dirigent spolupracuje s viacerými orchestrami. Dirigoval v rôznych krajinách, spolupracoval s mnohými významnými sólistami. Intenzívne sa venuje aj komponovaniu. Viaceré skladby vznikli na objednávky (BHS, SND, SOSR, ŠFK a i.). Okrem spomínaných medzinárodných súťaží je držiteľom početných prestížnych ocenení za svoju skladateľskú činnosť: Cena J. L. Bellu (1997), Cena SOZA (1997), Prémia J. Cikkera (2007). Zo skladateľských súťaží na Slovensku si odniesol celý rad a cien a prémií.',
      ],
      alignment: 'float-left',
      memorial: false,
    },
    {
      name: 'František Török',
      title: 'hudobný pedagóg',
      image: '/Torok00.jpg',
      //background: 'bg-black',
      background: 'bg-gradient-to-r from-[#3a2213] via-[#6e4122] to-[#a05a2c]',
      bio: [
        'Študoval na Štátnom konzervatóriu v Bratislave, u prof. Andrey Šestákovej, absolventky Konzervatória v Moskve, v majstrovskej triede svetoznámeho Leonida Kogana, neskôr na VŠMU v Bratislave u prof. Aladára Móžiho, primária Slovenského kvarteta.',
        'Je zakladajúcim členom Moyzesovho kvarteta, jedného z popredných telies komornej hudby na Slovensku, s ktorým sa od roku 1979 zúčastňoval medzinárodných interpretačných kurzov, spolupracoval s členmi významných svetových kvartet (Amadeus Quartet, Alban Berg Quartet a i.), uskutočnil viac ako tisíc koncertov v mnohých krajinách sveta, nahral viac ako 20 CD platní pre rôzne gramofónové firmy a realizoval početné rozhlasové nahrávky na Slovensku aj v zahraničí.',
        'Do roku 2006 bol umeleckým vedúcim komorného orchestra „Comorra" v Komárne, kde založil aj tradíciu majstrovských kurzov komornej hudby (od roku 1997). V rokoch 1997 až 2006 bol členom sláčikového tria Amadé v Salzburgu. Pedagogicky pôsobí na konzervatóriu v Bratislave, kde vyučuje hru na husliach a komornú hru. Od roku 2007 spolupracuje s Komorným orchestrom Technik ako hudobný pedagóg.',
      ],
      alignment: 'float-right',
      memorial: false,
    },
    {
      name: 'Martin Leginus',
      title: 'dirigent v období 1999 – 2007',
      image: '/mleginus.webp',
      //background: 'bg-gradient-to-r from-[#3a2213] via-[#6e4122] to-[#a05a2c]',
      bio: [
        'Študoval na Štátnom konzervatóriu v Bratislave (Z. Bílek) a na VŠMU v Bratislave (O. Lenárd, B. Juhaňáková, P. Feranec). V roku 2004 absolvoval majstrovské dirigentské kurzy pod vedením Kurta Mazura.',
        'Od r. 2006 pôsobí v Slovenskom národnom divadle. V rokoch 2013 až 2016 bol hudobným riaditeľom Štátnej opery v Prahe. V sezóne 2015/2016 bol hlavným hosťujúcim dirigentom Pražského komorného orchestra. V rokoch 2018 až 2022 bol stálym hosťujúcim dirigentom Štátneho komorného orchestra v Žiline. Dirigoval v mnohých koncertných sálach s významnými orchestrami a sólistami. Počas svojej kariéry uviedol celý rad svetových operných titulov. Od roku 2023 je riaditeľom Opery Slovenského národného divadla.',
      ],
      alignment: 'float-left',
      memorial: false,
    },
    {
      name: 'Prof. Ján Pragant',
      title: 'dirigent a umelecký vedúci v období 1986 – 1996',
      image: '/pragant.webp',
      background: 'bg-gradient-to-r from-[#3a2213] via-[#6e4122] to-[#a05a2c]',
      bio: [
        'Významná osobnosť slovenského hudobného života, orchestrálny hráč, koncertný majster a znalec orchestrálnej tvorby, pedagóg na Štátnom konzervatóriu v Bratislave. V Komornom orchestri Technik pôsobil ako umelecký vedúci a dirigent počas jednej dekády. Pod vedením prof. Jána Praganta (1912-2000) prezentoval Komorný orchester Technik svoje umenie na mnohých vystúpeniach doma i v zahraničí. Vďaka nemu úspešne obhajoval meno jedného z najlepších neprofesionálnych hudobných telies na Slovensku.',
        '25. mája 2000 nás prof. Pragant navždy opustil. Česť jeho pamiatke!',
      ],
      alignment: 'float-right',
      memorial: true,
    },
    {
      name: 'Jindřich Drmola',
      title: 'spoluzakladateľ a dirigent v období 1965 – 1986',
      image: '/drmola.jpg',
      background: 'bg-black',
      bio: [
        'Jeden z dvojice zakladateľov Komorného orchestra Technik. Vďaka jeho pôsobeniu sa orchester ako amatérske teleso postupne posúval na profesionálnu úroveň. Pôsobil v ňom ako dirigent od jeho založenia do roku 1986. Jindřich Drmola (1937-2022) následne pôsobil ako dirigent vo viacerých ďalších hudobných telesách a to až do vysokého veku.',
        'Dňa 24. marca 2022 nás pán Drmola navždy opustil. Česť jeho pamiatke!',
      ],
      alignment: 'float-left',
      memorial: true,
    },
    {
      name: 'Zdeno Somora',
      title: 'spoluzakladateľ a umelecký vedúci v období 1965-1990',
      image: '/somora.webp',
      background: 'bg-gradient-to-r from-[#3a2213] via-[#6e4122] to-[#a05a2c]',
      bio: [
        'Jeden z dvojice zakladateľov Komorného orchestra Technik. Spolu s Jindřichom Drmolom postupne posúvali orchester ako amatérske teleso na profesionálnu úroveň. Pôsobil v ňom ako umelecký vedúci od jeho založenia do roku 1990. Zdeno Somora (1936-2014) získal titul inžiniera na Strojníckej fakulte STU v Bratislave, potom pracoval v cukrovarníckom priemysle na Slovensku, od r. 1988 ako generálny riaditeľ v spoločnosti Cukor – cukrovinky v Bratislave. V roku 1990 založil Lions Klub Bratislava Istropolis a stal sa jeho Charter prezidentom. V úradnom roku 1993/94 bol Past District guvernérom LCI – Distriktu 122 Česká republika a Slovenská republika.',
        '10 marca 2014 nás pán Somora navždy opustil. Česť jeho pamiatke!',
      ],
      alignment: 'float-right',
      memorial: true,
    },
  ]

  return (
    <main className="bg-black text-[#e6c78c]">
      <Navbar />
      <motion.div
        className="min-h-screen"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="w-full flex justify-center text-center">
          <motion.div className="inline-block" variants={itemVariants}>
            <h1 className="mt-8 mb-12 text-4xl md:text-5xl font-serif relative inline-block pb-2">
              Osobnosti
              <span className="absolute bottom-0 left-0 w-full h-1 bg-current"></span>
            </h1>
          </motion.div>
        </div>

        {/* Personages sections */}
        {personages.map((person) => (
          <motion.section
            key={person.name}
            className={`${person.background} overflow-hidden`}
            variants={containerVariants}
          >
            <div className="max-w-5xl mx-auto py-16 px-8">
              {/* Section heading with name and title */}
              <motion.div className="mb-8 text-center" variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-serif leading-tight">{person.name}</h2>
                <h3 className="text-xl md:text-2xl font-serif mt-2">{person.title}</h3>
              </motion.div>

              {/* Biography with flowing text around image */}
              <motion.div className="relative  text-lg" variants={containerVariants}>
                <motion.div
                  className={`relative shadow-2xl rounded-md overflow-hidden ${
                    person.alignment
                  } w-64 mb-4 ${person.alignment === 'float-left' ? 'mr-8' : 'ml-8'}`}
                  variants={imageVariants}
                >
                  <Image
                    src={person.image}
                    height={350}
                    width={300}
                    alt={person.name}
                    className="w-full h-auto object-cover"
                  />
                  {person.memorial && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-center">
                      <span className="text-sm italic">In memoriam</span>
                    </div>
                  )}
                </motion.div>

                <div className="space-y-4 text-justify text-lg first-line-indent">
                  {person.bio.map((paragraph, i) => (
                    <motion.p key={i} variants={itemVariants} className="leading-relaxed">
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Clear the float */}
                <div className="clear-both"></div>
              </motion.div>
            </div>
          </motion.section>
        ))}

        <div className="">
          <div className="bg-black h-[1px]"></div>
        </div>
      </motion.div>
    </main>
  )
}

export default Personages
