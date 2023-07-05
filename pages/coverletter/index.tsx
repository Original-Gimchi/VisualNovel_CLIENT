import Button from "@/components/atoms/Button";
import Category from "@/components/atoms/Category";
import Frame from "@/components/atoms/Frame";
import Input from "@/components/atoms/Input";
import ThinkingIcon from "@/components/icons/ThinkingIcon";

export default function CoverLetter() {
  const categorys = [
    "경영·사무·금융",
    "경영·사무·금융",
    "경영·사무·금융",
    "경영·사무·금융",
  ];

  return (
    <Frame>
      <div className="flex flex-col gap-6 mt-10">
        <div className="flex items-center gap-4">
          <ThinkingIcon />
          <p className="text-4xl font-black">자기소개서</p>
        </div>
        <h3 className="text-xl font-black">지원자 정보</h3>
        <Input label="지원회사" placeholder="지원 회사를 기입해주세요." />

        <div>
          <p className="mb-2">직무/직종</p>
          <Category.Group categorys={categorys} />
        </div>
        <Input
          label="기술 스택/보유 능력"
          placeholder="지원 회사를 기입해주세요."
        />

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-black">본인 경험 및 문항</h3>
          <p>아래 문항은 50자내로 답하여 주세요.</p>
          <Input
            label="1. 지원하게 된 동기를 서술해 주세요."
            placeholder="ex) 열정있는 직원이 되어 귀사를 성장시키고자 지원하였습니다!"
          />
          <Input
            label="2. 추가로 이야기하고 싶은 본인의 이력과 경험을 자세히 서술해 주세요."
            placeholder="ex) 저의 장점은 밝은 성격입니다. 회사에 일하며 항상 밝은 분위기를 이끌어나가겠습니다."
          />
        </div>

        <div className="flex flex-col gap-5 items-center my-5">
          <Button className="px-8">+</Button>
          <Button>완료하기</Button>
        </div>
      </div>
    </Frame>
  );
}
