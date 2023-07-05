import Frame from "@/components/atoms/Frame";
import ThinkingIcon from "@/components/icons/ThinkingIcon";
import { coverLetterState } from "@/store/coverletter.store";
import { useRecoilState } from "recoil";

export default function CoverLetterResult() {
  const [coverLetter] = useRecoilState(coverLetterState);
  return (
    <Frame>
      <div className="flex items-center gap-4 mt-9">
        <ThinkingIcon />
        <p className="text-4xl font-black">자기소개서 첨삭 결과</p>
      </div>
      <div className="mt-10 bg-white p-6">{coverLetter}</div>
    </Frame>
  );
}
