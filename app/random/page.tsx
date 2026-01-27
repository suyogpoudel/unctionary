"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { memeTerms, MemeType } from "@/data/memeTerms";
import { DicesIcon } from "lucide-react";
import { useEffect, useState } from "react";

const RandomWord = () => {
  const [randomWord, setRandomWord] = useState<MemeType>({
    id: 0,
    word: "",
    meaning: "",
  });

  const getRandomWord = () => {
    const len = memeTerms.length;
    const randomI = Math.floor(Math.random() * len);
    const randomW = memeTerms[randomI];

    setRandomWord(randomW);
  };

  useEffect(() => {
    getRandomWord();
  }, []);

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-muted-foreground">Random Word</CardTitle>
        <CardDescription>
          <DicesIcon />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-muted px-4 py-2 rounded text-muted-foreground">
          <p className="text-xl font-semibold">{randomWord.word}</p>
          <p className="text-lg">{randomWord.meaning}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          size="lg"
          onClick={getRandomWord}
        >
          Another Word
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RandomWord;
