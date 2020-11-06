import { Button } from 'antd'
import { colors } from 'style/variables'
import styled, { css } from 'styled-components'

const primaryTheme = css`
  background-color: ${colors.primary};
  border: 1px solid ${colors.white}; border-radius: 8px;
  color: ${colors.white};

  &:hover { 
    background-color: ${colors.white};
    border-color: ${colors.blue}; color: ${colors.blue};
  }
`

const secondaryTheme = css`
  background-color: ${colors.blue};
  border: 1px solid ${colors.white}; border-radius: 8px;
  color: ${colors.white};

  &:hover { 
    border-color: ${colors.primary}; color: ${colors.primary};
  }
`

const WecasaButton = styled(Button)`
  border-radius: 8px;
  ${props => props.type === 'primary' ? primaryTheme : secondaryTheme}
`

export default WecasaButton