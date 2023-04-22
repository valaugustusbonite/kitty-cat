import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Feed } from './feature/feed'
import { CatDetails } from './feature/cat_details/components/CatDetails'
import { AppRoutes } from './routes'
import { AppProvider } from './providers/AppProvider'


function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App
