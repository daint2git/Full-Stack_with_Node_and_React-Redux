import PageLayout from 'shared/components/templates/PageLayout'
import Heading from 'shared/components/atoms/Heading'
import RecomposeTestContent from 'shared/components/organisms/RecomposeTestContent'

 const RecomposeTest = props => (
  <PageLayout currentPath="/recompose">
    <Heading HSize="h2">Recompose page</Heading>
    <RecomposeTestContent />
  </PageLayout>
)

export default RecomposeTest