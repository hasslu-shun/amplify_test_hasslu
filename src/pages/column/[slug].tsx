import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document, Block } from '@contentful/rich-text-types'
import Image from 'next/image'
import React, { FC } from 'react'
import ArticleDetails from 'components/ArticleDetails'
import Layout from 'components/Layout'

// const RecipeDetails = () => {
//     return (
//         <div>
//             RecipeDetails
//         </div>
//     );
// }

// export default RecipeDetails;

type Props = {
  item: {
    fields: {
      slug: string
    }
  }
}

type ItemProps = {
  metadata: { tags: [] }
  sys: {
    space: { sys: [Object] }
    id: string
    type: string
    createdAt: string
    updatedAt: string
    environment: { sys: [Object] }
    revision: number
    contentType: { sys: [Object] }
    locale: string
  }
  fields: {
    title: string
    slug: string
    thumbnail: { metadata: [Object]; sys: [Object]; fields: [Object] }
    featuredImage: { metadata: [Object]; sys: [Object]; fields: [Object] }
    ingredients: [string]
    cookingTime: string
    content: { nodeType: string; data: {}; content: [] }
  }
}

interface RichTextRendererProps {
  document: Document
}

export const RichTextRenderer: FC<RichTextRendererProps> = ({
  document,
}: RichTextRendererProps) => {
  return <span>{documentToReactComponents(document)}</span>
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'column',
  })

  const paths = res.items.map((item: any) => ({
    params: {
      slug: item.fields.slug,
    },
    // return {
    //     params: {slug: item.fields.slug}
    // }
  }))

  return {
    paths,
    fallback: false,
  }
}

type paramsProps = {
  slug: string
}

export async function getStaticProps({ params }: { params: paramsProps }) {
  const { items } = await client.getEntries({
    content_type: 'column',
    'fields.slug': params.slug,
  })
  // console.log(items)
  return {
    props: { column: items[0] },
  }
}

type columnProps = {
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

// type categoryProps = {
//   category: string
// }

export default function ColumnDetails({ column }: { column: columnProps }) {
  //   const { thumbnail, featuredImage, title, content } = column.fields
  // console.log(column)
  // console.log('https:' + featuredImage.fields.file.url)
  return (
    <Layout>
      <ArticleDetails articleInfo={column} />
    </Layout>
    // <div>
    //   <h1>{title}</h1>
    //   <Image
    //     src={'https:' + thumbnail.fields.file.url}
    //     // layout='fill'
    //     // objectFit='cover'
    //     width={thumbnail.fields.file.details.image.width}
    //     height={thumbnail.fields.file.details.image.height}
    //     alt={`${title}`}
    //   />
    //   <div> {documentToReactComponents(content)} </div>
    // </div>
  )
}
