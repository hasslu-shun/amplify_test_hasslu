import { createClient } from 'contentful'
import Image from 'next/image'
import Link from 'next/link'

import styles from 'styles/TopArticlesDefault.module.scss'

type Props = {
  title: string
  titleEn: string
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
      cookingTime: number
      title: string
    }
    metadata: {}
    sys: {
      id: string
      createdAt: string
    }
  }[]
}

const TopArticlesDefault = ({ title, titleEn, category, info }: Props) => {
  // console.log(info)
  return (
    // <p>test</p>
    <section className={styles.container}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          <span className={styles.titleEn}>{titleEn}</span>
          <span className={styles.titleJa}>[{title}]</span>
        </h2>
        <div className={styles.main}>
          <ul className={styles.mainList}>
            {info.map((data) => {
              // console.log(data)
              return (
                <li className={styles.mainItem} key={data.sys.id}>
                  <Link href={`/${category}/${data.fields.slug}`}>
                    <a className={styles.mainLink}>
                      <div className={styles.mainImg}>
                        <Image
                          className={styles.mainImgInside}
                          src={`https:${data.fields.thumbnail.fields.file.url}`}
                          // src={`/asset/img/top/main_1.jpg`}
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
                          {/* {data.fields.cookingTime} */}
                          {data.sys.createdAt}
                        </time>
                        <span className={styles.mainContentType}>
                          {/* {data.fields.title} */}
                          {title}
                          {/* {category} */}
                        </span>
                        <p className={styles.mainContentTitle}>
                          {data.fields.title}
                        </p>
                        <span className={styles.mainContentEditor}>
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

export default TopArticlesDefault

// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID!,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
//   })
//   const res = await client.getEntries({content_type: 'recipe'})
//   return {
//     props: {
//       recipes: res.items
//     }
//   }
// }

// export default function Recipes({recipes}: {recipes: []}) {
//   // console.log(recipes)
//   // type Props = {
//   // }
//   // console.log(recipes)
//   return (
//     <div className="recipe-list">
//       {recipes.map((recipe: any) => (
//         // <div className="" key={recipe.sys.id}>{recipe.fields.title}</div>
//         <TopArticlesDefault title="転職" info={recipe} />
//       ))}
//     </div>
//   )
// }
