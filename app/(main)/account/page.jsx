"use client";
import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BsPerson } from "react-icons/bs";
import Doctory from "@/components/userAccount/doctory/Doctory";

const page = () => {
    const router = useSearchParams();
    const content = router.get("content") || "info";
    return (
        <section className={`mainContainer ${classes.section}`}>
            <div className={classes.list}>
                <ul>
                    <li className={content == "info" && classes.active}>
                        <Link
                            href={{
                                pathname: "/account",
                                query: { content: "info" },
                            }}
                        >
                            <div className={classes.icon}>
                                <BsPerson />
                            </div>
                            <p> معلومات حسابي</p>
                        </Link>
                    </li>
                    <li
                        className={
                            content == "Medical_profile" && classes.active
                        }
                    >
                        <Link
                            href={{
                                pathname: "/account",
                                query: { content: "Medical_profile" },
                            }}
                        >
                            <div className={classes.icon}>
                                <BsPerson />
                            </div>
                            ملفى الطبي
                        </Link>
                    </li>
                    <li className={content == "Doctory" && classes.active}>
                        <Link
                            href={{
                                pathname: "/account",
                                query: { content: "Doctory" },
                            }}
                        >
                            <div className={classes.icon}>
                                <BsPerson />
                            </div>
                            دكتوري
                        </Link>
                    </li>{" "}
                    <li className={content == "My_booking" && classes.active}>
                        <Link
                            href={{
                                pathname: "/account",
                                query: { content: "My_booking" },
                            }}
                        >
                            <div className={classes.icon}>
                                <BsPerson />
                            </div>
                            حجوزاتي
                        </Link>
                    </li>{" "}
                </ul>
            </div>
            <div className={classes.content}>
                {content == "Doctory" && <Doctory />}
                {content == "Medical_profile" && (
                    <div className={classes.Medical_profile}>
                        <div>
                            <ul>
                                <li>
                                    <Link href="/account/family_tree">
                                        <p>بيانات العائله الطبيه</p>
                                        <img src="/image/family.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/account/Medical_examination_results">
                                        <p>نتائج الكشوفات</p>
                                        <img
                                            src="/image/hero-1.png"
                                            alt=""
                                            className={classes.img2}
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default page;
