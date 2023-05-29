import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'
const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/summary">Summary</Link>
    </header>
  )
}

export default memo(Header)
