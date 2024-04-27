import { Copy } from 'lucide-react'
import { Highlight, themes } from 'prism-react-renderer'

import { cn } from '@/lib/utils'

import { Button } from '../ui/button'

export const CodeBlock = ({
  code,
  language,
}: {
  code: string
  language: string
}) => (
  <Highlight theme={themes.jettwaveDark} code={code} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre
        className={cn(
          'relative m-0 max-w-full overflow-x-auto rounded border border-border !bg-neutral-950 p-4',
          className,
        )}
        style={style}
      >
        <Button className="absolute right-4 top-4" variant={'shimmer'}>
          <Copy size={16} />
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
