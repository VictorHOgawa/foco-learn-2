"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();

  const [search, setSearch] = useState<string>("");
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div
      className={cn(
        "fixed top-0 z-30 flex h-20 w-full items-center justify-between px-8",
        isScrolled ? "bg-black" : "bg-black/60",
      )}
    >
      <Link href="/">
        <Image
          width={500}
          height={250}
          src="/logo.png"
          alt=""
          className="h-14 w-max object-contain"
        />
      </Link>

      {/* <div className="nav-links">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/my-list" className="nav-link">
          My List
        </Link>
      </div> */}

      <div className="hidden items-center gap-2 xl:flex">
        <div className="search">
          <input
            placeholder="Pesquisar..."
            className="text-white placeholder:text-white/50 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button disabled={search === ""}>
            <Search
              className="text-white"
              onClick={() => router.push(`/search/${search}`)}
            />
          </button>
        </div>

        <Image
          width={500}
          height={5000}
          src="/smallLogo.png"
          className="h-10 w-max object-contain"
          alt=""
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="dropdown-menu">
            <a onClick={handleLogout}>Sair</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
