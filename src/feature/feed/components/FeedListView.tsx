import React from 'react'
import styles from '@/feature/feed/components/FeedListView.module.scss'
import { FeedItem, SkeletonFeeditem } from '@/feature/feed'
import { useGetCatBreedNames } from '../../../hooks/useGetCatBreedNames'
import { DropDown } from '@/common/components/dropdown'
import { useGetCats } from '../api/useGetCats'

export const FeedListView = () => {
  const { data, isError, isLoading } = useGetCats()


  if (!data && !isLoading) {
    return <div>
      No data to show.
    </div>
  }

  if (isError) {
    <div>
      Something went wrong.
    </div>
  }
  return (
    <div className={styles.feedListViewContainer}>
        
        <SkeletonFeeditem />
    </div>
  )
}
