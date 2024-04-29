import React from 'react'

type CodeBlockType = {
  code: string
  copy?: string
  language: string
  title?: string
}

type StepType = {
  step: number
  title: string
  codes: CodeBlockType[]
}

export type ComponentType = {
  slug: string
  title: string
  description: string
  component: () => React.ReactNode
  steps: StepType[]
  usage: CodeBlockType
}

export type ExampleCodes = {
  usage: string
  componentView: string
  componentCopy: string
}
