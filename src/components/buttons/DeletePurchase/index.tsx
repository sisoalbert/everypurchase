"use client";
import React, { useState } from "react";

export default function DeletePurchaseBtn({ id }: { id: string }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <div>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setShowConfirmation(true)}
      >
        Delete
      </button>

      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <p>Are you sure you want to delete this purchase?</p>
            <div className="flex justify-end mt-4">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
                Yes
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowConfirmation(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
