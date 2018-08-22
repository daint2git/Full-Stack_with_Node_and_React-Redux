import PageLayout from 'shared/components/templates/PageLayout'
import Heading from 'shared/components/atoms/Heading'
import CssAdvancedTestContent from 'shared/components/organisms/CssAdvancedTestContent'

const CssAdvancedTest = props => (
  <PageLayout currentPath="/css-advanced">
    <Heading HSize="h2">Css Advanced page</Heading>
    <CssAdvancedTestContent />
  </PageLayout>
)
export default CssAdvancedTest