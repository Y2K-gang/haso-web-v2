"use client";

import {atom} from "jotai";
import {SignUp} from "src/types/auth/auth.type";

export const SignUpStore = atom<SignUp>({
    name: "",
    userId: "",
    password: "",
    phoneNumber: "",
    data: "",
    store_name: "",
    store_no: "",
    fax_no: "",
    business_no: "",
});