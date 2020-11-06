import { colors } from 'style/variables'
import styled from 'styled-components'

const StepsContainer = styled.div`
  margin: 16px 0 70px 0; padding: 16px 24px;
  border: 1px solid ${colors.blue};
`

const StepFooter = styled.div`
  display: flex; justify-content: space-between; align-items: center;
  position: fixed; bottom: 0; left: 0;
  width: 100vw;
  padding: 16px 24px;
  background-color: ${colors.primary}; color: ${colors.white};
`

const HiddenStep = styled.div`
  ${props => props.show ? '' : 'display: none;'}
`

export { StepsContainer, StepFooter, HiddenStep };