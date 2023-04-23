import styles from '@/feature/cat_details/components/CatDetails.module.scss'
import { Image } from '@chakra-ui/react'
import Skeleton from 'react-loading-skeleton'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useGetCatDetails } from '../api/useGetCatDetails'
import { ArrowBackButton } from '@/common/components/buttons/ArrowBackButton'
import { FallBackPage, FallBackPageEnum } from '@/common/components/exception'

interface ImageAreaProps {
  imageUrl: string
  imageAlt: string
  catName: string
}

interface CatInfoSectionProps {
  origin: string
  temperament: string
  isLoading: boolean
}

export const CatDetails = () => {
  const { catId } = useParams()
  const { state } = useLocation()
  const { data, isLoading, isError } = useGetCatDetails(state.id ?? catId ?? '')
  const catDetails = data?.breeds[0]

  if (isError) {
    return <FallBackPage fallBackType={FallBackPageEnum.ERROR}/>
  }

  return (
    <div className={styles.detailsContainer}>
      <ImageArea
        imageAlt={catDetails?.name ?? ''}
        imageUrl={state.url ?? data?.url ?? ''}
        catName={catDetails?.name ?? ''}
      />
      <CatInfoSection
        origin={catDetails?.origin ?? ''}
        temperament={catDetails?.temperament ?? ''}
        isLoading={isLoading}
      />
    </div>
  )
}

const ImageArea = ({ imageUrl, imageAlt, catName }: ImageAreaProps) => {
  const navigate = useNavigate()

  const goBackToPrevScreen = () => {
    navigate(-1)
  }

  return (
    <div className={styles.imageContainer}>
      <Image objectFit='cover' width='100%' src={imageUrl} alt={imageAlt} />
      <div className={styles.detailsOverlay}>
        <div className={styles.arrowBackDrop}>
          <ArrowBackButton widthInPx={40} onClick={goBackToPrevScreen} color={'#fff'} />
        </div>
        <span>{catName}</span>
      </div>
    </div>
  )
}

const CatInfoSection = ({ origin, temperament, isLoading }: CatInfoSectionProps) => {
  if (isLoading) {
    return <Skeleton count={3} />
  }

  return (
    <div className={styles.catDetailsContainer}>
      <div className={styles.catInfoOrigin}>
        <p>
          Origin: <span>{origin}</span>
        </p>
      </div>
      <div className={styles.catInfoTemp}>
        <p>
          Temperament: <span>{temperament}</span>
        </p>
      </div>
    </div>
  )
}
