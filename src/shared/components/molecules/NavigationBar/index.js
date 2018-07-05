import React from 'react'
import { Link } from 'react-router'

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
    name: 'lodash-es page',
    path: '/lodash-es'
  },
]

function NavigationItem(props) {
  const { path, name } = props
  return (
    <li>
      <Link to={path} activeStyle={{ color: 'red' }}>{name}</Link>
    </li>
  )
}

export default function NavigationBar(props) {
  return (
    <ul>
      {MENU.map(item => <NavigationItem key={item.id} {...item} />)}
    </ul>
  )
}
