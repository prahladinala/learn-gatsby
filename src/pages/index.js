import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home({ data }) {
  console.log(data)
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2 >Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX Designer & Web Developer based in India.</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <img src="/banner.png" alt="Site Banner" style={{ maxWidth: '100%' }} />
        <p>{title} - {description}</p>
      </section >
    </Layout >

  )
}

// EXPORT GRAPHQL 
export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`