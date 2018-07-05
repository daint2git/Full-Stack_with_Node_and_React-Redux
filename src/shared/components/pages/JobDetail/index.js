import React from 'react'

import PageLayout from 'shared/components/templates/PageLayout'

export default function(props) {
  const { jobId } = props.params
  return (
    <PageLayout>
      <div>{`JobDetail ${jobId} page`}</div>
    </PageLayout>
  )
}