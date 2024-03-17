import anginan from '@/assets/testimonial/anginan.png?react';
import chinmato from '@/assets/testimonial/chinmato.png?react';
import imanuel from '@/assets/testimonial/imanuel.png?react';
import mark from '@/assets/testimonial/mark.png?react';
import mateo from '@/assets/testimonial/mateo.png?react';

const customers = [
  {
    name: 'Mateo Goncalo',
    description:
      'Visa Indonesia Official made my recent trip a breeze. Getting my visa with less effort was a game-changer. Their team support was exceptional, ensuring I had all the necessary documents without any stress. Highly recommended!',
    icon: mateo,
  },
  {
    name: 'Imanuel Jyanda',
    description:
      'Im a frequent traveler, and Visa Indonesia Official has been a true lifesaver. Their efficient visa services have saved me time and energy. The secure payment with Xendit added an extra layer of confidence. I wont go anywhere else for my visa needs.',
    icon: imanuel,
  },
  {
    name: 'Mark Hopus',
    description:
      'The Get Document in One Click feature from Visa Indonesia Official is a game-changer! Its the ultimate convenience for travelers like me. The ability to track my order progress and get my documents instantly simplified my travel plans.',
    icon: mark,
  },
];

const lastCustomers = [
  {
    name: 'Chinmato',
    description:
      'The Get Document in One Click feature from Visa Indonesia Official is a game-changer! Its the ultimate convenience for travelers like me. The ability to track my orders progress and get my documents instantly simplified my travel plans.',
    icon: chinmato,
  },
  {
    name: 'Anginan Marta',
    description:
      'Visa Indonesia Official made my recent trip a breeze. Getting my visa with less effort was a game-changer. Their teams support was exceptional, ensuring I had all the necessary documents without any stress. Highly recommended!',
    icon: anginan,
  },
];

export default function Testimonial() {
  return (
    <section aria-labelledby="Testimonial" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-lg lg:text-center">
          <h2 className="tracking-tight text-black text-3xl font-normal font-ubuntu-mono">
            What our customer says
          </h2>
          <p className="mt-5 leading-7 opacity-50 text-center text-black text-base font-normal font-plus-jakarta-sans">
            Hear what our clients have to say about their journeys with us, and
            find out why they choose our services time and time again.
          </p>
        </div>

        <div className="mx-auto mt-16">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {customers.map(customer => (
              <div
                key={customer.name}
                className="p-8 bg-white bg-opacity-30 rounded-xl border border-zinc-100 backdrop-blur-3xl justify-start items-center gap-3 inline-flex"
              >
                <img src={customer.icon} />
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-3.5 inline-flex">
                  <h3 className="self-stretch text-black text-base font-bold font-plus-jakarta-sans">
                    {customer.name}
                  </h3>
                  <p className="self-stretch opacity-50 text-black text-sm font-normal font-plus-jakarta-sans">
                    {customer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full mt-7 flex flex-col lg:flex-row items-center justify-center gap-5">
            {lastCustomers.map(customer => (
              <div
                key={customer.name}
                className="lg:w-96 p-8 bg-white bg-opacity-30 rounded-xl border border-zinc-100 backdrop-blur-3xl justify-start items-center gap-3 inline-flex"
              >
                <img src={customer.icon} />
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-3.5 inline-flex">
                  <h3 className="self-stretch text-black text-base font-bold font-plus-jakarta-sans">
                    {customer.name}
                  </h3>
                  <p className="self-stretch opacity-50 text-black text-sm font-normal font-plus-jakarta-sans">
                    {customer.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
