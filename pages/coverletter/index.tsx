import httpClient from '@/apis';
import Button from '@/components/atoms/Button';
import Category from '@/components/atoms/Category';
import Frame from '@/components/atoms/Frame';
import Input from '@/components/atoms/Input';
import PlusInput from '@/components/atoms/PlusInput';
import ThinkingIcon from '@/components/icons/ThinkingIcon';
import { Storage } from '@/storage';
import { getKoreanDate } from '@/utils/date';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function CoverLetter() {
  const [categoryInput, setCategoryInput] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [oneLineIntroduce, setOneLineIntroduce] = useState('');
  const [jaso, setJaso] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [record, setRecord] = useState('');
  const [skills, setSkills] = useState('');
  const [question, setQuestion] = useState('');
  const [job, setJob] = useState('');
  const router = useRouter();
  const [isClick, setIsClick] = useState(false);

  const handleSave = async () => {
    setIsClick(true);

    const res = await axios.post('http://localhost:8088/api/jaso/create', {
      company: companyName,
      job,
      skills,
      record,
      quest: question,
      experience: jaso,
      max: 500
    });
    Storage.setItem('coverletterrrrrr', res.data);
    router.push('/coverletter/result');
  };

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
    <Frame>
      <div className="flex flex-col gap-6 mt-10">
        <div className="flex items-center gap-4">
          <ThinkingIcon />
          <p className="text-4xl font-black">자기소개서</p>
        </div>
        <h3 className="text-xl font-black">지원자 정보</h3>
        <Input
          label="지원회사"
          placeholder="지원 회사를 기입해주세요."
          onChange={e => setCompanyName(e.target.value)}
        />
        <div>
          <Input
            label="직무/직종"
            onChange={e => setJob(e.target.value)}
            placeholder="직무/직종을 기입해주세요. ex) 재무, 인사"
          />
        </div>
        <div>
          <Input
            label="기술"
            onChange={e => setSkills(e.target.value)}
            placeholder="보유하고 계신 기술을 입력해주세요. ex) 프론트엔드 개발"
          />
        </div>
        <div>
          <Input
            label="예상질문"
            onChange={e => setQuestion(e.target.value)}
            placeholder="질문을 입력해주세요. ex) 저희 회사에 지원하게 된 동기가 무엇인가요?"
          />
        </div>
        <div>
          <Input
            label="경력"
            onChange={e => setRecord(e.target.value)}
            placeholder="경력을 기입해주세요. ex) 카카오 프론트엔드 개발자"
          />
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
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-black">본인 경험 및 문항</h3>
          <p>아래 문항은 50자내로 답하여 주세요.</p>
          <Input
            label="1. 지원하게 된 동기를 서술해 주세요."
            placeholder="ex) 열정있는 직원이 되어 귀사를 성장시키고자 지원하였습니다!"
            onChange={e => setOneLineIntroduce(e.target.value)}
          />
          <Input
            label="2. 추가로 이야기하고 싶은 본인의 이력과 경험을 자세히 서술해 주세요."
            placeholder="ex) 저의 장점은 밝은 성격입니다. 회사에 일하며 항상 밝은 분위기를 이끌어나가겠습니다."
            onChange={e => setJaso(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-5 items-center my-5">
          <Button onClick={handleSave}>완료하기</Button>
        </div>
        {isClick && <h1>결과서를 작성 중이에요... 시간이 다소 걸릴 수 있답니다.</h1>}
      </div>
    </Frame>
  );
}
