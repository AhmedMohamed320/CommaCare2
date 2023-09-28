"use client";
import React, { useState } from "react";
import classes from "./Family_tree.module.css";
import Form from "./form/Form";
const Family_tree = () => {
    const [showForm, setShowForm] = useState(false);
    const [formType, setFormType] = useState("");

    return (
        <section className={`mainContainer ${classes.section}`}>
            <div className={classes.list}>
                <p className=" text-4xl font-semibold py-4">بيانات العائله</p>
                <ul>
                    <li>الاب</li>
                    <li>الام</li>
                    <li>الابن الاول</li>
                    <li>الابن الثاني</li>
                    <li
                        onClick={() => {
                            setShowForm(true);
                            setFormType("add");
                        }}
                    >
                        اضافه ابن
                    </li>
                </ul>
            </div>
            <div className={classes.data}>
                <p className=" text-3xl font-semibold py-5 text-center">الام</p>
                <ul>
                    <li>
                        <p>الاسم</p>
                        <p>Azza el sayed Yosri</p>
                    </li>
                    <li>
                        <p>الكود</p>
                        <p>5003.2</p>
                    </li>
                    <li>
                        <p>العمر</p>
                        <p>48</p>
                    </li>
                    <li>
                        <p>الطول</p>
                        <p>168</p>
                    </li>
                    <li>
                        <p>الوزن</p>
                        <p>65</p>
                    </li>
                    <li>
                        <p>الوظيفه</p>
                        <p>ربه منزل</p>
                    </li>
                    <li>
                        <p>فصيله الدم</p>
                        <p>o+</p>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setShowForm(true);
                                setFormType("edit");
                            }}
                        >
                            تعديل البيانات
                        </button>
                    </li>
                </ul>
            </div>
            {showForm && <Form formFor={formType} onConfirm={()=>{setShowForm(false)}} />}
        </section>
    );
};

export default Family_tree;
