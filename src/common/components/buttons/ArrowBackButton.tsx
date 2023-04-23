import { ArrowBackIcon } from '@chakra-ui/icons'

interface ArrowBackButtonProps {
  onClick: () => void
  widthInPx: number
  color?: string
}

export const ArrowBackButton = ({ onClick, widthInPx, color }: ArrowBackButtonProps) => {
  return <ArrowBackIcon width={`${widthInPx}px`} onClick={onClick} color={color} />
}
