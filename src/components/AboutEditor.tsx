import Image from 'next/image'
import styles from 'styles/AboutEditor.module.scss'

const AboutEditor = () => {
  const editorData = [
    {
      src: '/asset/img/top/main_1.jpg',
      name: 'shuhei komori',
      role: 'hassluのwebディベロッパー兼編集者。',
      description:
        '20代で数年間勤め人をしている中で、世の中の常識とされているものへの疑問から、社会学的な観点で本質を見てみると、「その考え方のままだと危ないな？」と感じて、そういったことを共有してみたいなといったことからhass/uというwebメディアを運営しはじめたよ。このメディアをきっかけにして自身の働き方や生き方を考える人が増えたら面白いなと思います。',
      twitter: '/twitter',
      instagram: '/instagram',
    },
    {
      src: '/asset/img/top/main_1.jpg',
      name: 'shun nagahora',
      role: 'hassluのインフラ担当兼編集者。',
      description:
        '20代で数年間勤め人をしている中で、世の中の常識とされているものへの疑問から、社会学的な観点で本質を見てみると、「その考え方のままだと危ないな？」と感じて、そういったことを共有してみたいなといったことからhass/uというwebメディアを運営しはじめたよ。このメディアをきっかけにして自身の働き方や生き方を考える人が増えたら面白いなと思います。',
      twitter: '/twitter',
      instagram: '/instagram',
    },
  ]

  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>
            <span className={styles.headerTitleEn}>editors</span>
            <span className={styles.headerTitleJa}>編集者</span>
          </h2>
        </div>
        <div className={styles.body}>
          <ul className={styles.bodyList}>
            {editorData.map((data) => {
              return (
                <li className={styles.bodyItem} key={data.name}>
                  <div className={styles.bodyItemImg}>
                    <Image
                      src={data.src}
                      layout='fill'
                      objectFit='cover'
                      alt={data.name}
                    />
                  </div>
                  <div className={styles.bodyItemContent}>
                    <div className={styles.bodyItemContentHeader}>
                      <h3 className={styles.bodyItemContentHeaderTitle}>
                        {data.name}
                      </h3>
                      <span className={styles.bodyItemContentHeaderRole}>
                        {data.role}
                      </span>
                    </div>
                    <div className={styles.bodyItemContentBody}>
                      <p className={styles.bodyItemContentBodyText}>
                        {data.description}
                      </p>
                    </div>
                    <div className={styles.bodyItemContentFooter}>
                      <ul className={styles.bodyItemContentFooterList}>
                        <li className={styles.bodyItemContentFooterItem}>
                          <a
                            href={data.twitter}
                            className={styles.bodyItemContentFooterLink}
                          >
                            twitter
                          </a>
                        </li>
                        <li className={styles.bodyItemContentFooterItem}>
                          <a
                            href={data.instagram}
                            className={styles.bodyItemContentFooterLink}
                          >
                            instagram
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutEditor
