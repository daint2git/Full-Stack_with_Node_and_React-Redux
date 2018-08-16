import PageLayout from 'shared/components/templates/PageLayout'

export default function(props) {
  const { jobId } = props.params
  return (
    <PageLayout currentPath="/job">
      <div>{`JobDetail ${jobId} page`}</div>
    </PageLayout>
  )
}