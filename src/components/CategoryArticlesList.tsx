import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/CategoryArticlesList.module.scss'
import CategoryAdvertising from './CategoryAdvertising'

type Props = {
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
      cookingTime: number
      title: string
    }
    metadata: {}
    sys: {
      id: string
      createdAt: string
    }
  }[]
  category: string
  categoryJa: string
}

const CategoryArticlesList = ({ info, category, categoryJa }: Props) => {
  // console.log(categoryJa)
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {info.map((data) => {
          const time = data.sys.createdAt
            .substring(0, data.sys.createdAt.indexOf('T'))
            .replace(/-/g, '/')
          return (
            <li className={styles.item} key={data.sys.id}>
              <Link href={`/${category}/${data.fields.slug}`}>
                <a className={styles.link}>
                  <div className={styles.img}>
                    <Image
                      className={styles.imgInside}
                      src={`https:${data.fields.thumbnail.fields.file.url}`}
                      layout='fill'
                      objectFit='cover'
                      // width='100'
                      // height='100'
                      // layout='responsive'
                      alt={data.fields.title}
                    />
                  </div>
                  <div className={styles.content}>
                    <time className={styles.contentTime}>
                      {/* {data.time} */}
                      {/* {data.sys.createdAt} */}
                      {time}
                    </time>
                    <span className={styles.contentType}>
                      {/* {category} */}
                      {categoryJa}
                    </span>
                    <p className={styles.contentTitle}>
                      {/* {data.title} */}
                      {data.fields.title}
                    </p>
                    <span className={styles.contentEditor}>
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
      <CategoryAdvertising />
    </div>
  )
}

export default CategoryArticlesList
