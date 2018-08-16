import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, setPropTypes, onlyUpdateForKeys } from 'recompose'

import iconLoading from 'shared/components/atoms/SVGIcon/svg/icon_loading.svg'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = new cssModuleNameTag(styles)

export function Loading(props) {
  const { loading } = props
  return (
    <div>
      <div className={cssModules`root`} data-loading={loading}>
        <div className={cssModules`overlay`} />
        <div className={cssModules`inner position-center`}>
          <div>
            <img
              src={iconLoading}
              width={50}
              height={50}
              className={cssModules`defaultAnimation`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default compose(
  connect(state => ({ loading: state.loading.loading })),
  setPropTypes({ loading: PropTypes.bool.isRequired }),
  onlyUpdateForKeys(['loading']),
)(Loading)
