import {
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Input from "./Input";
import PlusIcon from "../icons/PlusIcon";
import Category from "./Category";

interface PlusInputProps extends InputHTMLAttributes<HTMLInputElement> {
  stackList: string[];
  setStackList: Dispatch<SetStateAction<string[]>>;
  label?: string;
}

export default function PlusInput({
  stackList,
  setStackList,
  ...props
}: PlusInputProps) {
  const [nowStackList, setNowStackList] = useState<string[]>([]);
  const [nowValue, setNowValue] = useState<string>("");

  useEffect(() => {
    setStackList(nowStackList);
  }, [nowStackList, setStackList]);

  return (
    <div>
      <div className="relative">
        <Input onChange={(e) => setNowValue(e.target.value)} {...props} />
        <PlusIcon
          className="cursor-pointer absolute top-11 right-4"
          onClick={() => setNowStackList((prev) => [...prev, nowValue])}
        />
        <div className="h-5" />
        <Category.Group categorys={nowStackList} />
      </div>
    </div>
  );
}
