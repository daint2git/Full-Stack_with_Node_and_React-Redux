import React from 'react'
import { Link } from 'react-router'

import reactDiffusioner from 'shared/components/utils/reactDiffusioner'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const MENU = [
  {
    id: 'home',
    name: 'Home page',
    path: '/',
  },
  {
    id: 'job',
    name: 'Job page',
    path: '/job',
  },
  {
    id: 'job detail',
    name: 'Job detail page',
    path: '/job/abc',
  },
  {
    id: 'about',
    name: 'About page',
    path: '/about',
  },
  {
    id: 'component-test',
    name: 'component-test page',
    path: '/component-test',
  },
  {
    id: 'react-test',
    name: 'react-test',
    path: '/react-test',
  },
  {
    id: 'javascript-test',
    name: 'javascript-test',
    path: '/javascript-test',
  },
  {
    id: 'css3',
    name: 'css3',
    path: '/css3',
  },
  {
    id: 'date-fns',
    name: 'date-fns',
    path: '/date-fns',
  },
  {
    id: 'lodash-es',
    name: 'lodash-es',
    path: '/lodash-es',
  },
  {
    id: 'common-tags',
    name: 'common-tags',
    path: '/common-tags',
  },
]

function NavigationItem(props) {
  const {
    path,
    name,
    currentPath,
  } = props
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

const NavigationItems = reactDiffusioner(NavigationItem)

export default function NavigationBar(props) {
  return (
    <nav className={loadClass`root`}>
      <NavigationItems list={MENU} {...props} />
    </nav>
  )
}