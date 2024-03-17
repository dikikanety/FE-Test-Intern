import { Disclosure } from '@headlessui/react';
import fotos from '@/assets/faq/photo.png';
import MinusIcon from '@/assets/faq/min.svg?react';
import PlusIcon from '@/assets/faq/plus.svg?react';

const commonQuestion = [
  { title: 'Who needs the B211A visa?' },
  { title: 'How long is the visa valid?' },
  { title: 'How long does it take for my visa to be ready?' },
  { title: 'How often does it happen that a visa application is rejected?' },
  { title: 'Who is my sponsor?' },
  { title: 'Do i have to go into quarantine upon entry?' },
];

export default function FAQ() {
  return (
    <section
      aria-labelledby="faq"
      className="overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:max-w-sm">
            <h2 className="text-sky-900 text-xs font-bold font-plus-jakarta-sans">
              Support
            </h2>
            <p className="mt-2 text-3xl font-normal tracking-tight text-black font-ubuntu-mono">
              Frequently asked <br />
              question
            </p>
            <p className="mt-6 opacity-50 text-base font-normal text-black font-plus-jakarta-sans">
              Here, you&apos;ll answers to a wide range of common inquiries,
              providing you with the insights and clarity you need.
            </p>
            <div className="mt-5 p-8 bg-white rounded-xl border border-zinc-100 backdrop-blur-3xl flex-col justify-start items-start gap-3 inline-flex">
              <img src={fotos} alt="photos" />
              <div className="self-stretch flex-col justify-center items-start gap-2.5 flex">
                <span className="self-stretch text-black text-base font-bold font-plus-jakarta-sans">
                  Still Have Question
                </span>
                <p className="self-stretch text-black text-base font-normal font-plus-jakarta-sans">
                  Can’t find the answer you’re looking for? Please chat our team
                </p>
              </div>
              <a
                href="#"
                className="flex gap-2 items-center rounded-full bg-black px-3.5 py-2.5 text-sm font-semibold font-plus-jakarta-sans text-white hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>

          <section aria-labelledby="how-to">
            <div className="block">
              {commonQuestion.map((section, idx) => (
                <Disclosure as="div" key={idx}>
                  {({ open }) => (
                    <div
                      className={`p-10 pb-0 ${open ? 'bg-stone-50 rounded-xl pb-10 my-5' : 'bg-white'}`}
                    >
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="text-left flex w-full items-center justify-between py-3">
                          <span className="text-black text-base font-bold font-plus-jakarta-sans">
                            {section.title}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon aria-hidden="true" />
                            ) : (
                              <PlusIcon aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4 opacity-70 text-black text-sm font-normal font-plus-jakarta-sans leading-loose">
                          <p>
                            1. You want to stay in Indonesia for more than 60
                            days{' '}
                          </p>
                          <p>
                            2. You don&apos;t know how long you want to stay and
                            you want to keep the option open for longer than 60
                            days without having to leave the country
                          </p>
                          <p>
                            3. After the visa you want to you apply for a KITAS
                            (investor, marriage, pension)
                          </p>
                          <p>
                            4. Your reason for entering the country is not for
                            tourism purposes (e.g. volunteer work, internship,
                            further education etc.)
                          </p>
                          <p>
                            5. You stay longer than 30 days and travel a lot and
                            can Not coming to the Immigration Office for the
                            extension (personal appearance important).
                          </p>
                          <p>
                            6. You only have a temporary passport and want to
                            enter Indonesia
                          </p>
                          <p>
                            7. It is uncertain whether the Visa On Arrival will
                            be granted due to your vaccination status or other
                            formalities and you want to be on the safe side.
                          </p>
                        </div>
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
