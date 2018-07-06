import React from 'react'
import { Link } from 'react-router'

import loadStyles from 'shared/components/utils/loadStyles'
import styles from './styles.scss'

const loadClass = loadStyles(styles)

const MENU = [
  {
    id: 'home',
    name: 'Home page',
    path: '/'
  },
  {
    id: 'job',
    name: 'Job page',
    path: '/job'
  },
  {
    id: 'job detail',
    name: 'Job detail page',
    path: '/job/abc'
  },
  {
    id: 'about',
    name: 'About page',
    path: '/about'
  },
  {
    id: 'date-fns',
    name: 'date-fns module',
    path: '/date-fns'
  },
  {
    id: 'lodash-es',
    name: 'lodash-es module',
    path: '/lodash-es'
  },
]

function NavigationItem(props) {
  const { path, name, currentPath } = props
  return (
    <Link
      className={loadClass`item`}
      to={path}
      data-active={path === currentPath}
    >
      <span>{name}</span>
    </Link>
  )
}

export default function NavigationBar(props) {
  const { currentPath } = props
  return (
    <div className={loadClass`root`}>
      {MENU.map(item =>
        <NavigationItem key={item.id} currentPath={currentPath} {...item} />)}
    </div>
  )
}
