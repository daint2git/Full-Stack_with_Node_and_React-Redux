import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

export default function(props) {
  return (
    <div className={loadClass`root`}>
      <Header {...props} />
      <div className={loadClass`spacer-row`} />
      <Main {...props} />
      <div className={loadClass`spacer-row`} />
      <Footer {...props} />
    </div>
  )
}