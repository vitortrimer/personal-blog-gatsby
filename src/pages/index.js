import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

import PostItem from '../components/PostItem'
import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostList {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                background
                category
                description
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                title
              }
            }
          }
        }
      }
    `
  )

  const postList = allMarkdownRemark.edges
  return(
    <Layout>
      <SEO title="Home" />
      {postList.map(({
        node: { 
          frontmatter: { background, category, date, description, title }
        }}) => (
        <PostItem 
          slug='/about'
          background={background}
          category={category}
          date={date}
          title={title}
          description={description}
        />
      ))}
     
    </Layout>
  )
}

export default IndexPage
