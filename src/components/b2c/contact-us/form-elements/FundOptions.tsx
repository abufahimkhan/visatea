"use client";
import { useState } from "react";
import SelectOptions from "../../../common/SelectOptions";

const Options = [
  "Self-Funded",
  "Parents",
  "Seeking Scholarship",
  "Seeking Government Scholarship",
  "Have Government Scholarship",
  "Bank Loan",
  "Other",
  "Employer Scholarship",
];

const FundOptions = () => {
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

export default FundOptions;
