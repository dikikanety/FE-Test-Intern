import IphoneImg from '@/assets/findService/iphone.png';
import BackgroundLine from '@/assets/findService/background.svg';
import Lup from '@/assets/findService/icon-input.svg?react';

export default function FindService() {
  return (
    <section aria-labelledby="finding service" className="bg-white">
      <div className="relative bg-zinc-100 mx-4 p-5 sm:p-0 rounded-3xl">
        <div
          className="bg-cover bg-no-repeat bg-center absolute top-0 right-0 bottom-0 left-0"
          style={{ backgroundImage: `url(${BackgroundLine})` }}
        />
        <div className="mx-auto max-w-7xl flex justify-between flex-col md:flex-row z-10">
          <div className="pl-5 mx-auto max-w-xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left z-10">
            <h2 className="text-black text-3xl font-normal font-ubuntu-mono tracking-tight sm:text-5xl">
              Enjoy your vacation and don&apos;t worry about your documents
            </h2>
            <p className="mt-6 max-w-md text-base font-light font-plus-jakarta-sans leading-normal">
              Manage your visa documents easily with us. quickly, safely, and
              reliably. All that just with your smartphone.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="flex gap-2 items-center rounded-full bg-black px-3.5 py-2.5 text-sm font-semibold font-plus-jakarta-sans text-white hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Lup /> FIND SERVICES YOU NEED
              </a>
            </div>
          </div>
          <img src={IphoneImg} alt="App screenshot" className="z-10" />
        </div>
      </div>
    </section>
  );
}
