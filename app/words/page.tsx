import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { memeTerms } from "@/data/memeTerms";

const AllWords = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-3">All Words</h1>
      <p className="text-muted-foreground mb-10 text-lg">
        See all the words we currently have listed in no particular order
      </p>

      <div className="flex flex-col gap-8">
        {memeTerms.map((term) => (
          <Card
            key={term.id}
            className="max-w-5xl"
          >
            <CardContent className="flex flex-col gap-3">
              <p className="text-xl font-semibold">{term.word}</p>
              <Separator />
              <p className="text-lg">{term.meaning}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllWords;
