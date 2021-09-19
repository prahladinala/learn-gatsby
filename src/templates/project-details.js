import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import * as styles from '../styles/project-details.module.css'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <Img fluid={featuredImg.childImageSharp.fluid} />
          <GatsbyImage image={getImage(featuredImg.childImageSharp.gatsbyImageData)} />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = (graphql`
  query ProjectsDetail($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`)