import React, { useEffect } from 'react'

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from '@/components/ui/combobox'

export function MultiComboboxExample() {
  const [state, setState] = React.useState<string[] | null | string>([
    '1',
    '2',
    '3',
  ])

  return (
    <Combobox multiple value={state} onValueChange={setState}>
      <ComboboxTrigger className="min-w-[400px]">
        Select Multiple...
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="search by..." />
        <ComboboxList>
          <ComboboxEmpty>No results found</ComboboxEmpty>
          <ComboboxItem value="1" label="Item 1" />
          <ComboboxItem value="2" label="Item 2" />
          <ComboboxItem value="3" label="Item 3" />
          <ComboboxItem value="4" label="Item 4" />
          <ComboboxItem value="5" label="Item 5" />
          <ComboboxItem value="5" label="Item 6" />
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
