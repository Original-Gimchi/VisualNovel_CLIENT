import Header from "@/components/Header";
import Modal from "@/components/atoms/Modal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
        <Modal />
      </RecoilRoot>
    </>
  );
}
