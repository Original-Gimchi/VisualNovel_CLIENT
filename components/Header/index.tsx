export default function Header() {
  return (
    <header className="flex justify-between md:px-32 lg:px-56 xl:px-80 bg-white px-8 py-4">
      <div className="text-primary text-5xl font-black tracking-wider">
        JASO
      </div>
      <ul className="flex gap-3 items-center [&>li]:rounded-lg [&>li]:px-3 [&>li]:py-2">
        <li>자기소개서 작성</li>
        <li>가입 정보</li>
        <li className="p-1 bg-primary text-white">로그인</li>
      </ul>
    </header>
  );
}
