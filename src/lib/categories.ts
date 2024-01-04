import { PurchaseCategoriesRecord } from "@/xata";
import { RecordArray, SelectedPick } from "@xata.io/client";
import { getCategories } from "./dataFetch";

export default async function handler(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (
          arg0: RecordArray<
            SelectedPick<PurchaseCategoriesRecord, ("categoryName" | "id")[]>
          >
        ): void;
        new (): any;
      };
    };
  }
) {
  const categories = await getCategories();
  res.status(200).json(categories);
}
