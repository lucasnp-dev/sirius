import { Undo2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

import { Block } from './_components/block'
import { Table } from './_components/table'
import { TableAdvanced } from './_components/table-advanced'
import { TableManyColumns } from './_components/table-many-columns'

export function BlocksPage() {
  return (
    <div className="container mb-20 space-y-8">
      <Button
        variant="shimmer"
        className="fixed left-2 top-2 gap-2 border-none"
        asChild
      >
        <Link to="/" className="z-10">
          <Undo2 size={18} /> to home
        </Link>
      </Button>

      <TextGenerateEffect
        words="Sirius/Blocks"
        className="text-center font-code text-5xl"
      />

      <div className="space-y-20">
        <Block title="Table">
          {/* Search + Card + Table with data and pagination */}
          <Table />
        </Block>

        <Block title="Table Many Columns">
          {/* Search + Card + Table with data and pagination */}
          <TableManyColumns />
        </Block>

        <Block title="Table Advanced">
          {/* Search + Card + Table with data and pagination */}
          <TableAdvanced />
        </Block>
      </div>
    </div>
  )
}
