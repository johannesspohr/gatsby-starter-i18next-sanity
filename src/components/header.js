import { Link } from "gatsby"
import React, { useContext } from "react"
import { AlternateLinksContext } from "./wrapWithI18nProvider"
import { useTranslation } from "react-i18next"

const Header = () => {
  const alternateLinks = useContext(AlternateLinksContext)
  const { t, i18n } = useTranslation("common")

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <div style={{ float: "right" }}>
          {alternateLinks &&
            alternateLinks
              .filter(link => link.language !== i18n.language)
              .map((link, i) => [
                i > 0 && " | ",
                <Link
                  to={link.path}
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                  hrefLang={link.language}
                >
                  {t(link.language)}
                </Link>,
              ])}
        </div>
        <h1 style={{ margin: 0 }}>
          <Link
            to={"/" + i18n.language}
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {t("title")}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
