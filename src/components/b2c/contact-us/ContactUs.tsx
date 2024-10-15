import { Images } from "@/components/utils/image";
import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="grid lg:grid-cols-2 px-24  grid-cols-1 justify-center items-center h-full">
      <div className="mx-auto w-full">
        <ContactForm />
      </div>
      <div className="">
        <Image src={Images.form_banner} alt="Side Banner" />
      </div>
    </div>
  );
};

export default ContactUs;
