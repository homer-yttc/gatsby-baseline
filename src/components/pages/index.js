import React from 'react'
import consola from 'consola'
import Memoized from '../layout/Memoized/Memoized'
import Layout from '../layout/Layout/Layout'
import KitchenSink from '../samples/KitchenSink/KitchenSink'

const Homepage = () => {
  const digest = () => {
    consola.log('handle Homepage digest')
  }

  return (
    <Memoized deps={[]} digest={digest}>
      <Layout pageTitle="Home">
        <h1>Home</h1>
        <KitchenSink />
      </Layout>
    </Memoized>
  )
}

export default Homepage
