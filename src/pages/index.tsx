import type { NextPage } from 'next'
import Head from 'next/head'
import { createClient } from 'contentful'

import Meta from 'components/Meta'
import Layout from 'components/Layout'
import TopArticlesLatest from 'components/TopArticlesLatest'
import TopArticlesDefault from 'components/TopArticlesDefault'
import TopArticlesChange from 'components/TopArticlesChange'
import { getDefaultSettings } from 'http2'
// import CategoryChange from 'components/CategoryChange'
// import Recipes from 'components/CategoryChange'

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
//   console.log(recipes)
//   return (
//       <TopArticlesDefault title="転職" info={recipes} />
//   )
// }

const Home: NextPage = ({
  columns,
  jobChanges,
  sideBusinesses,
  independences,
  prs,
  lifeStyles,
  resetButtons,
}: any) => {
  return (
    <Layout>
      <Meta title='top page' description='top description' />
      <TopArticlesLatest title='コラム' category='column' info={columns} />
      <TopArticlesDefault
        title='転職'
        titleEn='JOB CHANGE'
        category='job-change'
        info={jobChanges}
      />
      <TopArticlesDefault
        title='副業'
        titleEn='SIDE BUSINESS'
        category='side-business'
        info={sideBusinesses}
      />
      <TopArticlesDefault
        title='独立'
        titleEn='INDEPENDENCE'
        category='independence'
        info={independences}
      />
      <TopArticlesDefault
        title='企業PR'
        titleEn='PR'
        category='pr'
        info={prs}
      />
      <TopArticlesDefault
        title='ライフスタイル'
        titleEn='LIFE STYLE'
        category='life-style'
        info={lifeStyles}
      />
      <TopArticlesDefault
        title='リセットボタン'
        titleEn='RESET BUTTON'
        category='reset-button'
        info={resetButtons}
      />

      {/* <TopArticlesDefault title='副業' category='recipes' info={recipes} /> */}
      {/* <Recipes /> */}
      {/* <TopArticlesLatest />
      
      <TopArticlesDefault title="転職" info={changeItems} />
      <TopArticlesDefault title="副業" info={sideItems} />
      <TopArticlesDefault title="独立" info={independenseItems} />
      <TopArticlesDefault title="企業PR" info={prItems} />
      <TopArticlesDefault title="ライフスタイル" info={lefeItems} />
      <TopArticlesDefault title="リセットボタン" info={resetItems} />
      <TopArticlesDefault title="コラム" info={columnItems} /> */}
      {/* <TopArticlesChange /> */}
    </Layout>
  )
}

export default Home

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

export const getStaticProps = async () => {
  // const client = createClient()
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  })
  const columns = await getColumns(client)
  const jobChanges = await getJobChanges(client)
  const sideBusinesses = await getSideBusinesses(client)
  const independences = await getIndependences(client)
  const prs = await getPRs(client)
  const lifeStyles = await getLifeStyles(client)
  const resetButtons = await getResetButtons(client)
  return {
    props: {
      columns: columns.items,
      jobChanges: jobChanges.items,
      sideBusinesses: sideBusinesses.items,
      independences: independences.items,
      prs: prs.items,
      lifeStyles: lifeStyles.items,
      resetButtons: resetButtons.items,
    },
  }
}

export async function getColumns(client: any) {
  return await client
    .getEntries({
      content_type: 'column',
      limit: 7,
    })
    .catch((error: any) => {
      return error
    })
}

export async function getJobChanges(client: any) {
  return await client
    .getEntries({
      content_type: 'jobChange',
      limit: 6,
    })
    .catch((error: any) => {
      return error
    })
}

export async function getSideBusinesses(client: any) {
  return await client
    .getEntries({
      content_type: 'sideBusiness',
      limit: 6,
    })
    .catch((error: any) => {
      return error
    })
}

export async function getIndependences(client: any) {
  return await client
    .getEntries({
      content_type: 'independence',
      limit: 6,
    })
    .catch((error: any) => {
      return error
    })
}

export async function getPRs(client: any) {
  return await client
    .getEntries({
      content_type: 'pr',
      limit: 6,
    })
    .catch((error: any) => {
      return error
    })
}

export async function getLifeStyles(client: any) {
  return await client
    .getEntries({
      content_type: 'lifeStyle',
      limit: 6,
    })
    .catch((error: any) => {
      return error
    })
}

export async function getResetButtons(client: any) {
  return await client
    .getEntries({
      content_type: 'resetButton',
      limit: 6,
    })
    .catch((error: any) => {
      return error
    })
}

// export async function getRecipes(client: any) {
//   return await client
//     .getEntries({
//       content_type: 'recipe',
//       // limit: 3
//     })
//     .catch((error: any) => {
//       return error
//     })
// }
