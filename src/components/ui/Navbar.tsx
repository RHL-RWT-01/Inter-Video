
import { SignedIn, UserButton } from "@clerk/nextjs";
import { CodeIcon } from "lucide-react";
import Link from "next/link";

import { ModeToggle } from "../ModeToggle";
import DasboardBtn from "./DasboardBtn";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* LEFT SIDE -LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
        >
          <CodeIcon className="size-8 text-yellow-600" />
          
          <span className="bg-gradient-to-r 
          from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
            InterVideo
          </span>
        </Link>

        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DasboardBtn />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
export default Navbar;