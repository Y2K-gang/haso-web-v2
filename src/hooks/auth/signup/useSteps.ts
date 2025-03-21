"use client";

import { useState } from "react";
import { useAtomValue } from "jotai";
import useSignUp from "src/hooks/auth/signup/useSignUp";
import { Toast } from "src/libs/toast";
import { signUp } from "src/apis/auth/auth.api";
import { SignUpStore } from "src/stores/auth/auth.store";

const TOTAL_STEPS = 4;

const useSteps = () => {
    const signUpData = useAtomValue(SignUpStore);
    const { handleSignUpData, validateSignUpData } = useSignUp();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState((1 / TOTAL_STEPS) * 100);

    const nextStep = () => {
        if (!signUpData) return;

        console.log("🚀 다음 단계 이동 시 최신 signUpData:", signUpData);

        const error = validateSignUpData();
        if (error) {
            Toast("info", error);
            return;
        }

        setStep(prev => {
            const newStep = prev + 1;
            setProgress((newStep / TOTAL_STEPS) * 100);
            return newStep;
        });
    };

    const prevStep = () => {
        setStep(prev => {
            const newStep = prev - 1;
            setProgress((newStep / TOTAL_STEPS) * 100);
            return newStep;
        });
    };

    const submitSignUpData = async () => {
        if (!signUpData) return;

        console.log("🚀 회원가입 요청 시 최신 signUpData:", signUpData);

        const error = validateSignUpData();
        if (error) {
            Toast("info", error);
            return;
        }

        try {
            const response = await signUp(signUpData);
            console.log("✅ 회원가입 성공:", response);
            Toast("success", "회원가입이 완료되었습니다.");
        } catch (error) {
            console.error("❌ 회원가입 실패:", error);
            Toast("error", "회원가입에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return { step, nextStep, prevStep, submitSignUpData, signUpData, handleSignUpData, progress };
};

export default useSteps;