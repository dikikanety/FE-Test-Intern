import Navigation from '@/components/navigation';
import foreground from '@/assets/header/foreground.png';
import background from '@/assets/header/background.png';
import CircleSm from '@/assets/header/oval-small.svg?react';
import CircleMd from '@/assets/header/oval-medium.svg?react';
import CircleLg from '@/assets/header/oval-large.svg?react';

export default function Header() {
  return (
    <section
      aria-labelledby="hero header"
      className="bg-white relative overflow-hidden"
    >
      <Navigation />
      <div className="relative isolate z-10">
        <div className="overflow-hidden py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="pt-14 flex flex-col justify-center lg:max-w-lg">
                <h1 className="self-stretch font-ubuntu-mono text-5xl font-normal tracking-tight text-black">
                  Visa application made simple, apply now!
                </h1>
                <p className="font-light font-plus-jakarta-sans leading-normal mt-6 text-base text-gray-600">
                  Say goodbye to cumbersome paperwork and endless queues, and
                  say hello to a hassle-free travel experience
                </p>
                <div className="mt-7 flex items-center gap-x-2">
                  <a
                    href="#"
                    className="px-5 py-2.5 bg-black hover:opacity-70 rounded-lg border border-black justify-center items-center gap-2.5 flex  text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-600"
                  >
                    GET VISA NOW
                  </a>
                  <span className="text-black text-base font-light font-plus-jakarta-sans leading-normal">
                    or
                  </span>
                  <a
                    href="#"
                    className="px-5 py-2.5 rounded-lg border border-black hover:opacity-70 justify-center items-center gap-2.5 flex text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700"
                  >
                    EXTEND MY VISA
                  </a>
                </div>
              </div>
              <div className="relative flex justify-center items-center w-full h-full">
                <div
                  className="bg-contain bg-no-repeat bg-center absolute top-0 right-0 bottom-0 left-0"
                  style={{ backgroundImage: `url(${background})` }}
                />
                <img
                  src={foreground}
                  alt="foreground"
                  className="relative z-10 max-w-xs md:max-w-sm lg:max-w-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CircleLg className="absolute right-0 top-1/2 transform  -translate-y-1/2" />
      <CircleMd className="absolute right-0 top-1/2 transform -translate-y-1/2" />
      <CircleSm className="absolute right-0 top-1/2 transform -translate-y-1/2" />
    </section>
  );
}
