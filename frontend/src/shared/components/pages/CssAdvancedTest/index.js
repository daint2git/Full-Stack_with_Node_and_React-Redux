import Heading from 'shared/components/atoms/Heading'
import CssAdvancedTestContent from 'shared/components/organisms/CssAdvancedTestContent'
import PageLayout from 'shared/components/templates/PageLayout'

const CssAdvancedTest = props => (
  <PageLayout currentPath="/css-advanced">
    <Heading component="h2" weight="bold">
      Css Advanced page
    </Heading>
    <CssAdvancedTestContent {...props} />
  </PageLayout>
)
export default CssAdvancedTest
