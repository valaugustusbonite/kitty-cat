import styles from '@/common/components/dropdown/DropDown.module.scss'
import { Select } from '@chakra-ui/react'

interface DropDownProps {
  dropdownItems: JSX.Element[] | undefined
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => Promise<void>
  defaultValue: string
}

export const DropDown = ({ dropdownItems, onChange, defaultValue }: DropDownProps) => {
  return (
    <div className={styles.dropdownWrapper}>
      <Select
        placeholder={defaultValue ? defaultValue : 'Select a cat breed...'}
        h='45px'
        size='lg'
        variant='outline'
        iconSize='0px'
        onChange={(e) => onChange(e)}
        defaultValue={defaultValue}
      >
        {...dropdownItems ?? []}
      </Select>
    </div>
  )
}
