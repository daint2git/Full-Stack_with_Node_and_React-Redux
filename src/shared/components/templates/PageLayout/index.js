import React from 'react'
import NavigationBar from 'shared/components/molecules/NavigationBar'

export default function PageLayout(props) {
  const { children } = props
  return (
    <div className="root">
      <div className="header"><h1>HEADER</h1></div>
      <div className="navigationBar"><NavigationBar /></div>
      <div className="content">{children}</div>
      <div className="footer"><h1>FOOTER</h1></div>
    </div>
  )
}