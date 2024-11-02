import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img src="/logo.svg" width={200} alt="Sirius logo" />,
  project: {
    link: 'https://github.com/lucasnp-dev/sirius',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Sirius/ui " />
      <meta
        property="og:description"
        content="Library of UI components to build fast."
      />
    </>
  ),
}
export default config
