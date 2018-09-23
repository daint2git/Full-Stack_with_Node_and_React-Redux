import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, onlyUpdateForPropTypes, setPropTypes } from 'recompose'

import Overlay from 'shared/components/atoms/Overlay'
import { IconLoading } from 'shared/components/atoms/Icons'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Loading = ({ loading }) => (
  <div className={cssModules`root`} data-loading={loading}>
    <Overlay type="loading" />
    <div className={cssModules`icon`}>
      <IconLoading
        className={cssModules`animation`}
        alt="loading"
        width={50}
        height={50}
      />
    </div>
  </div>
)

const EnhancedComponent = compose(
  onlyUpdateForPropTypes,
  setPropTypes({ loading: PropTypes.bool.isRequired }),
)(Loading)

const ConnectedComponent = connect(
  state => ({ loading: state.loading.loading }),
)(EnhancedComponent)

export default (STORY_BOOK ? EnhancedComponent : ConnectedComponent)