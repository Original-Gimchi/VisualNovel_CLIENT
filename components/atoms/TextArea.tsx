import classNames from "classnames";
import { TextareaHTMLAttributes, useRef } from "react";
import ClipboardIcon from "../icons/ClipboardIcon";
import copy from "copy-to-clipboard";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isClipBoard?: boolean;
}

export default function TextArea({
  isClipBoard = false,
  className,
  ...props
}: TextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="relative">
      <textarea
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
