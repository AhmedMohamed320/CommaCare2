"use client";
import React, { useEffect, useState } from "react";
import classes from "../globalsSign.module.css";
import Link from "next/link";
import Button2 from "@/components/UI/Button2";
import Loading from "@/components/loading/Loading";
import axios from "axios";
import { useRouter } from "next/navigation";
const page = () => {
    const router = useRouter();

    const [form, setForm] = useState({
        code: "",
        email: "",
        password: "",
    });
    function handleChangeForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false);
    const [userHaveCode, setUserHaveCode] = useState(false);

    useEffect(() => {
        let timeout;
        if (err !== "") {
            timeout = setTimeout(() => {
                setErr("");
            }, 4000);
        }
        return () => clearTimeout(timeout);
    }, [err]);

    async function sendCodeValidation() {
        try {
            await axios.put(
                `${process.env.NEXT_PUBLIC_BASEURL}/comma/user/sendResetMail/${form.email}`
            );
            setLoading(false);
            setUserHaveCode(true);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }

    async function submit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.put(
                `${process.env.NEXT_PUBLIC_BASEURL}/comma/user/resetPassword`,
                form
            );
            setLoading(false);
            router.push("/sign_in");
        } catch (err) {
            setLoading(false);
            setErr("هناك خطاء ما");
        }
    }

    return (
        <>
            {loading && <Loading />}
            <div className={classes.up}>
                {err !== "" && (
                    <div className={classes.error}>
                        <p>{err}</p>
                    </div>
                )}
                <form className={classes.login} onSubmit={submit}>
                    <div>
                        <Link href="/">
                            <img src="/images/mainLogo-2.png" alt="" />
                        </Link>
                        <p> اعاده تعين كلمه السر </p>
                    </div>
                    <div>
                        <label htmlFor="email">البريد الإلكتروني</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="ادخل بريدك الالكتروني "
                            onChange={handleChangeForm}
                        />
                        <div className={classes.sendCode}>
                            <p onClick={sendCodeValidation}>
                                ارسال كود التاكيد
                            </p>
                        </div>
                        <label htmlFor="code">كود التاكيد</label>
                        <input
                            type="text"
                            name="code"
                            id="code"
                            placeholder="ادخل كود التاكيد"
                            onChange={handleChangeForm}
                            className={userHaveCode ? "" : classes.disable}
                        />
                        <label htmlFor="newPass">كلمه السر الجديده</label>
                        <input
                            type="text"
                            name="password"
                            id="newPass"
                            placeholder="ادخل كلمه الجديده "
                            onChange={handleChangeForm}
                            className={userHaveCode ? "" : classes.disable}
                        />
                    </div>
                    <div>
                        <Button2 text="تاكيد" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default page;
