import { Popover, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import UserIcon from '@/assets/navigation/UserCircleIcon.svg?react';
import MenuMobile from './menuMobile';

const navigation = [
  { name: 'Home', href: '#', subMenu: [] },
  {
    name: 'Visa Services',
    href: '#',
    subMenu: [
      {
        name: 'Tourist Visa',
        href: '#',
        desc: 'For leisure travel, detailing the essentials for exploring new destinations.',
      },
      {
        name: 'Business Visa',
        href: '#',
        desc: 'Facilitates business-related travel, outlining key requirements and steps.',
      },
      {
        name: 'Student Visa',
        href: '#',
        desc: 'Guides prospective international students through the application specifics.',
      },
      {
        name: 'Work Visa',
        href: '#',
        desc: 'For employment abroad, highlighting employer sponsorship and application essentials.',
      },
      {
        name: 'Transit Visa',
        href: '#',
        desc: 'For travelers transiting through a country, with brief on requirements and process.',
      },
    ],
  },
  {
    name: 'Extend Visa',
    href: '#',
    subMenu: [
      {
        name: 'General Extension',
        href: '#',
        desc: 'Basic information and steps for extending any visa.',
      },
      {
        name: 'Special Cases',
        href: '#',
        desc: 'Information on extensions under exceptional circumstances.',
      },
    ],
  },
  {
    name: 'Information Center',
    href: '#',
    subMenu: [
      {
        name: 'Visa Guidelines',
        href: '#',
        desc: 'Comprehensive overviews of visa types, requirements, and policies.',
      },
      {
        name: 'Country Profiles',
        href: '#',
        desc: 'Key information on travel destinations, including cultural norms and legal considerations.',
      },
      {
        name: 'Application Tips',
        href: '#',
        desc: 'Advice for a successful visa application, from documentation to interview preparation.',
      },
      {
        name: 'Legal Assistance',
        href: '#',
        desc: 'Resources for legal advice and support related to visa issues.',
      },
      {
        name: 'FAQ',
        href: '#',
        desc: 'Answers to common questions about visas and international travel.',
      },
    ],
  },
  { name: 'About Us', href: '#', subMenu: [] },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-10 top-10 z-50">
      <nav
        className="bg-black text-white flex items-center justify-between rounded-xl p-4 lg:px-8"
        aria-label="Global"
      >
        {/* logo */}
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="text-white text-2xl font-semibold font-plus-jakarta-sans leading-normal">
              Visa Indonesia
            </span>
          </a>
        </div>

        {/* hamburger menu */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* main menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-12 lg:justify-end">
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <a
              href="#"
              className="text-white text-base font-normal font-plus-jakarta-sans"
            >
              Home
            </a>

            {navigation
              .filter(nav => nav.subMenu.length > 0)
              .map((nav, idx) => (
                <Popover key={idx} className="relative">
                  <Popover.Button className="opacity-60 flex items-center gap-x-1 text-white text-base font-normal font-plus-jakarta-sans">
                    {nav.name}
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4">
                        {nav.subMenu.map(item => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-semibold text-gray-900"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-gray-600">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              ))}

            <a
              href="#"
              className="opacity-60 text-white text-base font-normal font-plus-jakarta-sans"
            >
              About Us
            </a>
          </Popover.Group>
          <a
            href="#"
            className="px-3.5 py-2.5 bg-white rounded-lg justify-center items-center gap-2.5 inline-flex"
          >
            <UserIcon />
            <div className="text-black text-sm font-bold font-plus-jakarta-sans">
              MY ACCOUNT
            </div>
          </a>
        </div>
      </nav>

      {/* mobile menu */}
      <MenuMobile
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
      />
    </header>
  );
}
