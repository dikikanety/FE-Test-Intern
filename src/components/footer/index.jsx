import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import CircleSm from '@/assets/footer/circle-small.svg?react';
import CircleMd from '@/assets/footer/circle-medium.svg?react';
import CircleLg from '@/assets/footer/circle-large.svg?react';
import Backdrop from '@/assets/footer/backdrop.png';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden w-full h-full bg-black text-center flex justify-center flex-col items-center px-5 sm:px-0 pb-16 pt-28 gap-20">
      <div className="flex-col justify-start items-center gap-4 inline-flex pt-20 z-10">
        <h3 className="text-center text-white text-3xl font-normal font-ubuntu-mono">
          Apply for your visa today, quick and easy
        </h3>
        <p className="opacity-50 text-center text-white text-base font-normal font-plus-jakarta-sans mb-5">
          It’s all online to create it! so no worries. Its quick and easy.
        </p>
        <div className="flex gap-2 items-center">
          <a
            href="#"
            className="flex gap-2 items-center rounded-full bg-white lg:w-47 px-3.5 py-2.5 text-sm font-bold font-plus-jakarta-sans text-black hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <MagnifyingGlassIcon className="w-6 h-6 p-0.5 justify-center items-center" />{' '}
            FIND SERVICES
          </a>
          <a
            href="#"
            className="flex gap-2 items-center rounded-full bg-sky-900 px-3.5 py-2.5 text-sm font-semibold font-plus-jakarta-sans text-white hover:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            CONSULT NOW
          </a>
        </div>
      </div>
      <div className="z-10">
        <p className="text-white text-sm font-normal font-plus-jakarta-sans">
          Copyright © Visa Indonesia 2023
        </p>
        <p className="opacity-30">
          <span className="text-white text-sm font-normal font-plus-jakarta-sans">
            Design & Developed by{' '}
          </span>
          <span className="text-white text-sm font-normal font-plus-jakarta-sans underline">
            Diki Budi Kanety
          </span>
        </p>
      </div>

      <div
        className="absolute bg-no-repeat bg-bottom bottom-0 left-0 top-0 right-0"
        style={{ backgroundImage: `url(${Backdrop})` }}
      />
      <CircleLg className="absolute bottom-0 translate-y-[0%]" />
      <CircleMd className="absolute bottom-0 translate-y-[0%]" />
      <CircleSm className="absolute bottom-0 translate-y-[0%]" />
    </footer>
  );
}
