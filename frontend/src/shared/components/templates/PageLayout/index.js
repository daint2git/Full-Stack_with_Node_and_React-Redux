import { compose } from 'recompose'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { logout } from 'shared/redux/reducers/auth'

import NavigationBarV2 from 'shared/components/molecules/NavigationBarV2'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const loadClass = cssModuleNameTag(styles)

const PageLayout = ({ user: { fullName, role }, logout, currentPath, ...other }) => (
  <div className={loadClass`root`}>
    <Header fullName={fullName} role={role} logout={logout} />
    <div className={loadClass`main`}>
      <div className={loadClass`navigation-bar`}>
        <NavigationBarV2 currentPath={currentPath} />
      </div>
      <div className={loadClass`container`}>
        <div className={loadClass`content`}>
          <Main {...other} />
        </div>
        <Footer />
      </div>
    </div>
  </div>
)

export default compose(
  connect(
    state => ({ user: state.auth.user }),
    dispacth => bindActionCreators({ logout }, dispacth),
  ),
)(PageLayout)