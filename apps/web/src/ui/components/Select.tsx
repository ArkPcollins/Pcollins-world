interface Option {
    label: string;
    value: string;
  }
  
  interface SelectProps {
    label: string;
    options: Option[];
    value?: string;
    onChange?: (
      e: React.ChangeEvent<HTMLSelectElement>
    ) => void;
  }
  
  export function Select({
    label,
    options,
    value,
    onChange
  }: SelectProps) {
    return (
      <div className="space-y-1">
        <label>{label}</label>
  
        <select
          value={value}
          onChange={onChange}
          className="
            w-full
            border
            rounded-lg
            p-3
          "
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }