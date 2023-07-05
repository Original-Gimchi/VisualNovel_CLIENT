import classNames from "classnames";
import { HTMLAttributes } from "react";

interface CategoryProps extends HTMLAttributes<HTMLButtonElement> {
  varient?: "primary" | "secondary";
  disabled?: boolean;
}

function Chip({ className, disabled = false, ...props }: CategoryProps) {
  return (
    <button
      style={{
        boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.1)",
      }}
      className={classNames(
        "px-4 py-2 rounded-[999px] bg-black-500 bg-white whitespace-nowrap",
        "text-[12px] font-[600] text-[gray]",
        className
      )}
      {...props}
    />
  );
}

interface GroupProps {
  categorys: string[];
}

function Group({ categorys }: GroupProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categorys.map((category, idx) => (
        <Chip key={idx}>{category}</Chip>
      ))}
    </div>
  );
}

const Category = { Chip, Group };

export default Category;
