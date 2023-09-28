"use client";
import React, { Fragment, useEffect, useState } from "react";
import classes from "../globalsSign.module.css";
import Link from "next/link";
// import axios from "axios";
// import Loading from "@/components/loading/Loading";
// import { useRouter } from "next/navigation";
// import { useCookies } from "react-cookie";
// import { LoginSocialGoogle } from "reactjs-social-login";
// import { GoogleLoginButton } from "react-social-login-buttons";

const Login = () => {
    // const router = useRouter();
    // const [cookies, setCookies] = useCookies(["token"]);

    // const [form, setForm] = useState({
    //     password: "",
    //     username: "",
    // });

    // const [err, setErr] = useState("");
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     let timeout;
    //     if (err !== "") {
    //         timeout = setTimeout(() => {
    //             setErr("");
    //         }, 4000);
    //     }
    //     return () => clearTimeout(timeout);
    // }, [err]);

    // async function Submit(e) {
    //     e.preventDefault();
    //     setLoading(true);
    //     try {
    //         const res = await axios.post(
    //             `${process.env.NEXT_PUBLIC_BASEURL}/comma/authentication/generate-token`,
    //             form
    //         );
    //         setLoading(false);

    //         setCookies("token", res.data.data.token);
    //         router.push("/");
    //     } catch (err) {
    //         setLoading(false);
    //         setErr("خطاء في التسجيل من ان تكون كلمه السر او الايمل خطاء");
    //     }
    // }

    // function handleChangeForm(e) {
    //     setForm({ ...form, [e.target.name]: e.target.value });
    // }

    return (
        <Fragment>
            <div className={classes.up}>
                <div className={classes.circle1}></div>
                <div className={classes.circle2}></div>
                {/* {err !== "" && (
                    <div className={classes.error}>
                        <p>{err}</p>
                    </div>
                )} */}
                <form className={classes.login}>
                    <div>
                        <Link href="/">
                            <img src="/image/mainLogo.png" alt="" />
                        </Link>
                        <p>تسجيل الدخول</p>
                        <p>تسجيل الدخول بالبريد الإلكتروني أو رقم الهاتف</p>
                    </div>
                    <div>
                        <label htmlFor="username">
                            البريد الإلكتروني أو رقم الهاتف
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="ادخل البريد الالكتروني او رقم الهاتف"
                            // onChange={handleChangeForm}
                            autoComplete="off"
                        />
                        <label htmlFor="password">كلمه السر</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="ادخل كلمه السر"
                            minLength="6"
                            // onChange={handleChangeForm}
                        />
                        <div className={classes.forgetPassword}>
                            <Link href={`/reset_password`}>نسيت كلمه السر</Link>
                        </div>
                    </div>

                    <div className={classes.action}>
                        <button>تسجيل الدخول</button>
                        {/* <LoginSocialGoogle
                           client_id={`${process.env.REACT_APP_GG_APP_ID}`}
                           scope="openid profile email"
                           discoveryDocs="claims_supported"
                           access_type="offline"
                           cookie_policy="single_host_origin"
                            onResolve={({ provider, data }) => {
                                console.log(data);
                            }}
                            onReject={(err) => {
                                console.log(err);
                            }}
                        >
                            <GoogleLoginButton />
                        </LoginSocialGoogle> */}
                        <p>
                            ليس لديك حساب؟
                            <span>
                                <Link href="/sign_up">تسجيل حساب جديد</Link>
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default Login;
