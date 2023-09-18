import React from "react";
import classes from "./Nav.module.css";
import { TbLogin } from "react-icons/tb";
import { BsListNested } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";


const Nav = (props) => {
    return (
        <section className={classes.section}>
            <div className="mainContainer">
                <div className={`md:hidden`}>
                    <BsListNested className="text-4xl cursor-pointer" onClick={props.onShowAside} />
                </div>
                <div className={classes.logo}>
                    <img src="/image/mainLogo.png" alt="" />
                </div>
                <div className={`hidden md:block ${classes.list}`}>
                    <ul className="flex items-center gap-10 text-2xl md">
                        <li>
                            <p>الرئيسيه</p>
                        </li>
                        <li>
                            <p>من نحن</p>
                        </li>
                        <li>
                            <p>انضم كمقدم خدمه</p>
                        </li>
                        <li>
                            <p>تواصل معانا</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="md:flex hidden items-center gap-3 text-2xl">
                        <p> تسجيل الدخول</p>
                        <TbLogin className="text-3xl" />
                    </button>
                    <FaUserCircle className="md:hidden text-4xl cursor-pointer" />
                </div>
            </div>
        </section>
    );
};

export default Nav;