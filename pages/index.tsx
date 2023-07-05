import Button from '@/components/atoms/Button';
import React from 'react';
import Link from 'next/link';
import Modal from '@/components/atoms/Modal';

const Home = () => {
  return (
    <div className="w-full bg-white h-screen text-black bg-[url('/images/homeBG.png')]">
      <Modal />
      <div className="flex justify-center">
        <div className=" text-right w-4/5 mt-10 leading-tight">
          <div className="text-[110px] text-white font-bold">JASO</div>
          <div className="text-[50px] text-white font-bold">합격하는 자기소개서 AI</div>
        </div>
      </div>
      <div className="fixed bottom-0 w-screen h-1/4 bg-white"></div>
      <div className="flex justify-center">
        <div className="fixed bottom-20 my-10 shadow-2xl rounded-2xl w-4/5 h-1/3 bg-white">
          <div className="my-5 text-[25px] text-center font-semibold">많은 사람들이 함께하고 있습니다</div>
          <div className="flex justify-center">
            <ul className="flex text-center">
              <li className="border-solid border-r-2 px-20">
                <div className=" font-semibold text-[60px]">
                  2.8<span className="text-[20px]"> 천</span>
                </div>
                <div>회원 수</div>
              </li>
              <li className="border-solid border-r-2 px-20">
                <div className=" font-semibold text-[60px]">
                  3.2<span className="text-[20px]"> 천</span>
                </div>
                <div>첨삭 완료건</div>
              </li>
              <li className="border-solid border-r-2 px-20">
                <div className=" font-semibold text-[60px]">
                  2.4<span className="text-[20px]"> 천</span>
                </div>
                <div>합격자 수</div>
              </li>
              <li>
                <div className=" font-semibold text-[60px] px-20">
                  4.7<span className="text-[20px]"> 점</span>
                </div>
                <div>평점</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="fixed bottom-7 bg-[#007AFF] text-[15px] px-5 py-2 rounded font-semibold text-white">
            <Link href="/">로그인하고 시작하기</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
