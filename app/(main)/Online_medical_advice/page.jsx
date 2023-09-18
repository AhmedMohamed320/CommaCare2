import React, { Fragment } from "react";
import classes from "./page.module.css";
import Link from "next/link";

const page = () => {
    return (
        <Fragment>
            <div className={classes.up}>
                <div className={classes.circle1}></div>
                <div className={classes.circle2}></div>

                <section className={`mainContainer ${classes.section}`}>
                    <p className={classes.title}>حدد التخصص</p>
                    <div className={classes.all}>
                        <Link href=""> الطب العام</Link>
                        <Link href=""> الطب النفسي</Link>
                        <Link href=""> طب الاسرة</Link>
                        <Link href=""> الطب العام</Link>
                        <Link href=""> الاستشارات النفسية والسلوكية </Link>
                        <Link href=""> النساء والولادة</Link>
                        <Link href=""> الجلدية وجراحة التجميل </Link>
                        <Link href=""> أنف وأذن وحنجرة </Link>
                        <Link href=""> الطب العام</Link>
                        <Link href=""> الطب العام</Link>
                        <Link href=""> الطب العام</Link>
                        <Link href=""> الطب العام</Link>
                        <Link href=""> الطب العام</Link>
                        <Link href=""> الجهاز الهضمي والمناظير </Link>
                        <Link href=""> الطب العام</Link>
                        <Link href=""> طب الشيخوخة</Link>
                        <Link href=""> الطب العام</Link>
                        <Link href=""> الطب العام</Link>
                        <Link href=""> الكلى </Link>
                        <Link href=""> الطب العام</Link>
                    </div>
                    <img
                        src="/image/3d-1.png"
                        alt=""
                        className={classes.img_3d_1}
                    />
                </section>
            </div>
        </Fragment>
    );
};

export default page;
