import { store } from '@/store'
import { SkeletonTheme } from 'react-loading-skeleton'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { FallBackPage, FallBackPageEnum } from '@/common/components/exception'

type AppProviderProps = {
  children: React.ReactNode
}

const ErrorFallback = () => {
  return (
    <FallBackPage fallBackType={FallBackPageEnum.ERROR}/>
  );
};

const queryClient = new QueryClient()
export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}> 
      <BrowserRouter>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <SkeletonTheme baseColor='#dadada' highlightColor='#b8b8b8'>
              {children}
            </SkeletonTheme>
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
