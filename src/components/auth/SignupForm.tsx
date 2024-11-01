"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Button } from "../ui/button";
import axios from "axios";

const formSchema = z.object({
  firstName: z.string().min(5, { message: "At least 5 characters" }),
  lastName: z.string().min(5, { message: "At least 5 characters" }),
  mobileNumber: z.string().min(5, { message: "At least 5 characters" }),
  email: z.string().min(5, { message: "At least 5 characters" }),
  createPassword: z.string().min(5, { message: "At least 5 characters" }),
  agreementTermsCondition: z.boolean().refine((trigger) => trigger === true, {
    message: "You must agree to the terms and conditions",
  }),
  enquiry: z.boolean().refine((target) => target === true, {
    message: "(required)",
  }),
  agreementCommunication: z.boolean().refine((target) => target === true, {
    message:
      "You must agree to receive communication, offers and other marketing information",
  }),
});

const SignupForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      createPassword: "",
      enquiry: false,
      agreementTermsCondition: false,
      agreementCommunication: false,
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("http://localhost:3001/signup", {
        firstName: values.firstName,
        lastName: values.lastName,
        mobileNumber: values.mobileNumber,
        email: values.email,
        createPassword: values.createPassword,
        enquiry: values.enquiry,
        agreementTermsCondition: values.agreementTermsCondition,
        agreementCommunication: values.agreementCommunication,
      });
      console.log("Signup successful:", response.data);
    } catch (error: any) {
      console.error("Signup error:", error.response?.data || error.message);
    }
    console.log("Values", values);
  };
  return (
    <div className="mx-auto flex flex-col justify-center items-center rounded-lg border max-w-xs sm:max-w-3xl w-full h-full px-6 sm:px-12 py-6 border-slate-300 mt-5 mb-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="first name" {...field} />
                </FormControl>
                <FormDescription>Enter your First name</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="last name" {...field} />
                </FormControl>
                <FormDescription>Enter your last name</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobileNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mobile Number</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="mobile number" {...field} />
                </FormControl>
                <FormDescription>Enter your Mobile Number</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="email" {...field} />
                </FormControl>
                <FormDescription>Enter your email address</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="createPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Create Password</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="create password" {...field} />
                </FormControl>
                <FormDescription>Create a strong password</FormDescription>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="enquiry"
            render={({ field }) => (
              <FormItem className="flex">
                <FormControl>
                  <Input
                    type="checkbox"
                    className="w-5"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                </FormControl>
                <FormLabel className="ml-2">
                  I agree to Visa Tea Terms and privacy policy
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="agreementTermsCondition"
            render={({ field }) => (
              <FormItem className="flex">
                <FormControl>
                  <Input
                    type="checkbox"
                    className="w-5"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                </FormControl>
                <FormLabel className="ml-2">
                  Please contact me by phone, email or SMS to assist with my
                  enquiry
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="agreementCommunication"
            render={({ field }) => (
              <FormItem className="flex">
                <FormControl>
                  <Input
                    type="checkbox"
                    className="w-6"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                </FormControl>
                <FormLabel className="ml-2">
                  I agree to receive occasional communications from IDP about
                  courses, offers and other marketing information
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="py-5">
            <Button type="submit" className="bg-black">
              Signup
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
