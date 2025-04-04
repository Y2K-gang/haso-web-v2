"use client"

import TextField from "src/components/ui/textField";
import Name from "src/components/ui/icons/textField/name";
import Human from "src/components/ui/icons/textField/human";
import Lock from "src/components/ui/icons/textField/lock"
import useSteps from "src/hooks/auth/signup/useSteps";

const Step1 = () => {
    const { signUpData, handleSignUpData } = useSteps();

    return (
        <>
            <TextField
                name="name"
                type="text"
                placeholder="이름을 입력해주세요."
                value={signUpData.name}
                onChange={handleSignUpData}
                icon={<Name />}
            />
            <TextField
                name="userId"
                type="text"
                placeholder="아이디를 입력해주세요."
                value={signUpData.userId}
                onChange={handleSignUpData}
                icon={<Human />}
            />
            <TextField
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                value={signUpData.password}
                onChange={handleSignUpData}
                icon={<Lock />}
            />
        </>
    );
};

export default Step1;