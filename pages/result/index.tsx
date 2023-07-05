import Button from "@/components/atoms/Button";
import Frame from "@/components/atoms/Frame";
import TextArea from "@/components/atoms/TextArea";
import ThinkingIcon from "@/components/icons/ThinkingIcon";

export default function Result() {
  return (
    <Frame>
      <div className="flex flex-col gap-9 mt-9">
        <div>
          <div className="flex items-center gap-4 text-4xl font-black">
            <ThinkingIcon />
            <h1>자기소개서 결과</h1>
          </div>
          <div className="text-[#595959] mt-3">
            자기소개서 작성 시작하기 망설여졌나요? 이젠 똑똑한 인공지능 JASO가
            도와드릴게요!
          </div>
        </div>
        <TextArea label="나의 자기소개서" isClipBoard />
        <TextArea label="구글과 나" isClipBoard />
        <Button>완료하기</Button>
      </div>
    </Frame>
  );
}
