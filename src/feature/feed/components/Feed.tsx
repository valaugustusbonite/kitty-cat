import React from 'react'
import styles from '@/feature/feed/components/Feed.module.scss'
import { FeedListView } from '@/feature/feed'
import { GridItem,} from '@chakra-ui/react'
import { DropDown, DropDownItem } from '@/common/components/dropdown'
import { useGetCatBreedNames } from '@/hooks'
import { CatBreed } from '../types'
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";
import { useGetCats } from '../api/useGetCats'
import { useDispatch } from 'react-redux'
import { setBreed } from '../slices/currentCatBreedSlice'

interface ContentViewProps {
  data: any;
  isLoading: boolean;
  isError: boolean;
}

export const Feed = () => {
  const { data, isError, isLoading } = useGetCatBreedNames()

  return (
    <section className={styles.feedContainer}>
      <div className={styles.headerArea}>
          <h1>
            Cat Gallery
          </h1>
        <div className={styles.dropdownArea}>
          {
            isLoading ? 
            <div className={styles.skeletonDropDownWrapper}>
              <Skeleton height='45px'/>
            </div> :
            <DropDown 
              dropdownItems={
                data.map((cat: CatBreed) => <DropDownItem
                key={cat.id}
                value={cat.id}
                label={cat.name} />
              )} 
            />
          }
        </div>
      </div>
      
      <div className={styles.listArea}>
        <FeedListView />
      </div>
    </section>
  )
}


