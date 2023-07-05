import classNames from "classnames";
import { TextareaHTMLAttributes, useRef } from "react";
import ClipboardIcon from "../icons/ClipboardIcon";
import copy from "copy-to-clipboard";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
  isClipBoard?: boolean;
  label?: string;
}

export default function TextArea({
  id,
  label,
  className,
  isClipBoard = false,
  ...props
}: TextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="relative">
      {label && (
        <label className="text-2xl font-black mb-5" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        ref={textareaRef}
        className={classNames(
          "rounded resize-none w-full h-48 px-5 py-4",
          { isClipBoard: "pr-20" },
          className
        )}
        {...props}
      />
      {isClipBoard && (
        <div
          className="absolute top-4 right-4"
          onClick={() => copy(textareaRef.current?.value || "")}
        >
          <ClipboardIcon />
        </div>
      )}
    </div>
  );
}
