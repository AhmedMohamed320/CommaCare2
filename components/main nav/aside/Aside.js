import React, { Fragment, useState } from "react";
import classes from "./Aside.module.css";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";

const Aside = (props) => {
    return (
        <section className={classes.section}>
            <aside className={classes.aside}>
                <div className={classes.close} onClick={props.onHideAside}>
                    <MdOutlineClose />
                </div>
                <div className={classes.head}>
                    <div>
                        <p>تسجيل الخروج</p>
                        <p>تسجيل الدخول</p>
                    </div>
                </div>
                <ul>
                    <li>
                        <div>
                            <Link
                                href=""
                                className={classes.offer}
                                onClick={props.onHideAside}
                            >
                                العروض
                            </Link>
                        </div>
                    </li>
                </ul>
            </aside>
        </section>
    );
};

export default Aside;
