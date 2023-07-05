import { useForm } from "react-hook-form";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import httpClient from "@/apis";
import { toast } from "react-toastify";

export interface SignupForm {
  ninkName: string;
  email: string;
  password: string;
  belonging: string;
}

export default function SignupModal() {
  const { register, handleSubmit } = useForm();
  return (
    <form
      className="p-6 flex flex-col gap-6"
      onSubmit={handleSubmit((signupData) => {
        httpClient.user.signup(signupData).then((r) => {
          console.log(r.data);
          toast.success("회원가입이 완료되었습니다.");
        });
      })}
    >
      <Input
        label="닉네임"
        className="border border-primary"
        placeholder="닉네임을 입력해주세요."
        registerReturn={register("ninkName")}
      />
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
      <Input
        label="소속"
        className="border border-primary"
        placeholder="소속을 입력해주세요."
        registerReturn={register("belonging")}
      />
      <Button className="my-5">회원가입</Button>
    </form>
  );
}
