import React from 'react'
import { Route, IndexRoute } from 'react-router'

import RootLayout from 'shared/components/templates/RootLayout'
import Home from 'shared/components/pages/Home'
import Job from 'shared/components/pages/Job'
import JobDetail from 'shared/components/pages/JobDetail'
import About from 'shared/components/pages/About'

export default function() {
  return (
    <Route component={RootLayout}>
      <Route path="/" component={Home} />
      <Route path="/job">
        <IndexRoute component={Job} />
        <Route path=":jobId" component={JobDetail} />
      </Route>
      <Route path="/about" component={About} />
    </Route>
  )
}
