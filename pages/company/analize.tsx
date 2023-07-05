import Category from "@/components/atoms/Category";
import Frame from "@/components/atoms/Frame";
import ThinkingIcon from "@/components/icons/ThinkingIcon";
import Image from "next/image";

export default function Analize() {
  const categorys = [
    "인사담당자",
    "개발싸개",
    "웹싸개",
    "개발싸개",
    "웹싸개",
    "개발싸개",
    "웹싸개",
    "개발싸개",
    "웹싸개",
    "개발싸개",
    "웹싸개",
    "개발싸개",
    "웹싸개",
    "개발싸개",
    "웹싸개",
    "개발싸개",
    "웹싸개",
    "개발싸개",
    "웹싸개",
    "개발싸개",
    "웹싸개",
    "개발싸개",
    "웹싸개",
    "개발싸개",
    "웹싸개",
  ];
  return (
    <Frame>
      <div className="pt-9">
        <div className="flex gap-4 items-center">
          <ThinkingIcon />
          <span className="text-4xl font-black">내 기업 분석</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="max-w-sm">
            <div className="mb-2">기업 키워드</div>
            <Category.Group categorys={categorys} />
          </div>
          <div className="whitespace-nowrap">
            <Image src="/images/wc.png" alt="dd" width={300} height={300} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <p className="">한줄소개</p>
            <p className="p-5 bg-white">
              어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고
            </p>
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <p className="">전체소개</p>
            <p className="p-5 bg-white">
              어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고어쩌고
            </p>
          </div>
        </div>
      </div>
    </Frame>
  );
}
