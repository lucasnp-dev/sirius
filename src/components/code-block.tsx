'use client'

import { useQuery } from '@tanstack/react-query'
import { motion, Variants } from 'framer-motion'
import { Copy, CopyCheck } from 'lucide-react'
import { Highlight, themes } from 'prism-react-renderer'
import { useState } from 'react'

import { getCode } from '@/data/code'
import { CodeType } from '@/lib/config/docs-pages'
import { cn } from '@/lib/utils'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { ScrollArea } from './ui/scroll-area'

export function CodeBlock({
  file,
  language,
  title,
}: {
  file: string
  language: string
  title?: string
}) {
  const [copied, setCopied] = useState(false)

  const { data: code } = useQuery({
    queryKey: ['file', file],
    queryFn: () => getCode({ path: file }),
  })

  const onCopy = () => {
    setCopied(true)

    navigator.clipboard.writeText(code || '')

    setTimeout(() => {
      setCopied(false)
    }, 1700)
  }

  const variants: Variants = {
    from: { opacity: 0, scale: 0, filter: 'blur(5px)' },
    to: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, scale: 0, filter: 'blur(5px)' },
  }

  return (
    <div className="">
      <div className="flex items-center justify-end rounded-t-lg border bg-secondary p-2 dark:bg-neutral-900">
        <Button
          key={copied ? 'copied' : 'copy'}
          aria-label={copied ? 'Copied' : 'Copy'}
          size="sm"
          className=""
          variant="outline"
          onClick={onCopy}
        >
          <motion.span
            variants={variants}
            initial="from"
            animate="to"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            {copied ? <CopyCheck size={14} /> : <Copy size={14} />}
          </motion.span>
        </Button>
      </div>
      <ScrollArea className="max-h-[800px] overflow-auto rounded-b-lg border border-t-0">
        <Highlight
          theme={themes.jettwaveDark}
          code={code || ''}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={cn(
                'm-0 !bg-neutral-900 p-4 dark:!bg-background',
                className,
              )}
              style={style}
            >
              {title && (
                <p className="font-code mb-4 text-sm text-muted-foreground">
                  {title}
                </p>
              )}
              {tokens.map((line, i) => (
                <div key={`line${i}`} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </ScrollArea>
    </div>
  )
}

export function BashBlock({
  codes,
  language,
  title,
}: {
  codes: CodeType[]
  language: string
  title?: string
}) {
  const [copied, setCopied] = useState(false)

  const onCopy = (value: string) => {
    setCopied(true)

    navigator.clipboard.writeText(value)

    setTimeout(() => {
      setCopied(false)
    }, 1700)
  }

  const variants: Variants = {
    from: { opacity: 0, scale: 0, filter: 'blur(5px)' },
    to: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, scale: 0, filter: 'blur(5px)' },
  }

  return (
    <div className="">
      <div className="flex items-center justify-end rounded-t-lg border bg-secondary p-2 dark:bg-neutral-900">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              key={copied ? 'copied' : 'copy'}
              aria-label={copied ? 'Copied' : 'Copy'}
              size="sm"
              className=""
              variant="outline"
            >
              <motion.span
                variants={variants}
                initial="from"
                animate="to"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                {copied ? <CopyCheck size={14} /> : <Copy size={14} />}
              </motion.span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {codes.map((code) => (
              <DropdownMenuItem
                key={code.manager}
                onClick={() => onCopy(code.code)}
              >
                {code.manager}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ScrollArea className="rounded-b-lg border border-t-0">
        <Highlight
          theme={themes.jettwaveDark}
          code={codes[0].code}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={cn(
                'm-0 !bg-neutral-900 p-4 dark:!bg-background',
                className,
              )}
              style={style}
            >
              {title && (
                <p className="font-code mb-4 text-sm text-muted-foreground">
                  {title}
                </p>
              )}
              {tokens.map((line, i) => (
                <div key={`line${i}`} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </ScrollArea>
    </div>
  )
}
