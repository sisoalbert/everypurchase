import { getXataClient } from "@/xata";
const xata = getXataClient();

export const getCategories = async () => {
  const categories = await xata.db.purchase_categories
    .select(["id", "categoryName"])
    .getPaginated({
      pagination: {
        size: 15,
      },
    });

  // console.log("categories", categories.records);
  const categoriesData = categories.records;
  return categoriesData;
};
