import {useSetAtom} from "jotai";
import {sendVerificationCode} from "src/apis/auth/verification.api";
import {sentVerificationCodeAtom} from "src/stores/auth/verification.store";
import {Toast} from "src/libs/toast";

const useVerification = () => {
    const setSentCode = useSetAtom(sentVerificationCodeAtom);

    const requestVerificationCode = async (phone: string) => {
        try {
            const res = await sendVerificationCode(phone);
            Toast("success", res.message);
            setSentCode(res.data);
        } catch (err) {
            Toast("error", "인증 요청 중 오류 발생");
        }
    };

    return {requestVerificationCode};
};

export default useVerification;