import backdrop from '@/assets/howToRegistration/backdrop.png';
import VisaInformat from '@/assets/howToRegistration/visa-informat.png?react';
import Services from '@/assets/howToRegistration/Services.png?react';
import Upload from '@/assets/howToRegistration/Upload.png?react';
import Finish from '@/assets/howToRegistration/finish.png?react';

const features = [
  {
    name: 'Online Registration',
    description:
      'Begin the visa application process by completing an online registration form and provide all information.',
    icon: VisaInformat,
  },
  {
    name: 'Submit Document',
    description:
      'After registration, prepare and submit the required documents for your visa application.',
    icon: Upload,
  },
  {
    name: 'Make Payment',
    description:
      'Once your documents are submitted, proceed to make the payment for your visa application.',
    icon: Services,
  },
  {
    name: 'Get Visa',
    description:
      'After successful document verification and payment, you will receive your visa.',
    icon: Finish,
  },
];

export default function HowToRegistration() {
  return (
    <section
      aria-labelledby="how to registration"
      className="py-24 sm:py-32 relative"
    >
      <div
        className="bg-cover bg-no-repeat bg-center absolute top-0 right-0 bottom-0 left-0"
        style={{ backgroundImage: `url(${backdrop})` }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:max-w-lg lg:text-center">
          <h2 className="mt-2 text-white text-center text-3xl font-bold font-plus-jakarta-sans">
            Less effort to get your visa
          </h2>
          <p className="mt-6 text-base leading-7 opacity-50 text-white font-normal font-plus-jakarta-sans">
            Our service ensures that you can acquire your visa with ease, saving
            you time and energy, so you can focus on planning and enjoying your
            trip without complicated paperwork and procedures.
          </p>
        </div>
        <div className="mx-auto mt-16 sm:mt-10">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-10">
            {features.map(feature => (
              <div key={feature.name} className="relative">
                <img src={feature.icon} alt={feature.name} className="m-auto" />
                <dt className="text-white text-center text-xl font-bold font-plus-jakarta-sans mt-5">
                  {feature.name}
                </dt>
                <dd className="p-2 opacity-50 text-center text-white text-base font-normal font-plus-jakarta-sans">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
