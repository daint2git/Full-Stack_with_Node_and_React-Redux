import { Route, Redirect } from 'react-router'

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

const appRoutes = () => (
  <Route component={RootLayout}>
    <Redirect from="/" to="login" />
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/date-fns" component={DateFnsTest} />
    <Route path="/lodash-es" component={LodashEsTest} />
    <Route path="/common-tags" component={CommonTagsTest} />
    <Route path="/component" component={ComponentTest} />
    <Route path="/javascript" component={JavaScriptTest} />
    <Route path="/react" component={ReactTest} />
    <Route path="/react-redux" component={ReactReduxTest} />
    <Route path="/recompose" component={RecomposeTest} />
    <Route path="/css-advanced" component={CssAdvancedTest} />
    <Route path="/about" component={About} />
  </Route>
)

export default appRoutes