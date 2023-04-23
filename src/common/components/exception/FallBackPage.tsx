import styles from '@/common/components/exception/FallBackPage.module.scss'
import { Button } from '@chakra-ui/button'
import { SystemStyleObject } from '@chakra-ui/styled-system'
import { useNavigate } from 'react-router'

const buttonStyle: SystemStyleObject = {
  'backgroundColor': '#00b7c4',
  'padding': '10px 18px',
  'borderRadius': '8px',
  'borderWidth': '0px',
  'color': '#fff',
  'margin': '20px 0',
  'cursor': 'pointer'
}

export enum FallBackPageEnum {
  NOT_FOUND,
  ERROR
}

interface FallBackPageProps {
  fallBackType: FallBackPageEnum
}

export const FallBackPage = ({
  fallBackType,
}: FallBackPageProps) => {

  const goToHomePage = () => {
    window.location.assign(window.location.origin)
  }

  return (
    <div className={styles.fallBackPageContainer} role='alert'>
      {
        fallBackType === FallBackPageEnum.NOT_FOUND ? <PageNotFound /> : <SomethingWentWrong />
      }
      <Button 
        sx={buttonStyle}
        variant='outline'
        onClick={goToHomePage}
      >
       {
         fallBackType === FallBackPageEnum.NOT_FOUND ? 
        'Go to Home' :
        'Refresh'
       }
      </Button>
    </div>
  )
}

const PageNotFound = () => {
  return (
    <>
      <h1>404</h1>
      <h2>Page not found.</h2>
    </>
  )
}

const SomethingWentWrong = () => {
  return (
    <>
      <h1>Oops</h1>
      <h2>Something went wrong.</h2>
    </>
  )
}
