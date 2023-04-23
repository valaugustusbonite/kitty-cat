import { DropDown, DropDownItem } from '@/common/components/dropdown'
import { FeedListView } from '@/feature/feed'
import styles from '@/feature/feed/components/Feed.module.scss'
import { useGetCatBreedNames } from '@/hooks'
import { RootState } from '@/store'
import { Cat } from '@/common/types/Cat'
import React, { useCallback, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useGetCats } from '../api/useGetCats'
import {
  CatBreedState,
  clearAllData,
  selectCatBreed,
  selectCatName,
  setBreed,
} from '../slices/currentCatBreedSlice'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export const Feed = () => {
  const catBreeds = useGetCatBreedNames()
  const dipstach = useDispatch()
  const breedId = useTypedSelector(selectCatBreed)
  const { fetchNextPage, hasNextPage, isFetchingNextPage, data, refetch, isLoading, isError } =
    useGetCats(breedId)
  const catName = useTypedSelector(selectCatName)
  const { catId } = useParams()

  useEffect(() => {
    if (breedId) {
      refetch()
    }
  }, [breedId])

  const intObserver = useRef<IntersectionObserver | null>()
  const lastCatRef = useCallback(
    (cat: HTMLDivElement) => {
      if (isFetchingNextPage) return

      if (intObserver.current) {
        intObserver.current.disconnect()
      }

      intObserver.current = new IntersectionObserver((cats) => {
        if (cats[0].isIntersecting && hasNextPage) {
          fetchNextPage()
        }
      })

      if (cat) intObserver.current.observe(cat)
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage, breedId],
  )

  const changeBreed = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'Select a breed...' || e.target.value === '') {
      dipstach(clearAllData())

      return
    }
    const valuesFromDropdown = e.target.value.split(',')
    const hasValues = valuesFromDropdown.length
    const breedId = hasValues ? valuesFromDropdown[0] : ''
    const catName = hasValues ? valuesFromDropdown[1] : ''
    const catBreedState: CatBreedState = {
      currentBreed: breedId,
      currentCatName: catName,
    }

    if (hasValues) {
      dipstach(setBreed(catBreedState))
    }
  }

  return (
    <section className={styles.feedContainer}>
      <div className={styles.headerArea}>
        <h1>Cat Gallery</h1>
        <div className={styles.dropdownArea}>
          {catBreeds.isLoading ? (
            <div className={styles.skeletonDropDownWrapper}>
              <Skeleton height='45px' />
            </div>
          ) : (
            <DropDown
              dropdownItems={catBreeds.data?.map((cat: Cat) => (
                <DropDownItem key={cat.id ?? catId} cat={cat} />
              ))}
              onChange={changeBreed}
              defaultValue={catName}
            />
          )}
        </div>
      </div>

      <div className={styles.listArea}>
        <FeedListView
          isLoading={!data ? isLoading : isFetchingNextPage}
          cats={data}
          refProp={lastCatRef}
          isError={isError}
        />
      </div>
    </section>
  )
}
