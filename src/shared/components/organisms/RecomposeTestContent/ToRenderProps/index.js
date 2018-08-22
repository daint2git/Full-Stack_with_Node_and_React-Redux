import { toRenderProps, withProps } from 'recompose'
import Button from 'shared/components/atoms/Button'
import Span from 'shared/components/atoms/Span'
import Spacer from 'shared/components/atoms/Spacer'
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
            <Span>{`text: ${text}`}</Span>
            <Span>{`newText: ${newText}`}</Span>
          </>
        )}
      </ToRenderProps>
    </div>
  )
}