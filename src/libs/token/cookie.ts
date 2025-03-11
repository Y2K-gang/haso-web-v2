import Cookies from "js-cookie";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "src/constants/token/token.constants";

const Token = {
    getToken: (key: string): string | undefined => Cookies.get(key),

    // ✅ 쿠키에 토큰 저장 (옵션 추가)
    setToken: (key: string, token: string): void => {
        Cookies.set(key, token, {});
    },

    // ✅ 토큰 삭제 (로그아웃 시)
    clearToken: (): void => {
        Cookies.remove(ACCESS_TOKEN);
        Cookies.remove(REFRESH_TOKEN);
    },
};

export default Token;