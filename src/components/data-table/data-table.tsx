import { flexRender, Table as TableType } from '@tanstack/react-table'
import { motion } from 'framer-motion'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { DataTablePagination } from './pagination'

interface DataTableProps<TData> {
  /**
   * Table is an instance of tanstack/react-table.
   * @see  Read more: https://tanstack.com/table/v8/docs/guide/tables
   * @description This prop constructs the table with colunms, data, pagination...
   * @example
   * import { getCoreRowModel, useReactTable} from '@tanstack/react-table'
   * const Component = () => {
   *  const table = useReactTable({ columns, data, getCoreRowModel: getCoreRowModel() })
   *  return <DataTable table={table} />
   * }
   */
  table: TableType<TData>
}

const MotionTableRow = motion(TableRow)
const MotionTableBody = motion(TableBody)

const bodyVariants = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const rowVariants = {
  from: { x: -200, opacity: 0 },
  to: {
    x: -0,
    opacity: 1,
  },
}

/**
 * DataTable - Component that renders a table with row animation
 * @param {DataTableProps}
 * @returns {JSX.Element}
 */
export function DataTable<TData>({
  table,
}: DataTableProps<TData>): JSX.Element {
  // To animate the table
  const key = table.getRowModel().rows.reduce((acc, item) => acc + item?.id, '')

  // TODO: Pagination with back-end

  return (
    <div>
      <div className="overflow-hidden rounded-md">
        <Table>
          {/* #region ---------- TableHeader */}

          <TableHeader className="bg-muted text-muted-foreground">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>

          {/* #endregion */}

          {/* #region ---------- MotionTableBody */}

          <MotionTableBody
            key={key}
            variants={bodyVariants}
            initial="from"
            animate="to"
            exit="from"
          >
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <MotionTableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  variants={rowVariants}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </MotionTableRow>
              ))
            ) : (
              <MotionTableRow>
                <TableCell
                  colSpan={table.getAllColumns().length}
                  className="h-24 text-center"
                >
                  Nenhum registro encontrado
                </TableCell>
              </MotionTableRow>
            )}
          </MotionTableBody>

          {/* #endregion */}
        </Table>
      </div>
      {table.options.getPaginationRowModel && (
        <div className="flex items-center justify-center space-x-2 rounded-b-md bg-muted py-4 text-muted-foreground">
          <DataTablePagination table={table} />
        </div>
      )}
    </div>
  )
}
