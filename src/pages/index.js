import React from 'react'
import { consoleBadge, consoleStyles } from '../lib'
import { Layout, Memoized } from '../components/layout'
// import { KitchenSink } from '../samples'
import { Image } from '../components/media'

const con = consoleBadge('Homepage', consoleStyles.green)

const Homepage = () => {
  const digest = () => {
    con.log('handle Homepage digest')
  }

  return (
    <Memoized deps={[]} digest={digest}>
      <Layout pageTitle="Home">
        <h1>Home</h1>
        {/*<KitchenSink />*/}
        <Image />
      </Layout>
    </Memoized>
  )
}

export default Homepage
