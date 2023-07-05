import { useForm } from "react-hook-form";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import httpClient from "@/apis";

export default function LoginModal() {
  const { register, handleSubmit } = useForm();
  return (
    <form
      className="p-6 flex flex-col gap-6"
      onSubmit={handleSubmit((loginFormData) => {
        httpClient.auth.signin(loginFormData).then((r) => {
          console.log(r.data);
        });
      })}
    >
      <Input
        label="이메일"
        className="border border-primary"
        placeholder="이메일을 입력해주세요."
        registerReturn={register("email")}
      />
      <Input
        label="비밀번호"
        className="border border-primary"
        placeholder="비밀번호를 입력해주세요."
        registerReturn={register("password")}
      />
      <Button className="my-5">로그인</Button>
    </form>
  );
}
