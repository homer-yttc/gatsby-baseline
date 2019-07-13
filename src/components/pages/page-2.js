import React from 'react'
import SEO from '../meta/SEO/SEO'
import Layout from '../layout/Layout/Layout'
import KitchenSink from '../samples/KitchenSink/KitchenSink'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Page 2</h1>
    <KitchenSink />
  </Layout>
)

export default SecondPage
