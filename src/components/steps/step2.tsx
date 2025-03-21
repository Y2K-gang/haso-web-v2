"use client"

import TextField from "src/components/ui/textField";
import Tel from "src/components/ui/icons/textField/tel";
import Lock from "src/components/ui/icons/textField/lock"
import useSteps from "src/hooks/auth/signup/useSteps";

const Step2 = () => {
    const {signUpData, handleSignUpData} = useSteps();

    return (
        <>
            <TextField
                name="tel"
                type="text"
                placeholder="전화번호를 입력해주세요."
                value={signUpData.tel}
                onChange={handleSignUpData} icon={<Tel/>}
            />
            <TextField
                name="telAccess"
                type="number"
                placeholder="인증번호를 입력해주세요."
                value={signUpData.telAccess}
                onChange={handleSignUpData} icon={<Lock/>}
            />
        </>
    )
}

export default Step2;
