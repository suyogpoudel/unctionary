"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { AlignRightIcon, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { href: "/", title: "Home" },
  { href: "/random", title: "Random Word" },
  { href: "/words", title: "All Words" },
];

const Links = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const renderLinks = () =>
    links.map(({ href, title }) => (
      <Link
        href={href}
        key={href}
        onClick={() => setIsOpen(false)}
        className={`text-lg px-2 text-secondary-foreground hover:border-b-2 hover:border-secondary-foreground transition-all duration-150 ${pathname === href ? "border-b-2 border-secondary-foreground" : ""}`}
      >
        {title}
      </Link>
    ));

  return (
    <>
      <div className="flex max-sm:hidden md:gap-5 lg:gap-10">
        {renderLinks()}
      </div>

      <Button
        size="icon-lg"
        className="sm:hidden shadow-lg hover:scale-110 active:scale-90 hover:shadow-xl active:shadow-sm transition-all duration-200 z-50"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <XIcon /> : <AlignRightIcon />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="sm:hidden absolute top-0 right-0 w-full flex flex-col justify-center items-center px-10 py-10 bg-card"
          >
            <div className="flex flex-col justify-center items-center gap-4">
              {renderLinks()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Links;
