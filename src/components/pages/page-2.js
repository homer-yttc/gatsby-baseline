import React from 'react'
import Layout from '@layout/layout/layout'
import SEO from '@meta/seo/seo'
import KitchenSink from '../samples/kitchen-sink/kitchen-sink'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Page 2</h1>
    <KitchenSink />
  </Layout>
)

export default SecondPage
