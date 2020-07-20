import React from 'react'

// Data
// Comp
// onents
import Header from '../../components/layout/Header/Header'
import { SEO } from '../../components/meta'
// import Footer from '../../components/layout/Footer/Footer'
// import { FooterCta } from '../../components/banners'
// Assets
import './WpPosts.scss'
// import { consoleBadge, isReactComponent } from '../../lib'
import { consoleBadge } from '../../lib'

const con = consoleBadge('WpPosts')
// eslint-disable-next-line react/prop-types
export default function WpPosts({ pageContext: { data = {} } = {} }) {
  // const hero = transformParagraph(node.hero)
  // const content = transformParagraph(node.content)

  con.log('WpPosts', data)

  return (
    <>
      <SEO title={data.title} />
      <div className="wp-post" data-alias={data.slug}>
        <Header />
        <div id="main" className="wp-post--wrapper">
          <section className="wp-post__hero">{}</section>
          <article
            className="wp-post__content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
        {/*<FooterCta />*/}
        {/*<Footer />*/}
      </div>
    </>
  )
}
