import PageLayout from 'shared/components/templates/PageLayout'
import Heading from 'shared/components/atoms/Heading'
import ComponentTestContent from 'shared/components/organisms/ComponentTestContent'

const ComponentTest = props => (
  <PageLayout currentPath="/component">
    <Heading HSize="h2">Component page</Heading>
    <ComponentTestContent />
  </PageLayout>
)

export default ComponentTest