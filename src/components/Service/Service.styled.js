import styled from 'styled-components'
import { Card } from 'antd'

const ServiceWrapper = styled(Card)`
  margin: 8px 0;
`;

const ServiceCallToAction = styled.div`
  display: flex; justify-content: space-between; align-items: center;
`

export { ServiceWrapper, ServiceCallToAction }