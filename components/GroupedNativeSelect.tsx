export const GroupedNativeSelect = ({
  optGroups,
  ...props
}: GroupedSelectProps) => (
  <select {...props}>{renderSelectOptGroups(optGroups)}</select>
)

// Render optgroups for a native select box. Accepts an array of [string, string[]] tuples
export const renderSelectOptGroups = (groups: StringGroupTuple[]) =>
  groups.map(([group, items]) => (
    <optgroup key={group} label={group as string}>
      {(items as string[]).map((i: string) => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </optgroup>
  ))

type StringGroupTuple = [group: string, items: string[]]
interface GroupedSelectProps extends React.HTMLProps<HTMLSelectElement> {
  optGroups: StringGroupTuple[]
}
