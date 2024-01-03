import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="container mx-auto mt-8 flex justify-center    items-center">
      <SignIn />
    </div>
  );
}
