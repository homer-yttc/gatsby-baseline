import React from 'react'
import SEO from '../meta/SEO/SEO'
import Layout from '../layout/Layout/Layout'
import KitchenSink from '../samples/KitchenSink/KitchenSink'

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <h1>Home</h1>
    <KitchenSink/>
  </Layout>
)

export default IndexPage
