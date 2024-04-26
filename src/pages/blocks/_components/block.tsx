export function Block({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <div className="space-y-2">
      {/* Title block */}
      <div
        data-hidden={!!title}
        className="flex items-center space-x-4 px-4 text-sm data-[hidden=true]:hidden"
      >
        <h2 className="text-xs font-semibold">{title}</h2>
      </div>
      {/* search, card and table */}
      <div className="space-y-2 rounded-lg border border-border bg-muted p-4">
        {/* Search + Card + Table with data and pagination */}
        {children}
      </div>
    </div>
  )
}
