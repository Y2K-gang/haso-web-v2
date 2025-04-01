"use client";

import { useState } from "react";
import TextField from "src/components/ui/textField";
import Tel from "src/components/ui/icons/textField/tel";
import Lock from "src/components/ui/icons/textField/lock";
import SmallButton from "src/components/ui/button/small";
import useSteps from "src/hooks/auth/signup/useSteps";
import useVerification from "src/hooks/auth/signup/useVerification";
import {Toast} from "src/libs/toast";

const Step2 = () => {
    const { signUpData, handleSignUpData } = useSteps();
    const { requestVerificationCode } = useVerification();

    const [isRequested, setIsRequested] = useState(false);

    const handleRequestCode = async () => {
        if (!signUpData.phoneNumber || signUpData.phoneNumber.length < 10) {
            Toast("info", "전화번호는 10자리 이상이어야 합니다.");
            return;
        }

        try {
            await requestVerificationCode(signUpData.phoneNumber);
            setIsRequested(true);
        } catch (err) {
            Toast("error", "인증 요청에 실패했습니다.");
            console.error("인증 요청 실패:", err);
        }
    };

    return (
        <>
            <div className="tel-access">
                <TextField
                    name="phoneNumber"
                    type="number"
                    placeholder="전화번호를 입력해주세요."
                    value={signUpData.phoneNumber}
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
                name="data"
                type="number"
                placeholder="인증번호를 입력해주세요."
                value={signUpData.data}
                onChange={handleSignUpData}
                icon={<Lock />}
            />
        </>
    );
};

export default Step2;