import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-baseline text-center gap-2 mb-5 max-sm:flex-col max-sm:gap-0.5 max-sm:items-center">
        <h1 className="text-2xl sm:text-3xl">Unctionary</h1>
        <p className="text-lg sm:text-xl text-muted-foreground">
          (Dictionary for Uncs)
        </p>
      </div>
      <p className="text-muted-foreground sm:text-lg text-center">
        An unc&apos;s guide to being cool. Meanings of 160+ slang words or
        'brainrot' words.
      </p>
      <div className="flex gap-3 mt-10">
        <Button
          asChild
          size="lg"
          variant="secondary"
        >
          <Link href="/random">Random Word</Link>
        </Button>
        <Button
          asChild
          size="lg"
        >
          <Link href="/words">All Words</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
