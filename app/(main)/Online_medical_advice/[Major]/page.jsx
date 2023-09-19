"use client";
import React, { Fragment, useState } from "react";
import classes from "./page.module.css";
import { IoPricetagOutline } from "react-icons/io5";
import { MdArrowBackIos, MdOutlineClose } from "react-icons/md";

const page = () => {
    const [selectedTime, setSelectedTime] = useState("");
    const [showPop, setShowPop] = useState(false);
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
                        <p className="text-center p-4 text-4xl font-semibold">
                            تاكيد حجز استشاره طبيه
                        </p>
                        <div className="flex items-center gap-2">
                            <p className=" font-bold text-lg">التفاصيل</p>
                            <MdArrowBackIos />
                            <p>الدفع</p>
                            <MdArrowBackIos />
                            <p>تم الحجز</p>
                        </div>
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
                                <p>
                                    الوقت من <span> 12:00</span> الي{" "}
                                    <span>12:15</span>
                                </p>
                                <p>
                                    التكلفه : <span>50 ريال</span>
                                </p>
                            </div>
                            <div className={classes.imgDoc}>
                                <img src="/image/doc.jpeg" alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 text-2xl font-semibold">
                                <p>اختار طريقه الدفع</p>
                                <IoPricetagOutline />
                            </div>
                            <div className="flex  gap-6 text-xl ">
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="check" id="n51" />
                                    <label htmlFor="n51">طريقه 1</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="check" id="n52" />
                                    <label htmlFor="n52">طريقه 1</label>
                                </div>
                            </div>
                        </div>
                        <button className="w-full p-4 text-2xl">الدفع</button>
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
                    <div className={classes.doctorDetails}>
                        <div className={classes.part1}>
                            <div className={classes.img}>
                                <img src="/image/doc.jpeg" alt="" />
                            </div>
                            <div className={classes.details}>
                                <p className={classes.name}>د.احمد محمد</p>
                                <p>طبيب عام</p>
                                <div className="text-zinc-400">
                                    <p>
                                        الخبره:{" "}
                                        <span className=" text-black">
                                            3 سنوات
                                        </span>
                                    </p>
                                </div>
                                <p className="text-zinc-400">
                                    مده الاستشاره الطبيه:{" "}
                                    <span className=" text-black">15دقيقه</span>
                                </p>
                            </div>
                        </div>
                        <div className={classes.part2}>
                            <div className="flex items-center gap-2">
                                <label htmlFor="n2" className=" text-xl">
                                    حدد الوقت{" "}
                                </label>
                                <select
                                    name=""
                                    id="n2"
                                    value={selectedTime}
                                    onChange={(e) => {
                                        handleCheckOut(1, e.target.value);
                                    }}
                                >
                                    <option value="0"></option>
                                    <option value="1">12:00 : 12:15</option>
                                    <option value="2">12:00 : 12:15</option>
                                    <option value="3">12:00 : 12:15</option>
                                    <option value="4">12:00 : 12:15</option>
                                    <option value="5">12:00 : 12:15</option>
                                    <option value="6">12:00 : 12:15</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <p>
                                    السعر{" "}
                                    <span className="font-semibold text-green-600">
                                        55 ريال
                                    </span>
                                </p>
                                <IoPricetagOutline />
                            </div>
                        </div>
                    </div>
                    <div className={classes.doctorDetails}>
                        <div className={classes.part1}>
                            <div className={classes.img}>
                                <img src="/image/doc.jpeg" alt="" />
                            </div>
                            <div className={classes.details}>
                                <p className={classes.name}>د.احمد محمد</p>
                                <p>طبيب عام</p>
                                <div className="text-zinc-400">
                                    <p>
                                        الخبره:{" "}
                                        <span className=" text-black">
                                            3 سنوات
                                        </span>
                                    </p>
                                </div>
                                <p className="text-zinc-400">
                                    مده الاستشاره الطبيه:{" "}
                                    <span className=" text-black">15دقيقه</span>
                                </p>
                            </div>
                        </div>
                        <div className={classes.part2}>
                            <div className="flex items-center gap-2">
                                <label htmlFor="n2" className=" text-xl">
                                    حدد الوقت{" "}
                                </label>
                                <select
                                    name=""
                                    id="n2"
                                    value={selectedTime}
                                    onChange={(e) => {
                                        handleCheckOut(1, e.target.value);
                                    }}
                                >
                                    <option value="0"></option>
                                    <option value="1">12:00 : 12:15</option>
                                    <option value="2">12:00 : 12:15</option>
                                    <option value="3">12:00 : 12:15</option>
                                    <option value="4">12:00 : 12:15</option>
                                    <option value="5">12:00 : 12:15</option>
                                    <option value="6">12:00 : 12:15</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <p>
                                    السعر{" "}
                                    <span className="font-semibold text-green-600">
                                        55 ريال
                                    </span>
                                </p>
                                <IoPricetagOutline />
                            </div>
                        </div>
                    </div>
                    <div className={classes.doctorDetails}>
                        <div className={classes.part1}>
                            <div className={classes.img}>
                                <img src="/image/doc.jpeg" alt="" />
                            </div>
                            <div className={classes.details}>
                                <p className={classes.name}>د.احمد محمد</p>
                                <p>طبيب عام</p>
                                <div className="text-zinc-400">
                                    <p>
                                        الخبره:{" "}
                                        <span className=" text-black">
                                            3 سنوات
                                        </span>
                                    </p>
                                </div>
                                <p className="text-zinc-400">
                                    مده الاستشاره الطبيه:{" "}
                                    <span className=" text-black">15دقيقه</span>
                                </p>
                            </div>
                        </div>
                        <div className={classes.part2}>
                            <div className="flex items-center gap-2">
                                <label htmlFor="n2" className=" text-xl">
                                    حدد الوقت{" "}
                                </label>
                                <select
                                    name=""
                                    id="n2"
                                    value={selectedTime}
                                    onChange={(e) => {
                                        handleCheckOut(1, e.target.value);
                                    }}
                                >
                                    <option value="0"></option>
                                    <option value="1">12:00 : 12:15</option>
                                    <option value="2">12:00 : 12:15</option>
                                    <option value="3">12:00 : 12:15</option>
                                    <option value="4">12:00 : 12:15</option>
                                    <option value="5">12:00 : 12:15</option>
                                    <option value="6">12:00 : 12:15</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <p>
                                    السعر{" "}
                                    <span className="font-semibold text-green-600">
                                        55 ريال
                                    </span>
                                </p>
                                <IoPricetagOutline />
                            </div>
                        </div>
                    </div>
                    <div className={classes.doctorDetails}>
                        <div className={classes.part1}>
                            <div className={classes.img}>
                                <img src="/image/doc.jpeg" alt="" />
                            </div>
                            <div className={classes.details}>
                                <p className={classes.name}>د.احمد محمد</p>
                                <p>طبيب عام</p>
                                <div className="text-zinc-400">
                                    <p>
                                        الخبره:{" "}
                                        <span className=" text-black">
                                            3 سنوات
                                        </span>
                                    </p>
                                </div>
                                <p className="text-zinc-400">
                                    مده الاستشاره الطبيه:{" "}
                                    <span className=" text-black">15دقيقه</span>
                                </p>
                            </div>
                        </div>
                        <div className={classes.part2}>
                            <div className="flex items-center gap-2">
                                <label htmlFor="n2" className=" text-xl">
                                    حدد الوقت{" "}
                                </label>
                                <select
                                    name=""
                                    id="n2"
                                    value={selectedTime}
                                    onChange={(e) => {
                                        handleCheckOut(1, e.target.value);
                                    }}
                                >
                                    <option value="0"></option>
                                    <option value="1">12:00 : 12:15</option>
                                    <option value="2">12:00 : 12:15</option>
                                    <option value="3">12:00 : 12:15</option>
                                    <option value="4">12:00 : 12:15</option>
                                    <option value="5">12:00 : 12:15</option>
                                    <option value="6">12:00 : 12:15</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <p>
                                    السعر{" "}
                                    <span className="font-semibold text-green-600">
                                        55 ريال
                                    </span>
                                </p>
                                <IoPricetagOutline />
                            </div>
                        </div>
                    </div>
                    <div className={classes.doctorDetails}>
                        <div className={classes.part1}>
                            <div className={classes.img}>
                                <img src="/image/doc.jpeg" alt="" />
                            </div>
                            <div className={classes.details}>
                                <p className={classes.name}>د.احمد محمد</p>
                                <p>طبيب عام</p>
                                <div className="text-zinc-400">
                                    <p>
                                        الخبره:{" "}
                                        <span className=" text-black">
                                            3 سنوات
                                        </span>
                                    </p>
                                </div>
                                <p className="text-zinc-400">
                                    مده الاستشاره الطبيه:{" "}
                                    <span className=" text-black">15دقيقه</span>
                                </p>
                            </div>
                        </div>
                        <div className={classes.part2}>
                            <div className="flex items-center gap-2">
                                <label htmlFor="n2" className=" text-xl">
                                    حدد الوقت{" "}
                                </label>
                                <select
                                    name=""
                                    id="n2"
                                    value={selectedTime}
                                    onChange={(e) => {
                                        handleCheckOut(1, e.target.value);
                                    }}
                                >
                                    <option value="0"></option>
                                    <option value="1">12:00 : 12:15</option>
                                    <option value="2">12:00 : 12:15</option>
                                    <option value="3">12:00 : 12:15</option>
                                    <option value="4">12:00 : 12:15</option>
                                    <option value="5">12:00 : 12:15</option>
                                    <option value="6">12:00 : 12:15</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <p>
                                    السعر{" "}
                                    <span className="font-semibold text-green-600">
                                        55 ريال
                                    </span>
                                </p>
                                <IoPricetagOutline />
                            </div>
                        </div>
                    </div>
                    <div className={classes.doctorDetails}>
                        <div className={classes.part1}>
                            <div className={classes.img}>
                                <img src="/image/doc.jpeg" alt="" />
                            </div>
                            <div className={classes.details}>
                                <p className={classes.name}>د.احمد محمد</p>
                                <p>طبيب عام</p>
                                <div className="text-zinc-400">
                                    <p>
                                        الخبره:{" "}
                                        <span className=" text-black">
                                            3 سنوات
                                        </span>
                                    </p>
                                </div>
                                <p className="text-zinc-400">
                                    مده الاستشاره الطبيه:{" "}
                                    <span className=" text-black">15دقيقه</span>
                                </p>
                            </div>
                        </div>
                        <div className={classes.part2}>
                            <div className="flex items-center gap-2">
                                <label htmlFor="n2" className=" text-xl">
                                    حدد الوقت{" "}
                                </label>
                                <select
                                    name=""
                                    id="n2"
                                    value={selectedTime}
                                    onChange={(e) => {
                                        handleCheckOut(1, e.target.value);
                                    }}
                                >
                                    <option value="0"></option>
                                    <option value="1">12:00 : 12:15</option>
                                    <option value="2">12:00 : 12:15</option>
                                    <option value="3">12:00 : 12:15</option>
                                    <option value="4">12:00 : 12:15</option>
                                    <option value="5">12:00 : 12:15</option>
                                    <option value="6">12:00 : 12:15</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <p>
                                    السعر{" "}
                                    <span className="font-semibold text-green-600">
                                        55 ريال
                                    </span>
                                </p>
                                <IoPricetagOutline />
                            </div>
                        </div>
                    </div>
                    <div className={classes.doctorDetails}>
                        <div className={classes.part1}>
                            <div className={classes.img}>
                                <img src="/image/doc.jpeg" alt="" />
                            </div>
                            <div className={classes.details}>
                                <p className={classes.name}>د.احمد محمد</p>
                                <p>طبيب عام</p>
                                <div className="text-zinc-400">
                                    <p>
                                        الخبره:{" "}
                                        <span className=" text-black">
                                            3 سنوات
                                        </span>
                                    </p>
                                </div>
                                <p className="text-zinc-400">
                                    مده الاستشاره الطبيه:{" "}
                                    <span className=" text-black">15دقيقه</span>
                                </p>
                            </div>
                        </div>
                        <div className={classes.part2}>
                            <div className="flex items-center gap-2">
                                <label htmlFor="n2" className=" text-xl">
                                    حدد الوقت{" "}
                                </label>
                                <select
                                    name=""
                                    id="n2"
                                    value={selectedTime}
                                    onChange={(e) => {
                                        handleCheckOut(1, e.target.value);
                                    }}
                                >
                                    <option value="0"></option>
                                    <option value="1">12:00 : 12:15</option>
                                    <option value="2">12:00 : 12:15</option>
                                    <option value="3">12:00 : 12:15</option>
                                    <option value="4">12:00 : 12:15</option>
                                    <option value="5">12:00 : 12:15</option>
                                    <option value="6">12:00 : 12:15</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <p>
                                    السعر{" "}
                                    <span className="font-semibold text-green-600">
                                        55 ريال
                                    </span>
                                </p>
                                <IoPricetagOutline />
                            </div>
                        </div>
                    </div>
                    <div className={classes.doctorDetails}>
                        <div className={classes.part1}>
                            <div className={classes.img}>
                                <img src="/image/doc.jpeg" alt="" />
                            </div>
                            <div className={classes.details}>
                                <p className={classes.name}>د.احمد محمد</p>
                                <p>طبيب عام</p>
                                <div className="text-zinc-400">
                                    <p>
                                        الخبره:{" "}
                                        <span className=" text-black">
                                            3 سنوات
                                        </span>
                                    </p>
                                </div>
                                <p className="text-zinc-400">
                                    مده الاستشاره الطبيه:{" "}
                                    <span className=" text-black">15دقيقه</span>
                                </p>
                            </div>
                        </div>
                        <div className={classes.part2}>
                            <div className="flex items-center gap-2">
                                <label htmlFor="n2" className=" text-xl">
                                    حدد الوقت{" "}
                                </label>
                                <select
                                    name=""
                                    id="n2"
                                    value={selectedTime}
                                    onChange={(e) => {
                                        handleCheckOut(1, e.target.value);
                                    }}
                                >
                                    <option value="0"></option>
                                    <option value="1">12:00 : 12:15</option>
                                    <option value="2">12:00 : 12:15</option>
                                    <option value="3">12:00 : 12:15</option>
                                    <option value="4">12:00 : 12:15</option>
                                    <option value="5">12:00 : 12:15</option>
                                    <option value="6">12:00 : 12:15</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <p>
                                    السعر{" "}
                                    <span className="font-semibold text-green-600">
                                        55 ريال
                                    </span>
                                </p>
                                <IoPricetagOutline />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default page;
