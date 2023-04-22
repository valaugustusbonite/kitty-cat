import { Image } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { useGetCatDetails } from "../api/useGetCatDetails"
import styles from '@/feature/cat_details/components/CatDetails.module.scss'

interface ImageAreaProps {
  imageUrl: string;
  imageAlt: string;
  catName: string;
}

export const CatDetails = () => {
    const { catId } = useParams()
    const { data, isLoading, isError } = useGetCatDetails(catId ?? '')

    if (data) {
      console.log("TANGINA MO")
      console.log(data)
    }

    const catDetails = data?.breeds[0]
  return (
   <div className={styles.detailsContainer}>
      <ImageArea 
        imageAlt={catDetails?.name ?? ''}
        imageUrl={data?.url ?? ''}
        catName={catDetails?.name ?? ''}
      />
      <div>
        Origin: {catDetails?.origin}
      </div>
      <div>
        {catDetails?.temperament}
      </div>
   </div>
  )
}

const ImageArea = ({
  imageUrl,
  imageAlt,
  catName
}: ImageAreaProps) => {
  return (
    <div className={styles.imageContainer}>
      <Image
        objectFit='cover'
        width='100%'
        src={imageUrl}
        alt={imageAlt}
      />
      <div className={styles.detailsOverlay}>
        {catName}
      </div>
    </div>
  )
}
