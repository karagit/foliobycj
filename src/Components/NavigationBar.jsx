import { Disclosure } from "@headlessui/react";
import { XMarkIcon, Bars3BottomRightIcon, DocumentTextIcon, SunIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "WORKS", href: "#works" },
  { name: "CONTACT", href: "#contact" },
];

export default function NavigationBar() {
  return (
    <Disclosure as="nav">
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
                <a href="#" className="font-vogue-text-italic text-4xl w-1/2">CJMP</a>
                <div className="flex w-1/2">
                  <div className="flex">
                    
                  </div>
                </div>
                <div className="hidden sm:flex space-x-4">
                  {navigation.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="tracking-widest text-sm hover:transition-all hover:duration-700 hover:text-accent"
                    >
                      {item.name}
                    </a>
                  ))}
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
                  className="block p-3 tracking-widest text-sm hover:transition-all hover:duration-700 hover:text-accent"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}