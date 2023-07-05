import httpClient from "@/apis";
import Category from "@/components/atoms/Category";
import Frame from "@/components/atoms/Frame";
import ThinkingIcon from "@/components/icons/ThinkingIcon";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Analize() {
  const router = useRouter();
  const [wordcloudUrl, setWordcloudUrl] = useState("");
  const [companyInfo, setCompanyInfo] = useState({
    keyword: [],
    oneLineIntroduce: "",
    allIntroduce: "",
  });

  useEffect(() => {
    if (router.isReady) {
      httpClient.companyFind
        .get({ params: { name: router.query.companyName } })
        .then((r) => {
          console.log();
          setCompanyInfo({
            keyword: r.data.keyword.split(" "),
            oneLineIntroduce: r.data.oneLineIntroduce,
            allIntroduce: r.data.allIntroduce,
          });
          httpClient.wordcloud
            .post(
              {
                content: r.data.keyword,
              },
              {
                baseURL: "http://192.168.10.253:8001/wordcloud",
              }
            )
            .then((r) => {
              setWordcloudUrl(r.data.url);
            });
        });
    }
  }, [router]);

  return (
    <Frame>
      <div className="pt-9">
        <div className="flex gap-4 items-center">
          <ThinkingIcon />
          <span className="text-4xl font-black">
            내 기업 분석 ({router.query.companyName})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="max-w-sm">
            <div className="mb-2">기업 키워드</div>
            <Category.Group categorys={companyInfo.keyword} />
          </div>
          <div className="whitespace-nowrap">
            {wordcloudUrl ? (
              <Image src={wordcloudUrl} alt="dd" width={300} height={300} />
            ) : (
              <div className="w-72 h-72" />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <p className="mt-6">기업 한줄소개</p>
            <p className="p-5 bg-white">{companyInfo.oneLineIntroduce}</p>
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <p className="">기업 전체소개</p>
            <p className="p-5 bg-white">{companyInfo.allIntroduce}</p>
          </div>
        </div>
      </div>
    </Frame>
  );
}
