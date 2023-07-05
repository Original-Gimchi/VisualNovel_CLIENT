import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import TextArea from '@/components/atoms/TextArea';

export default function Home() {
  return (
    <div className="p-12">
      <Button disabled>완료 안하기</Button>
      <Button>완료하기</Button>
      <Input id="company" placeholder="지원 회사를 기입해주세요" label="지원회사" />
      <TextArea id="textarea" placeholder="placeholder" isClipBoard label="나의 이력서" />
    </div>
  );
}
