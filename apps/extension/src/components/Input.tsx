import React, { useId } from "react";

export type InputProps = {
  label: string;
  onChange: (value: string) => void;
  value?: string;
};

export const Input = ({ label, onChange, value }: InputProps) => {
  const id = useId();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="h-[40px] flex flex-row">
      <label
        className="flex items-center bg-gray-300 p-1 rounded-tl-md rounded-bl-md"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        className="p-3 rounded-tr-md rounded-br-md"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
