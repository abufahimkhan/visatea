import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignupForm = () => {
  return (
    <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
      <form className="w-full">
        <Label htmlFor="UserEmail" className="sr-only">
          Email
        </Label>
        <div className="border bg-white rounded-lg p-2 sm:flex sm:items-center sm:gap-4">
          <Input
            type="email"
            id="UserEmail"
            placeholder="john@visaTea.com"
            className="w-full border-none outline-none sm:text-sm"
          />
          <Button className="mt-1 w-full bg-sky-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-sky-600 sm:mt-0 sm:w-auto sm:shrink-0">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
