import { atom } from "recoil";

const coverLetterState = atom<string>({
  key: "coverLetter",
  default: "",
});

export { coverLetterState };
