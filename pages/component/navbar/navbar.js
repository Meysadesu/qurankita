import Link from "next/link"
import styles from "./navbar.module.css"

export default function Navigation() {
    return (
        <div id="container" className={styles.containerNavbar}>
            <div id="sub-container" className={styles.subContainer}>
                    <Link href={"/"}>
                        <a className={styles.list__item}>
                            Quran
                        </a>
                    </Link>
                    <Link href={"/tasbih"}>
                        <a className={styles.list__item}>
                            Tasbih
                        </a>
                    </Link>
                    <Link href={""}>
                        <a className={styles.list__item}>
                            About
                        </a>
                    </Link>
            </div>
        </div>
    )
}