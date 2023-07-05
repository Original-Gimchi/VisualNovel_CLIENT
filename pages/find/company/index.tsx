import Category from '@/components/atoms/Category';
import CompanyItem from '@/components/atoms/CompanyItem';
import Image from 'next/image';
import React from 'react';
import Face from '@/assets/face.png';
import Input from '@/components/atoms/Input';
import classNames from 'classnames';
import Button from '@/components/atoms/Button';

const Company = () => {
  const [categoryInput, setCategoryInput] = React.useState('');
  const [categories, setCategories] = React.useState<string[]>([]);
  const onEnterAddHashtag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (categories.includes(categoryInput)) return setCategoryInput('');
      setCategories([...categories, categoryInput]);
      setCategoryInput('');
    }
  };

  const removeHashtag = (index: number) => {
    setCategories(categories.filter(category => category !== categories[index]));
  };

  return (
    <div className="w-full py-[40px] flex justify-center items-center flex-col gap-[18px]">
      <div className="w-full flex ml-[60vw] gap-[12px]">
        <Image
          src={Face}
          width={999}
          height={999}
          alt="logo"
          style={{
            width: '42px',
            height: '42px'
          }}
        />
        <span className="font-[700] text-[32px]">나와 맞는 회사 찾기</span>
      </div>
      <div className="flex flex-col gap-[8px]">
        <label htmlFor={'id'} className="font-bold">
          원하는 키워드를 추가하세요
        </label>
        <input
          onChange={e => setCategoryInput(e.target.value)}
          value={categoryInput}
          onKeyPress={onEnterAddHashtag}
          id={'id'}
          className="w-[40vw] h-[40px] rounded-[8px] outline-none pl-[16px]"
        />
      </div>
      <div className="flex gap-[8px] w-[40vw] flex-wrap">
        {categories.map((category, index) => (
          <Category className="bg-white" key={category} onClick={() => removeHashtag(index)}>
            {category}
          </Category>
        ))}
      </div>
      <Button className="mr-auto ml-[30%] w-[220px] h-[42px] text-[14px]">찾아보기</Button>
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
