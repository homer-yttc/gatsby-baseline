import { Power1, TimelineMax } from 'gsap'

export const verticalAnimation = (transitionCover, layoutContents, { length }, direction) => {
  const directionTo = direction === 'up' ? '-100%' : '100%'
  const directionFrom = direction === 'up' ? '100%' : '-100%'

  // convert ms to s for gsap
  const seconds = length

  return new TimelineMax()
    .set(transitionCover, { y: directionFrom })
    .to(transitionCover, seconds / 2, {
      y: '0%',
      ease: Power1.easeInOut,
    })
    .set(layoutContents, { opacity: 0 })
    .to(transitionCover, seconds / 2, {
      y: directionTo,
      ease: Power1.easeIn,
    })
}

export const fadeInText = (entry, node) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  new TimelineMax().staggerFrom(
    node.querySelectorAll('h2, p, a, pre'),
    1,
    {
      opacity: 0,
      y: '+=50',
    },
    0.1
  )
