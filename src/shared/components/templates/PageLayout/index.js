import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import Spacer from 'shared/components/atoms/Spacer'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export default function(props) {
  return (
    <div className={loadClass`root`}>
      <Header {...props} />
      <Spacer padding={5} />
      <Main {...props} />
      <Spacer padding={5} />
      <Footer {...props} />
    </div>
  )
}