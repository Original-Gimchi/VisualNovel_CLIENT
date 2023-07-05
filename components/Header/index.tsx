import useModal from "@/hooks/useModal";
import { useRouter } from "next/router";
import LoginModal from "../Modal/LoginModal";
import SignupModal from "../Modal/SignupModal";
import { Storage } from "@/storage";

export default function Header() {
  const router = useRouter();
  const { openModal } = useModal();
  return (
    <header className="flex justify-between md:px-32 lg:px-56 xl:px-80 bg-white px-8 py-4">
      <div
        className="text-primary text-5xl font-black tracking-wider select-none cursor-pointer"
        onClick={() => router.push("/")}
      >
        JASO
      </div>
      <ul className="flex gap-3 items-center [&>li]:rounded-lg [&>li]:px-3 [&>li]:py-2">
        <li
          className="cursor-pointer"
          onClick={() => router.push("/coverletter")}
        >
          자기소개서 작성
        </li>
        <li className="cursor-pointer">가입 정보</li>
        {!Storage.getItem("ACCESS_TOKEN") ? (
          <>
            <li
              className="cursor-pointer p-1 bg-primary text-white"
              onClick={() =>
                openModal({ title: "로그인", content: <LoginModal /> })
              }
            >
              로그인
            </li>
            <li
              className="cursor-pointer p-1 bg-primary text-white"
              onClick={() =>
                openModal({ title: "회원가입", content: <SignupModal /> })
              }
            >
              회원가입
            </li>
          </>
        ) : (
          <li className="cursor-pointer p-1 bg-primary text-white">로그아웃</li>
        )}
      </ul>
    </header>
  );
}
