import styled from 'styled-components'
import { Layout } from 'antd';
import { colors } from 'style/variables';

const { Header } = Layout;

const WecasaHeader = styled(Header)`
  background-color: ${colors.primary};

  .logo { width: auto; height: 30px; }
`;

const WecasaContent = styled.main`
  padding: 12.5px 50px;
`

export { WecasaHeader, WecasaContent };