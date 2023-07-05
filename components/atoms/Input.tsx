import classNames from "classnames";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  tag?: "input" | "textarea";
  label: string;
}

export default function Input({
  id,
  tag = "input",
  label,
  className,
  ...props
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="">
        {label}
      </label>
      <input
        id={id}
        className={classNames(
          "w-full p-[13.5px] mt-2",
          {
            // "h-48": tag === "input",
          },
          className
        )}
        {...props}
      />
    </div>
  );
}
