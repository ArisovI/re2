import React from "react";
interface IMyInputProps {
  type: string;
  onChange?: (e: any) => void;
  value?: any;
  placeholder?: string;
  className?: string;
}

const MyInput: React.FC<IMyInputProps> = ({
  type,
  onChange,
  value,
  placeholder,
  className,
}) => {
  return (
    <input
      className={className}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default MyInput;
