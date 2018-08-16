import PageLayout from 'shared/components/templates/PageLayout'
import ReactTestContent from 'shared/components/organisms/ReactTestContent'

export default function(props) {
  return (
    <PageLayout currentPath="/react-test">
      <ReactTestContent />
    </PageLayout>
  )
}