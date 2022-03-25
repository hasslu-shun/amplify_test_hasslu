import Image from 'next/image'
import Link from 'next/link'

import styles from 'styles/TopArticlesChange.module.scss'


const TopArticlesChange = () => {

    const mainItems = [
        {
            href: "/",
            src: "/asset/img/top/main_1.jpg",
            title: "1これが私のリセットボタン",
            type: "リセットボタン",
            time: "2022/02/22",
        },
    ]
    
    return (
        <section className={styles.container}>
            <div className={styles.inner}>
                <h1 className={styles.title}>
                    転職 [Job change]
                </h1>
                <div className={styles.main}>
                    <ul className={styles.mainList}>
                        {mainItems.map((data) => {
                            return(
                                <li className={styles.mainItem}
                                    key={data.title}>
                                    <Link href={data.href}>
                                        <a className={styles.mainLink}>
                                            <div className={styles.mainImg}>
                                                <Image className={styles.mainImgInside}
                                                    src={data.src} 
                                                    layout="fill"
                                                    objectFit="cover"
                                                    alt={data.title}
                                                />
                                            </div>
                                            <div className={styles.mainContent}>
                                                <time className={styles.mainContentTime}>
                                                    {data.time}
                                                </time>
                                                <span className={styles.mainContentType}>
                                                    {data.type}
                                                </span>
                                                <p className={styles.mainContentTitle}>
                                                    {data.title}
                                                </p>
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default TopArticlesChange;
