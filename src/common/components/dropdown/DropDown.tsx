import { Select } from '@chakra-ui/react'
import { DropDownItem, DropDownItemProps } from '@/common/components/dropdown'
import { useGetCatBreedNames} from '@/hooks'
import { CatBreed } from '@/feature/feed/types'
import styles from '@/common/components/dropdown/DropDown.module.scss'
import { useDispatch } from 'react-redux'
import { clearBreed, setBreed } from '@/feature/feed/slices/currentCatBreedSlice'
import { ChangeEventHandler } from 'react'


interface DropDownProps {
  dropdownItems: JSX.Element[];
}

export const DropDown = ({
  dropdownItems,
}: DropDownProps) => {
  const dipstach = useDispatch()

  const changeBreed = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'Select a breed...' || e.target.value === '') {
      dipstach(
        clearBreed()
      )
    } else {
      dipstach(
        setBreed(e.target.value)
      )
    }
  }

  return (
   <div className={styles.dropdownWrapper}>

     <Select 
        placeholder='Select a breed...'
        h='45px'
        size='lg'
        variant='outline'
        iconSize='0px'
        onChange={(e) => changeBreed(e)}
      >
          {...dropdownItems}
      </Select>
   </div>
  )
}

