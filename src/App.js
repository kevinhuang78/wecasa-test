import Layout from 'components/Layout'
import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import NotFoundExceptionScreen from 'screens/Exceptions/NotFoundExceptionScreen'
import HomeScreen from 'screens/Home/HomeScreen'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={HomeScreen} />

        {/* Last Route is 404 Not Found, if it doesn't find any of these route, show 404 */}
        <Route component={NotFoundExceptionScreen} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App
