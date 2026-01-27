import Link from "next/link";
import Links from "./links";

const Navbar = () => {
  return (
    <nav className="bg-card flex w-full justify-between px-8 py-4">
      <Link
        href="/"
        className="text-2xl text-primary shadow-xl hover:text-secondary-foreground transition-colors duration-300"
      >
        Unctionary
      </Link>

      <Links />
    </nav>
  );
};

export default Navbar;
