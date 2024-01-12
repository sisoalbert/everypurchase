"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function AddPurchaseModal() {
  const cancelButtonRef = useRef(null);

  const [open, setOpen] = useState(false);

  const searchParams = useSearchParams();
  const isModalOpen = searchParams.get("modal") === "true";
  console.log("isModalOpen", isModalOpen);

  useEffect(() => {
    setOpen(isModalOpen);
  }, [isModalOpen]);
  return (
    <>
      {isModalOpen && (
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left ">
                          <Dialog.Title
                            as="h3"
                            className="text-base font-semibold leading-6 text-gray-900"
                          >
                            Add a purchase{" "}
                          </Dialog.Title>
                          <div className="mt-2">
                            <div>
                              <form
                                className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-md"
                                // ref={ref}
                                // action={(formData) => {
                                //   formAction(formData);
                                //   ref.current?.reset();
                                // }}
                              >
                                <div className="mb-4">
                                  <label
                                    htmlFor="title"
                                    className="block text-sm font-medium text-gray-600"
                                  >
                                    Title
                                  </label>
                                  <input
                                    type="text"
                                    id="title"
                                    placeholder="Enter title"
                                    name="title"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    required
                                  />
                                </div>
                                <div className="mb-4">
                                  <label
                                    htmlFor="amount"
                                    className="block text-sm font-medium text-gray-600"
                                  >
                                    Amount
                                  </label>
                                  <input
                                    type="text"
                                    id="amount"
                                    name="amount"
                                    placeholder="Enter amount"
                                    pattern="[0-9]+(\.[0-9]+)?"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    required
                                  />
                                </div>
                                <div className="mb-4">
                                  <label
                                    htmlFor="date"
                                    className="block text-sm font-medium text-gray-600"
                                  >
                                    Date
                                  </label>
                                  <input
                                    type="datetime-local"
                                    id="datetime"
                                    name="datetime"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    required
                                  />
                                </div>
                                <div className="mb-4">
                                  <label
                                    htmlFor="category"
                                    className="block text-sm font-medium text-gray-600"
                                  >
                                    Category
                                  </label>
                                  <select
                                    id="category"
                                    name="category"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                    required
                                  >
                                    <option value="" disabled>
                                      Select a category
                                    </option>
                                    {/* {categories.map((category) => (
              <option key={category.id} value={category.categoryName}>
                {category.categoryName}
              </option>
            ))} */}
                                  </select>
                                </div>
                                <div className="mt-4">
                                  <button
                                    type="submit"
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                  >
                                    Submit
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={() => setOpen(false)}
                      >
                        Deactivate
                      </button>
                      <Link href={`?modal=false`}>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={() => {
                            // setOpen(false);
                            //   href = {`?modal=true` }
                          }}
                          ref={cancelButtonRef}
                        >
                          Cancel
                        </button>
                      </Link>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  );
}
