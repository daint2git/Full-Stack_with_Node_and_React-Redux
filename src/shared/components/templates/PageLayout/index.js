import React from 'react'
import NavigationBar from 'shared/components/molecules/NavigationBar'

import loadStyles from 'shared/components/utils/loadStyles'
import styles from './styles.scss'

const loadClass = loadStyles(styles)

export default function PageLayout(props) {
  const { children } = props
  return (
    <div className={loadClass(`root`)}>
      <div className="header"><h1>HEADER</h1></div>
      <div className="navigationBar"><NavigationBar /></div>
      <div className="content">{children}</div>
      <div className="footer"><h1>FOOTER</h1></div>
    </div>
  )
}