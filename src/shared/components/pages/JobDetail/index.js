import React from 'react'

import PageLayout from 'shared/components/templates/PageLayout'

export default function(props) {
  const { jobId } = props.params
  return (
    <PageLayout>
      <h3>{`JobDetail ${jobId} page`}</h3>
      <div>{`JobDetail ${jobId} text`}</div>
    </PageLayout>
  )
}