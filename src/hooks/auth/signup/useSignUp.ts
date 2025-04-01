"use client";

import { useAtom } from "jotai";
import { SignUpStore } from "src/stores/auth/auth.store";
import {SignUp} from "src/types/auth/auth.type";

const useSignUp = () => {
    const [signUpData, setSignUpData] = useAtom(SignUpStore);

    const handleSignUpData = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSignUpData((prev: SignUp) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateSignUpData = (step: number) => {
        if (step === 1) {
            if (!signUpData.name.trim()) return "이름을 입력해주세요.";
            if (!signUpData.userId.trim()) return "아이디를 입력해주세요.";
            if (!signUpData.password.trim()) return "비밀번호를 입력해주세요.";
        } else if (step === 2) {
            if (!signUpData.phoneNumber.trim()) return "전화번호를 입력해주세요.";
            if (!signUpData.data.trim()) return "전화번호 인증번호를 입력해주세요.";
        } else if (step === 3) {
            if (!signUpData.business_no.trim()) return "사업자 등록 번호를 입력해주세요.";
        }
        return null;
    };

    return { signUpData, handleSignUpData, validateSignUpData };
};

export default useSignUp;