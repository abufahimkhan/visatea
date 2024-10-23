"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import CheckBox from "../../../common/CheckBox";
import { DatePicker } from "../../../common/DatePicker";
import CounsellingOptions from "./CounsellingOptions";
import DestinationOptions from "./DestinationOptions";
import FundOptions from "./FundOptions";
import IDPOfficeOptions from "./IDPOfficeOptions";
import StudyLevelOptions from "./StudyLevelOptions";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchToggle = () => {
    setIsLoading(!isLoading);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div className="grid w-full items-center gap-1.5 *:gap-5 *:p-2 ">
      <div className="grid grid-cols-2 justify-evenly ">
        <div>
          <Label htmlFor="email">First name*</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div>
          <Label htmlFor="email">Last name*</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div>
          <Label htmlFor="email">Mobile number*</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-evenly">
        <div>
          <Label htmlFor="email">Your preferred study destination*</Label>
          <DestinationOptions />
        </div>
        <div>
          <Label htmlFor="email">When do you plan to study?*</Label>
          <DatePicker />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-evenly">
        <div>
          <Label htmlFor="email">Preferred mode of counselling*</Label>
          <CounsellingOptions />
        </div>
        <div>
          <Label htmlFor="email">How would you fund your education?*</Label>
          <FundOptions />
        </div>
      </div>
      <div className="grid grid-cols-2 justify-evenly">
        <div>
          <Label htmlFor="email">Preferred study level*</Label>
          <StudyLevelOptions />
        </div>
        <div>
          <Label htmlFor="email">Nearest IDP Office*</Label>
          <IDPOfficeOptions />
        </div>
      </div>
      <div className="grid grid-cols-1 justify-evenly">
        <CheckBox
          label="I agree to VisaTea Terms and privacy policy"
          htmlFor="terms"
          id="terms"
        />
        <CheckBox
          label="Please contact me by phone, email or SMS to assist with my enquiry"
          htmlFor="enquiry"
          id="enquiry"
        />
        <CheckBox
          label="I would like to receive updates and offers from VisaTea"
          htmlFor="updates"
          id="updates"
        />
      </div>
      <div className="mt-5">
        <Button
          disabled={isLoading}
          onClick={handleSearchToggle}
          className="w-36 rounded-full py-6 hover:bg-sky-500 "
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 animate-spin" />
              Please wait
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
