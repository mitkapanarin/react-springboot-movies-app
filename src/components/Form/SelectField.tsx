import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IDropdownOptions } from "@/types/interface";
import { Label } from "../ui/label";
import { GenreEnum } from "@/types/enum";

const SelectField = ({
  label,
  options,
  value,
  onValueChange,
  required,
}: {
  id?: string;
  label: string;
  options: IDropdownOptions[];
  value: string;
  onValueChange: (e: GenreEnum) => void;
  required?: boolean;
}) => {
  return (
    <Select onValueChange={onValueChange} value={value} required={required}>
      <Label>{label}</Label>
      <SelectTrigger className="">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options?.map((option: IDropdownOptions, index: number) => (
            <SelectItem key={index} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectField;
