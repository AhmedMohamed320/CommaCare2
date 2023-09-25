import React from "react";
import classes from "./Doctory.module.css";
const Doctory = () => {
    return (
        <section className={classes.section}>
            <ul className={classes.upList}>
                <li>
                    <p className={classes.major}>الطب العام</p>
                    <ul className={classes.docList}>
                        <li>
                            <div>
                                <img src="/image/doc.jpeg" alt="" />
                            </div>
                            <div>
                                <p className={classes.name}>د.احمد محمد</p>
                                <p>
                                    السعر : <span>50 ريال</span>
                                </p>
                                <div className="flex items-center gap-4">
                                    <label htmlFor="n1">حجز معاد بتاريخ</label>
                                    <input type="date" id="n1" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <p className={classes.major}>الطب النفسي</p>
                    <ul className={classes.docList}>
                        <li>
                            <div>
                                <img src="/image/doc.jpeg" alt="" />
                            </div>
                            <div>
                                <p className={classes.name}>د.احمد محمد</p>
                                <p>
                                    السعر : <span>50 ريال</span>
                                </p>
                                <div className="flex items-center gap-4">
                                    <label htmlFor="n1">حجز كشف بتاريخ</label>
                                    <input type="date" id="n1" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    );
};

export default Doctory;
