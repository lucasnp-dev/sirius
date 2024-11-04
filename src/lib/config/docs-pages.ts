import React from 'react'

import { ComboboxExample } from '@/components/examples/combobox-example'
import { MotionTabsExample } from '@/components/examples/motion-tabs-example'
import { MultiStepExample } from '@/components/examples/multi-step-example'
import ComboboxAfterDemo from '@/markdown/combobox-after-demo.mdx'
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
  beforeDemo?: typeof Introduction
  demo?: React.FC
  afterDemo?: typeof Introduction
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
      // {
      //   title: 'Installation',
      //   slug: '/docs/installation',
      //   breadcrumbs: [{ item: 'Docs' }],
      // },
    ],
  },
  {
    title: 'Components',
    items: [
      {
        title: 'Combobox',
        slug: '/docs/components/combobox',
        breadcrumbs: [{ item: 'Docs' }, { item: 'Components' }],
        type: 'component',
        description: 'Combobox',
        demo: ComboboxExample,
        beforeDemo: ComboboxAfterDemo,
        installation: {
          bashs: [
            {
              codes: [
                {
                  manager: 'npm',
                  code: 'npx shadcn@latest add command popover',
                },
                {
                  manager: 'yarn',
                  code: 'npx shadcn@latest add command popover',
                },
                {
                  manager: 'pnpm',
                  code: 'pnpm dlx shadcn@latest add command popover',
                },
                {
                  manager: 'bun',
                  code: 'bunx --bun shadcn@latest add command popover',
                },
              ],
              language: 'bash',
            },
            {
              codes: [
                {
                  manager: 'npm',
                  code: 'npm install react-use-measure',
                },
                {
                  manager: 'yarn',
                  code: 'yarn add react-use-measure',
                },
                {
                  manager: 'pnpm',
                  code: 'pnpm add react-use-measure',
                },
                {
                  manager: 'bun',
                  code: 'bun add react-use-measure',
                },
              ],
              language: 'bash',
            },
          ],
        },
        copy: {
          bash: {
            pathFile: 'combobox',
            title: 'components/ui/combobox',
            language: 'tsx',
          },
        },
        usage: {
          bash: {
            pathFile: 'combobox-example',
            language: 'tsx',
          },
        },
      },
      {
        title: 'Motion Tabs',
        slug: '/docs/components/motion-tabs',
        breadcrumbs: [{ item: 'Docs' }, { item: 'Components' }],
        type: 'component',
        description: 'simple tabs with animation.',
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
        title: 'Multi Steps',
        slug: '/docs/components/multi-steps',
        breadcrumbs: [{ item: 'Docs' }, { item: 'Components' }],
        type: 'component',
        description: 'Animated an customizable multi-step.',
        demo: MultiStepExample,
        installation: {
          bashs: [
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
            pathFile: 'multi-step',
            title: 'components/ui/multi-step',
            language: 'tsx',
          },
        },
        usage: {
          bash: {
            pathFile: 'multi-step-example',
            language: 'tsx',
          },
        },
      },
    ],
  },
]
