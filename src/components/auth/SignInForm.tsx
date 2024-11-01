"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("http://localhost:3001/login", values);
      const token = response.data.token;

      localStorage.setItem("token-", token);
      console.log("Login successful, token:", token);
    } catch (error: unknown) {
      console.error("Login failed:User not found!", error);
    }
    console.log("values:", values);
  };
  return (
    <Form {...form}>
      <div className="mx-auto flex flex-col justify-center items-center rounded-lg border max-w-xs sm:max-w-3xl w-full h-full px-6 sm:px-12 py-6 border-slate-300 mt-5 mb-5">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email" {...field} />
                </FormControl>
                <FormDescription>Enter email address</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormDescription>Enter strong password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="py-5">
            <Button type="submit" className="bg-black">
              Login
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default SignInForm;
