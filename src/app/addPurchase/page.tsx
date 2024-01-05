import AddPurchaseForm from "@/components/form";
import { createPurchase, getOptionFromXata } from "@/lib/actions";

async function page() {
  const options = await getOptionFromXata();

  return (
    <div className="container mx-auto mt-8">
      <AddPurchaseForm formAction={createPurchase} categories={options} />
    </div>
  );
}
export default page;
