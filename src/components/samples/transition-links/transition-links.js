import React, { useCallback, useState, useEffect } from 'react'
import { isUndefined } from 'lodash'
import { TimelineMax, Power1 } from 'gsap'
// import * as PropTypes from 'prop-types'
import TransitionLink, { TransitionPortal } from 'gatsby-plugin-transition-link'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Location } from '@reach/router'
import useWindow from '@hooks/useWindow'

const verticalAnimation = (transitionCover, layoutContents, { length }, direction) => {
  const directionTo = direction === `up` ? `-100%` : `100%`
  const directionFrom = direction === `up` ? `100%` : `-100%`

  // convert ms to s for gsap
  const seconds = length

  return new TimelineMax()
    .set(transitionCover, { y: directionFrom })
    .to(transitionCover, seconds / 2, {
      y: `0%`,
      ease: Power1.easeInOut,
    })
    .set(layoutContents, { opacity: 0 })
    .to(transitionCover, seconds / 2, {
      y: directionTo,
      ease: Power1.easeIn,
    })
}

const test = (entry, node) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  new TimelineMax().staggerFrom(
    node.querySelectorAll(`h2, p, a, pre`),
    1,
    {
      opacity: 0,
      y: `+=50`,
    },
    0.1
  )

const TransitionLinks = () => {
  const window = useWindow()
  const [currentPath, setCurrentPath] = useState()
  const [layoutContents, setLayoutContents] = useState()
  const [transitionCover, setTransitionCover] = useState()
  const getLayoutContents = useCallback((n) => setLayoutContents(n), [])
  const getTransitionCover = useCallback((n) => setTransitionCover(n), [])
  let targetUrl = `/`

  if (!isUndefined(window)) {
    targetUrl = window.location.pathname === `/` ? `/page-2` : `/`
  }
  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [window])

  return (
    <Location>
      {({ location }) => (
        <>
          <section ref={getLayoutContents}>
            <div>
              <h2>Transition Links</h2>
              {currentPath && (<span>Path: {location.pathname}</span>)}<br/>
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
                    verticalAnimation(transitionCover, layoutContents, exit, `down`),
                  state: { test: `exit state` },
                }}
                entry={{
                  delay: 0.5,
                  trigger: ({ entry, node }) => test(entry, node),
                }}
              >
                Go to a page, that way{` `}
                <span aria-label="pointing up" role="img">
                  👇
                </span>
                {` `}
                and animate in the next page
              </TransitionLink>
              <br/>
              <TransitionLink
                to={targetUrl}
                exit={{
                  length: 1.2,
                  trigger: ({ exit }) =>
                    verticalAnimation(transitionCover, layoutContents, exit, `up`),
                }}
                entry={{
                  delay: 0.5,
                  length: 1,
                  state: { layoutTheme: `dark` },
                }}
              >
                Go to a page, that way{` `}
                <span aria-label="pointing up" role="img">
                  ☝️
                </span>
                and give us a dark theme when we get there.
              </TransitionLink>
              <br/>
            </div>
          </section>
          <TransitionPortal>
            <div
              ref={getTransitionCover}
              style={{
                position: `fixed`,
                background: `#4b2571`,
                top: 0,
                left: 0,
                width: `100vw`,
                height: `100vh`,
                transform: `translateY(100%)`,
              }}
            />
          </TransitionPortal>
        </>
      )}
    </Location>
  )
}

TransitionLinks.defaultProps = {}
TransitionLinks.propTypes = {}

export default TransitionLinks
