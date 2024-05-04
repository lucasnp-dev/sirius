import { motion, Variants } from 'framer-motion'
import { Copy, CopyCheck } from 'lucide-react'
import { Highlight, themes } from 'prism-react-renderer'
import { useState } from 'react'

import { cn } from '@/lib/utils'

import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'

export const CodeBlock = ({
  code,
  language,
  copy,
  title,
}: {
  code: string
  language: string
  copy?: string
  title?: string
}) => {
  const [copied, setCopied] = useState(false)

  const onCopy = () => {
    setCopied(true)

    navigator.clipboard.writeText(copy || code)

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
    <ScrollArea className="max-h-[800px] overflow-auto rounded-lg border border-border">
      <Button
        key={copied ? 'copied' : 'copy'}
        aria-label={copied ? 'Copied' : 'Copy'}
        size={'sm'}
        className="absolute right-4 top-4"
        variant={'shimmer'}
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
      <Highlight theme={themes.jettwaveDark} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn('m-0 !bg-neutral-950 p-4', className)}
            style={style}
          >
            {title && (
              <p className="mb-4 font-code text-sm text-muted-foreground">
                {title}
              </p>
            )}
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </ScrollArea>
  )
}

export const BashBlock = ({
  code,
  language,
  title,
}: {
  code: string
  language: string
  title?: string
}) => {
  const [copied, setCopied] = useState(false)

  const onCopy = () => {
    setCopied(true)

    navigator.clipboard.writeText(code)

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
    <Highlight theme={themes.jettwaveDark} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={cn(
            'relative m-0 max-w-full overflow-x-auto rounded-lg border border-border !bg-neutral-950 p-4',
            className,
          )}
          style={style}
        >
          {title && (
            <p className="mb-4 font-code text-sm text-muted-foreground">
              {title}
            </p>
          )}
          <Button
            key={copied ? 'copied' : 'copy'}
            aria-label={copied ? 'Copied' : 'Copy'}
            size={'sm'}
            className="absolute right-4 top-1/2 -translate-y-1/2"
            variant={'shimmer'}
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
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
