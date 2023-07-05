import classNames from "classnames";
import { InputHTMLAttributes, RefObject, useRef, useState } from "react";
import ClipboardIcon from "../icons/ClipboardIcon";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isClipboard?: boolean;
}

export default function Input({
  id,
  label,
  isClipboard = false,
  className,
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
        className={classNames(
          "w-full p-[13.5px] mt-2 rounded",

          className
        )}
        {...props}
      />
    </div>
  );
}
