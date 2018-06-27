import React from 'react'

import PageLayout from 'shared/components/templates/PageLayout'
import Button from 'shared/components/atoms/Button'

export default function(props) {
  return (
    <PageLayout>
      <h3>Home page</h3>
      <div>Home text</div>
      <Button size="large" onClick={() => alert('Hello')}>Click here</Button>
    </PageLayout>
  )
}