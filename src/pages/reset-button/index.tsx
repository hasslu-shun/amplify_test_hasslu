import type { NextPage } from 'next'
import Head from 'next/head'
import { createClient } from 'contentful'

import Meta from 'components/Meta'
import Layout from 'components/Layout'
import TopArticlesLatest from 'components/TopArticlesLatest'
import TopArticlesDefault from 'components/TopArticlesDefault'
import CategoryKv from 'components/CategoryKv'
import CategoryArticlesList from 'components/CategoryArticlesList'

export default function ResetButtons({ resetButtons }: { resetButtons: [] }) {
  const kv = {
    title: 'RESET BUTTON',
    description:
      'ここには転職はこういう内容を書いていますよ。というものを入れていきますよ。だいたい２行くらい入る想定でやっていきますよ。',
  }
  return (
    <Layout>
      <CategoryKv title={kv.title} description={kv.description} />
      <CategoryArticlesList
        info={resetButtons}
        category='reset-button'
        categoryJa='リセットボタン'
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  })
  const res = await client.getEntries({ content_type: 'resetButton' })
  return {
    props: {
      resetButtons: res.items,
    },
  }
}
