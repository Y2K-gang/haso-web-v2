export interface SignUpProps {
    name: string;
    id: string;
    password: string;
    passwordConfirm: string; // 비밀번호 확인
    tel: string;
    telAccess: string; // 전화번호 인증 번호
    store_name: string; // 상호명
    store_no: string; // 사업장 번호
    fax_no: string; // 팩스 번호
    business_no: string; // 사업자 등록 번호
}

export interface LoginProps {
    id: string;
    password: string;
}

export interface ValidateProps extends SignUpProps {
    b_no: string; // 사업자 등록 번호
    start_dt: string; // 개업일자
    p_nm: string; // 대표자 성명
}

export interface LoginResponse {
    data : {
        accessToken: string;
        refreshToken: string;
    }
}

export interface NewAccessToken {
    data: {
        accessToken: string;
    }
}