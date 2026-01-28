import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-card flex flex-col sm:flex-row w-full items-center justify-between px-8 py-4 text-muted-foreground max-sm:text-center max-sm:gap-5">
      <p className="text-lg">&copy; Unctionary 2026</p>

      <p>
        Powered by u/ValdimarTIO's comment on{" "}
        <Link
          href="https://www.reddit.com/r/NoStupidQuestions/comments/1cgk2l7/is_there_a_comprehensiveish_list_of_all_the/"
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
