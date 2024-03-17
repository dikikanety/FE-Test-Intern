import BlueIcon from '@/assets/cardVisa/icon-blue.svg?react';
import OrangeIcon from '@/assets/cardVisa/icon-oren.svg?react';
import PinkIcon from '@/assets/cardVisa/icon-pink.svg?react';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

const cards = [
  {
    title: 'B211A',
    description:
      'Experience a streamlined visa process with B211A, your gateway to hassle-free travel arrangements.',
    icon: <BlueIcon />,
  },
  {
    title: 'Visa on Arrival',
    description:
      'Simplify your entry experience with visa on arrival, ensuring a smooth start to your journey.',
    icon: <PinkIcon />,
  },
  {
    title: 'Extend Visa',
    description:
      'Extend your stay and make the most of your travel adventure with our convenient visa extension services.',
    icon: <OrangeIcon />,
  },
];

export default function OneStopVisa() {
  return (
    <section
      aria-labelledby="one stop visa"
      className="bg-gray-100 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-normal tracking-tight text-center text-gray-900 font-ubuntu-mono sm:text-4xl">
            One-stop Visa in Indonesia
          </h2>
          <p className="mt-6 opacity-50 text-center text-black text-base font-normal font-plus-jakarta-sans">
            We offers services that hassle-free and streamlined process for
            obtaining visas to enter and stay in Indonesia.
          </p>
        </div>
        <div className="flex justify-between gap-8 mt-16 flex-col md:flex-row">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="border-black border-8 max-w-sm rounded-lg overflow-hidden shadow-lg bg-neutral-900 text-white p-6"
            >
              <div className="mb-7 text-white text-xl font-bold font-plus-jakarta-sans">
                {card.icon}
              </div>
              <h2 className="font-bold text-xl mb-4">{card.title}</h2>
              <p className="mb-4 opacity-50 text-white text-base font-normal font-plus-jakarta-sans">
                {card.description}
              </p>
              <button className="text-base text-white font-bold py-2 px-0 rounded inline-flex items-center">
                Get now
                <ArrowUpRightIcon className="h-10 px-0.5 pt-1.5 pb-1 w-5 flex-col justify-center items-center inline-flex" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
