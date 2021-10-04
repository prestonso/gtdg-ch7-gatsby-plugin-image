import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  const image = getImage(data.file)
  return <GatsbyImage
    image={image}
    alt="Pikes Peak, known as Tava in the Ute language and Heey-otoyoo' in the Arapaho language"
  />
}

export const query = graphql`
  {
    file(relativePath: {
      eq: "pikes-peak.jpg"
    }) {
      childImageSharp {
        gatsbyImageData(
          width: 300
          placeholder: BLURRED
        )
      }
    }
  }
`
