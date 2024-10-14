"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";

export default function MobileMenu({ links }) {
  return (
    <Menu as="div" className="relative">
      <Menu.Button>
        <Bars3Icon
          className="h-8 w-8 text-white hover:text-neutrals"
          aria-hidden="true"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right divide-y divide-primary rounded-md bg-secondary text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {links.map((l) => (
            <div key={l.title}>
              <Menu.Item>
                <a className="px-3 py-3 block uppercase" href={l.link}>
                  {l.title}
                </a>
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
