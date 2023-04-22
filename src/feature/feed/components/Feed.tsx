import { DropDown, DropDownItem } from '@/common/components/dropdown'
import { FeedListView } from '@/feature/feed'
import styles from '@/feature/feed/components/Feed.module.scss'
import { useGetCatBreedNames } from '@/hooks'
import { RootState } from '@/store'
import React, { useCallback, useEffect, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { useGetCats } from '../api/useGetCats'
import { clearBreed, selectCatBreed, setBreed } from '../slices/currentCatBreedSlice'
import { CatBreed } from '../types'

interface ContentViewProps {
  data: any;
  isLoading: boolean;
  isError: boolean;
}

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Feed = () => {
  const catBreeds = useGetCatBreedNames()
  const dipstach = useDispatch()
  const breedId = useTypedSelector(selectCatBreed)
  const {   
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage, 
    data,
    refetch,
    isLoading
  } = useGetCats(breedId);


    useEffect(() => {
      if (breedId) {
        refetch()
      }
    }, [breedId])

  const intObserver = useRef<IntersectionObserver | null>()
  const lastCatRef = useCallback((cat: HTMLDivElement) => {
    if (isFetchingNextPage) return

    if (intObserver.current) {
      intObserver.current.disconnect()
    }

    intObserver.current = new IntersectionObserver(cats => {
      if (cats[0].isIntersecting && hasNextPage) {
        console.log("Near last img")
        fetchNextPage()
      }
    })

    if (cat) intObserver.current.observe(cat)
  }, [isFetchingNextPage, fetchNextPage, hasNextPage, breedId]) 

  const changeBreed = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'Select a breed...' || e.target.value === '') {
      dipstach(
        clearBreed()
      )

      return
    } 

    dipstach(
      setBreed(e.target.value)
    )
  }

  return (
    <section className={styles.feedContainer}>
      <div className={styles.headerArea}>
          <h1>
            Cat Gallery
          </h1>
        <div className={styles.dropdownArea}>
          {
            catBreeds.isLoading ? 
            <div className={styles.skeletonDropDownWrapper}>
              <Skeleton height='45px'/>
            </div> :
            <DropDown 
              dropdownItems={
                catBreeds.data.map((cat: CatBreed) => <DropDownItem
                key={cat.id}
                value={cat.id}
                label={cat.name} />
              )} 
              onChange={changeBreed}
            />
          }
        </div>
      </div>
      
      <div className={styles.listArea}>
        <FeedListView 
          isLoading={!data ? isLoading : isFetchingNextPage}
          cats={data}
          refProp={lastCatRef}
        />
      </div>
    </section>
  )
}


