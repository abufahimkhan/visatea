"use client";
import { useState } from "react";
import SelectOptions from "../../../common/SelectOptions";

const Options = ["Chattogram", "Dhaka-Dhanmondi", "Dhaka-Gulshan", "Sylhet"];
const IDPOfficeOptions = () => {
  const [data, setData] = useState<string>("");
  const handleDataSelect = (value: string) => {
    setData(value);
  };
  return (
    <SelectOptions
      placeholder="Select"
      data={Options}
      value={data}
      onSelect={handleDataSelect}
    />
  );
};

export default IDPOfficeOptions;
