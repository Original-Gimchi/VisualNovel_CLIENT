import httpClient from "@/apis";
import Button from "@/components/atoms/Button";
import Frame from "@/components/atoms/Frame";
import TextArea from "@/components/atoms/TextArea";
import ThinkingIcon from "@/components/icons/ThinkingIcon";
import { coverLetterState } from "@/store/coverLetter.store";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";

export default function CoverLetterEdit() {
  const [content, setContent] = useState("");
  const [, setCoverLetter] = useRecoilState(coverLetterState);

  const router = useRouter();

  const handleClick = () => {
    httpClient.jasoUpdate.auto({ content }).then((r) => {
      setCoverLetter(r.data);
      router.push("/coverletter/edit/result");
    });
  };

  return (
    <Frame>
      <div className="flex items-center gap-4 mt-9">
        <ThinkingIcon />
        <p className="text-4xl font-black">자기소개서 첨삭</p>
      </div>
      <div className="mt-10">
        <TextArea
          placeholder="자기소개서를 입력해주세요."
          className="h-96"
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="flex justify-center mt-14">
        <Button onClick={handleClick}>첨삭하기</Button>
      </div>
    </Frame>
  );
}
