import { Cat } from '@/types/Cat'

export interface DropDownItemProps {
  cat: Cat
}

export const DropDownItem = ({ cat }: DropDownItemProps) => {
  return <option value={[cat.id ?? '', cat.name ?? '']}>{cat.name ?? ''}</option>
}
