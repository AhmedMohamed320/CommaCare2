import React, { useState } from "react";
import classes from "./Nav.module.css";
import { TbLogin } from "react-icons/tb";
import { BsListNested, BsPerson, BsSearch } from "react-icons/bs";
import Link from "next/link";

const Nav = (props) => {
    const [showComponent, setShowComponent] = useState(false);
    const handleMouseEnter = () => {
        setShowComponent(true);
    };
    const handleMouseLeave = () => {
        setShowComponent(false);
    };

    return (
        <section className={classes.section}>
            <div className="mainContainer">
                <Link href="/" className={classes.logo}>
                    <img src="/image/mainLogo.png" alt="" />
                </Link>

                <div className={`hidden md:block ${classes.list}`}>
                    <ul className="flex items-center gap-10 text-2xl md">
                        <li>
                            <Link href="/">
                                <p>الرئيسيه</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <p>من نحن</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/Service_Provider">
                                <p>انضم كمقدم خدمه</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={classes.search}>
                    <input type="text" name="" id="" />
                    <BsSearch />
                </div>
                <div className={`md:flex hidden gap-4 ${classes.btn}`}>
                    <Link
                        href="/account"
                        className="flex  items-center gap-3 text-2xl "
                    >
                        <p>حسابي</p>
                        <BsPerson className="text-3xl" />
                    </Link>
                    <Link href="/sign_in" className="flex  items-center gap-3 text-2xl">
                        <p> تسجيل الخروج</p>
                        <TbLogin className="text-3xl" />
                    </Link>
                </div>
                <div className={`md:hidden`}>
                    <BsListNested
                        className="text-5xl cursor-pointer"
                        onClick={props.onShowAside}
                    />
                </div>
            </div>
        </section>
    );
};

export default Nav;
