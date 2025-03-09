import hasoAxios from "src/libs/axios/customAxios";
import { LoginResponse, LoginProps, NewAccessToken } from "src/types/auth/auth.type";

const SERVER_URL = process.env.SERVER_URL;

export const login = async (login: LoginProps) => {
  try {
    const { data } = await hasoAxios.post<LoginResponse>(`${SERVER_URL}/member/signin`, login);
    return data;
  } catch (error) {
    throw new Error("로그인 요청에 실패했습니다.");
  }
};

export const refresh = async (refreshToken: { refreshToken: string | null }): Promise<NewAccessToken> => {
  try {
    const { data } = await hasoAxios.post<NewAccessToken>(`${SERVER_URL}/refresh`, refreshToken);
    return data;
  } catch (error) {
    throw new Error("refresh Error");
  }

};