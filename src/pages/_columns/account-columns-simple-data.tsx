import { ColumnDef } from '@tanstack/react-table'

import { Account } from '@/@types/account'

export const accountColumns: ColumnDef<Account>[] = [
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
    id: 'actions',
    cell: () => {
      // TODO: Actions Dropdown

      return '...'
    },
  },
]
