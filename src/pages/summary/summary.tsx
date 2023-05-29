import React, { useState, useEffect } from 'react'

import './styles.scss'
import Header from '../../components/header/header'
import { fetch } from '../../services/employee'

type StateProps = {
  employees: {
    id?: number
    name: string
    job: string
    unity: string
    registration: string
    status: string
    management: string
  }[]
}

const Summary: React.FC = () => {
  const [state, setState] = useState<StateProps>({
    employees: []
  })

  useEffect(() => {
    fetch().then((emp) => {
      setState({ ...state, employees: emp })
    })
  }, [])

  return (
    <div className="summary">
      <Header />
    </div>
  )
}

export default Summary
