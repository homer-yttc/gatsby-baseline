/* eslint-disable no-case-declarations */
import React from 'react'
import { uniqueId } from 'lodash'
import PARAGRAPH_TYPES from './paragraphTypes'
import { consoleBadge } from '../../console'
// import {
//   CaseStudyCta,
//   Cta,
//   CtaSlider,
//   FeaturedIcon,
//   Hero,
//   TitleWithImage,
// } from '../../../components/banners'
// import {
//   Grid,
//   ImageGrid,
//   Container,
//   Slider,
//   IconCloud,
//   QuadrantSection,
//   Quadrant,
// } from '../../../components/containers'
// import { InfoBlock, RatingCard, Text } from '../../../components/cards'
// import { Button } from '../../../components/nav'

// eslint-disable-next-line no-unused-vars
const con = consoleBadge('transformParagraph')

export default function transformParagraph(paragraphs = []) {
  const formatted = []

  if (!paragraphs) {
    return formatted
  }

  paragraphs.forEach((paragraph = {}, index) => {
    // Grab the paragraphs type, needed for the key and type checking.
    const { type = '' } = paragraph
    // A mutable reference to the final data to be passed into the rendered component.
    const data = { ...paragraph }
    // A dedicated key for this page element.
    const key = uniqueId(`${type}-${index}`)
    // The possible rendered element, or null if not matching types are found.
    const comp = null

    // Determine the paragraph to render.
    switch (type) {
      case PARAGRAPH_TYPES.p_title:
        // comp = <TitleWithImage key={key} data={paragraph} />
        break
      case PARAGRAPH_TYPES.p_text:
      case PARAGRAPH_TYPES.p_heading:
        // comp = <Text key={key} data={paragraph} />
        break
      case PARAGRAPH_TYPES.p_quadrant:
        // Handle sub-paragraphs without recursive issues.
        Object.assign(data, {
          quadrant: transformParagraph(paragraph.quadrant),
        })
        // comp = <Quadrant key={key} data={data} />
        break
      case PARAGRAPH_TYPES.p_quadrant_section:
        // comp = <QuadrantSection key={key} data={data} />
        break
      case PARAGRAPH_TYPES.p_hero_image_after:
        // comp = <Hero key={key} data={data} />
        break
      case PARAGRAPH_TYPES.p_hero_featured_article_detailed:
        // comp = <Hero key={key} data={data} />
        break
      case PARAGRAPH_TYPES.p_icon_feature:
        // comp = <FeaturedIcon key={key} data={data} />
        break
      case PARAGRAPH_TYPES.p_icon_cloud:
        // comp = <IconCloud key={key} data={data} />
        break
      case PARAGRAPH_TYPES.p_image_grid:
        // comp = <ImageGrid key={key} data={data} />
        break
      case PARAGRAPH_TYPES.p_slider:
        // Handle sub-paragraphs without recursive issues.
        Object.assign(data, {
          sliderItems: transformParagraph(paragraph.sliderItems),
        })
        // comp = <Slider key={key} data={data} />
        break
      case PARAGRAPH_TYPES.p_container:
        // Handle sub-paragraphs without recursive issues.
        Object.assign(data, {
          containerHeader: transformParagraph(paragraph.containerHeader),
          containerContent: transformParagraph(paragraph.containerContent),
          containerFooter: transformParagraph(paragraph.containerFooter),
        })
        // comp = <Container key={key} data={data} />
        break
      case PARAGRAPH_TYPES.p_grid:
        // Handle sub-paragraphs without recursive issues.
        Object.assign(data, {
          gridItems: transformParagraph(paragraph.gridItems),
          gridLeft: transformParagraph(paragraph.gridLeft),
          gridRight: transformParagraph(paragraph.gridRight),
        })
        // comp = <Grid key={key} data={data} />
        break
      case PARAGRAPH_TYPES.p_case_study_cta:
        // comp = <CaseStudyCta key={key} data={data} />
        break
      case PARAGRAPH_TYPES.p_slider_item:
      case PARAGRAPH_TYPES.p_footer_cta:
      case PARAGRAPH_TYPES.p_cta:
        // comp = <Cta key={key} data={data} />
        break
      case PARAGRAPH_TYPES.p_cta_slider:
        // Handle sub-paragraphs without recursive issues.
        Object.assign(data, {
          sliderItems: transformParagraph(paragraph.sliderItems),
        })
        // comp = <CtaSlider key={key} data={data} />
        break
      case PARAGRAPH_TYPES.p_rating_card:
        // comp = <RatingCard key={key} data={data} />
        break
      case PARAGRAPH_TYPES.p_info_block:
        // comp = <InfoBlock key={key} data={data} />
        break
      case PARAGRAPH_TYPES.p_button:
        // comp = <Button key={key} link={data.link} theme={data.theme} />
        break
    }

    // con.log('transformParagraph', paragraph, comp)

    if (comp) {
      formatted.push(comp)
    }
  })

  return formatted
}
