import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PropTypes {
  data: string[]; // Accepts an array of strings
  value: string; // Currently selected value
  placeholder?: string; // Optional placeholder
  onSelect: (value: string) => void; // Callback for when an option is selected
}

const SelectOptions: React.FC<PropTypes> = ({
  data,
  value,
  placeholder,
  onSelect,
}) => {
  return (
    <Select value={value} onValueChange={onSelect}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {data.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default SelectOptions;
