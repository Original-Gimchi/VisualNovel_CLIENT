import Frame from '@/components/atoms/Frame';
import ThinkingIcon from '@/components/icons/ThinkingIcon';
import { Storage } from '@/storage';
import { useEffect, useState } from 'react';

export default function CoverLetterCreateResult() {
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(Storage.getItem('coverletterrrrrr') || '');
  }, []);

  return (
    <Frame>
      <div className="flex items-center gap-4 mt-9">
        <ThinkingIcon />
        <p className="text-4xl font-black">자기소개서 생성 결과</p>
      </div>
      <div className="mt-10 bg-white p-6">{content}</div>
    </Frame>
  );
}
