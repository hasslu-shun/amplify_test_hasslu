import AboutContact from 'components/AboutContact'
import AboutEditor from 'components/AboutEditor'
import AboutKv from 'components/AboutKv'
import AboutMain from 'components/AboutMain'
import Layout from 'components/Layout'
import { NextPage } from 'next'

const About: NextPage = ({}) => {
  return (
    <Layout>
      <AboutKv />
      <AboutMain />
      <AboutEditor />
      <AboutContact />
    </Layout>
  )
}

export default About
