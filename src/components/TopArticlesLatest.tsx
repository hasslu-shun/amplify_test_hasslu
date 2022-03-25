import Link from 'next/link'
import Image from 'next/image'
import styles from 'styles/TopArticlesLatest.module.scss'

type Props = {
  title: string
  category: string
  info: {
    fields: {
      slug: string
      editor: string
      thumbnail: {
        fields: {
          file: {
            url: string
          }
        }
      }
      date: number
      title: string
    }
    metadata: {}
    sys: {
      id: string
      createdAt: string
    }
  }[]
}

const TopArticlesLatest = ({ title, category, info }: Props) => {
  // console.log(info)
  // console.log(info)
  // const first = mainItems.find((data, index) => index === 0)
  const first = info.find((data, index) => index === 0)
  // console.log(first)
  // const normal = mainItems.slice(1)
  const normal = info.slice(1)
  // console.log(normal)

  // console.log(first?.sys.createdAt)
  const time = first?.sys.createdAt
    .substring(0, first?.sys.createdAt.indexOf('T'))
    .replace(/-/g, '/')
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          <span className={styles.titleEn}>COLUMN</span>
          <span className={styles.titleJa}>[コラム]</span>
        </h1>
        <div className={styles.main}>
          <div className={styles.mainFirst}>
            <Link
              href={`/${category}/${first?.fields.slug}`}
              // href='/'
            >
              <a className={styles.mainFirstLink}>
                <div className={styles.mainFirstImg}>
                  <Image
                    className={styles.mainFirstImgInside}
                    // src={first?.src!}
                    src={`https:${first?.fields.thumbnail.fields.file.url}`}
                    // width='100'
                    // height='100'
                    // layout='responsive'
                    layout='fill'
                    objectFit='cover'
                    alt={first?.fields.title}
                  />
                </div>
                <div className={styles.mainFirstContent}>
                  <time className={styles.mainFirstContentTime}>
                    {/* {first?.time} */}
                    {/* {first?.sys.createdAt} */}
                    {time}
                  </time>
                  <span className={styles.mainFirstContentType}>
                    {/* {first?.type} */}
                    {/* {first?.fields.title} */}
                    {title}
                    {/* {category} */}
                  </span>
                  <p className={styles.mainFirstContentTitle}>
                    {/* {mainItems[0].title} */}
                    {first?.fields.title}
                  </p>
                  <span className={styles.mainFirstContentEditor}>
                    {first?.fields.editor}
                  </span>
                </div>
              </a>
            </Link>
          </div>
          <ul className={styles.mainList}>
            {normal.map((data) => {
              const time = data.sys.createdAt
                .substring(0, data.sys.createdAt.indexOf('T'))
                .replace(/-/g, '/')
              // console.log(`https:${data.fields.thumbnail.fields.file.url}`)
              return (
                <li className={styles.mainItem} key={data.sys.id}>
                  <Link href={`/${category}/${data.fields.slug}`}>
                    <a className={styles.mainLink}>
                      <div className={styles.mainImg}>
                        <Image
                          className={styles.mainImgInside}
                          src={`https:${data.fields.thumbnail.fields.file.url}`}
                          layout='fill'
                          objectFit='cover'
                          // width='100'
                          // height='100'
                          // layout='responsive'
                          alt={data.fields.title}
                        />
                      </div>
                      <div className={styles.mainContent}>
                        <time className={styles.mainContentTime}>
                          {/* {data.time} */}
                          {/* {data.sys.createdAt} */}
                          {time}
                        </time>
                        <span className={styles.mainContentType}>
                          {/* {data.type} */}
                          {/* {data.fields.title} */}
                          {title}
                          {/* {category} */}
                        </span>
                        <p className={styles.mainContentTitle}>
                          {/* {data.title} */}
                          {data.fields.title}
                        </p>
                        <span className={styles.mainContentEditor}>
                          {/* {data.title} */}
                          {data.fields.editor}
                        </span>
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
  )
}

export default TopArticlesLatest
