import React from 'react'
import { TransitionPortal } from 'gatsby-plugin-transition-link'

// eslint-disable-next-line
export default ({ getTransitionCover }) => {
  return (
    <TransitionPortal>
      <div
        ref={getTransitionCover}
        style={{
          position: 'fixed',
          background: '#4b2571',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          transform: 'translateY(100%)',
        }}
      />
    </TransitionPortal>
  )
}
