import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { graphql } from "gatsby"

const ShopPage = ({ data }) => {
  const { t } = useTranslation("shop")
  return (
    <Layout>
      <SEO title="Shop" />
      <h1>{t("welcome", { city: data.sanityShop.name.translate })}</h1>
    </Layout>
  )
}

export const query = graphql`
  query Shop($shop: String, $language: String) {
    sanityShop(id: { eq: $shop }) {
      name {
        translate(language: $language)
      }
    }
  }
`

export default ShopPage
