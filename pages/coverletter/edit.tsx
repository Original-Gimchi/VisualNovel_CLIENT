import Button from "@/components/atoms/Button";
import Frame from "@/components/atoms/Frame";
import TextArea from "@/components/atoms/TextArea";
import ThinkingIcon from "@/components/icons/ThinkingIcon";

export default function CoverLetterEdit() {
  return (
    <Frame>
      <div className="flex items-center gap-4 mt-9">
        <ThinkingIcon />
        <p className="text-4xl font-black">자기소개서 첨삭 </p>
      </div>
      <div className="mt-10">
        <TextArea placeholder="자기소개서를 입력해주세요." className="h-96" />
      </div>

      <div className="flex justify-center mt-14">
        <Button>첨삭하기</Button>
      </div>
    </Frame>
  );
}
