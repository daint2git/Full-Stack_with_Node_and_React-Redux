import React from 'react'

import PageLayout from 'shared/components/templates/PageLayout'
import ComponentTestContent from 'shared/components/organisms/ComponentTestContent'

export default function(props) {
  return (
    <PageLayout currentPath="/component-test">
      <ComponentTestContent />
    </PageLayout>
  )
}