import classNames from "classnames";
import { ReactNode } from "react";

interface FrameProps {
  children: ReactNode;
  className?: string;
}

export default function Frame({ children, className = "" }: FrameProps) {
  return (
    <div className={classNames("max-w-3xl w-full px-10 mx-auto", className)}>
      {children}
    </div>
  );
}
