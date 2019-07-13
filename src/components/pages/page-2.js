import React from 'react'
import { SEO } from '../meta'
import { Layout } from '../layout'
import { KitchenSink } from '../samples'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Page 2</h1>
    <KitchenSink />
  </Layout>
)

export default SecondPage
