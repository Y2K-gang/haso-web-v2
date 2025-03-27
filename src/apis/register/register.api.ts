import hasoAxios from "src/libs/axios/customAxios";
import {RegisterProps} from "src/types/register/register.type";

const SERVER_URL = process.env.SERVER_URL;

export const register = async (register: RegisterProps) => {
    try {
        const { data } = await hasoAxios.post<RegisterProps>(`${SERVER_URL}/product`, register);
        return data;
    } catch (error) {
        throw new Error("게시물 등록에 실패했습니다.");
    }
};