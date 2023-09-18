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
                <div className={classes.title}>
                    <p> خدماتنا لك</p>
                    <img src="/image/hero-1.png" alt="" />
                </div>
                <div className={classes.service}>
                    <Link href="/Online_medical_advice">
                        <img src="/image/service-1.svg" alt="" />
                        <p>استشاره طبيه اونلاين </p>
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
