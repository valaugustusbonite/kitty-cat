import React from 'react'
import styles from '@/feature/feed/components/SkeletonFeedItem.module.scss'
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";



export const SkeletonFeeditem = () => {
  return (
    <div className={styles.skeletonFeedItemContainer}>
      <Skeleton 
        width='100%' 
        height='100%'
        borderRadius={0}
        inline={true}
        style={{
          'margin': '0px',
          'padding': '0px',
          'lineHeight': 'normal'
        }}
      />
    </div>
  )
}