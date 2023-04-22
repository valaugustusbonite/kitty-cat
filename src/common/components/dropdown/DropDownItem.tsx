export interface DropDownItemProps {
  value: string;
  label: string;
}

export const DropDownItem = ({
  value,
  label
}: DropDownItemProps) => {

  return (
    <option 
      value={value}
    >
      {label}
    </option>
  )
}
