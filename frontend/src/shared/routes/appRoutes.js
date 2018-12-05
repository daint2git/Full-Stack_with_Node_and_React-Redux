import { Route, Redirect } from 'react-router'

import { verify } from 'shared/redux/reducers/auth'

import RootLayout from 'shared/components/templates/RootLayout'
import Login from 'shared/components/pages/Login'
import Home from 'shared/components/pages/Home'
import About from 'shared/components/pages/About'
import DateFnsTest from 'shared/components/pages/DateFnsTest'
import LodashEsTest from 'shared/components/pages/LodashEsTest'
import CommonTagsTest from 'shared/components/pages/CommonTagsTest'
import ComponentTest from 'shared/components/pages/ComponentTest'
import JavaScriptTest from 'shared/components/pages/JavaScriptTest'
import ReactTest from 'shared/components/pages/ReactTest'
import ReactReduxTest from 'shared/components/pages/ReactReduxTest'
import RecomposeTest from 'shared/components/pages/RecomposeTest'
import CssAdvancedTest from 'shared/components/pages/CssAdvancedTest'
import ProductsPage from 'shared/components/pages/ProductsPage'

const appRoutes = store => {
  const requiredLogin = (nextState, replace, cb) =>
    store.dispatch(verify()).then(
      () => cb(),
      err => {
        console.error(err)
        replace(`/login?location=${nextState.location.pathname}`)
        cb()
      },
    )

  return (
    <Route component={RootLayout}>
      <Redirect from="/" to="login" />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} onEnter={requiredLogin} />
      <Route path="/date-fns" component={DateFnsTest} onEnter={requiredLogin} />
      <Route path="/lodash-es" component={LodashEsTest} onEnter={requiredLogin} />
      <Route path="/common-tags" component={CommonTagsTest} onEnter={requiredLogin} />
      <Route path="/component" component={ComponentTest} onEnter={requiredLogin} />
      <Route path="/javascript" component={JavaScriptTest} onEnter={requiredLogin} />
      <Route path="/react" component={ReactTest} onEnter={requiredLogin} />
      <Route path="/react-redux" component={ReactReduxTest} onEnter={requiredLogin} />
      <Route path="/recompose" component={RecomposeTest} onEnter={requiredLogin} />
      <Route path="/css-advanced" component={CssAdvancedTest} onEnter={requiredLogin} />
      <Route path="/products" component={ProductsPage} onEnter={requiredLogin} />
      <Route path="/about" component={About} onEnter={requiredLogin} />
      <Redirect from="*" to="login" />
    </Route>
  )
}

export default appRoutes
