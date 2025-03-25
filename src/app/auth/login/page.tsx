"use client";

import React, {useRef} from "react";
import "../style.scss";
import Symbol from "src/components/ui/icons/logo/symbol";
import Wordmark from "src/components/ui/icons/logo/wordmark";
import Human from "src/components/ui/icons/textField/human";
import MediumButton from "src/components/ui/button/medium";
import TextField from "src/components/ui/textField";
import Lock from "src/components/ui/icons/textField/lock";
import useLogin from "src/hooks/auth/useLogin";
import Link from "next/link";
import Paths from "src/constants/paths/paths.constants";

const Login = () => {
    const {loginData, handleLoginData, submitLoginData, handleKeyPress} = useLogin();
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <main className="main">
            <div className="login-container">
                <div className="left">
                    <div className="logo-container">
                        <Symbol/>
                        <Wordmark/>
                    </div>
                    <p id="description">수산물 거래, 이제는 간편하게</p>
                </div>
                <div id="divider"/>
                <div className="right" ref={divRef} onKeyDown={handleKeyPress}>
                    <h2 id="d1">Login</h2>
                    <TextField
                        name="userId"
                        type="text"
                        value={loginData.userId}
                        onChange={handleLoginData}
                        placeholder="이름을 입력해주세요"
                        icon={<Human/>}
                    />
                    <TextField
                        name="password"
                        type="password"
                        value={loginData.password}
                        onChange={handleLoginData}
                        placeholder="비밀번호를 입력해주세요"
                        icon={<Lock/>}
                    />
                    <MediumButton
                        onClick={submitLoginData}
                        text="로그인하기"
                    />
                    <div className="routing-signup">
                        <span>계정이 없으신가요?</span>
                        <Link className="signup" href={Paths.signup}><span>회원가입하기</span></Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;