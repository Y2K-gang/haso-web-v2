import { useSetAtom } from "jotai";
import { sendVerificationCode, verifyPhoneCode } from "src/apis/auth/verification.api";
import { sentVerificationCodeAtom } from "src/stores/auth/verification.store";
import { Toast } from "src/libs/toast";

const useVerification = () => {
    const setSentCode = useSetAtom(sentVerificationCodeAtom);

    // 인증번호 요청
    const requestVerificationCode = async (phoneNumber: string) => {
        try {
            const res = await sendVerificationCode(phoneNumber);
            console.log(res);
            Toast("success", "인증번호가 전송되었습니다");
            setSentCode(phoneNumber);
        } catch (err) {
            console.log(err);
            Toast("error", "인증 요청 중 오류 발생");
        }
    };

    // 인증번호 검증
    const confirmVerificationCode = async (phoneNumber: string, code: string) => {
        try {
            const res = await verifyPhoneCode(phoneNumber, code);

            if (res.message === "인증완료") {
                Toast("success", "인증이 완료되었습니다.");
                return true;
            } else {
                Toast("error", res.message);
                return false;
            }
        } catch (err) {
            console.log(err);
            Toast("error", "인증번호 검증 중 오류 발생");
            return false;
        }
    };

    return { requestVerificationCode, confirmVerificationCode };
};

export default useVerification;