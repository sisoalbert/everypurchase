import React from "react";
import AddPurchaseForm from "../form";
import { createPurchase, getOptionsFromXata } from "@/lib/actions";

async function ModalForm() {
  const options = await getOptionsFromXata();

  return (
    <div>
      <AddPurchaseForm categories={options} formAction={createPurchase} />
    </div>
  );
}

export default ModalForm;
