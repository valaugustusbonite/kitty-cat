import { CatDetails } from '@/feature/cat_details'

export const publicRoutes = [
    {
        path: '/:catId',
        element: <CatDetails />
    },
];