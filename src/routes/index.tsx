import { Feed } from '@/feature/feed'
import { publicRoutes } from './public'
import { RouteObject, useRoutes } from 'react-router-dom'

export const AppRoutes = () => {
  const commonRoutes: RouteObject[] = [
    {
      path: '/',
      element: <Feed />,
    },
  ]

  const routes = publicRoutes

  const element = useRoutes([...routes, ...commonRoutes])

  return element
}