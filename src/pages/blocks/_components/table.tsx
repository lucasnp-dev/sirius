import { useQuery } from '@tanstack/react-query'
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Search } from 'lucide-react'
import { useState } from 'react'

import { DataTable } from '@/components/data-table/data-table'
import { QueryTable, QueryTableIcon } from '@/components/data-table/query'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { getAccounts } from '@/data/accounts'
import { accountColumns } from '@/pages/_columns/account-columns-simple-data'

export function Table() {
  const { data: accounts } = useQuery({
    queryKey: ['blocks'],
    queryFn: getAccounts,
  })

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data: accounts || [],
    columns: accountColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  })

  return (
    <div className="space-y-2">
      <QueryTable>
        <QueryTableIcon icon={Search} size={18} />
        <Input
          placeholder="Search by name"
          className="max-w-xs"
          value={table.getColumn('name')?.getFilterValue() as string}
          onChange={(event) =>
            table.getColumn('name')?.setFilterValue(event.target.value)
          }
        />
        <Input
          placeholder="Search by email"
          className="max-w-xs"
          value={table.getColumn('email')?.getFilterValue() as string}
          onChange={(event) =>
            table.getColumn('email')?.setFilterValue(event.target.value)
          }
        />
        <Input
          placeholder="Search by document"
          className="max-w-xs"
          value={table.getColumn('document')?.getFilterValue() as string}
          onChange={(event) =>
            table.getColumn('document')?.setFilterValue(event.target.value)
          }
        />
      </QueryTable>
      <Card>
        <CardHeader>
          <CardTitle>Table Animated</CardTitle>
          <CardDescription>
            This is a table with an animated list.
          </CardDescription>
        </CardHeader>
        <CardContent>{table && <DataTable table={table} />}</CardContent>
      </Card>
    </div>
  )
}
