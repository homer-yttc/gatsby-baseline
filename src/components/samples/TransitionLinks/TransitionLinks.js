import React, { useCallback, useLayoutEffect, useState } from 'react'
import { has, isObject, isUndefined } from 'lodash'
// import * as PropTypes from 'prop-types'
import TransitionLink, { TransitionPortal } from 'gatsby-plugin-transition-link'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Location } from '@reach/router'
import useWindow from '../../../lib/hooks/useWindow'
import { test, verticalAnimation } from './animations'

const TransitionLinks = () => {
  const win = useWindow()

  const [currentPath, setCurrentPath] = useState()
  const [layoutContents, setLayoutContents] = useState()
  const [transitionCover, setTransitionCover] = useState()
  const getLayoutContents = useCallback((n) => setLayoutContents(n), [])
  const getTransitionCover = useCallback((n) => setTransitionCover(n), [])
  let targetUrl = `/`

  useLayoutEffect(() => {
    if (!isUndefined(win)) {
      targetUrl = win.location.pathname === `/` ? `/page-2` : `/`
    }

    if (isObject(win) && has(win, `location.pathname`)) {
      setCurrentPath(win.location.pathname)
    }
  }, [win])

  return (
    <Location>
      {({ location }) => (
        <>
          <section ref={getLayoutContents}>
            <div>
              <h2>Transition Links</h2>
              {currentPath && <span>Path: {location.pathname}</span>}
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
