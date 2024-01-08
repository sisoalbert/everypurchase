"use client";
import { deletePurchaseFromXata } from "@/lib/actions";
import React from "react";

export default function DeletePurchaseBtn({ id }: { id: string }) {
  return (
    <div>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          deletePurchaseFromXata(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
