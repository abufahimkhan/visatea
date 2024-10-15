import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import SelectOptions from "./SelectOptions";

const ContactForm = () => {
  return (
    <div className="grid w-full items-center gap-1.5 *:p-2">
      <div className="grid grid-cols-2 justify-evenly gap-5">
        <div>
          {" "}
          <Label htmlFor="email">First name*</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <Label htmlFor="email">Last name*</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5">
        <div>
          {" "}
          <Label htmlFor="email">Mobile number*</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-evenly gap-5">
        <div>
          {" "}
          <Label htmlFor="email">Your preferred study destination*</Label>
          <SelectOptions label={""} value={""} />
        </div>
        <div>
          <Label htmlFor="email">When do you plan to study?*</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-evenly gap-5">
        <div>
          {" "}
          <Label htmlFor="email">Preferred mode of counselling*</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <Label htmlFor="email">How would you fund your education?*</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-evenly gap-5">
        <div>
          {" "}
          <Label htmlFor="email">Preferred study level*</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <Label htmlFor="email">Nearest IDP Office*</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-evenly gap-5">
        <div>
          {" "}
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-evenly gap-5">
        <div>
          {" "}
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
