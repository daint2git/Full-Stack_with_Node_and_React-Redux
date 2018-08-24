import Heading from 'shared/components/atoms/Heading'
import ReactTestContent from 'shared/components/organisms/ReactTestContent'
import PageLayout from 'shared/components/templates/PageLayout'

const ReactTest = props => (
  <PageLayout currentPath="/react">
    <Heading component="h2">React page</Heading>
    <ReactTestContent {...props} />
  </PageLayout>
)

export default ReactTest