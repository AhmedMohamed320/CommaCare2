"use client";
import React, { Fragment, useEffect, useState } from "react";
import classes from "../globalsSign.module.css";
import Link from "next/link";
// import axios from "axios";
// import Loading from "@/components/loading/Loading";
// import Button2 from "@/components/UI/Button2";
// import { useRouter } from "next/navigation";

const Register = () => {
    // const router = useRouter();

    // const [form, setForm] = useState({
    //     fullName: "",
    //     email: "",
    //     phone: "",
    //     password: "",
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
    //     setErr("");
    //     setLoading(true);
    //     try {
    //         await axios.post(
    //             `${process.env.NEXT_PUBLIC_BASEURL}/comma/user/addUser`,
    //             form
    //         );
    //         setLoading(false);
    //         router.push(`/active_email/${form.email}`);
    //     } catch (err) {
    //         setLoading(false);
    //         if (err.response.status === 409) {
    //             setErr("هذه الايميل مسجل مسبقا");
    //         } else {
    //             setErr("internal server error " + err.response.status);
    //         }
    //     }
    // }

    // function handleChangeForm(e) {
    //     setForm({ ...form, [e.target.name]: e.target.value });
    // }

    return (
        <Fragment>
            {/* {loading && <Loading />} */}
            <div className={classes.up}>
                {/* {err !== "" && (
                    <div className={classes.error}>
                        <p>{err}</p>
                    </div>
                )} */}

                <form className={classes.register} >
                    <div>
                        <Link href="/">
                            <img src="/image/mainLogo.png" alt="" />
                        </Link>

                        <p>تسجيل حساب</p>
                        <p>يتطلب انشاء الحساب رقم هاتف وبريد إلكتروني</p>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="name">الاسم</label>
                            <input
                                type="text"
                                name="fullName"
                                // onChange={handleChangeForm}
                                autoComplete="off"
                            />
                        </div>

                        <div>
                            <label htmlFor="name">البريد الإلكتروني</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="names@gamil.com"
                                // onChange={handleChangeForm}
                                autoComplete="off"
                            />
                        </div>

                        <div>
                            <label htmlFor="name">رقم الهاتف</label>
                            <input
                                type="number"
                                name="phone"
                                // onChange={handleChangeForm}
                                autoComplete="off"
                            />
                        </div>
                        <div>
                            <label htmlFor="name">كلمة المرور</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="اختر كلمه المرور"
                                minLength="6"
                                // onChange={handleChangeForm}
                            />
                            <p className={classes.simpleValid}>
                                لابد أن تكون كلمة المرور 6 أحرف على الأقل
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>
                            من خلال إنشاء حساب ، فإنك توافق على{" "}
                            <span>الأحكام والشروط</span>
                        </p>
                        <button>تسجيل</button>
                        <p>
                            لديك حساب بالفعل؟
                            <span>
                                <Link href="/sign_in">تسجيل الدخول</Link>
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default Register;
