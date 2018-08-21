import Heading from 'shared/components/atoms/Heading'
import PageLayout from 'shared/components/templates/PageLayout'
import CssAdvancedTestContent from 'shared/components/organisms/CssAdvancedTestContent'

export default function(props) {
  return (
    <PageLayout currentPath="/css-advanced">
      <Heading HSize="h2">Css Advanced page</Heading>
      <CssAdvancedTestContent />
    </PageLayout>
  )
}