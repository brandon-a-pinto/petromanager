import React, { MouseEventHandler, useState } from 'react'

import './styles.scss'
import { add, update } from '../../services/employee'

type Props = {
  method: string
  open: boolean
  close: MouseEventHandler<HTMLButtonElement>
}

type StateProps = {
  name: string
  job: string
  unity: string
  registration: string
  status: string
  management: string
}

const EmployeeForm: React.FC<Props> = ({ open, method, close }: Props) => {
  if (!open) return null

  const [state, setState] = useState<StateProps>({
    name: '',
    job: '',
    unity: '',
    registration: '',
    status: '',
    management: ''
  })

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    const { name, job, unity, registration, status, management } = state
    if (method == 'add') {
      add({ name, job, unity, registration, status, management })
    }
    if (method == 'mod') {
      update({ name, job, unity, registration, status, management })
    }
  }

  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setState({ ...state, [event.target.name]: event.target.value })
  }

  return (
    <form onSubmit={handleSubmit} className="employeeForm">
      <input
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input onChange={handleChange} type="text" name="job" placeholder="Job" />
      <input
        onChange={handleChange}
        type="text"
        name="unity"
        placeholder="Unity"
      />
      <input
        onChange={handleChange}
        type="text"
        name="registration"
        placeholder="Registration"
      />
      <input
        onChange={handleChange}
        type="text"
        name="status"
        placeholder="Status"
      />
      <input
        onChange={handleChange}
        type="text"
        name="management"
        placeholder="Management"
      />
      <div>
        <button type="submit">Submit</button>
        <button onClick={close}>Cancel</button>
      </div>
    </form>
  )
}

export default EmployeeForm
