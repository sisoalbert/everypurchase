"use server";
import { getXataClient } from "@/xata";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  title: z.string(),
  amount: z.number(),
  purchaseDate: z.date(),
  category: z.string(),
  userId: z.string(),
});

const xata = getXataClient();

export async function createPurchase(formData: FormData) {
  const title = formData.get("title");
  const amount = Number(formData.get("amount"));
  const date = formData.get("datetime");
  const category = formData.get("category");
  const purchaseDate = date ? new Date(date.toString()) : "";
  const { userId } = auth();
  const validatedFormData = schema.parse({
    title,
    amount,
    purchaseDate,
    category,
    userId,
  });
  const xataClient = getXataClient();
  await xataClient.db.purchases.create(validatedFormData);
  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export async function getOptionFromXata() {
  const { userId } = auth();

  const categories = await xata.db.purchase_categories
    .select(["id", "categoryName", "moneyMovement"])
    .getPaginated({
      pagination: {
        size: 25,
      },
    });

  const data = JSON.parse(JSON.stringify(categories.records));
  return data;
}

export async function getCategoriesPaginatedFromXata() {
  const { userId } = auth();

  const categories = await xata.db.purchase_categories
    .select(["id", "categoryName", "moneyMovement"])
    .getPaginated({
      pagination: {
        size: 15,
      },
    });

  const data = JSON.parse(JSON.stringify(categories.records));
  return data;
}

export async function getPurchaseFromXata() {
  const { userId } = auth();
  const purchases = await xata.db.purchases
    .select(["id", "title", "amount", "purchaseDate", "category"])
    .filter({
      userId: userId || undefined,
    })
    .getPaginated({
      pagination: {
        size: 25,
      },
    });

  const data = JSON.parse(JSON.stringify(purchases.records));
  // console.log("data", data);

  return data;
}

// const userPage = await xata.db.purchases
// .select(["id", "title", "amount", "category", "purchaseDate", "userId"])
// .filter({ userId: userId ?? undefined })
// .getPaginated({
//   pagination: {
//     size: 25,
//   },
// });

export async function getUserPurchaseSum(userId: string) {
  const sumPurchase = await xata.db.purchases.aggregate({
    sumPurchase: {
      sum: {
        column: "amount",
      },
    },
    // filter: {
    //   userId: {
    //     equals: userId ?? undefined,
    //   },
    // },
  });

  console.log(sumPurchase.aggs.sumPurchase);
  return sumPurchase.aggs.sumPurchase;
}
