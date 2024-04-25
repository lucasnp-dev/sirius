import { ColumnDef } from '@tanstack/react-table'

import { Account } from '@/@types/account'

export const accountColumnsMany: ColumnDef<Account>[] = [
  {
    accessorKey: 'id',
    header: '#',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'document',
    header: 'Document',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    id: 'actions',
    cell: () => {
      // TODO: Actions Dropdown

      return '...'
    },
  },
]
