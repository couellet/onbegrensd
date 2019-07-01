import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import ShopCard from '../components/ShopCard'

const PromoText = styled.h1`
  font-weight: 300;
  font-size: 1.4em;
  text-align: center;
`

const ObliqueMarking = styled.div`
  width: 185px;
  height: 15px;
  background-color: #0ad266;
  transform: rotate(-2deg);
  margin: 0 auto;
  h2 {
    position: absolute;
    top: -30px;
    font-weight: 400;
    font-size: 1.6em;
    text-align: center;
    transform: rotate(2deg);
  }
`

const Grid = styled.section`
  display: grid;
  grid-row-gap: 100px;
  grid-template-columns: repeat(2, auto);
  justify-items: center;
  padding: 0 300px;
  margin: 100px 0 100px;
`

const IndexPage = ({ data }) => (
  <Layout>
    <PromoText>Wij rekenen nooit verzendkosten aan!</PromoText>
    <Img
      fluid={data.imageOne.childImageSharp.fluid}
      style={{
        height: '600px',
        borderTop: '1px solid #000',
        borderBottom: '1px solid #000',
        marginBottom: '100px',
      }}
    />
    <ObliqueMarking>
      <h2>Nieuw dit seizoen</h2>
    </ObliqueMarking>

    <Grid>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <ShopCard
          key={node.id}
          itemId={node.id}
          itemName={node.frontmatter.name}
          itemPrice={node.frontmatter.price}
          itemSize="XS|S|M|L|XL"
          itemImage={node.frontmatter.image.childImageSharp.fixed.src}
          itemUrl={node.frontmatter.path}
          itemDesc={node.frontmatter.desc}
        />
      ))}
    </Grid>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { new: { eq: true } } }) {
      edges {
        node {
          id
          frontmatter {
            name
            path
            price
            desc
            image {
              childImageSharp {
                fixed {
                  src
                }
              }
            }
            customFields {
              name
              required
            }
          }
        }
      }
    }
  }
`
