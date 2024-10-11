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

const Events = () => {
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
        <CardTitle>Events</CardTitle>
        <CardDescription>Click search when you&apos;re done</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 ">
        <div className="space-y-1 flex-1">
          <Label htmlFor="city">City</Label>
          <Input id="city" defaultValue="@peduarte" />
        </div>

        <div className="space-y-1 flex-1">
          <Label htmlFor="month">Month</Label>
          <Input id="month" defaultValue="@peduarte" />
        </div>

        <div className="space-y-1 flex-1">
          <Label htmlFor="study-destination">Study Destination</Label>
          <Input id="study-destination" defaultValue="@peduarte" />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          disabled={isLoading}
          onClick={handleSearchToggle}
          className="flex w-auto rounded-full px-12 py-6"
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

export default Events;
