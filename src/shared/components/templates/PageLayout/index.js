import React from 'react'
import NavigationBar from 'shared/components/molecules/NavigationBar'

import loadStyles from 'shared/components/utils/loadStyles'
import styles from './styles.scss'

const loadClass = loadStyles(styles)

export default function PageLayout(props) {
  const { currentPath, children } = props
  return (
    <div className={loadClass`root`}>
      <header className={loadClass`header`}><h2>HEADER</h2></header>
      <main className={loadClass`body`}>
        <nav className={loadClass`navigation-bar`}>
          <NavigationBar currentPath={currentPath} />
        </nav>
        <section className={loadClass`content`}>
          <h2>CONTENT</h2>
          {children}
        </section>
      </main>
      <footer className={loadClass`footer`}><h2>FOOTER</h2></footer>
    </div>
  )
}