import Link from "next/link";
import classes from "./Home.module.css";
export default function Home() {
    return (
        <section className={` ${classes.section}`}>
            <div>
                <p>هنا تجد احتياجاتك واحتياجات عائلتك</p>
                <p>
                    نقدم خدمات استشارات طبية عن بُعد،و المشورة والدعم اللازم
                    لصحتك وصحة أفراد عائلتك
                </p>
            </div>
            <div>
                <div className={classes.background}></div>
                <p>خدماتنا</p>
                <div className={classes.service}>
                    <Link href="">
                        <img src="/image/service-1.svg" alt="" />
                        <p>الاستشارات الطبيه</p>
                    </Link>
                    <Link href="">
                        <img src="/image/service-1.svg" alt="" />
                        <p>الاستشارات الطبيه</p>
                    </Link>{" "}
                    <Link href="">
                        <img src="/image/service-1.svg" alt="" />
                        <p>الاستشارات الطبيه</p>
                    </Link>{" "}
                    <Link href="">
                        <img src="/image/service-1.svg" alt="" />
                        <p>الاستشارات الطبيه</p>
                    </Link>{" "}
                    <Link href="">
                        <img src="/image/service-1.svg" alt="" />
                        <p>الاستشارات الطبيه</p>
                    </Link>{" "}
                    <Link href="">
                        <img src="/image/service-1.svg" alt="" />
                        <p>الاستشارات الطبيه</p>
                    </Link>{" "}
                    <Link href="">
                        <img src="/image/service-1.svg" alt="" />
                        <p>الاستشارات الطبيه</p>
                    </Link>{" "}
                    <Link href="">
                        <img src="/image/service-1.svg" alt="" />
                        <p>الاستشارات الطبيه</p>
                    </Link>
                </div>
            </div>
        </section>
    );
}
