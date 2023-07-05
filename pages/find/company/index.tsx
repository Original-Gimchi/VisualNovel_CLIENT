import Category from '@/components/atoms/Category';
import CompanyItem from '@/components/atoms/CompanyItem';
import React from 'react';

const Company = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col gap-[18px]">
      {[1, 2, 3].map(index => (
        <CompanyItem key={index} className="w-[40vw] h-[fit-content] p-[28px] flex flex-col gap-[12px]">
          <div className="w-full flex items-center">
            <span className="text-[1.5rem] font-[700] ">아이오테크</span>
            <span className="text-[12px] ml-auto text-[gray] cursor-pointer">자세히보기 {'>'}</span>
          </div>
          <div className="flex gap-[12px]">
            {['산업자동화', '데이터획득', '제어솔루션', '센서기술', '실험연구'].map(tag => (
              <Category key={tag}>#{tag}</Category>
            ))}
          </div>
          <p className="text-[14px] mt-[12px]">
            산업 자동화 및 실험 연구 분야에서 측정, 제어 솔루션을 제공하는 대한민국 중소기업
          </p>
        </CompanyItem>
      ))}
    </div>
  );
};

export default Company;
