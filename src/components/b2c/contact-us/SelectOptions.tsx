import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { nanoid } from "nanoid";
import { studyAbroadCountries } from "@/components/utils/data/StudyAbroadCountries";

interface PropTypes {
  label: string;
  value: string;
}

const SelectOptions: React.FC<PropTypes> = ({ label, value }) => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        {Object.keys(studyAbroadCountries).map((region) => (
          <SelectGroup key={region}>
            <SelectLabel>{region}</SelectLabel>
            {/* Correct mapping over countries in each region */}
            {studyAbroadCountries[
              region as keyof StudyAbroadCountriesInterface
            ].map(({ country, description }: any) => (
              <SelectItem key={nanoid()} value={country}>
                {country} – {description}
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectOptions;
