import { ReactNode } from "react";

export default function Frame({ children }: { children: ReactNode }) {
  return <div className="max-w-3xl w-full px-10 mx-auto">{children}</div>;
}
