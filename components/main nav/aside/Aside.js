"use client";
import React from "react";
import classes from "./Aside.module.css";
import { MdFavorite, MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import {
    BsFillBookmarkFill,
    BsFillPersonVcardFill,
    BsPersonFill,
} from "react-icons/bs";
import { GoSignIn } from "react-icons/go";
import { useSearchParams } from "next/navigation";

const Aside = (props) => {
    const router = useSearchParams();
    const content = router.get("content") || "info";
    return (
        <section className={classes.section}>
            <aside className={classes.aside}>
                <div className={classes.close} onClick={props.onHideAside}>
                    <MdOutlineClose />
                </div>
                <div className={classes.head}>
                    <Link href="/" className={classes.logo}>
                        <img src="/image/mainLogo.png" alt="" />
                    </Link>
                </div>
                <ul className="flex gap-8 flex-col">
                    <li className={content == "info" && classes.active}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/account",
                                query: { content: "info" },
                            }}
                            onClick={props.onHideAside}
                        >
                            <BsPersonFill />
                            حسابي
                        </Link>
                    </li>
                    <li
                        className={
                            content == "Medical_profile" && classes.active
                        }
                    >
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/account",
                                query: { content: "Medical_profile" },
                            }}
                            onClick={props.onHideAside}
                        >
                            <BsFillPersonVcardFill />
                            ملفي الطبي
                        </Link>
                    </li>
                    <li className={content == "My_booking" && classes.active}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/account",
                                query: { content: "My_booking" },
                            }}
                            onClick={props.onHideAside}
                        >
                            <BsFillBookmarkFill />
                            حجوزاتي
                        </Link>
                    </li>
                    <li className={content == "Doctory" && classes.active}>
                        <span className={classes.border}></span>
                        <Link
                            href={{
                                pathname: "/account",
                                query: { content: "Doctory" },
                            }}
                            onClick={props.onHideAside}
                        >
                            <MdFavorite />
                            دكتوري
                        </Link>
                    </li>
                </ul>
                <span className={classes.hr}></span>
                <div className="flex items-center  px-10  gap-4 cursor-pointer font-semibold">
                    <p>تسجيل الخروج</p>
                    <GoSignIn className="text-4xl" />
                </div>
            </aside>
        </section>
    );
};

export default Aside;
