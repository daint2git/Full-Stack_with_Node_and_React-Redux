import PageLayout from 'shared/components/templates/PageLayout'
import Heading from 'shared/components/atoms/Heading'

const Home = props => (
  <PageLayout currentPath="/home">
    <Heading HSize="h2">Home page</Heading>
  </PageLayout>
)

export default Home