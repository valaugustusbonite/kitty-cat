import { FeedItem, SkeletonFeeditem } from '@/feature/feed'
import styles from '@/feature/feed/components/FeedListView.module.scss'
import { Cat } from '@/common/types/Cat'
import { ReactNode, Ref } from 'react'
import { InfiniteData } from 'react-query'

interface FeedListViewProps {
  cats: InfiniteData<Cat[]> | undefined
  isLoading: boolean
  refProp?: Ref<HTMLDivElement>
}

interface ListViewProps {
  children: ReactNode
  isLoading: boolean
}

export const FeedListView = ({ cats, isLoading, refProp }: FeedListViewProps) => {
  if (!cats && !isLoading) {
    return (
      <ListViewWrapper
        isLoading={false}
      >
        <div className={styles.noDataPlaceholder}>No data to show.</div>
      </ListViewWrapper>
    )
  }

  const renderItemComponents = cats?.pages.map((page) => {
    return page.map((cat, i) => {
      if (page.length === i + 1) {
        return <FeedItem url={cat.url} key={cat.id} ref={refProp} catId={cat.id} />
      }

      return <FeedItem url={cat.url} key={cat.id} catId={cat.id} />
    })
  })

  return (
    <div className={styles.feedListViewContainer}>
      {renderItemComponents}
      {isLoading ? <SkeletonFeeditem /> : null}
    </div>
  )
}

const ListViewWrapper = ({ children, isLoading }: ListViewProps) => {
  return (
    <div className={styles.feedListViewContainer}>
      {children}
      {isLoading ? <SkeletonFeeditem /> : null}
    </div>
  )
}
