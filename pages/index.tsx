import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import TextArea from "@/components/atoms/TextArea";

export default function Home() {
  return (
    <div>
      <Button disabled>완료하기</Button>
      <Input
        id="company"
        placeholder="지원 회사를 기입해주세요"
        label="지원회사"
      />
      <TextArea id="textarea" placeholder="엄" isClipBoard label="안녕하세요" />
    </div>
  );
}
