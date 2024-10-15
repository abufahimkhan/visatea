"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const RoadMap = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchToggle = () => {
    setIsLoading(!isLoading);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card>
      <CardHeader>
        <CardDescription className="text-center underline text-sky-500 font-bold text-xl">
          Let us help you with your search
        </CardDescription>
      </CardHeader>
      <p className="p-9 text-center text-2xl font-bold">
        Simply answer these 5 questions to see courses perfectly matched to you.
      </p>
      <CardFooter>
        <Button
          disabled={isLoading}
          onClick={handleSearchToggle}
          className="flex mx-auto rounded-full px-12 py-6 hover:bg-sky-500 "
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 animate-spin" />
              Please wait
            </>
          ) : (
            "Get Started"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoadMap;
