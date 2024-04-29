import { LoaderFunctionArgs } from 'react-router-dom'

import { ComponentType } from '@/@types/components'
import { tabsCodes } from '@/components/_examples/tabs/code'
import { TabsExample } from '@/components/_examples/tabs/tabs'

const components: ComponentType[] = [
  {
    slug: 'tabs',
    title: 'Tabs Animated',
    description: 'Motion Tabs',
    component: TabsExample,
    steps: [
      {
        step: 1,
        title: 'Install the following dependencies:',
        codes: [
          {
            title: 'shadcn-ui component',
            code: 'npx shadcn-ui@latest add tabs',
            language: 'bash',
          },
          {
            title: 'framer-motion',
            code: 'npm i framer-motion',
            language: 'bash',
          },
        ],
      },
      {
        step: 2,
        title: 'Copy and paste the component:',
        codes: [
          {
            code: tabsCodes.componentView,
            copy: tabsCodes.componentCopy,
            language: 'tsx',
            title: 'components/ui/motions-tabs',
          },
        ],
      },
    ],
    usage: {
      code: tabsCodes.usage,
      language: 'tsx',
      title: 'components/ui/motions-tabs',
    },
  },
]

export function getComponent({
  slug,
}: {
  slug: string
}): ComponentType | undefined {
  const component = components.find((component) => component.slug === slug)

  return component
}

export function loader({ params }: LoaderFunctionArgs): {
  component: ComponentType | undefined
} {
  const component = getComponent({ slug: params.slug as string })
  return { component }
}
