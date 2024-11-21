import Image from "next/image";
import SignUp from "./components/signup";

export default function Home() {
  return (
    <main className="p-8 text-center">
      <SignUp />
    </main>
  );
}
