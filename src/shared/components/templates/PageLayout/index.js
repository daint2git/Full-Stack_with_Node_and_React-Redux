import React from 'react'
import NavigationBar from 'shared/components/molecules/NavigationBar'

import loadStyles from 'shared/components/utils/loadStyles'
import styles from './styles.scss'

const loadClass = loadStyles(styles)

export default function PageLayout(props) {
  const { children } = props
  return (
    <section className={loadClass`root`}>
      <header className={loadClass`header`}><h2>HEADER</h2></header>
      <section className={loadClass`body`}>
        <nav className={loadClass`navigation-bar`}><NavigationBar /></nav>
        <section className={loadClass`content`}><h2>CONTENT</h2>{children}</section>
      </section>
      <footer className={loadClass`footer`}><h2>FOOTER</h2></footer>
    </section>
  )
}