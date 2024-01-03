import { getXataClient } from "@/xata";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
const xata = getXataClient();

export default async function page() {
  const { userId } = auth();

  const page = await xata.db.purchases
    .select(["id", "title", "amount", "category", "purchaseDate", "userId"])
    .getPaginated({
      pagination: {
        size: 15,
      },
    });

  // console.log(page.records);

  const userPage = await xata.db.purchases
    .select(["id", "title", "amount", "category", "purchaseDate", "userId"])
    .filter({ userId }) // Add this line to filter by userId
    .getPaginated({
      pagination: {
        size: 15,
      },
    });

  return (
    <main className="bg-white-100 flex justify-center    items-center flex-col ">
      <div className=" justify-center items-center  bg-gray-200 ">
        <Link href="/categories">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 my-2 rounded">
            <h3 className="fw-bold red">categories</h3>
          </button>
        </Link>
        <Link href="/pricing">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  mx-2 my-2 rounded">
            <h3 className="fw-bold red">Pricing</h3>
          </button>
        </Link>
        <Link href="/addPurchase">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  mx-2 my-2 rounded">
            <h3 className="fw-bold red">Add purchase</h3>
          </button>
        </Link>
      </div>

      <h1 className="font-bold text-2xl">All your purchases</h1>
      {userPage.records.map((record) => (
        <div className="bg-white-100 flex  	 flex-col" key={record.id}>
          <p>{record.title}</p>
          <p>R{record.amount}</p>
        </div>
      ))}
    </main>
  );
}
