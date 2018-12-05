import PageLayout from 'shared/components/templates/PageLayout'
import Heading from 'shared/components/atoms/Heading'
import RecomposeTestContent from 'shared/components/organisms/RecomposeTestContent'

const RecomposeTest = props => (
  <PageLayout currentPath="/recompose">
    <Heading component="h2" weight="bold">
      Recompose page
    </Heading>
    <RecomposeTestContent {...props} />
  </PageLayout>
)

export default RecomposeTest
