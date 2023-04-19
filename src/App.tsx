import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DropDown } from '@/common/components/dropdown'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Feed } from '@/feature/feed'
import { SkeletonTheme } from 'react-loading-skeleton'
const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient} >
       <SkeletonTheme baseColor="#dadada" highlightColor="#b8b8b8">
        <Feed />
       </SkeletonTheme>
    </QueryClientProvider>
  )
}

export default App
