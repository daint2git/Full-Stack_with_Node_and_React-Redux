import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import repeatComponent from 'shared/components/utils/repeatComponent'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const MENUS = [
  {
    id: 'home',
    name: 'home',
    path: '/home',
    icon: 'home',
    isVisible: true,
  },
  {
    id: 'date-fns',
    name: 'date-fns',
    path: '/date-fns',
    icon: 'calendar-alt',
    isVisible: true,
  },
  {
    id: 'lodash-es',
    name: 'lodash-es',
    path: '/lodash-es',
    icon: 'code',
    isVisible: false,
  },
  {
    id: 'common-tags',
    name: 'common-tags',
    path: '/common-tags',
    icon: 'tags',
    isVisible: true,
  },
  {
    id: 'component',
    name: 'component',
    path: '/component',
    icon: 'code',
    isVisible: true,
  },
  {
    id: 'javascript',
    name: 'javascript',
    path: '/javascript',
    icon: ['fab', 'js-square'],
    isVisible: false,
  },
  {
    id: 'react',
    name: 'react',
    path: '/react',
    icon: ['fab', 'react'],
    isVisible: true,
  },
  {
    id: 'react-redux',
    name: 'react-redux',
    path: '/react-redux',
    icon: 'code',
    isVisible: true,
  },
  {
    id: 'recompose',
    name: 'recompose',
    path: '/recompose',
    icon: 'code',
    isVisible: true,
  },
  {
    id: 'css-advanced',
    name: 'css-advanced',
    path: '/css-advanced',
    icon: ['fab', 'css3-alt'],
    isVisible: true,
  },
  {
    id: 'products',
    name: 'products',
    path: '/products',
    icon: 'mobile-alt',
    isVisible: true,
  },
  {
    id: 'about',
    name: 'about',
    path: '/about',
    icon: 'info',
    isVisible: true,
  },
  {
    id: 'setting',
    name: 'setting',
    path: '/setting',
    icon: 'cogs',
    isVisible: true,
  },
]

const Item = ({ path, name, currentPath, icon }) => (
  <li>
    <Link to={path} data-active={path === currentPath}>
      <span>
        <FontAwesomeIcon icon={icon} size="lg" />
      </span>
      <span>{name}</span>
    </Link>
  </li>
)

const Items = repeatComponent(Item)

const NavigationBar = props => (
  <nav className={loadClass`root`}>
    <ul>
      <Items list={MENUS.filter(menu => menu.isVisible)} {...props} />
    </ul>
  </nav>
)

export default NavigationBar