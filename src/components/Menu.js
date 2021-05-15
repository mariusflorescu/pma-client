/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CustomMenu({
  data = [],
  onSelect,
  title = "Select",
  getLabel = (el) => el,
  labelColor = "text-black",
  position = "relative",
}) {
  return (
    <Menu as="div" className={`${position} inline-block text-left`}>
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              className={`${labelColor} inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`}
            >
              {title}
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none  z-10"
            >
              <div className="py-1">
                {data.map((el) => {
                  return (
                    <Menu.Item onClick={() => onSelect(el)}>
                      {({ active }) => (
                        <div
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {getLabel(el)}
                        </div>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
