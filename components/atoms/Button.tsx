import classNames from "classnames";
import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  varient?: "primary" | "secondary";
  disabled?: boolean;
}

export default function Button({
  className,
  varient = "primary",
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(
        "px-20 py-3 bg-secondary text-white rounded-full whitespace-nowrap",
        { "cursor-not-allowed !bg-disabled !text-gray-400": disabled },
        className
      )}
      {...props}
    />
  );
}
