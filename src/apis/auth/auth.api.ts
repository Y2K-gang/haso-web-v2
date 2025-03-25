"use client"

import hasoAxios from "src/libs/axios/customAxios";
import {Response, Login, NewAccessToken, SignUp} from "src/types/auth/auth.type";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const login = async (login: Login) => {
    try {
        const {data} = await hasoAxios.post<Response>(`${SERVER_URL}/member/signin`, login);
        return data;
    } catch (error) {
        throw new Error("로그인 요청에 실패했습니다.");
    }
};

export const signUp = async (signupData: SignUp | {}) => {
    try {
        const {data} = await hasoAxios.post<SignUp>(`${SERVER_URL}/member/signup`, signupData);
        return data;
    } catch (error) {
        throw new Error("회원가입 요청에 실패했습니다.")
    }
}

export const refresh = async (refreshToken: { refreshToken: string | null }): Promise<NewAccessToken> => {
    try {
        const {data} = await hasoAxios.post<NewAccessToken>(`${SERVER_URL}/refresh`, refreshToken);
        return data;
    } catch (error) {
        throw new Error("refresh Error");
    }

};