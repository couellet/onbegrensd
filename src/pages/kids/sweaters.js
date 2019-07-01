import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../../components/layout'
import ShopCard from '../../components/ShopCard'

const Grid = styled.section`
  display: grid;
  grid-row-gap: 100px;
  grid-template-columns: repeat(2, auto);
  justify-items: center;
  padding: 0 300px;
  margin: 100px 0 100px;
`

const StyledH1 = styled.h1`
  text-align: center;
  margin-top: 50px;
`

const MeisjesSweaters = ({ data }) => (
  <Layout>
    <StyledH1>Meisjes Sweaters</StyledH1>

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

export default MeisjesSweaters

export const meisjesSweatersQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "placeholder" } } }
    ) {
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
