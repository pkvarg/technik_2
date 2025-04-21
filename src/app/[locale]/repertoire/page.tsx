import React from 'react'
import Navbar from '@/app/components/Navbar'
import RepertoireList from '@/app/components/RepertoireList'

const Repertoire = () => {
  const compositions: {} = {
    'Anderson Leroy': ['Jazz Pizzicato', 'Plink, Plank, Plunk *'],
    'Bach Johann Sebastian': [
      'Agnus Dei (Omša h mol BWV 232)',
      'Air z Orchestrálnej suity č. 3, D dur *',
      'Koncert a mol pre husle a sláčikový orchester, BWV 1041 *',
      'Koncert d mol pre 2 huslí a sláčikový orchester, BWV 1043',
      'Koncert pre husle, hoboj a sláčiky d mol, BWV 1060',
      'Ouvertura g mol, BWV 1070 *',
      'Ouvertura (Suita) č. 2 h mol, BWV 1067',
    ],
    'Bartók Béla': ['Rumunské ľudové tance'],
    'Benda Franz': ['Symfonia C dur'],
    'Breiner Peter': ['Beatles Concerto grosso I. (v štýle G. F. Händela) *'],
    'Britten Benjamin': ['Simple Symphony'],
    'Bruch Max': ['Serenáda na švédske ľudové melódie, op. posth. *'],
    'Corelli Arcangelo': ['Concerto grosso g mol „Fatto per la notte di Natale“, op. 6 č. 8'],
    'Čajkovskij Piotr Iľjič': ['Serenáda pre sláčikový orchester C dur, op. 48'],
    'Dvořák Antonín': ['Serenáda E dur op. 22'],
    'Elgar Edward': ['Serenáda e mol *'],
    'Fauré Gabriel': ['Elégia pre violončelo a sláčikový orchester op. 24 (arr. Mirko Krajči)'],
    'Giacomelli Geminiano': ['Sposa, non mi conosci (Merope)'],
    'Gluck Christoph Willibald': ['Che farò senza Euridice (Orfeo ed Euridice)'],
    'Grieg Edvard Hagerup': ['Dve severské piesne, op. 63 *', 'Z Holbergových čias, suita op. 40'],
    'Haydn Joseph': ['Missa Sancti Nicolai, Hob.XXII:6'],
    'Händel Georg Friedrich': [
      'Concerto grosso G dur, op. 6 č. 1, HWV 319 *',
      'Concerto grosso F Dur, Op. 6 č. 2, HWV 320',
      'Concerto grosso a mol, op. 6 č. 4, HWV 322',
      'Concerto grosso g mol, op. 6 č. 6, HWV 324',
      "Lascia ch'io pianga (Rinaldo, HWV 7b)",
      'Let Thy Hand pre miešaný zbor a orchester',
    ],
    'Holst Gustav': ["St. Paul's Suite pre sláčikový orchester"],
    'Janáček Leoš': ['Suita per orchestra d´archi'],
    'Jašurdová Mária': ['Išli hudci horou (arr. Mirko Krajči) *'],
    'Krajči Mirko': [
      'Arcott',
      'Cesta života pre miešaný zbor a sláčikový orchester',
      'Concertino pre husle, violončelo a sláčikový orchester „Guerra e pace“',
      'Dvojkoncert pre husle, violončelo a komorný orchester',
      'Fragmenty',
      'Komorná symfónia "Azoth"',
      'Pastierske Vianoce pre miešaný zbor a komorný orchester',
      'Pieta',
      'Tangissimo',
      'Waltzissimo *', // Added from the new list
    ],
    'Mahler Gustav': ['Adagietto zo Symfónie č. 5'],
    'Marcello Alessandro': ['Koncert pre hoboj a orchester d mol, S.Z799 *'],
    'Mascagni Pietro': ['Intermezzo z Cavalleria Rusticana *'],
    'Mendelssohn-Bartholdy Felix': [
      'Andante cantabile z 5. symfónie (arr. Mirko Krajči)',
      'Sinfonia in D, 1. časť',
    ],
    'Mozart Wolfgang Amadeus': [
      'Ave verum corpus *',
      'Divertimento D dur KV. 136',
      'Divertimento B dur KV. 137 *',
      'Koncert pre klavír a orchester A dur, KV 414',
      'Malá nočná hudba',
      'Missa brevis d mol, KV 65',
    ],
    'Pergolesi Giovanni Battista': ['Concertino in Sol *'],
    'Piazolla Astor': ['Oblivion (arr. Mirko Krajči)'],
    'Purcell Henry': ['Abdelazer, suita', 'When I Am Laid In Earth (Dido a Aeneas)'],
    'Respighi Ottorino': ['Antické tance a árie, 3. suita'],
    'Sammartini Giovanni Battista': ['Sinfonia A dur'],
    'Schubert Franz': ['Rondo A dur, D. 438'],
    'Sibelius Jean': ['Andante festivo, op. 117a *', 'Impromptu, op. 5 *'],
    'Stamitz Carl': ['Orchestrálny kvartet C dur'],
    'Strauss Johann Sr.&Jr.': ['Pizzicato polka'],
    'Suchoň Eugen': ['Preletel sokol – suita', 'Sonatína'],
    'Suk Josef': ['Meditácia na staročeský chorál „Sv. Václave“'],
    'Tartini Giuseppe': ['Air'],
    'Telemann Georg Philipp': ['Suita a mol pre flautu, sláčiky a basso continuo, TWV 55:a2'],
    'Vivaldi Antonio': [
      '4 ročné obdobia, op. 8',
      'Beatus vir, RV 597',
      'Gloria D dur, RV 589 *',
      'Koncert pre dvoje huslí a mol, op. 3 č. 8, RV 522',
      'Koncert pre dvoje huslí, violončelo a sláčiky d mol, op. 3 č. 11, RV 565',
      'Koncert pre štvoro huslí a sláčikový orchester op.3 č.4 e mol, RV 550',
      'Koncert pre violončelo a orchester G dur, RV 413',
      'Sinfonia č. 2 G dur, RV 146 *',
      'Vedrò con mio diletto (Giustino, RV 717)',
    ],
    'Zeljenka Ilja': ['Musica slovaca'],
  }
  return (
    <div className="bg-black text-white">
      <Navbar />
      <h1 className="mt-4 text-center text-[35px] text-[#e6c78c]">
        Repertoár komorného orchestra Technik
      </h1>
      <div
        className="flex flex-col items-center justify-center gap-16 px-4
      pb-16 pt-8 lg:gap-[15%] lg:px-[20%] xl:px-[20%] 2xl:gap-[20%]"
      >
        <div className="py-8">
          <RepertoireList compositions={compositions} />
          <p className="py-12 text-right">* = aktuálny repertoár</p>
        </div>
      </div>
    </div>
  )
}

export default Repertoire
