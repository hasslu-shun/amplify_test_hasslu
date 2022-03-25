import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document, Block } from '@contentful/rich-text-types'

import styles from 'styles/ArticleDetails.module.scss'

type articleProps = {
  // recipe: {
  fields: {
    editor: string
    featuredImage: {
      fields: {
        file: {
          url: string
          details: {
            image: {
              width: number
              height: number
            }
          }
        }
        thumbnail: {
          fields: {
            file: {
              url: string
            }
          }
        }
      }
    }
    thumbnail: {
      fields: {
        file: {
          url: string
          details: {
            image: {
              width: number
              height: number
            }
          }
        }
      }
    }
    title: {}
    content: {
      nodeType: any
      content: []
      data: {}
    }
  }
  sys: {
    createdAt: string
    contentType: {
      sys: {
        id: string
      }
    }
  }
  // }
}

// type categoryArticleProps = {
//   category: string
// }

const ArticleDetails = ({ articleInfo }: { articleInfo: articleProps }) => {
  const { editor, thumbnail, featuredImage, title, content } =
    articleInfo.fields
  const { createdAt, contentType } = articleInfo.sys
  // console.log(contentType.sys.id)
  const category = []
  switch (contentType.sys.id) {
    case 'column':
      category.push('コラム')
      break
    case 'jobChange':
      category.push('転職')
      break
    case 'sideBusiness':
      category.push('副業')
      break
  }
  // console.log(category)

  return (
    <section className={styles.container}>
      {/* info */}
      <div className={styles.info}>
        {/* <div className={styles.infoContent}> */}
        <div className={styles.infoHead}>
          <span className={styles.infoHeadTime}>
            {/* {createdAt} */}
            {createdAt.substring(0, createdAt.indexOf('T')).replace(/-/g, '/')}
          </span>
          <span className={styles.infoHeadCategory}>{category}</span>
        </div>
        <h1 className={styles.infoTitle}>{title}</h1>
        <span className={styles.infoEditor}>editor : {editor}</span>
        {/* </div> */}
      </div>
      {/* content */}
      <div className={styles.content}>
        <div className={styles.contentImg}>
          <Image
            src={'https:' + thumbnail.fields.file.url}
            // layout='fill'
            // objectFit='cover'
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
            alt={`${title}`}
          />
        </div>
        <div className={styles.contentMain}>
          {documentToReactComponents(content)}
        </div>
      </div>
    </section>
  )
}

export default ArticleDetails
