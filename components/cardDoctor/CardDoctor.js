"use client";
import React, { Fragment, useState } from "react";
import classes from "./CardDoctor.module.css";
import { IoPricetagOutline } from "react-icons/io5";
const CardDoctor = (props) => {
    const [selectedTime, setSelectedTime] = useState("");
    return (
        <Fragment>
            <div className={classes.doctorDetails}>
                <div className={classes.part1}>
                    <div className={classes.img}>
                        <img src="/image/doc.jpeg" alt="" />
                    </div>
                    <div className={classes.details}>
                        <p className={classes.name}>د.احمد محمد</p>
                        <span>طبيب عام</span>
                        <p>
                            الخبره: <span>3 سنوات</span>
                        </p>
                        <p>
                            العنوان: <span>الزقازيق</span>
                        </p>
                        <p>
                            مده الكشف: <span>15دقيقه</span>
                        </p>
                    </div>
                </div>
                <div className={classes.part2}>
                    <div className="flex items-center gap-2">
                        <label htmlFor="n2" className=" text-xl">
                            حدد اليوم{" "}
                        </label>
                        <input
                            type="date"
                            name=""
                            value={selectedTime}
                            onChange={(e) => {
                                setSelectedTime(e.target.value)
                                props.handleCheckOut(1, e.target.value);
                            }}
                            id="n2"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <p>
                            السعر :{" "}
                            <span className="font-semibold text-green-600">
                                55 ريال
                            </span>
                        </p>
                        <IoPricetagOutline />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CardDoctor;
