import Heading from 'shared/components/atoms/Heading'
import ComponentTestContent from 'shared/components/organisms/ComponentTestContent'
import PageLayout from 'shared/components/templates/PageLayout'

const ComponentTest = props => (
  <PageLayout currentPath="/component">
    <Heading component="h2">Component page</Heading>
    <ComponentTestContent {...props} />
  </PageLayout>
)

export default ComponentTest