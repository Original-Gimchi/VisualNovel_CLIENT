import Button from "../atoms/Button";
import Input from "../atoms/Input";

export default function SignupModal() {
  return (
    <div className="p-6 flex flex-col gap-6">
      <Input label="아이디" className="border border-primary" />
      <Input label="비밀번호" className="border border-primary" />
      <Button className="my-5">회원가입</Button>
    </div>
  );
}
