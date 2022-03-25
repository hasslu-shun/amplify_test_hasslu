import styles from '../styles/CategoryKv.module.scss'

type Props = {
  title: string
  description: string
}

const CategoryKv = ({ title, description }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  )
}

export default CategoryKv
