import { Block } from '@/pages/blocks/_components/block'
import { TableAdvanced } from '@/pages/blocks/_components/table-advanced'

export function DocsTablePage() {
  return (
    <div className="space-y-4 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Table</h1>
        <p className="text-muted-foreground">Motion Table.</p>
      </div>
      <Block>
        <TableAdvanced />
      </Block>
    </div>
  )
}
