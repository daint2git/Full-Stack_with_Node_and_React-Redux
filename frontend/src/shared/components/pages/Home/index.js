import Heading from 'shared/components/atoms/Heading'
import PageLayout from 'shared/components/templates/PageLayout'

const Home = props => (
  <PageLayout currentPath="/home">
    <Heading component="h2">Home page</Heading>
  </PageLayout>
)

export default Home