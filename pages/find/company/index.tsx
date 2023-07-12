import Category from '@/components/atoms/Category';
import CompanyItem from '@/components/atoms/CompanyItem';
import Image from 'next/image';
import React from 'react';
import Face from '@/assets/face.png';
import Button from '@/components/atoms/Button';
import httpClient from '@/apis';
import { useRouter } from 'next/router';

const Company = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [categoryInput, setCategoryInput] = React.useState('');
  const [categories, setCategories] = React.useState<string[]>([]);
  const [foundCompanyList, setFoundCompanyList] = React.useState<any[]>([]);
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

  const handleCompanySearch = () => {
    setIsLoading(true);
    httpClient.company.fit({ params: { keyword: categories.join(',') } }).then(r => {
      setFoundCompanyList(r.data.companies);
      console.log('r.data...........', r.data.companies);
    });
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
        <label htmlFor="id" className="font-bold">
          원하는 키워드를 추가하세요
        </label>
        <input
          onChange={e => setCategoryInput(e.target.value)}
          value={categoryInput}
          onKeyPress={onEnterAddHashtag}
          id="id"
          className="w-[40vw] h-[40px] rounded-[8px] outline-none pl-[16px]"
        />
      </div>
      <div className="flex gap-[8px] w-[40vw] flex-wrap">
        {categories.map((category, index) => (
          <Category.Chip className="bg-white" key={category} onClick={() => removeHashtag(index)}>
            {category}
          </Category.Chip>
        ))}
      </div>
      {isLoading && <h1>결과를 생성 중이에요... 조금만 기다려주세요!</h1>}
      <Button className="mr-auto ml-[30%] w-[220px] h-[42px] text-[14px]" onClick={handleCompanySearch}>
        찾아보기
      </Button>
      {foundCompanyList.map((foundCompany, index) => (
        <CompanyItem key={index} className="w-[40vw] h-[fit-content] p-[28px] flex flex-col gap-[12px]">
          <div className="w-full flex items-center">
            <span className="text-[1.5rem] font-[700] ">{foundCompany.company}</span>
            <span
              className="text-[12px] ml-auto text-[gray] cursor-pointer"
              onClick={() => router.push(`/find/company/${foundCompany.company}`)}
            >
              자세히보기 {'>'}
            </span>
          </div>
          <p className="text-[14px] mt-[12px]">{foundCompany.oneLineIntroduce}</p>
        </CompanyItem>
      ))}
    </div>
  );
};

export default Company;
