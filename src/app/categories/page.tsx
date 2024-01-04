import { getXataClient } from "@/xata";
import { auth } from "@clerk/nextjs";
import React from "react";
const xata = getXataClient();

export default async function page() {
  const { userId } = auth();

  const categories = await xata.db.purchase_categories
    .select(["id", "categoryName"])
    .getPaginated({
      pagination: {
        size: 15,
      },
    });

  console.log("categories", categories.records);

  return (
    <main className="bg-white-100 flex justify-center items-center flex-col">
      <h1 className="font-bold text-2xl">Categories</h1>
      <ul>
        {categories.records.map((category) => (
          <li key={category.id}>{category.categoryName}</li>
        ))}
      </ul>
    </main>
  );
}
