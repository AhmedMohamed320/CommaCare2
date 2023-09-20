"use client";
import React, { Fragment, useState } from "react";
import classes from "./page.module.css";
import { MdOutlineClose } from "react-icons/md";
import CardDoctor from "@/components/cardDoctor/CardDoctor";

const page = () => {
    const [showPop, setShowPop] = useState(false);
    const [selectedTime, setSelectedTime] = useState("");
    function handleCheckOut(idDoctor, time) {
        setShowPop(true);
        setSelectedTime(time);
    }
    return (
        <Fragment>
            {showPop && (
                <div className={classes.pop}>
                    <div>
                        <div
                            className={classes.close}
                            onClick={() => {
                                setShowPop(false);
                            }}
                        >
                            <MdOutlineClose />
                        </div>
                        <p className="text-center p-4 text-3xl font-semibold">
                            تاكيد حجز استشاره طبيه
                        </p>

                        <div
                            className={`flex justify-between gap-4 ${classes.details}`}
                        >
                            <div className="flex flex-col gap-4">
                                <p>
                                    دكتور : <span>احمد محمد</span>
                                </p>
                                <p>
                                    القسم : <span>الطب العام</span>
                                </p>
                                <p>تاريخ : {selectedTime}</p>
                                <p>
                                    التكلفه : <span>50 ريال</span>
                                </p>
                            </div>
                            <div className={classes.imgDoc}>
                                <img src="/image/doc.jpeg" alt="" />
                            </div>
                        </div>
                        <button
                            className="w-full p-4 text-2xl"
                            onClick={() => {
                                setShowPop(false);
                            }}
                        >
                            تاكيد
                        </button>
                    </div>
                </div>
            )}

            <section className={`mainContainer ${classes.section}`}>
                <div className={`flex flex-col  ${classes.head}`}>
                    <p className="text-5xl py-8 font-semibold">الطب العام</p>
                    <div className="flex items-center gap-2">
                        <label htmlFor="n1" className="text-2xl font-semibold">
                            فلتر
                        </label>
                        <select name="" id="n1">
                            <option value=""> من السعر الاعلى للاقل</option>
                            <option value="">من السعر الاقل للاعلى</option>
                            <option value="">حسب الخبره</option>
                        </select>
                    </div>
                </div>
                <div className={classes.all}>
                    <CardDoctor handleCheckOut={handleCheckOut} />
                    <CardDoctor handleCheckOut={handleCheckOut} />
                    <CardDoctor handleCheckOut={handleCheckOut} />
                    <CardDoctor handleCheckOut={handleCheckOut} />
                </div>
            </section>
        </Fragment>
    );
};

export default page;
