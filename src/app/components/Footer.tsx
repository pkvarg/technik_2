import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#02144B] py-8 text-white">
      <div className="mx-4 flex flex-col items-start justify-between lg:mx-[20%] lg:flex-row 2xl:mx-[25%]">
        <div>
          <Image
            src="/logo_alb.png"
            alt="technik"
            width={500}
            height={500}
            className="-ml-3 w-[80px] pb-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col lg:flex-row">
            <p className="mr-[5px]">
              Patríme pod{' '}
              <a
                href="http://www.technik.stuba.sk/index.html"
                target="_blank"
                className="cursor-pointer underline"
              >
                Vysokoškolský umelecký súbor Technik{' '}
              </a>
            </p>
            <p>
              {' '}
              a{' '}
              <a
                href="https://www.stuba.sk/"
                target="_blank"
                className="cursor-pointer underline"
              >
                STU Bratislava
              </a>
            </p>
          </div>

          <p className="mt-0">
            {' '}
            &copy; {Date().substring(11, 15)} Komorný orchester Technik
          </p>
          {/* <p>Sledujte nás</p> */}
          <div className="flex flex-row items-center gap-4">
            <a
              href="https://www.facebook.com/orchester.technik"
              target="_blank"
            >
              <Image
                src={'/facebook.png'}
                alt="facebook"
                width={100}
                height={100}
                className="h-[25px] w-[30.5px]"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCN5EhFknLnEjzKUPCZfg7FA"
              target="_blank"
            >
              <Image
                src={'/youtube.png'}
                alt="youtube"
                width={100}
                height={100}
                className="w-[35px]"
              />
            </a>
          </div>
        </div>

        <div className="mt-4 lg:mt-0">
          <div
            className="flex flex-col text-[20px]
           font-bold"
          >
            <Link
              href={'/partners'}
              className="cursor-pointer hover:text-yellow-500"
            >
              Partneri
            </Link>
            <Link
              href={'/contact'}
              className="cursor-pointer hover:text-yellow-500"
            >
              Kontakt
            </Link>
            <Link
              href={'/technik'}
              className="cursor-pointer hover:text-yellow-500"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
