import AddPurchaseForm from "@/components/form";
import AddPurchaseModal from "@/components/modal";
import { createPurchase, getOptionsFromXata } from "@/lib/actions";
import Link from "next/link";

async function page() {
  const options = await getOptionsFromXata();

  return (
    <div className="container mx-auto mt-8">
      <AddPurchaseForm formAction={createPurchase} categories={options} />
      <>
        <Link href={`?modal=true`}>Open Modal</Link>
      </>
      <AddPurchaseModal />
    </div>
  );
}
export default page;
