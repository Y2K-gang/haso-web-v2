"use client"

import React, { useRef } from "react";
import "../style.scss";
import Link from "next/link";
import Wordmark from "src/components/ui/icons/logo/wordmark";
import Symbol from "src/components/ui/icons/logo/symbol";
import MediumButton from "src/components/ui/button/medium";
import useSteps from "src/hooks/auth/signup/useSteps";
import Step1 from "src/components/steps/step1";
import Step2 from "src/components/steps/step2";
import Step3 from "src/components/steps/step3";
import Paths from "src/constants/paths/paths.constants";
import ProgressBar from "src/components/ui/progressBar";

const SignUp = () => {
    const { step, nextStep, prevStep, submitSignUpData, progress } = useSteps();
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <main className="main">
            <ProgressBar progress={progress} />

            <div className="login-container">
                <div className="left">
                    <div className="logo-container">
                        <Symbol />
                        <Wordmark />
                    </div>
                    <p id="description">수산물 거래, 이제는 간편하게</p>
                </div>
                <div id="divider" />
                <div className="right" ref={divRef}>
                    <h2 id="d1">Sign Up</h2>

                    {step === 1 && <Step1 />}
                    {step === 2 && <Step2 />}
                    {step === 3 && <Step3 />}

                    <div className="step-buttons">
                        {step > 1 && <MediumButton onClick={prevStep} text="이전 단계" />}
                        {step < 4 ? (
                            <MediumButton onClick={nextStep} text="다음 단계" />
                        ) : (
                            <MediumButton onClick={submitSignUpData} text="회원가입 완료" />
                        )}
                    </div>

                    <div className="routing-signup">
                        <span>계정이 있으신가요?</span>
                        <Link className="signup" href={Paths.signup}>
                            <span>로그인하기</span>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignUp;