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

const Courses = () => {
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
        <CardTitle>Courses</CardTitle>
        <CardDescription>Click search when you&apos;re done.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="space-y-1 flex-1">
          <Label htmlFor="course-subject">Enter course subject e.g. CSE</Label>
          <Input id="course-subject" defaultValue="Pedro Duarte" />
        </div>
        <div className="space-y-1 flex-1">
          <Label htmlFor="level">Select study level</Label>
          <Input id="level" defaultValue="@peduarte" />
        </div>
        <div className="space-y-1 flex-1">
          <Label htmlFor="destination">Select study destination</Label>
          <Input id="destination" defaultValue="@peduarte" />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          disabled={isLoading}
          onClick={handleSearchToggle}
          className="w-auto rounded-full px-12 py-6"
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

export default Courses;
