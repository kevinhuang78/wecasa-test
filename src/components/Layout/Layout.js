import React from 'react'
import PropTypes from 'prop-types'
import { WecasaHeader, WecasaContent } from './Layout.styled'
import Logo from 'assets/Logo.png'
import GlobalStyle from 'style/GlobalStyle'

const Layout = (props) => (
  <div>
    <GlobalStyle />
    <WecasaHeader>
      <img className="logo" src={Logo} alt="Logo Wecasa" />
    </WecasaHeader>
    <WecasaContent>{props.children}</WecasaContent>
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default Layout
