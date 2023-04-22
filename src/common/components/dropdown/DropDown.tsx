import styles from '@/common/components/dropdown/DropDown.module.scss'
import { Select } from '@chakra-ui/react'


interface DropDownProps {
  dropdownItems: JSX.Element[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => Promise<void>
}

export const DropDown = ({
  dropdownItems,
  onChange
}: DropDownProps) => {

  return (
   <div className={styles.dropdownWrapper}>

     <Select 
        placeholder='Select a breed...'
        h='45px'
        size='lg'
        variant='outline'
        iconSize='0px'
        onChange={(e) => onChange(e)}
      >
          {...dropdownItems}
      </Select>
   </div>
  )
}

