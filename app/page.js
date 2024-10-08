import Socials from "@/components/socials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-80 w-80 relative">
      <Image src="/diti.jpg" alt="ditifoto" fill className="rounded-full" />
      </div>
      <Socials classWidth="w-20"/>
    </main>
  );
}
