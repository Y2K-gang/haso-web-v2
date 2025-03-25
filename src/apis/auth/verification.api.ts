"use client";

import hasoAxios from "src/libs/axios/customAxios";
import {PhoneResponse} from "src/types/auth/auth.type";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const sendVerificationCode = async (phone: string)=> {
    try {
        const { data } = await hasoAxios.post<PhoneResponse<string>>(`${SERVER_URL}/member/send`, { phone });
        return data;
    } catch (error) {
        throw new Error("인증번호 요청에 실패했습니다.");
    }
};