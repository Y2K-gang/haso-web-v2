import {ACCESS_TOKEN, REFRESH_TOKEN} from "src/constants/token/token.constants";

const Token = {
    getToken: (key: string): string | null => sessionStorage.getItem(key),

    setToken: (key: string, token: string): void => {
        sessionStorage.setItem(key, token);
    },

    clearToken: (): void => {
        sessionStorage.removeItem(ACCESS_TOKEN);
        sessionStorage.removeItem(REFRESH_TOKEN);
    },
};

export default Token;