import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Input } from "../components/Input";

// 1. Convert Props to take a generic type parameter <T>
interface Props<T extends FieldValues> {
  name: Path<T>;       // Ensures the 'name' prop must match an actual key in your form schema
  label: string;
  control: Control<T>; // Forces the control types to match your form schema exactly
  placeholder?: string;
  type?: string;
}

// 2. Declare the generic <T extends FieldValues> on the component function
export function FormInput<T extends FieldValues>({
  name,
  label,
  control,
  placeholder,
  type = "text"
}: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Input
          {...field}
          // Ensure field.value is always handled cleanly, preventing uncontrolled component warnings
          value={field.value ?? ""} 
          type={type}
          label={label}
          placeholder={placeholder}
          error={fieldState.error?.message}
        />
      )}
    />
  );
}