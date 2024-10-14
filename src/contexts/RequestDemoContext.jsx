"use client";
import { Dialog, Transition } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Fragment, createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BgImg from "@/assets/images/request-demo/background-demo.png";
import { XMarkIcon } from "@heroicons/react/24/outline";

const RequestDemoContext = createContext({
  requestDemo: () => null,
});

export default function RequestDemoProvider({ children }) {
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.number().required("Phone number is required"),
    preferred_date: Yup.date().required(),
    preferred_time: Yup.string().required(),
    role: Yup.string().required(),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState, reset, watch, control, setValue } =
    useForm({
      ...formOptions,
    });

  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const requestDemo = () => {
    openModal();
  };

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <RequestDemoContext.Provider
      value={{
        requestDemo,
      }}
    >
      {children}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-[999] bg-black bg-opacity-25" />
          </Transition.Child>

          <div
            className="fixed overflow-y-auto top-0 left-0 bottom-0 right-0 flex justify-center"
            style={{
              background: "rgba(0,0,0,0.7)",
            }}
          >
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-5xl transform overflow-hidden rounded-lg relative bg-white p-8 shadow-xl transition-all"
                  style={{
                    maxHeight: "calc(100% - 80px)",
                    overflow: "auto",
                  }}
                >
                  <div
                    className="absolute top-0 bottom-0 right-0 left-0 z-0"
                    style={{
                      background: `url(${BgImg.src})`,
                      backgroundPosition: "bottom",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <div
                    className="relative flex mb-4"
                    style={{ justifyContent: "flex-end" }}
                  >
                    <button onClick={() => setIsOpen(false)}>
                      <XMarkIcon className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="flex gap-12 flex-col lg:flex-row relative">
                    <div className="basis-full pt-4">
                      <div className="text-primary font-semibold uppercase">
                        Request a demo
                      </div>
                      <div className="font-medium text-[24px] md:text-[32px] text-gray mt-2">
                        Your Success Starts Here So Request A Demo Today!
                      </div>
                      <div className="text-gray-400 font-light mt-6">
                        We are invested in making sure that all of our users
                        have the best experience possible.
                      </div>
                    </div>
                    <form
                      className="basis-full border p-6 bg-white rounded-lg"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="flex gap-4 flex-col md:flex-row">
                        <div className="basis-1/2">
                          <label className="font-medium" htmlFor="first_name">
                            First Name
                            <span
                              className="text-[12px] font-medium"
                              style={{
                                color: "#EA4B4B",
                              }}
                            >
                              *
                            </span>
                          </label>
                          <input
                            id="first_name"
                            className="required w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md"
                            {...register("first_name")}
                          />
                        </div>
                        <div className="basis-1/2">
                          <label className="font-medium" htmlFor="last_name">
                            Last Name
                            <span
                              className="text-[12px] font-medium"
                              style={{
                                color: "#EA4B4B",
                              }}
                            >
                              *
                            </span>
                          </label>
                          <input
                            id="last_name"
                            className="required w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md"
                            {...register("last_name")}
                          />
                        </div>
                      </div>

                      <div className="flex gap-4 mt-4 flex-col md:flex-row">
                        <div className="basis-1/2">
                          <label className="font-medium" htmlFor="phone_number">
                            Phone Number
                            <span
                              className="text-[12px] font-medium"
                              style={{
                                color: "#EA4B4B",
                              }}
                            >
                              *
                            </span>
                          </label>
                          <input
                            id="phone_number"
                            className="required w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md"
                            {...register("phone")}
                          />
                        </div>
                        <div className="basis-1/2">
                          <label className="font-medium" htmlFor="email">
                            Email
                            <span
                              className="text-[12px] font-medium"
                              style={{
                                color: "#EA4B4B",
                              }}
                            >
                              *
                            </span>
                          </label>
                          <input
                            id="email"
                            className="required w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md"
                            {...register("email")}
                          />
                        </div>
                      </div>

                      <div className="flex gap-4 mt-4 flex-col md:flex-row">
                        <div className="basis-full">
                          <label className="font-medium">
                            Preferred Date
                            <span
                              className="text-[12px] font-medium"
                              style={{
                                color: "#EA4B4B",
                              }}
                            >
                              *
                            </span>
                          </label>
                          <div>
                            <DatePicker
                              className="required w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md"
                              selected={watch("preferred_date")}
                              onChange={(v) => setValue("preferred_date", v)}
                            />
                          </div>
                        </div>
                        <div className="basis-full">
                          <label className="font-medium">
                            Preferred Time
                            <span
                              className="text-[12px] font-medium"
                              style={{
                                color: "#EA4B4B",
                              }}
                            >
                              *
                            </span>
                          </label>
                          <div>
                            <DatePicker
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              dateFormat="h:mm aa"
                              className="required w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md"
                              selected={watch("preferred_date")}
                              onChange={(v) => setValue("preferred_date", v)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <label htmlFor="role" className="font-medium">
                          Your role
                          <span
                            className="text-[12px] font-medium"
                            style={{
                              color: "#EA4B4B",
                            }}
                          >
                            *
                          </span>
                        </label>
                        <textarea
                          id="role"
                          rows={4}
                          className="w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md"
                          {...register("role")}
                        />
                      </div>

                      <div className="mt-4">
                        <button
                          type="submit"
                          className="w-full px-6 py-4 bg-primary rounded text-white"
                        >
                          Submit
                        </button>
                      </div>
                      {submitted && (
                        <div
                          class="mt-12 p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                          role="alert"
                        >
                          Thank you for your request! You can expect to hear
                          from a member of our team within 48 hours.
                        </div>
                      )}
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </RequestDemoContext.Provider>
  );
}
11;

export const useRequestDemo = () => useContext(RequestDemoContext);
