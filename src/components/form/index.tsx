"use client";
import React, { useEffect, useState } from "react";

interface categoriesProps {
  id: string;
  categoryName: string;
}

export default function AddPurchaseForm(
  // categories: categoriesProps[],
  {
    formAction,
  }: {
    formAction: (formData: FormData) => void;
  }
) {
  const ref = React.useRef<HTMLFormElement>(null);
  // const data = categories.categories;

  const data = [
    {
      id: "1",
      categoryName: "Food",
    },
    {
      id: "2",
      categoryName: "Drinks",
    },
    {
      id: "3",
      categoryName: "Clothes",
    },
    {
      id: "4",
      categoryName: "Electronics",
    },
    {
      id: "5",
      categoryName: "Travel",
    },
    {
      id: "6",
      categoryName: "Other",
    },
  ];

  return (
    <div>
      <form
        className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-md"
        ref={ref}
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
            {data.map((category) => (
              <option key={category.id} value={category.categoryName}>
                {category.categoryName}
              </option>
            ))}
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
