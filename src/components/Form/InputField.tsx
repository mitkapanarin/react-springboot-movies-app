import { iInputFieldPros } from "@/types/interface";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FC } from "react";

const InputField: FC<iInputFieldPros> = ({
  id,
  name,
  type,
  placeholder,
  label,
  value,
  onChange,
  required,
  disabled,
  description,
  accept,
  min,
  max,
}) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <div className="">
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          accept={accept}
          min={min}
          max={max}
        />
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
    </div>
  );
};

export default InputField;
