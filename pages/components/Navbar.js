import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/dist/client/link";

const navigation = [
  { name: "Features", href: "/features", current: false },
  { name: "About", href: "/about", current: false },
  {
    name: "Join our Discord",
    href: "https://discord.gg/wGbmTBUx",
    current: false,
  },
  { name: "Schedule a demo", href: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className=" bg-white ">
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto py-4 px-2 sm:px-6 lg:px-20 lg:py-8">
            <p className="fixed top-2 right-2 text-xs text-gray-400">
              v.1.1 | closed alpha
            </p>
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center justify-start w-full sm:w-auto pl-10 sm:p-0">
                  <h1 className="font-bold text-2xl hover:opacity-80">
                    <Link href="/">RemoteOS</Link>
                  </h1>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-600 hover:text-indigo-600 ",
                          "px-3 py-2 rounded-md text-xs sm:text-base "
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center gap-5 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link href="/login">
                  <a className="hover:text-indigo-600 text-gray-700 cursor-pointer text-sm font-bold">
                    LOGIN
                  </a>
                </Link>
                <Link href="/signUp">
                  <a className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">
                    SIGNUP
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:text-indigo-600 ",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
