import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from './combobox'

export function ComboboxExample() {
  return (
    <Combobox /* multiple */>
      <ComboboxTrigger className="min-w-[200px]">Trigger</ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="search by..." />
        <ComboboxList>
          <ComboboxEmpty>No results found</ComboboxEmpty>
          <ComboboxItem value="1" label="Item 1" />
          <ComboboxItem value="2" label="Item 2" />
          <ComboboxItem value="3" label="Item 3" />
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
