import { useQuery } from '@tanstack/react-query'
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ChevronDown, Search } from 'lucide-react'
import { useState } from 'react'

import { DataTable } from '@/components/data-table/data-table'
import {
  QueryTable,
  QueryTableActions,
  QueryTableIcon,
} from '@/components/data-table/query'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { getAccounts } from '@/data/accounts'
import { accountColumnsMany } from '@/pages/_columns/account-columns-many'

export function TableManyColumns() {
  const { data: accounts } = useQuery({
    queryKey: ['blocks'],
    queryFn: getAccounts,
  })

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data: accounts || [],
    columns: accountColumnsMany,
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
        <QueryTableActions>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-min gap-2">
                Filters <ChevronDown size={18} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4 py-2">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Advanced search</h4>
                  <p className="text-sm text-muted-foreground">
                    Search by more parameters
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Status</Label>
                    <Select
                      value={
                        table.getColumn('status')?.getFilterValue() as string
                      }
                      onValueChange={(value: string) =>
                        table.getColumn('status')?.setFilterValue(value)
                      }
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxWidth">Role</Label>
                    <Select
                      value={
                        table.getColumn('role')?.getFilterValue() as string
                      }
                      onValueChange={(value: string) =>
                        table.getColumn('role')?.setFilterValue(value)
                      }
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </QueryTableActions>
      </QueryTable>
      <Card>
        <CardHeader>
          <CardTitle>Table Many Columns</CardTitle>
          <CardDescription>
            This is a table with an animated list.
          </CardDescription>
        </CardHeader>
        <CardContent>{table && <DataTable table={table} />}</CardContent>
      </Card>
    </div>
  )
}
