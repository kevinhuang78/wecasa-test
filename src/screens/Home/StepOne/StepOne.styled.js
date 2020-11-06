import { colors } from 'style/variables'
import styled from 'styled-components'

const StepOneFooter = styled.div`
  display: flex; justify-content: space-between; align-items: center;
  position: fixed; bottom: 0; left: 0;
  width: 100vw;
  padding: 16px 24px;
  background-color: ${colors.primary}; color: ${colors.white};
`

export { StepOneFooter }