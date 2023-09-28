import Link from "next/link";
import classes from "./Home.module.css";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Fragment } from "react";
export default function Home() {
    return (
        <Fragment>
            <div className={classes.up}>
                <div className={classes.circle1}></div>
                <div className={classes.circle2}></div>
                <section className={` ${classes.section}`}>
                    <div>
                        <p>الكشف بقا اكثر دقه وسهوله</p>
                        <p>
                            نقدم خدمات استشارات طبية عن بُعد،و المشورة والدعم
                            اللازم لصحتك وصحة أفراد عائلتك
                        </p>
                        <div className={classes.btn}>
                            <Link href="/Major">
                                <p>احجز كشفك الان</p>
                                <AiOutlineFieldTime className="text-4xl" />
                            </Link>
                            <div
                                
                                className={classes.numUser}
                            >
                                <p>+٥٠٠   دكتور موجود معانا  </p>
                                <div>
                                    <ul className="flex">
                                        <li>
                                            <img
                                                src="/image/service-1.png"
                                                alt=""
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="/image/service-1.png"
                                                alt=""
                                            />
                                        </li>
                                        <li>
                                            <img
                                                src="/image/service-1.png"
                                                alt=""
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <img
                            src="/image/hero-1.png"
                            alt=""
                            className="md:block hidden"
                        />
                        <img
                            src="/image/hero-2.png"
                            alt=""
                            className="md:block hidden"
                        />
                    </div>
                    <div className="md:justify-center justify-start">
                        <div className={classes.title}>
                            <p>مميزاتنا</p>
                        </div>
                        <div className={classes.service}>
                            <div>
                                <img src="/image/service-2.svg" alt="" />
                                <div className={classes.text}>
                                    <p>حجز الكشف بقا اسهل</p>
                                    <p>
                                        احجز عند اي دكتور في اي تخصص في اي وقت
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img src="/image/service-2.svg" alt="" />
                                <div className={classes.text}>
                                    <p>كشفك بقا اكثر دقه</p>
                                    <p>
                                        وجود ملف شخصي بمعلوماتك الطبيه هيساعد
                                        الدكتور{" "}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img src="/image/service-2.svg" alt="" />
                                <div className={classes.text}>
                                    <p>اختار الدكتور المناسب</p>
                                    <p>
                                        مع وجود عدد كبير من الدكاتره في كل
                                        التخصصات
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img src="/image/service-2.svg" alt="" />
                                <div className={classes.text}>
                                    <p>اختار الدكتور المناسب</p>
                                    <p>
                                        مع وجود عدد كبير من الدكاتره في كل
                                        التخصصات
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    );
}
