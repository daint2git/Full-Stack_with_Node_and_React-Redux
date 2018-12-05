import Heading from 'shared/components/atoms/Heading'
import PageLayout from 'shared/components/templates/PageLayout'

export default function(props) {
  console.log(1 == String(1))
  console.log(new String(1) == new String(1))
  console.log(new String(1) === new String(1))
  console.log('----------')
  console.log(0 == [])
  console.log(0 == false)
  console.log([] == false)
  console.log('----------')
  console.log(0 == undefined)
  console.log(0 == !!undefined)
  console.log(NaN == !!NaN)
  console.log('----------')
  console.log(0 > null)
  console.log(0 == null)
  console.log(0 === null)
  console.log(0 < null)
  console.log(0 >= null)
  console.log(0 <= null)
  return (
    <PageLayout currentPath="/javascript">
      <Heading component="h2" weight="bold">
        JavaScript page
      </Heading>
    </PageLayout>
  )
}
