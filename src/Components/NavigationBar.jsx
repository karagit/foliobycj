import { Disclosure } from "@headlessui/react";
import { XMarkIcon, Bars3BottomRightIcon, DocumentTextIcon, SunIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "About me", href: "#about" },
  { name: "My works", href: "#works" },
  { name: "Message me", href: "mailto:carlajeanmp@gmail.com" },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
}

export default function NavigationBar() {
  return (
    <Disclosure as="nav" className="fixed w-full py-2 z-50 border-b border-light-gray backdrop-blur">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-9xl px-2 sm:px-6 lg-px-8">
            <div className="relative h-16 flex items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="color-default relative inline-flex items-center justify-center rounded-md p-2">
                  <span className="absolute -inset-0.5"/>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3BottomRightIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-shrink-0 items-center min-w-40">
                  <a href="#">
                    <img className="h-8 w-auto" src="/img/logo.svg" alt="Portfolio by Carla Jean" />
                  </a>
                </div>
                <div className="hidden sm:flex">
                  <div className="flex space-x-4 uppercase">
                    {navigation.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="tracking-widest text-sm hover:transition-all hover:duration-700 hover:text-blue"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:flex">
                  <div className="flex items-center">
                    <a
                      href="/CJPantaleon_CV.pdf"
                      className="tracking-widest text-sm underline flex items-center hover:transition-all hover:duration-700 hover:text-blue"
                      download
                    >
                      <DocumentTextIcon className="h-3.5 w-3.5 mr-1" />
                      Download CV
                    </a>
                    {/* <button className="ml-4">
                      <SunIcon className="h-5 w-5 color-default" />
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block p-3 tracking-widest text-sm hover:transition-all hover:duration-700 hover:text-blue"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <a
                href="/CJPantaleon_CV.pdf"
                className="p-3 tracking-widest text-sm underline flex items-center hover:transition-all hover:duration-700 hover:text-blue"
                download
              >
                <DocumentTextIcon className="h-3.5 w-3.5 mr-1" />
                Download CV
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}