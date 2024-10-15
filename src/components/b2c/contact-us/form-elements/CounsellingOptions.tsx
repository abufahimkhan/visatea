"use client";
import { useState } from "react";
import SelectOptions from "../../common/SelectOptions";

const Options = ["In-Person", "Virtual Consulting"];
const CounsellingOptions = () => {
  const [data, setData] = useState<string>("");
  const handleDataSelect = (value: string) => {
    setData(value);
  };
  return (
    <SelectOptions
      data={Options}
      value={data}
      onSelect={handleDataSelect}
      placeholder="Select"
    />
  );
};

export default CounsellingOptions;
