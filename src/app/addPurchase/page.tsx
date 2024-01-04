import AddPurchaseForm from "@/components/form";
import { getCategories } from "@/lib/dataFetch";
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

const page: React.FC = () => {
  async function createPurchase(formData: FormData) {
    "use server";
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

  // console.log("categories", getCategories());
  // const data = getCategories();
  const data = [
    {
      id: "1",
      categoryName: "Food",
    },
    {
      id: "2",
      categoryName: "Drinks",
    },
    {
      id: "3",
      categoryName: "Clothes",
    },
    {
      id: "4",
      categoryName: "Electronics",
    },
    {
      id: "5",
      categoryName: "Travel",
    },
    {
      id: "6",
      categoryName: "Other",
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <AddPurchaseForm
        formAction={createPurchase}
        // categories={data}
      />
    </div>
  );
};

// Export the component
export default page;
