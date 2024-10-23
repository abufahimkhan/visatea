"use client";

import { Checkbox } from "@/components/ui/checkbox";

interface PropTypes {
  label: string;
  id: string;
  htmlFor: string;
}
const CheckBox: React.FC<PropTypes> = ({ label, id, htmlFor }) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} />
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
