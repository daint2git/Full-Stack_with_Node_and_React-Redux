import { toRenderProps, withProps } from 'recompose'

import WrapLayout from 'shared/components/atoms/WrapLayout'
import Group from 'shared/components/atoms/Group'
import TextOutput from 'shared/components/atoms/TextOutput'
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
            <TextOutput>{`text: ${text}`}</TextOutput>
            <TextOutput>{`newText: ${newText}`}</TextOutput>
          </Group>
        )}
      </ToRenderProps>
    </WrapLayout>
  )
}