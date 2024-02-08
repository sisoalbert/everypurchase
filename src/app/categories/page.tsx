import CategoriesTable from "@/components/categoriesTable";
import React from "react";

export default async function page() {
  const options = ["test", "test2"];

  return (
    <main className="bg-white-100 flex justify-center items-center flex-col">
      <h1 className="font-bold text-2xl">Categories</h1>
      <CategoriesTable purchase_categories={options} />
    </main>
  );
}
