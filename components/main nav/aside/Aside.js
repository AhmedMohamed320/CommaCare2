import React, { Fragment, useState } from "react";
import classes from "./Aside.module.css";
import { MdFavorite, MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import {
    BsFillBookmarkFill,
    BsFillPersonVcardFill,
    BsPersonFill,
} from "react-icons/bs";
import { GoSignIn } from "react-icons/go";

const Aside = (props) => {
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
                    <li className={classes.active}>
                        <span className={classes.border}></span>
                        <Link
                            href=""
                            // onClick={props.onHideAside}
                        >
                            <BsPersonFill />
                            حسابي
                        </Link>
                    </li>
                    <li>
                        <span className={classes.border}></span>
                        <Link
                            href=""
                            // onClick={props.onHideAside}
                        >
                            <BsFillPersonVcardFill />
                            ملفي الطبي
                        </Link>
                    </li>
                    <li>
                        <span className={classes.border}></span>
                        <Link
                            href=""
                            // onClick={props.onHideAside}
                        >
                            <BsFillBookmarkFill />
                            حجوزاتي
                        </Link>
                    </li>
                    <li>
                        <span className={classes.border}></span>
                        <Link
                            href=""
                            // onClick={props.onHideAside}
                        >
                            <MdFavorite />
                            المفضله
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
