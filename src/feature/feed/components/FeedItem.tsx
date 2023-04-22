import styles from '@/feature/feed/components/FeedItem.module.scss'
import { Box } from '@chakra-ui/react'
import React, { Ref } from 'react'
import { useNavigate } from 'react-router-dom'

interface FeedItemProps {
  url: string,
  catId: string
}

interface ViewDetailProps {
  catId: string
}

export const FeedItem = React.forwardRef(({
  url,
  catId
}: FeedItemProps, ref: Ref<HTMLDivElement>) => {

  const itemBody = (
    <>
      <ViewDetail 
        catId={catId}
      />
       <img 
          src={url}
          alt="cat"
        />
    </>
  )

  const content = ref ?
  <div className={styles.feedItemContainer} ref={ref}>
       {itemBody}
    </div> : <div className={styles.feedItemContainer}>
        {itemBody}
      </div>

  return content
})


const ViewDetail = ({
  catId
}: ViewDetailProps) => {
  const navigate = useNavigate();

  const goToCatDetailsPage = () => {
    navigate(`/${catId}`)
  }
  return(
    <Box onClick={goToCatDetailsPage} className={styles.itemOverlay}>
        View Details
    </Box>
  )
}