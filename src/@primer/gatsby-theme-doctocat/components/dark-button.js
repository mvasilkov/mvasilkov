import {ButtonOutline, themeGet} from '@primer/components'
import styled from 'styled-components'

const DarkButton = styled(ButtonOutline)`
  color: ${themeGet('colors.rei.offwhite')};
  background-color: transparent;
  border: 1px solid ${themeGet('colors.gray.7')};
  box-shadow: none;
`

export default DarkButton
