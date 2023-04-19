import { CatBreedState, setBreed } from '@/feature/feed/slices/currentCatBreedSlice';
import { CatBreed } from '@/feature/feed/types';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export interface DropDownItemProps {
  value: string;
  label: string;
}

export const DropDownItem = ({
  value,
  label
}: DropDownItemProps) => {
  const dispatch = useDispatch()

  const onClick = () => {
    console.log("TANGINA MO")
    // dispatch(
    //   setBreed(label)
    // )
  }

  return (
    <option 
      value={value}
      onClick={onClick}
    >
      {label}
    </option>
  )
}
