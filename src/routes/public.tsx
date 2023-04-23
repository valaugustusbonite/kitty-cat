import { CatDetails } from '@/feature/cat_details'
import { RouteObject } from 'react-router-dom'

export const publicRoutes: RouteObject[] = [
  {
    path: '/:catId',
    element: <CatDetails />,
  },
]
