import { getXataClient } from "@/xata";
import Link from "next/link";
const xata = getXataClient();

export default async function page() {
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
    .filter({ userId: "hence academics" }) // Add this line to filter by userId
    .getPaginated({
      pagination: {
        size: 15,
      },
    });

  console.log(userPage.records.length);

  return (
    <main className="bg-white-100 flex   m-auto flex-col ">
      <Link href="/categories">
        <h3 className="fw-bold red">categories</h3>
      </Link>
      <Link href="/pricing">
        <h3 className="fw-bold red">Pricing</h3>
      </Link>

      <h1>All your purchases</h1>
      {page.records.map((record) => (
        <div
          className="bg-white-100 flex  	self-start  flex-col"
          key={record.id}
        >
          <p>{record.title}</p>
          <p>R{record.amount}</p>
        </div>
      ))}
    </main>
  );
}
