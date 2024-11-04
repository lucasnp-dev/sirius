import React from 'react'

import { MotionTabsExample } from '@/components/examples/motion-tabs-example'
import Introduction from '@/markdown/introduction.mdx'

export type CodeType = { manager: string; code: string }

export type BashType = {
  codes: CodeType[]
  language: string
}

export type DocsPage = {
  title: string
  slug?: string
  description?: string
  content?: string
  breadcrumbs?: { item: string; link?: string }[]
  items?: Omit<DocsPage, 'items'>[]
  type?: 'article' | 'component'
  file?: typeof Introduction
  demo?: React.FC
  installation?: {
    beforeContent?: typeof Introduction
    bashs: BashType[]
    afterContent?: typeof Introduction
  }
  copy?: {
    beforeContent?: typeof Introduction
    bash: {
      pathFile: string
      title?: string
      language: string
    }
    afterContent?: typeof Introduction
  }
  usage?: {
    beforeContent?: typeof Introduction
    bash: {
      pathFile: string
      title?: string
      language: string
    }
    afterContent?: typeof Introduction
  }
}

export const docsPages: DocsPage[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Introduction',
        slug: '/docs/introduction',
        breadcrumbs: [{ item: 'Docs' }],
        file: Introduction,
      },
      {
        title: 'Installation',
        slug: '/docs/installation',
        breadcrumbs: [{ item: 'Docs' }],
      },
    ],
  },
  {
    title: 'Components',
    items: [
      {
        title: 'Motion Tabs',
        slug: '/docs/components/motion-tabs',
        breadcrumbs: [{ item: 'Docs' }, { item: 'Components' }],
        type: 'component',
        description: 'Framer motion based tabs',
        demo: MotionTabsExample,
        installation: {
          bashs: [
            {
              codes: [
                {
                  manager: 'npm',
                  code: 'npx shadcn@latest add tabs',
                },
                {
                  manager: 'yarn',
                  code: 'npx shadcn@latest add tabs',
                },
                {
                  manager: 'pnpm',
                  code: 'pnpm dlx shadcn@latest add tabs',
                },
                {
                  manager: 'bun',
                  code: 'bunx --bun shadcn@latest add tabs',
                },
              ],
              language: 'bash',
            },
            {
              codes: [
                {
                  manager: 'npm',
                  code: 'npm install framer-motion',
                },
                {
                  manager: 'yarn',
                  code: 'yarn add framer-motion',
                },
                {
                  manager: 'pnpm',
                  code: 'pnpm add framer-motion',
                },
                {
                  manager: 'bun',
                  code: 'bun add framer-motion',
                },
              ],
              language: 'bash',
            },
          ],
        },
        copy: {
          bash: {
            pathFile: 'motion-tabs',
            title: 'components/ui/motions-tabs',
            language: 'tsx',
          },
        },
        usage: {
          bash: {
            pathFile: 'motion-tabs-example',
            language: 'tsx',
          },
        },
      },
      {
        title: 'Combobox',
        slug: '/docs/components/combobox',
        breadcrumbs: [{ item: 'Docs' }, { item: 'Components' }],
        type: 'component',
        description: 'Combobox',
      },
      {
        title: 'Multi Steps',
        slug: '/docs/components/multi-steps',
        breadcrumbs: [{ item: 'Docs' }, { item: 'Components' }],
        type: 'component',
        description: 'Multi Steps',
      },
    ],
  },
]
