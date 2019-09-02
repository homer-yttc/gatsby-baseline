import React from 'react'
import { Layout, Memoized } from '../layout'
import KitchenSink from '../../samples/KitchenSink/KitchenSink'
import { consoleBadge, consoleStyles } from '../../lib/console'
import { Image } from '../media'

const con = consoleBadge('Homepage', consoleStyles.green)

const Homepage = () => {
  const digest = () => {
    con.log('handle Homepage digest')
  }

  return (
    <Memoized deps={[]} digest={digest}>
      <Layout pageTitle="Home">
        <h1>Home</h1>
        <KitchenSink />
        <Image />
      </Layout>
    </Memoized>
  )
}

export default Homepage
