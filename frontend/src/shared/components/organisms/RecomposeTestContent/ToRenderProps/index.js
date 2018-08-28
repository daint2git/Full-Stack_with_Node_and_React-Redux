import { toRenderProps, withProps } from 'recompose'

import WrapLayout from 'shared/components/atoms/WrapLayout'
import Group from 'shared/components/atoms/Group'
import TextValue from 'shared/components/atoms/TextValue'
import Spacer from 'shared/components/atoms/Spacer'
import Heading from 'shared/components/atoms/Heading'

const enhance = withProps(({ text }) => ({ newText: `${text} toRenderProps` }))

const ToRenderProps = toRenderProps(enhance)

export default function(props) {
  return (
    <WrapLayout>
      <Heading component="h3">toRenderProps</Heading>
      <ToRenderProps text="default">
        {({ text, newText }) => (
          <Group>
            <TextValue>{`text: ${text}`}</TextValue>
            <Spacer padding={5} />
            <TextValue>{`newText: ${newText}`}</TextValue>
          </Group>
        )}
      </ToRenderProps>
    </WrapLayout>
  )
}