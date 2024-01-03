"use client";
import React from "react";

export default function AddPurchaseForm({
  formAction,
}: {
  formAction: (formData: FormData) => void;
}) {
  const ref = React.useRef<HTMLFormElement>(null);
  return (
    <div>
      <form
        className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-md"
        ref={ref}
        //   action={createPurchase}
        action={(formData) => {
          formAction(formData);
          ref.current?.reset();
        }}
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
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount"
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
            <option value="food">Food</option>
            <option value="clothing">Clothing</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
