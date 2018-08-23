import { toRenderProps, withProps } from 'recompose'
import TextOuput from 'shared/components/atoms/TextOuput'
import Heading from 'shared/components/atoms/Heading'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const enhance = withProps(({ text }) => ({ newText: `${text} toRenderProps` }))

const ToRenderProps = toRenderProps(enhance)

export default function(props) {
  return (
    <div className={loadClass`root`}>
      <Heading HSize="h3">toRenderProps</Heading>
      <ToRenderProps text="default">
        {({ text, newText }) => (
          <>
            <TextOuput>{`text: ${text}`}</TextOuput>
            <TextOuput>{`newText: ${newText}`}</TextOuput>
          </>
        )}
      </ToRenderProps>
    </div>
  )
}