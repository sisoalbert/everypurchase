import AddPurchaseForm from "@/components/form";
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

  return (
    <div className="container mx-auto mt-8">
      <AddPurchaseForm formAction={createPurchase} />
    </div>
  );
};

// Export the component
export default page;
