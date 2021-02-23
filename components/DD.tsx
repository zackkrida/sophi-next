/**
 * Dump out values to the DOM. Useful for debugging. Only render in production!
 */
export const DD = ({ label, json }: { label: string; json: any }) =>
  process.env.NODE_ENV !== "production" ? (
    <div className="bg-gray-50 h-64 flex flex-col">
      <header className="h-18 shadow-md p-2">
        {label && <span className="font-bold">{label}: </span>}
      </header>
      <pre className="pt-6 p-2 text-xs w-full overflow-scroll shadow-md block">
        <code>{JSON.stringify(json, null, 2)}</code>
      </pre>
    </div>
  ) : null
