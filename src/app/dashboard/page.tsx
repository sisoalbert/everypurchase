import PurchasesTable from "@/components/purchasesTable";
import { getXataClient } from "@/xata";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
const xata = getXataClient();

export default async function page() {
  const { userId } = auth();

  const userPage = await xata.db.purchases
    .select(["id", "title", "amount", "category", "purchaseDate", "userId"])
    .filter({ userId: userId ?? undefined }) // Add this line to filter by userId
    .getPaginated({
      pagination: {
        size: 25,
      },
    });

  const purchases = userPage.records.map((record) => ({
    ...record,
    purchaseDate: record.purchaseDate?.toString() ?? "",
  }));

  return (
    <main className="bg-white-100 flex justify-center items-center flex-col">
      <div className="container mx-auto mt-8">
        <div className="max-w-md mx-auto border flex justify-center items-center border-gray-300 rounded-md">
          <Link href="/categories">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
              <h3 className="fw-bold red">categories</h3>
            </button>
          </Link>
          <Link href="/pricing">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2  mx-2 my-2 rounded">
              <h3 className="fw-bold red">Pricing</h3>
            </button>
          </Link>
          <Link href="/addPurchase">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2  mx-2 my-2 rounded">
              <h3 className="fw-bold red">Add purchase</h3>
            </button>
          </Link>
        </div>
      </div>
      {purchases.length === 0 ? (
        <div className="bg-white-100 flex justify-center items-center flex-col">
          <>No purchase yet</>
        </div>
      ) : (
        <div className="container mx-auto mt-8">
          <PurchasesTable purchases={purchases} />
        </div>
      )}
    </main>
  );
}
