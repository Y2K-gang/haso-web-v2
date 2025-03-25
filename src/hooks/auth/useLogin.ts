import { useCallback, useState} from "react";
import { useRouter } from "next/navigation";
import { Toast } from "src/libs/toast";
import { login } from "src/apis/auth/auth.api";
import {Login} from "src/types/auth/auth.type";
import Token from "src/libs/token/cookie";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "src/constants/token/token.constants";
import Paths from "src/constants/paths/paths.constants";

const useLogin = () => {
    const router = useRouter();
    const [loginData, setLoginData] = useState<Login>({
        userId: "",
        password: "",
    });

    // Input에서 받아온 값 저장
    const handleLoginData = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setLoginData(prev => ({ ...prev, [name]: value }));
    }, []);

    // 사용자 편의성을 위해 Enter 키 입력시에도 로그인
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            submitLoginData();
        };
    };

    // 서버에게 보내기
    const submitLoginData = async () => {
        if (!loginData.userId.trim()) {
            Toast("info", "아이디를 입력해주세요.");
            return;
        }
        if (!loginData.password.trim()) {
            Toast("info", "비밀번호를 입력해주세요.");
            return;
        }

        try {
            const res = await login(loginData);
            Toast("success", "로그인 성공");

            Token.setToken(ACCESS_TOKEN, res.data.accessToken);
            Token.setToken(REFRESH_TOKEN, res.data.refreshToken);

            router.push(Paths.main);
        } catch (error) {
            Toast("error", "정보를 다시 확인해주세요.");
        }
    };
    return { loginData, submitLoginData, handleLoginData, handleKeyPress };
};

export default useLogin;