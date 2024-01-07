import React from "react";

interface Purchase {
  title: string;
  amount: number;
  category: string;
  purchaseDate: string;
}

interface Props {
  purchases: Purchase[];
}

const PurchasesTable: React.FC<Props> = ({ purchases }) => {
  return (
    <table className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-md">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Date
          </th>

          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Title
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            amount
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Category
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {purchases.reverse().map((purchase) => (
          <tr key={purchase.title}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">
                {new Date(purchase.purchaseDate).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "2-digit",
                })}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{purchase.title}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">R{purchase.amount}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{purchase.category}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PurchasesTable;
