import * as Yup from "yup"


export const signupschema=Yup.object({
    uname:Yup.string().min(2).max(25).required("enter your name"),
    email:Yup.string().email().required("enter your email"),
    password:Yup.string().min(3).required("enter your password"),
    confirmpassword:Yup.string().required().oneOf([Yup.ref('password'),null],"password must match")
})