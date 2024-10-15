import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { studyAbroadCountries } from "@/components/utils/data/StudyAbroadCountries";
import { nanoid } from "nanoid";

const DestinationOptions = () => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent className="w-80">
        {Object.keys(studyAbroadCountries).map((region) => (
          <SelectGroup key={region}>
            <SelectLabel className="text-sky-500 underline">
              {region}
            </SelectLabel>
            {studyAbroadCountries[
              region as keyof StudyAbroadCountriesInterface
            ].map(({ country, description }) => (
              <SelectItem key={nanoid()} value={country}>
                <span className="bg-violet-500 text-white rounded-md p-1 text-sm">
                  {country}
                </span>
                <span>–</span>
                <span className="text-xs">{description}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DestinationOptions;
