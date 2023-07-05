import classNames from "classnames";
import { InputHTMLAttributes, useRef } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { SignupForm } from "../Modal/SignupModal";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isClipboard?: boolean;
  registerReturn?: UseFormRegisterReturn;
}

export default function Input({
  id,
  label,
  isClipboard = false,
  className,
  registerReturn,
  ...props
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <label htmlFor={id} className="">
        {label}
      </label>
      <input
        id={id}
        ref={inputRef}
        className={classNames("w-full p-[13.5px] mt-2 rounded", className)}
        {...registerReturn}
        {...props}
      />
    </div>
  );
}
