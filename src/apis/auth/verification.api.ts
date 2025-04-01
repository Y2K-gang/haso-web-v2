"use client";

import hasoAxios from "src/libs/axios/customAxios";
import { SignUp } from "src/types/auth/auth.type";
import { Toast } from "src/libs/toast";

type PhoneRequest = Pick<SignUp, "phoneNumber">;

interface PhoneResponse {
    status: number;
    message: string;
}

// 인증번호 전송
export const sendVerificationCode = async (
    phoneNumber: string
): Promise<PhoneResponse> => {
    try {
        const body: PhoneRequest = { phoneNumber };
        const { data } = await hasoAxios.post<PhoneResponse>("member/send", body);
        return data;
    } catch (error) {
        throw new Error("인증번호 요청에 실패했습니다.");
    }
};

// 인증번호 검증
export const verifyPhoneCode = async (
    phoneNumber: string,
    code: string // 인증번호 필드명은 data
): Promise<PhoneResponse> => {
    try {
        const { data } = await hasoAxios.get<PhoneResponse>(
            "/member/validation/phone",
            {
                params: {
                    phoneNumber,
                    data: code, // 필드명은 data
                },
            }
        );
        return data;
    } catch (error) {
        throw new Error("인증번호 검증 요청에 실패했습니다.");
    }
};