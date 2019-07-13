import React from 'react'
import { SEO } from '../meta'
import { Layout } from '../layout'
import { KitchenSink } from '../samples'

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <h1>Home</h1>
    <KitchenSink/>
  </Layout>
)

export default IndexPage
