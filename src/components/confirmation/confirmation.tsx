import React, { MouseEventHandler } from 'react'

import './styles.scss'
import { remove } from '../../services/employee'

type Props = {
  message: string
  open: boolean
  close: MouseEventHandler<HTMLButtonElement>
  func: {
    params: any
    method: string
  }
}

const Confirmation: React.FC<Props> = ({
  message,
  open,
  close,
  func
}: Props) => {
  if (!open) return null

  const handleSubmit = async () => {
    if (func.method == 'rm') {
      remove(func.params)
    }
  }

  return (
    <div className="confirmation">
      <span>{message}</span>
      <div>
        <button onClick={handleSubmit}>Continue</button>
        <button onClick={close}>Cancel</button>
      </div>
    </div>
  )
}

export default Confirmation
