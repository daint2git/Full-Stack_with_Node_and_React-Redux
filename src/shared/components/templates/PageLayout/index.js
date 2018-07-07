import React from 'react'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import loadStyles from 'shared/components/utils/loadStyles'
import styles from './styles.scss'

const loadClass = loadStyles(styles)

export default function PageLayout(props) {
  return (
    <div className={loadClass`root`}>
      <Header />
      <div className={loadClass`spacer`} />
      <Main {...props} />
      <div className={loadClass`spacer`} />
      <Footer />
    </div>
  )
}