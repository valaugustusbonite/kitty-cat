import { Feed } from '@/feature/feed'
import { publicRoutes } from './public'
import { RouteObject, useRoutes } from 'react-router-dom'
import { FallBackPage, FallBackPageEnum } from '@/common/components/exception'

export const AppRoutes = () => {
  const commonRoutes: RouteObject[] = [
    {
      path: '/',
      element: <Feed />,
    },
    {
      path: '*',
      element: <FallBackPage fallBackType={FallBackPageEnum.NOT_FOUND} />
    }
  ]

  const routes = publicRoutes

  const element = useRoutes([...routes, ...commonRoutes])

  return element
}
