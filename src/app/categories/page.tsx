import CategoriesTable from "@/components/categoriesTable";
import { getXataClient } from "@/xata";
import { auth } from "@clerk/nextjs";
import React from "react";
const xata = getXataClient();

export default async function page() {
  const { userId } = auth();

  const categories = await xata.db.purchase_categories
    .select(["id", "categoryName", "moneyMovement"])
    .getPaginated({
      pagination: {
        size: 15,
      },
    });

  const formattedCategories = categories.records.map((category) => ({
    ...category,
    moneyMovement: category.moneyMovement || "", // Ensure moneyMovement is of type string
  }));

  return (
    <main className="bg-white-100 flex justify-center items-center flex-col">
      <h1 className="font-bold text-2xl">Categories</h1>
      <CategoriesTable purchase_categories={formattedCategories} />
    </main>
  );
}
