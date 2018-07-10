import React from 'react'
import { Route, IndexRoute } from 'react-router'

import RootLayout from 'shared/components/templates/RootLayout'
import Home from 'shared/components/pages/Home'
import Job from 'shared/components/pages/Job'
import JobDetail from 'shared/components/pages/JobDetail'
import About from 'shared/components/pages/About'
import DateFnsModule from 'shared/components/pages/DateFnsModule'
import LodashEsModule from 'shared/components/pages/LodashEsModule'
import ComponentTest from 'shared/components/pages/ComponentTest'
import ReactTest from 'shared/components/pages/ReactTest'

export default function() {
  return (
    <Route component={RootLayout}>
      <Route path="/" component={Home} />
      <Route path="/job">
        <IndexRoute component={Job} />
        <Route path=":jobId" component={JobDetail} />
      </Route>
      <Route path="/about" component={About} />
      <Route path="/component-test" component={ComponentTest} />
      <Route path="/react-test" component={ReactTest} />
      <Route path="/css3" />
      <Route path="/date-fns" component={DateFnsModule} />
      <Route path="/lodash-es" component={LodashEsModule} />
      <Route path="/common-tags" />
    </Route>
  )
}