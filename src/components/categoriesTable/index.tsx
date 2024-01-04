interface purchase_categoriesProps {
  categoryName: string;
  moneyMovement: string;
  id: string;
}

interface Props {
  purchase_categories: purchase_categoriesProps[];
}

const CategoriesTable: React.FC<Props> = ({ purchase_categories }) => {
  return (
    <table className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-md">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            #
          </th>

          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            categories
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Money Movement
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {purchase_categories.map((purchase_category, index) => (
          <tr key={purchase_category.categoryName}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{index + 1}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">
                {purchase_category.categoryName}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">
                {purchase_category.moneyMovement}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoriesTable;
