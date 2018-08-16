import PageLayout from 'shared/components/templates/PageLayout'
import ReactTestContent from 'shared/components/organisms/ReactTestContent'

export default function(props) {
  return (
    <PageLayout currentPath="/react">
      <div>React page</div>
      <ReactTestContent />
    </PageLayout>
  )
}