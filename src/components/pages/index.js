import React from 'react'
import Memoized from '../layout/Memoized/Memoized'
import Layout from '../layout/Layout/Layout'
import KitchenSink from '../../samples/KitchenSink/KitchenSink'
import { consoleBadge, consoleStyles } from '../../lib/console'

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
      </Layout>
    </Memoized>
  )
}

export default Homepage
