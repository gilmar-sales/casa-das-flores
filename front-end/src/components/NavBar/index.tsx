import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  HiOutlineChatAlt,
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiSearch,
} from "react-icons/hi";

import {
  isAuthenticated,
  logout,
  NAME_KEY,
  LAST_NAME_KEY,
  PROFILE_PICTURE_KEY,
} from "../../middlewares/auth";
import { useHistory } from "react-router-dom";

import ReactTooltip from "react-tooltip";
import Modal from "../Modal";

export default function (props: { children: any }) {
  const history = useHistory();

  const [searchText, setSearchText] = useState("");
  const [showAccDropdown, setShowAccDropDown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAccount = () => {
    setShowAccDropDown(!showAccDropdown);
  };

  return (
    <div>
      <ReactTooltip place="bottom" effect="solid" globalEventOff="hover" />
      <nav className="flex justify-between py-2 text-green-500 border-dashed md:border-b-2 border-green-100 ">
        {/* Brand Section*/}
        <div className="flex items-center px-2 sm:px-4 lg:px-6">
          <a className="cursor-pointer" onClick={() => history.push("/")}>
            Casa das Flores
          </a>
        </div>
        {/* Mid Section */}
        <div className="flex items-center hidden md:block">
          <div className="flex">
            <input
              type="text"
              name="search"
              id="search"
              className="w-full px-3 border rounded-none rounded-l-md border-gray-400"
              placeholder="Procurando alguma coisa?"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="px-4 py-1 rounded-r-md border border-l-0 border-green-500 bg-green-50 hover:bg-green-400 hover:text-green-50">
              <HiSearch className="h-6 w-6" />
            </button>
          </div>
        </div>
        {/* Right Section*/}
        <div className="flex px-2 sm:px-4 lg:px-6 space-x-2 text-white select-none">
          <button
            className="bg-green-500 h-10 w-10 p-2 rounded-full "
            data-tip="Suporte"
          >
            <HiOutlineChatAlt className="h-6 w-6" />
          </button>
          <button
            className="bg-green-500 h-10 w-10 p-2 rounded-full "
            data-tip="Desejos"
          >
            <HiOutlineHeart className="h-6 w-6" />
          </button>
          <button
            className="bg-green-500 h-10 w-10 p-2 rounded-full"
            data-tip="Cesta"
          >
            <HiOutlineShoppingBag className="h-6 w-6" />
          </button>
          <div className="relative">
            <Menu>
              {({ open }) => (
                <>
                  <Menu.Button
                    className="bg-green-500 h-10 w-10 rounded-full"
                    data-tip="Conta"
                  >
                    GC
                  </Menu.Button>
                  <Transition
                    show={open}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-50"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-50"
                  >
                    <Menu.Items
                      static
                      className="absolute right-0 w-36 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                    >
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              className={`${
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                              onClick={() => setShowModal(true)}
                            >
                              Entrar
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#support"
                              className={`${
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            >
                              Inscrever-se
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </div>
      </nav>
      {/* Mobile Section */}
      <div className="flex justify-center md:hidden  text-green-500 py-2 border-dashed border-b-2 border-green-100">
        <form className="flex" action="#" method="POST">
          <input
            type="text"
            name="company_website"
            id="company_website"
            className="flex-1 w-full px-3 border  rounded-none rounded-l-md border-gray-400"
            placeholder="Procurando alguma coisa?"
          />
          <button className="px-4 py-1 rounded-r-md border border-l-0 border-green-500 bg-green-50 hover:bg-green-400 hover:text-green-50">
            <HiSearch className="h-6 w-6" />
          </button>
        </form>
      </div>
      <Modal title="Entrar" isOpen={showModal} setOpen={setShowModal} />
    </div>
  );
}
