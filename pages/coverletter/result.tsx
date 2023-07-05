import Frame from "@/components/atoms/Frame";
import ThinkingIcon from "@/components/icons/ThinkingIcon";

export default function CoverLetterCreateResult() {
  return (
    <Frame>
      <div className="flex items-center gap-4 mt-9">
        <ThinkingIcon />
        <p className="text-4xl font-black">자기소개서 생성 결과</p>
      </div>
      <div className="mt-10 bg-white p-6">
        [글로벌 인재로의 성장] <br /> 삼성전자는 반도체 산업 분야에서 세계 1위
        기업이며, 글로벌 스마트폰 시장 점유율 1위 자리를 지키고 있는 명실상부한
        글로벌 기업입니다. 특히 5G 시대에는 사물인터넷(IoT), 자율주행 자동차,
        인공지능(AI) 등 4차 산업혁명 주요 기술들이 상용화되면서 초연결 사회가
        도래할 것이라고 합니다. 따라서 앞으로는 IT 인프라 관리 역량이 중요해질
        것이라 생각합니다. 그래서 저는 대학 시절부터 IoT 시스템 설계 프로젝트를
        진행하면서 IT 인프라 관리 역량을 키워왔습니다. 그리고 작년 여름방학 때는
        마이다스 영 챌린지에 참여해서 파이썬 언어를 활용한 딥러닝 모델 개발
        능력을 키웠습니다. 또 지난겨울방학에는 AI 스타트업에서 인턴 생활을 하며
        실제 현장에서 쓰이는 알고리즘을 배웠습니다. 이렇게 쌓은 역량을 바탕으로
        삼성전자의 일원이 되어 전 세계 곳곳에서 활약하는 엔지니어가 되고
        싶습니다.
      </div>
    </Frame>
  );
}
