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
import { Loader2 } from "lucide-react";
import React, { useState } from "react";

const RoadMap = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchToggle = () => {
    setIsLoading(!isLoading);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card className="flex flex-col items-center justify-center text-center py-9 shadow-lg rounded-lg bg-white">
      <CardHeader className="space-y-4">
        <CardTitle className="text-2xl font-bold text-gray-900">
          Let us help you with your search
        </CardTitle>
        <CardDescription className="text-gray-600">
          Simply answer these 5 questions to see courses perfectly matched to
          you.
        </CardDescription>
      </CardHeader>
      <CardFooter className="w-full flex justify-center">
        <Button
          disabled={isLoading}
          onClick={handleSearchToggle}
          className="w-auto rounded-full px-12 py-4 text-lg font-semibold bg-sky-500 text-white hover:bg-blue-700 transition duration-200"
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
