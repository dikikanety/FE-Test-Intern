import CheckPinkIcon from '@/assets/whyChooseUs/CheckPinkIcon.svg?react';
import DocumentUnguIcon from '@/assets/whyChooseUs/DocumentUnguIcon.svg?react';
import PaymentOrenIcon from '@/assets/whyChooseUs/PaymentOrenIcon.svg?react';
import EasyBlueIcon from '@/assets/whyChooseUs/EasyBlueIcon.svg?react';

const features = [
  {
    name: 'Easy online apply',
    description:
      'Simplify your application process with our user-friendly online platform, making it convenient and efficient for you to submit your requests from the comfort of your home or office.',
    icon: <EasyBlueIcon />,
  },
  {
    name: 'Secure payment with Xendit',
    description:
      'Rest easy knowing that your financial transactions are protected through our partnership with Xendit, ensuring the highest level of security for all your payments and purchases.',
    icon: <PaymentOrenIcon />,
  },
  {
    name: 'Check progress of your order',
    description:
      'Stay in the loop and monitor the status of your orders, allowing you to track the journey of your requests from initiation to completion, providing you with peace of mind and transparency.',
    icon: <CheckPinkIcon />,
  },
  {
    name: 'Get document in one click',
    description:
      'Experience ultimate convenience with our one-click document retrieval system, enabling you to access your essential documents instantly, saving you time and effort in the process.',
    icon: <DocumentUnguIcon />,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why choose us"
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl lg:text-center">
          <h2 className="text-base text-center font-semibold leading-7 font-plus-jakarta-sans text-600">
            1000+ Customer Order
          </h2>
          <h3 className="mt-2 text-center text-black text-3xl font-normal ffont-ubuntu-mono">
            Why you should choose <br /> Visa Indonesia Official
          </h3>
          <p className="mt-7 opacity-50 text-center text-black text-base font-normal font-plus-jakarta-sans">
            Explore the Compelling Reasons to Choose Visa Indonesia Official for
            Your Visa and Travel Needs
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-5xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map(feature => (
              <div key={feature.name} className="relative pl-1">
                <dt className="flex flex-col justify-center items-center gap-4 text-center">
                  {feature.icon}
                  <span className="text-center text-black text-xl font-bold font-plus-jakarta-sans">
                    {feature.name}
                  </span>
                </dt>
                <dd className="mt-5 opacity-50 text-center text-black text-base font-normal ">
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
