import Link from "next/link";
import { Share2 } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 mx-auto flex w-full items-center justify-between p-5 bg-gray-50 sm:px-10 shadow">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <Link className="z-[10] text-xl font-bold " href="/">
          Tshirt <strong className="text-[#3F72AF]">Mockup</strong>
        </Link>
        <div className="z-[10] flex items-center gap-2">
          <Button variant="outline">
            <Share2 /> Share
          </Button>
          <Button>Login / Signup</Button>
        </div>
      </div>
    </header>
  );
}
