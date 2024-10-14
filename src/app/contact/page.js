/* eslint-disable @next/next/no-img-element */
"use client";

import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import ContactImg from "@/assets/images/contact.jpg";
import {
  AtSymbolIcon,
  CheckIcon,
  ChevronUpDownIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const roles = [
  "Program Director",
  "Department/Division Chair",
  "Medical School Administrator",
  "Medical School Dean",
  "Medical Student",
  "Other",
];

export default function Contact() {
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.number().required("Phone number is required"),
    description: Yup.string().required("The field is required"),
    preferred_method: Yup.string().required(),
    role: Yup.string().required(),
    other_role: Yup.string().required("The field is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, formState, reset, watch, control, setValue } =
    useForm({
      ...formOptions,
      defaultValues: {
        preferred_method: "email",
        role: "",
      },
    });
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
  };

  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-light-yellow py-12">
      <div className="px-4 md:px-12 xl:px-4 max-w-7xl mx-auto text-black flex gap-16 z-10 relative flex-col lg:flex-row">
        <div className="basis-1/2 mt-24 lg:pt-16">
          <div className="text-primary font-semibold uppercase">Contact Us</div>
          <h1 className="font-medium text-[32px]">
            Feel Free To Get In Touch With Us Today.
          </h1>
          <div className="mt-12 text-gray-400">
            <p className="max-w-xl leading-8">
              Thank you for your interest in{" "}
              <span className="text-primary font-semibold">CentralApp</span>.
            </p>
            <p className="mt-2">
              We have full time support available for applicants, medical
              schools, and residency programs. So, if you have any questions or
              concerns, please do not hesitate to contact us at{" "}
              <span className="font-semibold">help@accessgme.com</span> or use
              the form.
            </p>
            <p className="mt-8">
              <span>Have a simple question?</span>
            </p>
            <p>
              <a href="/#faq" className="underline">
                Check out our FAQ
              </a>
            </p>
          </div>
          {/* <div className="">Contact Information</div>
          <p>
            Email: 
          </p> */}
        </div>
        <form
          className="basis-1/2 p-8 bg-white border rounded shadow mt-24"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="basis-1/2">
              <label htmlFor="first_name" className="font-medium">
                First Name*
              </label>
              <input
                id="first_name"
                className="required w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md"
                {...register("first_name")}
              />
            </div>
            <div className="basis-1/2">
              <label htmlFor="last_name" className="font-medium">
                Last Name*
              </label>
              <input
                id="last_name"
                className="required w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md"
                {...register("last_name")}
              />
            </div>
          </div>

          <div className="flex gap-4 mt-8 flex-col md:flex-row">
            <div className="basis-1/2 relative">
              <label htmlFor="email" className="font-medium">
                Email*
              </label>
              <input
                id="email"
                type="email"
                className="w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md pl-10"
                {...register("email")}
              />
              <AtSymbolIcon className="absolute w-5 h-5 bottom-4 left-3" />
            </div>
            <div className="basis-1/2 relative">
              <label htmlFor="phone" className="font-medium">
                Phone Number*
              </label>
              <input
                id="phone"
                type="number"
                className="w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md pl-10"
                {...register("phone")}
              />
              <PhoneIcon className="absolute w-5 h-5 bottom-4 left-3" />
            </div>
          </div>

          <div className="mt-8">
            <div className="font-medium">Preferred Method For Contact*</div>
            <div className="flex gap-4 mt-2">
              <button
                onClick={() => setValue("preferred_method", "email")}
                type="button"
                className={`basis-full rounded-md w-full border py-2  ${
                  watch("preferred_method") === "email"
                    ? "border-secondary text-secondary bg-[#2496901a]"
                    : "border-gray-400 text-gray-400"
                }`}
              >
                Email
              </button>
              <button
                type="button"
                onClick={() => setValue("preferred_method", "phone")}
                className={`basis-full rounded-md w-full border py-2  ${
                  watch("preferred_method") === "phone"
                    ? "border-secondary text-secondary bg-[#2496901a]"
                    : "border-gray-400 text-gray-400"
                }`}
              >
                Phone
              </button>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <div className="basis-full">
              <label className="font-medium">Role*</label>
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <Listbox {...field}>
                    <div className="relative mt-2">
                      <Listbox.Button className="relative w-full cursor-default bg-white outline-none border-[#D3D3D3] border rounded-md py-3 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
                        <span className="block truncate">
                          {watch("role") || "Select a role"}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {roles.map((role) => (
                            <Listbox.Option
                              key={role}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-amber-100 text-amber-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={role}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {role}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                )}
              />
            </div>
            {watch("role") === "Other" && (
              <div className="basis-full">
                <label htmlFor="other_role" className="font-medium">
                  Other role*
                </label>
                <input
                  id="other_role"
                  className="required w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md"
                  {...register("other_role")}
                />
              </div>
            )}
          </div>

          <div className="mt-8">
            <label htmlFor="description" className="font-medium">
              What would you like to discuss?*
            </label>
            <textarea
              id="description"
              rows={6}
              className="w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md"
              {...register("description")}
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
              Thank you for your request! You can expect to hear from a member
              of our team within 48 hours.
            </div>
          )}
        </form>
      </div>
    </div>
    // <div className="bg-light-yellow">
    //   <div
    //     className="py-24 bg-primary relative"
    //     style={{
    //       background: `url(${ContactImg.src})`,
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //       backgroundRepeat: "no-repeat",
    //     }}
    //   >
    //     <div className="px-4 md:px-12 xl:px-4 max-w-7xl mx-auto text-white flex flex-col gap-4 items-start z-10 relative">
    //       <h1 className="font-semibold text-[32px] md:text-[48px]">
    //         Contact Us
    //       </h1>
    //       <p className="mt-6 max-w-xl text-[18px] leading-8">
    //         Submit your information and a CentralApp representative will follow
    //         up with you as soon as possible.
    //       </p>
    //       <p className="text-[18px]">
    //         <span> Have a simple question?</span>
    //         <a href="#" className="ml-2 underline">
    //           Check out our FAQ
    //         </a>
    //       </p>
    //     </div>
    //     <div
    //       className="absolute top-0 left-0 bottom-0 right-0 z-0"
    //       style={{
    //         background:
    //           "linear-gradient(rgba(74, 158, 160, 0.5) 0%, rgba(84, 118, 130, 0.3) 100%)",
    //       }}
    //     ></div>
    //   </div>

    //   <div className="bg-light-yellow pb-16">
    //     <form
    //       className="max-w-7xl mx-auto p-8 bg-neutrals mt-8 shadow-lg"
    //       onSubmit={handleSubmit(onSubmit)}
    //     >
    //       <div className="mb-16 font-semibold text-[36px]">
    //         Talk with our team
    //       </div>
    //       <div className="flex gap-8">
    //         <div className="basis-1/3">
    //           <label htmlFor="first_name" className="font-medium">
    //             First Name*
    //           </label>
    //           <input
    //             id="first_name"
    //             className="required w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md"
    //             {...register("first_name")}
    //           />
    //         </div>
    //         <div className="basis-1/3">
    //           <label htmlFor="last_name" className="font-medium">
    //             Last Name*
    //           </label>
    //           <input
    //             id="last_name"
    //             className="required w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md"
    //             {...register("last_name")}
    //           />
    //         </div>
    //       </div>

    //       <div className="flex gap-8 mt-8">
    //         <div className="basis-1/3 relative">
    //           <label htmlFor="email" className="font-medium">
    //             Email*
    //           </label>
    //           <input
    //             id="email"
    //             type="email"
    //             className="w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md pl-10"
    //             {...register("email")}
    //           />
    //           <AtSymbolIcon className="absolute w-5 h-5 bottom-4 left-3" />
    //         </div>
    //         <div className="basis-1/3 relative">
    //           <label htmlFor="phone" className="font-medium">
    //             Phone Number*
    //           </label>
    //           <input
    //             id="phone"
    //             type="number"
    //             className="w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md pl-10"
    //             {...register("phone")}
    //           />
    //           <PhoneIcon className="absolute w-5 h-5 bottom-4 left-3" />
    //         </div>
    //       </div>

    //       <div className="flex gap-8 mt-8">
    //         <div className="basis-1/2">
    //           <div className="font-medium">Preferred method of contact*</div>
    //           <div className="flex gap-4 mt-4">
    //             <div>
    //               <div className="inline-flex items-center">
    //                 <label
    //                   className="relative flex cursor-pointer items-center rounded-full p-3"
    //                   htmlFor="email_method"
    //                   data-ripple-dark="true"
    //                 >
    //                   <input
    //                     {...register("preferred_method")}
    //                     id="email_method"
    //                     name="type"
    //                     type="radio"
    //                     className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-primary text-primary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:before:bg-primary hover:before:opacity-10"
    //                   />
    //                   <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-primary opacity-0 transition-opacity peer-checked:opacity-100">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       className="h-3.5 w-3.5"
    //                       viewBox="0 0 16 16"
    //                       fill="currentColor"
    //                     >
    //                       <circle
    //                         data-name="ellipse"
    //                         cx="8"
    //                         cy="8"
    //                         r="8"
    //                       ></circle>
    //                     </svg>
    //                   </div>
    //                 </label>
    //                 <label
    //                   className="mt-px cursor-pointer select-none"
    //                   htmlFor="email_method"
    //                 >
    //                   Email
    //                 </label>
    //               </div>
    //             </div>
    //             <div className="inline-flex items-center">
    //               <label
    //                 className="relative flex cursor-pointer items-center rounded-full p-3"
    //                 htmlFor="phone_method"
    //                 data-ripple-dark="true"
    //               >
    //                 <input
    //                   {...register("preferred_method")}
    //                   id="phone_method"
    //                   name="type"
    //                   type="radio"
    //                   className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-primary text-primary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:before:bg-primary hover:before:opacity-10"
    //                 />
    //                 <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-primary opacity-0 transition-opacity peer-checked:opacity-100">
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     className="h-3.5 w-3.5"
    //                     viewBox="0 0 16 16"
    //                     fill="currentColor"
    //                   >
    //                     <circle
    //                       data-name="ellipse"
    //                       cx="8"
    //                       cy="8"
    //                       r="8"
    //                     ></circle>
    //                   </svg>
    //                 </div>
    //               </label>
    //               <label
    //                 className="mt-px cursor-pointer select-none"
    //                 htmlFor="phone_method"
    //               >
    //                 Phone
    //               </label>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="mt-8 flex gap-8">
    //         <div className="basis-1/3">
    //           <label className="font-medium">Role*</label>
    //           <Controller
    //             name="role"
    //             control={control}
    //             render={({ field }) => (
    //               <Listbox {...field}>
    //                 <div className="relative mt-2">
    //                   <Listbox.Button className="relative w-full cursor-default bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md py-3 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
    //                     <span className="block truncate">
    //                       {watch("role") || "Select a role"}
    //                     </span>
    //                     <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
    //                       <ChevronUpDownIcon
    //                         className="h-5 w-5 text-gray-400"
    //                         aria-hidden="true"
    //                       />
    //                     </span>
    //                   </Listbox.Button>
    //                   <Transition
    //                     as={Fragment}
    //                     leave="transition ease-in duration-100"
    //                     leaveFrom="opacity-100"
    //                     leaveTo="opacity-0"
    //                   >
    //                     <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
    //                       {roles.map((role) => (
    //                         <Listbox.Option
    //                           key={role}
    //                           className={({ active }) =>
    //                             `relative cursor-default select-none py-2 pl-10 pr-4 ${
    //                               active
    //                                 ? "bg-amber-100 text-amber-900"
    //                                 : "text-gray-900"
    //                             }`
    //                           }
    //                           value={role}
    //                         >
    //                           {({ selected }) => (
    //                             <>
    //                               <span
    //                                 className={`block truncate ${
    //                                   selected ? "font-medium" : "font-normal"
    //                                 }`}
    //                               >
    //                                 {role}
    //                               </span>
    //                               {selected ? (
    //                                 <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
    //                                   <CheckIcon
    //                                     className="h-5 w-5"
    //                                     aria-hidden="true"
    //                                   />
    //                                 </span>
    //                               ) : null}
    //                             </>
    //                           )}
    //                         </Listbox.Option>
    //                       ))}
    //                     </Listbox.Options>
    //                   </Transition>
    //                 </div>
    //               </Listbox>
    //             )}
    //           />
    //         </div>
    //         {watch("role") === "Other" && (
    //           <div className="basis-1/3">
    //             <label htmlFor="other_role" className="font-medium">
    //               Other role*
    //             </label>
    //             <input
    //               id="other_role"
    //               className="required w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md"
    //               {...register("other_role")}
    //             />
    //           </div>
    //         )}
    //       </div>

    //       <div className="mt-8 w-2/3">
    //         <label htmlFor="description" className="font-medium">
    //           What would you like to discuss?*
    //         </label>
    //         <textarea
    //           id="description"
    //           rows={6}
    //           className="w-full mt-2 px-2 py-3 bg-[#F4F4F4] outline-none border-[#D3D3D3] border rounded-md"
    //           {...register("description")}
    //         />
    //       </div>

    //       <div className="mt-8">
    //         <button
    //           type="submit"
    //           className="w-1/3 px-6 py-4 bg-primary rounded text-white"
    //         >
    //           Submit
    //         </button>
    //       </div>
    //       {submitted && (
    //         <div
    //           class="mt-12 p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
    //           role="alert"
    //         >
    //           Thank you for your request! You can expect to hear from a member
    //           of our team within 48 hours.
    //         </div>
    //       )}
    //     </form>
    //   </div>
    // </div>
  );
}
