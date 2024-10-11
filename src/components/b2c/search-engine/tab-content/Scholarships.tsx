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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const Scholarships = () => {
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
        <CardTitle>Scholarships</CardTitle>
        <CardDescription>Click search when you&apos;re done.</CardDescription>
      </CardHeader>
      <CardContent className="space-x-2 flex flex-col  space-y-4 md:flex-row md:space-x-4 md:space-y-0 items-center justify-start *:w-full">
        <div className="space-y-1">
          <Label htmlFor="name">Select study level</Label>
          <Input id="course-subject" defaultValue="Pedro Duarte" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="username">Select a study destination</Label>
          <Input id="level" defaultValue="@peduarte" />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          disabled={isLoading}
          onClick={handleSearchToggle}
          className="flex w-auto rounded-full px-12 py-6 hover:bg-sky-500 "
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 animate-spin" />
              Please wait
            </>
          ) : (
            "Search Now"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Scholarships;
