"use client";
import React, { useState } from "react";
import classes from "../../globalsSign.module.css";
import Link from "next/link";
import Button2 from "@/components/UI/Button2";
import Loading from "@/components/loading/Loading";
import axios from "axios";
import { useRouter } from "next/navigation";
const page = (props) => {
    const router = useRouter();
    const [showAlert, setShowAlert] = useState(false);

    const email = decodeURIComponent(props.params.email);
    const [form, setForm] = useState({
        code: "",
        email: `${email}`,
        password: "",
    });
    function handleChangeForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const [loading, setLoading] = useState(false);

    async function Submit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.put(
                `${process.env.NEXT_PUBLIC_BASEURL}/comma/user/activationAccount`,
                form
            );
            setLoading(false);
            router.push(`/sign_in`);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }
    // ----------------
    function reSend() {
        axios
            .put(
                `${process.env.NEXT_PUBLIC_BASEURL}/comma/user/sendActiveMail/${email}`
            )
            .then((res) => {
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 3000);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    //------------------

    return (
        <>
            {loading && <Loading />}
            {showAlert && (
                <div className={`alertGreen`}>
                    <p>تم اعاده ارسال كود التاكيد</p>
                </div>
            )}
            <div className={classes.up}>
                <form className={classes.login} onSubmit={Submit}>
                    <div>
                        <Link href="/">
                            <img src="/images/mainLogo-2.png" alt="" />
                        </Link>
                        <p>تاكيد بريدك الالكتروني</p>
                        <p className={classes.email}>{email}</p>
                    </div>
                    <div>
                        <label htmlFor="code">كود التاكيد</label>
                        <input
                            type="text"
                            name="code"
                            id="code"
                            placeholder="ادخل كود التاكيد"
                            onChange={handleChangeForm}
                        />
                    </div>
                    <div>
                        <Button2 text="تاكيد" />
                        <span onClick={reSend}>اعد الارسال</span>
                    </div>
                </form>
            </div>
        </>
    );
};

export default page;
