"use client";

import { useState } from "react";
import TextField from "src/components/ui/textField";
import Tel from "src/components/ui/icons/textField/tel";
import Lock from "src/components/ui/icons/textField/lock";
import SmallButton from "src/components/ui/button/small";
import useSteps from "src/hooks/auth/signup/useSteps";
import useVerification from "src/hooks/auth/signup/useVerification";

const Step2 = () => {
    const { signUpData, handleSignUpData } = useSteps();
    const { requestVerificationCode } = useVerification();

    const [isRequested, setIsRequested] = useState(false);

    const handleRequestCode = () => {
        if (!signUpData.tel || signUpData.tel.length < 10) {
            console.warn("유효한 전화번호를 입력해주세요.");
            return;
        }

        console.log("인증번호 요청됨:", signUpData.tel);
        requestVerificationCode(signUpData.tel);
        setIsRequested(true);
    };

    return (
        <>
            <div className="tel-access">
                <TextField
                    name="tel"
                    type="number"
                    placeholder="전화번호를 입력해주세요."
                    value={signUpData.tel}
                    onChange={handleSignUpData}
                    icon={<Tel />}
                />
                <SmallButton
                    text="인증 요청"
                    onClick={handleRequestCode}
                    disabled={isRequested}
                />
            </div>
            <TextField
                name="telAccess"
                type="number"
                placeholder="인증번호를 입력해주세요."
                value={signUpData.telAccess}
                onChange={handleSignUpData}
                icon={<Lock />}
            />
        </>
    );
};

export default Step2;