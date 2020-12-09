import React, { ReactNode } from "react";
import { HiXCircle } from "react-icons/hi";
import { Transition } from "@headlessui/react";

interface ModalProps {
  title: string;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  actions?: ReactNode[];
}

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <Transition
      show={props.isOpen}
      enter="transition ease-linear duration-75"
      enterFrom="opacity-0 scale-100"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-50"
    >
      <div
        className={
          "flex justify-center items-center overflow-y-auto fixed inset-0 z-50 p-2 bg-opacity-50 bg-black"
        }
      >
        <Transition
          show={props.isOpen}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-50"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-50"
        >
          <div className="flex flex-col bg-white rounded-lg  relative w-auto mx-auto max-w-3xl ">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b  border-gray-100 text-2xl">
              <a>{props.title}</a>
              <button
                className="hover:text-red-500"
                onClick={() => props.setOpen(false)}
              >
                <HiXCircle />
              </button>
            </div>
            {/* Content */}
            <div className="relative p-6 flex-auto">{props.children}</div>
            {/* Footer*/}
            <div className="flex items-center justify-end p-2  rounded-b"></div>
          </div>
        </Transition>
      </div>
    </Transition>
  );
};

export default Modal;
