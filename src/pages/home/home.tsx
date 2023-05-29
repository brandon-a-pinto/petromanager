import React, { useState, useEffect } from 'react'

import './styles.scss'
import Header from '../../components/header/header'
import Confirmation from '../../components/confirmation/confirmation'
import EmployeeForm from '../../components/employee-form/employee-form'
import { fetch } from '../../services/employee'

type StateProps = {
  employees: {
    id?: number
    name: string
    job?: string
    unity?: string
    registration?: string
    status?: string
    management?: string
  }[]
  isFormOpen: boolean
  isConfirmOpen: boolean
  formMethod: string
  confirmMessage: string
  confirm: {
    params: any
    method: string
  }
}

const Home: React.FC = () => {
  const [state, setState] = useState<StateProps>({
    employees: [],
    isFormOpen: false,
    isConfirmOpen: false,
    formMethod: '',
    confirmMessage: '',
    confirm: {
      params: null,
      method: ''
    }
  })

  useEffect(() => {
    fetch().then((emp) => setState({ ...state, employees: emp }))
  }, [])

  return (
    <div className="home">
      <Header />
      <Confirmation
        message={state.confirmMessage}
        open={state.isConfirmOpen}
        close={() => setState({ ...state, isConfirmOpen: false })}
        func={state.confirm}
      />
      <EmployeeForm
        method={state.formMethod}
        open={state.isFormOpen}
        close={() => setState({ ...state, isFormOpen: false })}
      />
      <button
        onClick={() =>
          setState({ ...state, formMethod: 'add', isFormOpen: true })
        }
      >
        New employee
      </button>
      {state.employees.sort().map((emp) => (
        <div key={emp.id}>
          <p>{emp.id}</p>
          <p>{emp.name}</p>
          <p>{emp.job}</p>
          <p>{emp.unity}</p>
          <p>{emp.registration}</p>
          <p>{emp.status}</p>
          <p>{emp.management}</p>
          <button
            onClick={() =>
              setState({
                ...state,
                formMethod: 'mod',
                isFormOpen: true
              })
            }
          >
            Modify
          </button>
          <button
            onClick={() =>
              setState({
                ...state,
                confirmMessage: `Delete employee ${emp.name}?`,
                isConfirmOpen: true,
                confirm: { method: 'rm', params: emp.id }
              })
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home
