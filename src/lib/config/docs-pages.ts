type DocsPage = {
  title: string
  slug?: string
  description?: string
  content?: string
  breadcumbs?: { item: string; link: string }[]
  items?: Omit<DocsPage, 'items'>[]
}

export const docsPages: DocsPage[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Introduction',
        slug: '/docs/introduction',
      },
      {
        title: 'Installation',
        slug: '/docs/installation',
      },
      {
        title: 'Usage',
        slug: '/docs/usage',
      },
    ],
  },
  {
    title: 'Components',
    items: [
      {
        title: 'Motion Tabs',
        slug: '/docs/components/motion-tabs',
      },
      {
        title: 'Combobox',
        slug: '/docs/components/combobox',
      },
      {
        title: 'Multi Steps',
        slug: '/docs/components/multi-steps',
      },
    ],
  },
]
