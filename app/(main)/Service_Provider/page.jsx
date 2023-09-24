import React, { Fragment } from "react";
import classes from "./page.module.css";
const page = () => {
    return (
        <Fragment>
            <div className={classes.up}>
                <div className={classes.circle1}></div>
                <div className={classes.circle2}></div>
                <section className={classes.section}>
                    <p className="font-semibold p-6 text-center">
                    قدم خدماتك الان معانا وسهل وصول المستفدين لك
                    </p>
                    <p>للانضمام لنا قم بارسال معلوماتك وسنقوم بالتواصل معك</p>
                    <form action="" className={classes.form}>
                        <section className={`md:block hidden ${classes.image3d}`}>
                            <img src="/image/3d-2.png" alt="" />
                        </section>
                        <div>
                            <div>
                                <label htmlFor="n1">الاسم الاول</label>
                                <input
                                    type="text"
                                    placeholder="ادخل الاسم الاول"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="n1">الاسم الثاني</label>
                                <input
                                    type="text"
                                    placeholder="ادخل الاسم الثاني"
                                />
                            </div>
                            <div>
                                <label htmlFor="n1">تخصصك</label>
                                <select name="" id="" required>
                                    <option value="">تخصص 1</option>
                                    <option value="">تخصص 1</option>
                                    <option value="">تخصص 1</option>
                                    <option value="">تخصص 1</option>
                                    <option value="">تخصص 1</option>
                                    <option value="">تخصص 1</option>
                                    <option value="">تخصص 1</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="n1">رقم الهاتف</label>
                                <input
                                    type="number"
                                    placeholder="رقم هاتفك"
                                    required
                                />
                            </div>
                        </div>
                        <button>تاكيد</button>
                    </form>
                </section>
            </div>
        </Fragment>
    );
};

export default page;
