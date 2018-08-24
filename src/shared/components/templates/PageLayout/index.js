import Spacer from 'shared/components/atoms/Spacer'
import NavigationBar from 'shared/components/molecules/NavigationBar'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const loadClass = cssModuleNameTag(styles)

const PageLayout = ({ currentPath, ...other }) => (
  <div className={loadClass`root`}>
    <Header {...other} />
    <div className={loadClass`main`}>
      <div className={loadClass`navigation-bar`}>
        <NavigationBar currentPath={currentPath} />
      </div>
      <div className={loadClass`content`}>
        <Main {...other} />
        <Spacer padding={5} />
        <Footer {...other} />
      </div>
    </div>
  </div>
)

export default PageLayout