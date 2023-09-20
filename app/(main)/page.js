import Link from "next/link";
import classes from "./Home.module.css";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsFileEarmarkPerson } from "react-icons/bs";
export default function Home() {
    return (
        <section className={` ${classes.section}`}>
            <div>
                <p>الكشف بقا اكثر دقه وسهوله</p>
                <p>
                    نقدم خدمات استشارات طبية عن بُعد،و المشورة والدعم اللازم
                    لصحتك وصحة أفراد عائلتك
                </p>
                <div className={classes.btn}>
                    <Link href="/Major">
                        <p>احجز كشفك الان</p>
                        <AiOutlineFieldTime className="text-3xl" />
                    </Link>
                    <Link href="">
                        <p>سجل ملفك الطبي</p>
                        <BsFileEarmarkPerson  />
                    </Link>
                </div>
            </div>
            <div>
                <div className={classes.background}></div>
                <div className={classes.title}>
                    <p>مميزاتنا</p>
                    <img src="/image/hero-1.png" alt="" />
                </div>
                <div className={classes.service}>
                    <div>
                        <img src="/image/service-2.svg" alt="" />
                        <div className={classes.text}>
                            <p>حجز الكشف بقا اسهل</p>
                            <p>احجز عند اي دكتور في اي تخصص في اي وقت</p>
                        </div>
                    </div>
                    <div>
                        <img src="/image/service-2.svg" alt="" />
                        <div className={classes.text}>
                            <p>كشفك بقا اكثر دقه</p>
                            <p>
                                وجود ملف شخصي بمعلوماتك الطبيه هيساعد الدكتور{" "}
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src="/image/service-2.svg" alt="" />
                        <div className={classes.text}>
                            <p>اختار الدكتور المناسب</p>
                            <p>مع وجود عدد كبير من الدكاتره في كل التخصصات</p>
                        </div>
                    </div>
                    <div>
                        <img src="/image/service-2.svg" alt="" />
                        <div className={classes.text}>
                            <p>اختار الدكتور المناسب</p>
                            <p>مع وجود عدد كبير من الدكاتره في كل التخصصات</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
