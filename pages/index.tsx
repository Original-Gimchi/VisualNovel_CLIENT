import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";

export default function Home() {
  return (
    <div>
      <Button disabled>완료하기</Button>
      <Input
        id="company"
        placeholder="지원 회사를 기입해주세요"
        label="지원회사"
      />
    </div>
  );
}
