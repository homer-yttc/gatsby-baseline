import React from 'react'
import Layout from '@layout/layout/layout'
import SEO from '@meta/seo/seo'
import KitchenSink from '../samples/kitchen-sink/kitchen-sink'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <KitchenSink />
  </Layout>
)

export default IndexPage
