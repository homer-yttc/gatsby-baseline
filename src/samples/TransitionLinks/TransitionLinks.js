import React, { useCallback, useState } from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { consoleBadge, consoleStyles, getWindow } from '../../lib'
import { fadeInText, verticalAnimation } from './animations'
import TransitionPortal from './TransitionPortal'

const con = consoleBadge('TransitionLinks', consoleStyles.white)

const TransitionLinks = () => {
  const [layoutContents, setLayoutContents] = useState()
  const [transitionCover, setTransitionCover] = useState()
  const getLayoutContents = useCallback((n) => setLayoutContents(n), [])
  const getTransitionCover = useCallback((n) => setTransitionCover(n), [])

  const pathname = getWindow('location.pathname') || ''
  const targetUrl = pathname === '/' ? '/page-2' : '/'
  con.log({ pathname, targetUrl })

  return (
    <>
      <section ref={getLayoutContents}>
        <div>
          <h2>Transition Links</h2>
          {pathname && <span>Path: {pathname}</span>}
          <br/>
          {targetUrl && <span>Target: {targetUrl}</span>}
          <br/>
          <AniLink cover to={targetUrl} direction="right">
            Go to a page, with a cover right
          </AniLink>
          <br/>
          <AniLink paintDrip to={targetUrl} hex="#4b2571">
            Go to a page, with a paint drip
          </AniLink>
          <br/>
          <TransitionLink
            to={targetUrl}
            exit={{
              length: 1,
              trigger: ({ exit }) =>
                verticalAnimation(transitionCover, layoutContents, exit, 'down'),
              state: { test: 'exit state' },
            }}
            entry={{
              delay: 0.5,
              trigger: ({ entry, node }) => fadeInText(entry, node),
            }}
          >
            Go to a page, that way{' '}
            <span aria-label="pointing down" role="img">
              👇
            </span>{' '}
            and animate in the next page
          </TransitionLink>
          <br/>
          <TransitionLink
            to={targetUrl}
            exit={{
              length: 1.2,
              trigger: ({ exit }) => verticalAnimation(transitionCover, layoutContents, exit, 'up'),
            }}
            entry={{
              delay: 0.5,
              length: 1,
              state: { layoutTheme: 'dark' },
            }}
          >
            Go to a page, that way{' '}
            <span aria-label="pointing up" role="img">
              ☝️
            </span>
            and give us a dark theme when we get there.
          </TransitionLink>
          <br/>
        </div>
      </section>
      <TransitionPortal getTransitionCover={getTransitionCover}/>
    </>
  )
}

TransitionLinks.defaultProps = {}
TransitionLinks.propTypes = {}

export default TransitionLinks
