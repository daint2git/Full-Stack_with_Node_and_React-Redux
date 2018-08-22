import PageLayout from 'shared/components/templates/PageLayout'
import Heading from 'shared/components/atoms/Heading'
import ReactTestContent from 'shared/components/organisms/ReactTestContent'

const ReactTest = props => (
  <PageLayout currentPath="/react">
    <Heading HSize="h2">React page</Heading>
    <ReactTestContent />
  </PageLayout>
)

export default ReactTest