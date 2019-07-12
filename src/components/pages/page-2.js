import React from 'react'
import Layout from '@layout/layout/layout'
import SEO from '@meta/seo/seo'
import KitchenSink from '../samples/kitchen-sink/kitchen-sink'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two"/>
    <KitchenSink/>
  </Layout>
)

export default SecondPage
