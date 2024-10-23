"use client";
import { useState } from "react";
import SelectOptions from "../../../common/SelectOptions";

const Options = [
  "English Language",
  "School",
  "Undergraduate",
  "Postgraduate",
  "Doctorate",
  "Vocational",
  "University Preparation",
];
const StudyLevelOptions = () => {
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

export default StudyLevelOptions;
