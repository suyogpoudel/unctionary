"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", title: "Home" },
  { href: "/random", title: "Random Word" },
  { href: "/words", title: "All Words" },
];

const Links = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-5">
      {links.map(({ href, title }) => (
        <Link
          href={href}
          key={href}
          className={`text-lg px-2 text-secondary-foreground hover:border-b-2 hover:border-secondary-foreground transition-all duration-150 ${pathname === href ? "border-b-2 border-secondary-foreground" : ""}`}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
