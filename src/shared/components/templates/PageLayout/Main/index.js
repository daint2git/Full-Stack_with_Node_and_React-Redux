import React from 'react'

import NavigationBar from 'shared/components/molecules/NavigationBar'

import loadStyles from 'shared/components/utils/loadStyles'
import styles from './styles.scss'

const loadClass = loadStyles(styles)

export default function(props) {
  const { currentPath, children } = props
  return (
    <main className={loadClass`root`}>
      <NavigationBar currentPath={currentPath} />
      <section className={loadClass`content`}>
        <h2>CONTENT</h2>
        {children}
      </section>
    </main>
  )
}