import CategoriesTable from "@/components/categoriesTable";
import { getOptionsFromXata } from "@/lib/actions";
import React from "react";

export default async function page() {
  const options = await getOptionsFromXata();

  return (
    <main className="bg-white-100 flex justify-center items-center flex-col">
      <h1 className="font-bold text-2xl">Categories</h1>
      <CategoriesTable purchase_categories={options} />
    </main>
  );
}
