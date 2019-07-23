import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"

const IndexPage = props => {
  const { t, i18n } = useTranslation("home")
  return (
    <Layout alternateLink={props.alternateLinks}>
      <SEO title="Home" />
      <h1>{t("hi")}</h1>
      <p>{t("welcome")}</p>
      <p>{t("buildSomethingGreat")}</p>
      <ul>
        {props.data.allSanityShop.edges.map(edge => (
          <li>
            <Link
              to={`/${i18n.language}/${t("common:shopSlug")}/${
                edge.node.slug.translate
              }`}
            >
              {t("ourShopIn", { city: edge.node.name.translate })}
            </Link>
          </li>
        ))}
      </ul>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Homepage($language: String) {
    allSanityShop {
      edges {
        node {
          slug {
            translate(language: $language)
          }
          name {
            translate(language: $language)
          }
        }
      }
    }
  }
`

export default IndexPage
