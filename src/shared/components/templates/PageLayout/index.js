import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import Spacer from 'shared/components/atoms/Spacer'
import NavigationBar from 'shared/components/molecules/NavigationBar'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const PageLayout = props => (
  <div className={loadClass`root`}>
    <Header {...props} />
    <div className={loadClass`main`}>
      <div className={loadClass`navigation-bar`}>
        <NavigationBar currentPath={props.currentPath} />
      </div>
      <div className={loadClass`content`}>
        <Main {...props} />
        <Spacer padding={5} />
        <Footer {...props} />
      </div>
    </div>
  </div>
)

export default PageLayout