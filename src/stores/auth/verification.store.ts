import { atom } from "jotai";

// 서버에서 발급받은 인증번호 저장
export const sentVerificationCodeAtom = atom<string | null>(null);