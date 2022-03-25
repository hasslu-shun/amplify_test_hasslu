import styles from 'styles/AboutContact.module.scss'

const AboutContact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>
            <span className={styles.headerTitleEn}>contact</span>
            <span className={styles.headerTitleJa}>お問い合わせ</span>
          </h2>
        </div>
        <div className={styles.body}>
          <p className={styles.bodyDescription}>
            企業PRインタビューのご依頼など、下記メールアドレスからご連絡ください。
          </p>
          <a href='' className={styles.bodyMail}>
            hasslu.work@gmail.com
          </a>
        </div>
        <div className={styles.sns}>
          <span className={styles.snsHeader}>sns</span>
          <ul className={styles.snsList}>
            <li className={styles.snsItem}>
              twitter :
              <a href='@hasslu.twitter' className={styles.snsLink}>
                @hasslu.twitter
              </a>
            </li>
            <li className={styles.snsItem}>
              instagram :
              <a href='@hasslu.instagram' className={styles.snsLink}>
                @hasslu.instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutContact
