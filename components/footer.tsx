import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-card flex flex-col sm:flex-row w-full items-center justify-between px-8 py-4 text-muted-foreground max-sm:text-center max-sm:gap-5">
      <p className="text-lg">&copy; Unctionary 2026</p>

      <p>
        Powered by u/ValdimarTIO comment on{" "}
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4"
        >
          Reddit
        </Link>
      </p>
    </div>
  );
};

export default Footer;
