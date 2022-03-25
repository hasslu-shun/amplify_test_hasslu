import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document, Block } from '@contentful/rich-text-types'
import Image from 'next/image'
import React, { FC } from 'react'
import ArticleDetails from 'components/ArticleDetails'
import Layout from 'components/Layout'

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
    content_type: 'jobChange',
  })

  const paths = res.items.map((item: any) => ({
    params: {
      slug: item.fields.slug,
    },
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
    content_type: 'jobChange',
    'fields.slug': params.slug,
  })
  return {
    props: { jobChange: items[0] },
  }
}

type jobChangeProps = {
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
}

export default function JobChangeDetails({
  jobChange,
}: {
  jobChange: jobChangeProps
}) {
  // console.log(jobChange)
  // console.log('https:' + featuredImage.fields.file.url)
  return (
    <Layout>
      <ArticleDetails articleInfo={jobChange} />
    </Layout>
  )
}
