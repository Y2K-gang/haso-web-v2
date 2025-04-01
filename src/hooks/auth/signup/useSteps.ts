import { useState } from "react";
import { useAtomValue } from "jotai";
import useSignUp from "src/hooks/auth/signup/useSignUp";
import { Toast } from "src/libs/toast";
import { signUp } from "src/apis/auth/auth.api";
import { SignUpStore } from "src/stores/auth/auth.store";
import { sentVerificationCodeAtom } from "src/stores/auth/verification.store"; // 추가

const TOTAL_STEPS = 4;

const useSteps = () => {
    const signUpData = useAtomValue(SignUpStore);
    const sentCode = useAtomValue(sentVerificationCodeAtom);
    const { handleSignUpData, validateSignUpData } = useSignUp();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState((1 / TOTAL_STEPS) * 100);

    const nextStep = () => {
        if (!signUpData) return;

        const error = validateSignUpData(step);
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
            const newStep = Math.max(prev - 1, 1);
            setProgress((newStep / TOTAL_STEPS) * 100);
            return newStep;
        });
    };

    const submitSignUpData = async () => {
        if (!signUpData) return;

        const error = validateSignUpData(step);
        if (error) {
            Toast("info", error);
            return;
        }

        try {
            const response = await signUp(signUpData);
            Toast("success", "회원가입이 완료되었습니다.");
        } catch (error) {
            Toast("error", "회원가입에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return { step, nextStep, prevStep, submitSignUpData, signUpData, handleSignUpData, progress };
};

export default useSteps;