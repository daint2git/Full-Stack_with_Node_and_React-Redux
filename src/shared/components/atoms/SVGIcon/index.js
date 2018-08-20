import { compose, mapProps } from 'recompose'

import iconFilePdf from './svg/icon_file_pdf.svg'
import iconFileWord from './svg/icon_file_word.svg'
import iconFileExcel from './svg/icon_file_excel.svg'
import iconFilePowerPoint from './svg/icon_file_powerpoint.svg'
import iconFileZip from './svg/icon_file_zip.svg'
import iconOtherFile from './svg/icon_other_file.svg'
import cssModuleNameTag from 'shared/components/utils/cssModuleNameTag'
import styles from './styles.scss'

const loadClass = cssModuleNameTag(styles)

const injectSrcProps = svg => props => ({ ...props, src: svg })

const Icon = props => <img className={loadClass`root`} alt="icon" {...props} />

export const IconFilePdf = compose(mapProps(injectSrcProps(iconFilePdf)))(Icon)

export const IconFileWord = compose(mapProps(injectSrcProps(iconFileWord)))(Icon)

export const IconFileExcel = compose(mapProps(injectSrcProps(iconFileExcel)))(Icon)

export const IconFilePowerPoint = compose(mapProps(injectSrcProps(iconFilePowerPoint)))(Icon)

export const IconFileZip = compose(mapProps(injectSrcProps(iconFileZip)))(Icon)

export const IconOtherFile = compose(mapProps(injectSrcProps(iconOtherFile)))(Icon)