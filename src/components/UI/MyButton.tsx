import React from "react";
interface IButtonProps {
  children: React.ReactNode;
  onClick?: (e: any) => void;
  disabled?: any;
  type?: any;
}
const MyButton: React.FC<IButtonProps> = ({
  children,
  onClick,
  disabled,
  type,
}) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
