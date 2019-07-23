import React from "react"
import i18next from "i18next"
import * as ReactI18next from "react-i18next"
import { Helmet } from "react-helmet"

export const AlternateLinksContext = React.createContext([])

export function wrapWithI18nProvider({ element, props }) {
  const i18n = i18next
    .createInstance({
      lng: props.pageContext.language,
      interpolation: { escapeValue: false },
      initImmediate: false,
      resources: props.pageContext.i18nResources,
    })
    .use(ReactI18next.initReactI18next)
  // noinspection JSIgnoredPromiseFromCall
  i18n.init()
  return (
    <ReactI18next.I18nextProvider i18n={i18n}>
      <AlternateLinksContext.Provider
        value={props.pageContext && props.pageContext.alternateLinks}
      >
        {
          <Helmet htmlAttributes={{ lang: props.pageContext.language }}>
            {props.pageContext &&
              props.pageContext.alternateLinks &&
              props.pageContext.alternateLinks.map(link => (
                <link
                  rel="alternate"
                  hrefLang={link.language}
                  href={link.path}
                />
              ))}
          </Helmet>
        }
        {element}
      </AlternateLinksContext.Provider>
    </ReactI18next.I18nextProvider>
  )
}
