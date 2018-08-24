import { toRenderProps, withProps } from 'recompose'

import WrapLayout from 'shared/components/atoms/WrapLayout'
import Group from 'shared/components/atoms/Group'
import TextOuput from 'shared/components/atoms/TextOuput'
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
            <TextOuput>{`text: ${text}`}</TextOuput>
            <TextOuput>{`newText: ${newText}`}</TextOuput>
          </Group>
        )}
      </ToRenderProps>
    </WrapLayout>
  )
}